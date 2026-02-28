"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { MessageCircle, X, Send, Loader2, CheckCircle2 } from "lucide-react"

interface Message {
    id: string
    sender: "user" | "admin"
    text: string
    timestamp: number
}

type ChatStep = "closed" | "email-gate" | "chatting" | "closed-session"

const BRAND_COLOR = "#1a3e6e"
const POLL_INTERVAL = 3000

export function LiveChatWidget() {
    const [step, setStep] = useState<ChatStep>("closed")
    const [isVisible, setIsVisible] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [inputText, setInputText] = useState("")
    const [messages, setMessages] = useState<Message[]>([])
    const [sessionId, setSessionId] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [lastPoll, setLastPoll] = useState(0)
    const [unread, setUnread] = useState(0)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

    // Restore session from sessionStorage
    useEffect(() => {
        const saved = sessionStorage.getItem("chat_session")
        if (saved) {
            try {
                const { sessionId: sid, name: n, email: e } = JSON.parse(saved)
                setSessionId(sid)
                setName(n)
                setEmail(e)
                setStep("chatting")
            } catch { }
        }
        const timer = setTimeout(() => setIsVisible(true), 600)
        return () => clearTimeout(timer)
    }, [])

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    // Polling for new messages
    const pollMessages = useCallback(async () => {
        if (!sessionId) return
        try {
            const res = await fetch(`/api/chat/poll?sessionId=${sessionId}&since=${lastPoll}`)
            if (!res.ok) return
            const data = await res.json()
            if (data.messages && data.messages.length > 0) {
                setMessages((prev) => {
                    const existingIds = new Set(prev.map((m) => m.id))
                    const newMsgs = data.messages.filter((m: Message) => !existingIds.has(m.id))
                    if (newMsgs.length > 0) {
                        const latestTs = Math.max(...data.messages.map((m: Message) => m.timestamp))
                        setLastPoll(latestTs)
                        if (step === "closed") {
                            setUnread((u) => u + newMsgs.filter((m: Message) => m.sender === "admin").length)
                        }
                    }
                    return newMsgs.length > 0 ? [...prev, ...newMsgs] : prev
                })
            }
            if (data.status === "closed") {
                setStep("closed-session")
                stopPolling()
            }
        } catch { }
    }, [sessionId, lastPoll, step])

    const startPolling = useCallback(() => {
        if (pollRef.current) clearInterval(pollRef.current)
        pollRef.current = setInterval(pollMessages, POLL_INTERVAL)
    }, [pollMessages])

    const stopPolling = useCallback(() => {
        if (pollRef.current) {
            clearInterval(pollRef.current)
            pollRef.current = null
        }
    }, [])

    useEffect(() => {
        if (sessionId && step === "chatting") {
            pollMessages()
            startPolling()
        }
        return stopPolling
    }, [sessionId, step])

    const handleOpen = () => {
        setStep(sessionId ? "chatting" : "email-gate")
        setUnread(0)
    }

    const handleClose = () => setStep("closed")

    const handleStartChat = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email.trim() || !name.trim() || !inputText.trim()) {
            setError("Please fill in all fields.")
            return
        }
        setLoading(true)
        setError("")
        try {
            const res = await fetch("/api/chat/start", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name.trim(), email: email.trim(), message: inputText.trim() }),
            })

            // Safely read response text first to avoid JSON parse crash
            const text = await res.text()
            let data: any = {}
            try {
                data = JSON.parse(text)
            } catch {
                // Non-JSON response — API not available (KV not set up or local dev)
                throw new Error(
                    res.status === 404
                        ? "Chat API not found. Make sure the site is deployed on Cloudflare Pages."
                        : "Chat service is not configured yet. Please set up the CHAT_KV binding in Cloudflare Pages."
                )
            }

            if (!res.ok) throw new Error(data.error || "Failed to start chat")

            const sid = data.sessionId
            setSessionId(sid)
            sessionStorage.setItem("chat_session", JSON.stringify({ sessionId: sid, name, email }))
            const firstMsg: Message = {
                id: crypto.randomUUID(),
                sender: "user",
                text: inputText.trim(),
                timestamp: Date.now(),
            }
            setMessages([firstMsg])
            setLastPoll(firstMsg.timestamp)
            setInputText("")
            setStep("chatting")
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputText.trim() || !sessionId) return
        const text = inputText.trim()
        setInputText("")
        const optimistic: Message = {
            id: crypto.randomUUID(),
            sender: "user",
            text,
            timestamp: Date.now(),
        }
        setMessages((prev) => [...prev, optimistic])
        try {
            await fetch("/api/chat/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionId, text, sender: "user" }),
            })
        } catch { }
    }

    const formatTime = (ts: number) =>
        new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
            {/* Chat Panel */}
            {(step === "email-gate" || step === "chatting" || step === "closed-session") && (
                <div
                    className="bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    style={{
                        width: "360px",
                        height: "520px",
                        border: "1px solid #e5e7eb",
                        animation: "chatSlideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                >
                    {/* Header */}
                    <div
                        className="flex items-center justify-between px-4 py-3 text-white flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${BRAND_COLOR} 0%, #2d5a91 100%)` }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm leading-tight">Chief Architect Support</p>
                                <p className="text-xs text-white/75">We reply within minutes</p>
                            </div>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                            aria-label="Close chat"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Email Gate */}
                    {step === "email-gate" && (
                        <div className="flex-1 flex flex-col justify-center px-5 py-6">
                            <div className="text-center mb-6">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                                    style={{ backgroundColor: "#f0f4f8" }}
                                >
                                    <MessageCircle className="w-7 h-7" style={{ color: BRAND_COLOR }} />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">Start a conversation</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Our team is here to help. Enter your details to begin.
                                </p>
                            </div>
                            <form onSubmit={handleStartChat} className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                                    style={{ "--tw-ring-color": BRAND_COLOR } as React.CSSProperties}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                                    required
                                />
                                <textarea
                                    placeholder="How can we help you today?"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:border-transparent"
                                    rows={3}
                                    required
                                />
                                {error && <p className="text-xs text-red-500">{error}</p>}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60"
                                    style={{ backgroundColor: BRAND_COLOR }}
                                >
                                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                                    {loading ? "Starting…" : "Start Chat"}
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Chat View */}
                    {(step === "chatting" || step === "closed-session") && (
                        <>
                            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
                                {/* Welcome bubble */}
                                <div className="flex gap-2 items-end">
                                    <div
                                        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: BRAND_COLOR }}
                                    >
                                        <MessageCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <div
                                        className="max-w-[75%] px-3 py-2 rounded-2xl rounded-bl-sm text-sm text-white"
                                        style={{ backgroundColor: BRAND_COLOR }}
                                    >
                                        Hi {name}! 👋 Thanks for reaching out. Our support team will reply to you shortly.
                                    </div>
                                </div>

                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex gap-2 items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        {msg.sender === "admin" && (
                                            <div
                                                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: BRAND_COLOR }}
                                            >
                                                <MessageCircle className="w-4 h-4 text-white" />
                                            </div>
                                        )}
                                        <div className="flex flex-col gap-0.5 max-w-[75%]">
                                            <div
                                                className={`px-3 py-2 rounded-2xl text-sm ${msg.sender === "user"
                                                    ? "rounded-br-sm bg-blue-100 text-gray-800"
                                                    : "rounded-bl-sm text-white"
                                                    }`}
                                                style={msg.sender === "admin" ? { backgroundColor: BRAND_COLOR } : {}}
                                            >
                                                {msg.text}
                                            </div>
                                            <span className={`text-[10px] text-gray-400 ${msg.sender === "user" ? "text-right" : ""}`}>
                                                {formatTime(msg.timestamp)}
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                {step === "closed-session" && (
                                    <div className="flex items-center gap-2 justify-center py-2">
                                        <CheckCircle2 className="w-4 h-4 text-gray-400" />
                                        <span className="text-xs text-gray-400">This chat has been closed</span>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            {step === "chatting" && (
                                <form
                                    onSubmit={handleSend}
                                    className="flex items-center gap-2 px-3 py-3 border-t border-gray-100 bg-white flex-shrink-0"
                                >
                                    <input
                                        type="text"
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        placeholder="Type a message…"
                                        className="flex-1 px-3 py-2 text-sm bg-gray-100 rounded-full focus:outline-none focus:ring-2"
                                        style={{ "--tw-ring-color": BRAND_COLOR } as React.CSSProperties}
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputText.trim()}
                                        className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:opacity-90 disabled:opacity-40"
                                        style={{ backgroundColor: BRAND_COLOR }}
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            )}
                        </>
                    )}
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={step === "closed" ? handleOpen : handleClose}
                aria-label={step === "closed" ? "Open live chat" : "Close live chat"}
                className="group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl text-white transition-all duration-300 hover:scale-110 active:scale-95"
                style={{ background: `linear-gradient(135deg, ${BRAND_COLOR} 0%, #2d5a91 100%)` }}
            >
                <span
                    className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{ backgroundColor: BRAND_COLOR }}
                />
                {step === "closed" ? (
                    <MessageCircle className="w-6 h-6 relative z-10" />
                ) : (
                    <X className="w-6 h-6 relative z-10" />
                )}
                {unread > 0 && step === "closed" && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold z-20">
                        {unread}
                    </span>
                )}
            </button>

            <style>{`
        @keyframes chatSlideIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
        </div>
    )
}
