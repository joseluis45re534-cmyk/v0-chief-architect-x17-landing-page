"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useConfig } from "@/contexts/config-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    Lock, Save, AlertCircle, Globe, MessageCircle,
    ArrowLeft, RefreshCw, CheckCircle2, Clock, Send
} from "lucide-react"

const REGIONS = [
    { id: "default", name: "Default (Global)", flag: "🌐" },
    { id: "fr", name: "France", flag: "🇫🇷" },
    { id: "de", name: "Germany", flag: "🇩🇪" },
    { id: "gb", name: "United Kingdom", flag: "🇬🇧" },
    { id: "ca", name: "Canada", flag: "🇨🇦" },
]

// ─── Types ────────────────────────────────────────────────────────────────────
interface ChatMessage {
    id: string
    sender: "user" | "admin"
    text: string
    timestamp: number
}
interface ChatSession {
    sessionId: string
    name: string
    email: string
    status: "open" | "closed"
    startedAt: number
    messageCount: number
    lastMessage: { text: string; sender: string; timestamp: number } | null
}
interface FullSession extends ChatSession {
    messages: ChatMessage[]
}

// ─── Live Chats Panel ─────────────────────────────────────────────────────────
function LiveChatsPanel() {
    const [sessions, setSessions] = useState<ChatSession[]>([])
    const [activeSession, setActiveSession] = useState<FullSession | null>(null)
    const [replyText, setReplyText] = useState("")
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const fetchSessions = useCallback(async (silent = false) => {
        if (!silent) setRefreshing(true)
        try {
            const res = await fetch("/api/chat/sessions")
            if (res.ok) {
                const data = await res.json()
                setSessions(data.sessions || [])
            }
        } catch { }
        setRefreshing(false)
    }, [])

    const fetchActive = useCallback(async () => {
        if (!activeSession) return
        try {
            const res = await fetch(`/api/chat/close?sessionId=${activeSession.sessionId}`)
            if (!res.ok) return
            const data = await res.json()
            setActiveSession(data)
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
        } catch { }
    }, [activeSession])

    useEffect(() => {
        fetchSessions()
    }, [])

    useEffect(() => {
        if (activeSession) {
            if (pollRef.current) clearInterval(pollRef.current)
            pollRef.current = setInterval(fetchActive, 3000)
        } else {
            if (pollRef.current) clearInterval(pollRef.current)
            pollRef.current = setInterval(() => fetchSessions(true), 5000)
        }
        return () => { if (pollRef.current) clearInterval(pollRef.current) }
    }, [activeSession, fetchActive, fetchSessions])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [activeSession?.messages])

    const openSession = async (session: ChatSession) => {
        try {
            const res = await fetch(`/api/chat/close?sessionId=${session.sessionId}`)
            if (res.ok) {
                const data = await res.json()
                setActiveSession(data)
            }
        } catch { }
    }

    const handleReply = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!replyText.trim() || !activeSession) return
        const text = replyText.trim()
        setReplyText("")
        setLoading(true)
        try {
            await fetch("/api/chat/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionId: activeSession.sessionId, text, sender: "admin" }),
            })
            await fetchActive()
        } catch { }
        setLoading(false)
    }

    const handleClose = async () => {
        if (!activeSession) return
        await fetch("/api/chat/close", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId: activeSession.sessionId }),
        })
        setActiveSession(null)
        fetchSessions()
    }

    const formatTime = (ts: number) =>
        new Date(ts).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })

    // Active conversation view
    if (activeSession) {
        return (
            <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => { setActiveSession(null); fetchSessions() }}
                            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to chats
                        </button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleClose}
                            className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                            Close Chat
                        </Button>
                    </div>
                    <div className="mt-2">
                        <CardTitle className="text-base">{activeSession.name}</CardTitle>
                        <CardDescription>{activeSession.email}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    {/* Messages */}
                    <div className="h-80 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
                        {activeSession.messages?.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex gap-2 items-end ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}
                            >
                                <div className="flex flex-col gap-0.5 max-w-[75%]">
                                    <div
                                        className={`px-3 py-2 rounded-2xl text-sm ${msg.sender === "admin"
                                            ? "bg-[#1a3e6e] text-white rounded-br-sm"
                                            : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                    <span className={`text-[10px] text-gray-400 ${msg.sender === "admin" ? "text-right" : ""}`}>
                                        {msg.sender === "admin" ? "You" : activeSession.name} · {formatTime(msg.timestamp)}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {activeSession.status === "closed" && (
                            <div className="flex items-center gap-2 justify-center py-2">
                                <CheckCircle2 className="w-4 h-4 text-gray-400" />
                                <span className="text-xs text-gray-400">Chat closed</span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Reply input */}
                    {activeSession.status === "open" && (
                        <form onSubmit={handleReply} className="flex items-center gap-2 px-4 py-3 border-t bg-white">
                            <input
                                type="text"
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder={`Reply to ${activeSession.name}…`}
                                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1a3e6e]"
                            />
                            <Button type="submit" size="sm" disabled={!replyText.trim() || loading}>
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>
        )
    }

    // Sessions list view
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <MessageCircle className="h-5 w-5" />
                            Live Chats
                        </CardTitle>
                        <CardDescription>
                            {sessions.filter((s) => s.status === "open").length} open conversation(s)
                        </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => fetchSessions()} disabled={refreshing}>
                        <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                {sessions.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                        <MessageCircle className="w-10 h-10 mx-auto mb-3 opacity-30" />
                        <p className="text-sm">No chats yet. They'll appear here when visitors start chatting.</p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        {sessions.map((session) => (
                            <button
                                key={session.sessionId}
                                onClick={() => openSession(session)}
                                className="w-full text-left px-4 py-3 rounded-lg border border-gray-100 hover:border-[#1a3e6e]/30 hover:bg-blue-50/50 transition-all group"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex items-center gap-2 min-w-0">
                                        <div
                                            className={`w-2 h-2 rounded-full flex-shrink-0 ${session.status === "open" ? "bg-green-400" : "bg-gray-300"}`}
                                        />
                                        <div className="min-w-0">
                                            <p className="font-medium text-sm text-gray-800 truncate">{session.name}</p>
                                            <p className="text-xs text-gray-500 truncate">{session.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0">
                                        <Clock className="w-3 h-3" />
                                        {formatTime(session.startedAt)}
                                    </div>
                                </div>
                                {session.lastMessage && (
                                    <p className="text-xs text-gray-500 mt-1.5 truncate pl-4">
                                        {session.lastMessage.sender === "admin" ? "You: " : ""}
                                        {session.lastMessage.text}
                                    </p>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}


// ─── Main Admin Page ──────────────────────────────────────────────────────────
export default function AdminPage() {
    const { config, updateConfig, globalConfig, updateGlobalConfig } = useConfig()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")
    const [activeTab, setActiveTab] = useState<"settings" | "chats">("settings")
    const [selectedRegion, setSelectedRegion] = useState("default")
    const [formData, setFormData] = useState({
        price: "",
        currency: "",
        paymentLink: "",
        headTags: "",
        bodyTags: "",
        footerTags: "",
    })
    const [globalHtml, setGlobalHtml] = useState({
        headTags: "",
        bodyTags: "",
        footerTags: "",
    })
    const [liveChatScript, setLiveChatScript] = useState("")
    const [saveStatus, setSaveStatus] = useState<"idle" | "success">("idle")
    const [globalSaveStatus, setGlobalSaveStatus] = useState<"idle" | "success">("idle")

    useEffect(() => {
        const regionConfig = config[selectedRegion] || config["default"]
        if (regionConfig) {
            setFormData({
                price: regionConfig.price.toString(),
                currency: regionConfig.currency,
                paymentLink: regionConfig.paymentLink,
                headTags: regionConfig.headTags || "",
                bodyTags: regionConfig.bodyTags || "",
                footerTags: regionConfig.footerTags || "",
            })
        }
    }, [config, selectedRegion])

    useEffect(() => {
        setLiveChatScript(globalConfig.liveChatScript || "")
        setGlobalHtml({
            headTags: globalConfig.headTags || "",
            bodyTags: globalConfig.bodyTags || "",
            footerTags: globalConfig.footerTags || "",
        })
    }, [globalConfig])

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (btoa(password) === "YWRtaW4xMjM=") {
            setIsAuthenticated(true)
        } else {
            alert("Invalid password")
        }
    }

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        updateConfig(selectedRegion, {
            price: Number(formData.price),
            currency: formData.currency,
            paymentLink: formData.paymentLink,
            headTags: formData.headTags,
            bodyTags: formData.bodyTags,
            footerTags: formData.footerTags,
        })
        setSaveStatus("success")
        setTimeout(() => setSaveStatus("idle"), 3000)
    }

    const handleGlobalSave = (e: React.FormEvent) => {
        e.preventDefault()
        updateGlobalConfig({
            liveChatScript,
            headTags: globalHtml.headTags,
            bodyTags: globalHtml.bodyTags,
            footerTags: globalHtml.footerTags,
        })
        setGlobalSaveStatus("success")
        setTimeout(() => setGlobalSaveStatus("idle"), 3000)
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Admin Access</CardTitle>
                        <CardDescription className="text-center">Enter password to manage settings</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                <Lock className="w-4 h-4 mr-2" />
                                Login
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-2xl mx-auto space-y-6">
                {/* Page header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
                    <p className="text-gray-500">Manage site settings and customer conversations</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab("settings")}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${activeTab === "settings"
                            ? "border-[#1a3e6e] text-[#1a3e6e]"
                            : "border-transparent text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        <Globe className="w-4 h-4" /> Settings
                    </button>
                    <button
                        onClick={() => setActiveTab("chats")}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${activeTab === "chats"
                            ? "border-[#1a3e6e] text-[#1a3e6e]"
                            : "border-transparent text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        <MessageCircle className="w-4 h-4" /> Live Chats
                    </button>
                </div>

                {/* Live Chats Tab */}
                {activeTab === "chats" && <LiveChatsPanel />}

                {/* Settings Tab */}
                {activeTab === "settings" && (
                    <div className="space-y-8">
                        <Alert variant="default" className="bg-blue-50 border-blue-200 text-blue-800">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Configuration Mode</AlertTitle>
                            <AlertDescription>
                                Changes are saved to your local browser storage. To persist for all users, update the source code or enable Cloudflare KV.
                            </AlertDescription>
                        </Alert>

                        {/* Region Config */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Globe className="h-5 w-5" />
                                    Region Configuration
                                </CardTitle>
                                <CardDescription>Select a region to configure its pricing and payment details</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-6">
                                    <Label htmlFor="region" className="mb-2 block">Select Region</Label>
                                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select region" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {REGIONS.map((region) => (
                                                <SelectItem key={region.id} value={region.id}>
                                                    {region.flag} {region.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="p-4 bg-muted/50 rounded-lg border mb-6">
                                    <h3 className="font-semibold mb-1 text-sm text-gray-700">
                                        Editing: {REGIONS.find((r) => r.id === selectedRegion)?.name}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        These settings will apply to users visiting <code>/{selectedRegion === "default" ? "" : selectedRegion}</code>
                                    </p>
                                </div>

                                <form onSubmit={handleSave} className="space-y-6">
                                    <div className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="price">Product Price</Label>
                                            <Input
                                                id="price"
                                                type="number"
                                                value={formData.price}
                                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="currency">Currency Code</Label>
                                            <Select
                                                value={formData.currency}
                                                onValueChange={(value) => setFormData({ ...formData, currency: value })}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select currency" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="EUR">EUR (€)</SelectItem>
                                                    <SelectItem value="USD">USD ($)</SelectItem>
                                                    <SelectItem value="GBP">GBP (£)</SelectItem>
                                                    <SelectItem value="CAD">CAD ($)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="paymentLink">Stripe Payment Link</Label>
                                            <Input
                                                id="paymentLink"
                                                value={formData.paymentLink}
                                                onChange={(e) => setFormData({ ...formData, paymentLink: e.target.value })}
                                                placeholder="https://buy.stripe.com/..."
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="headTags">Head Tags (Scripts, Styles, Meta)</Label>
                                            <Textarea
                                                id="headTags"
                                                value={formData.headTags}
                                                onChange={(e) => setFormData({ ...formData, headTags: e.target.value })}
                                                placeholder="<script>...</script>"
                                                className="font-mono text-xs"
                                            />
                                            <p className="text-xs text-gray-500">Injected at the end of &lt;head&gt;</p>
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="bodyTags">Body Tags (Start)</Label>
                                            <Textarea
                                                id="bodyTags"
                                                value={formData.bodyTags}
                                                onChange={(e) => setFormData({ ...formData, bodyTags: e.target.value })}
                                                placeholder="<noscript>...</noscript>"
                                                className="font-mono text-xs"
                                            />
                                            <p className="text-xs text-gray-500">Injected at the start of &lt;body&gt;</p>
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="footerTags">Footer Tags (End)</Label>
                                            <Textarea
                                                id="footerTags"
                                                value={formData.footerTags}
                                                onChange={(e) => setFormData({ ...formData, footerTags: e.target.value })}
                                                placeholder="<script>...</script>"
                                                className="font-mono text-xs"
                                            />
                                            <p className="text-xs text-gray-500">Injected at the end of &lt;body&gt;</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4">
                                        <div className="text-sm text-green-600 font-medium">
                                            {saveStatus === "success" && "Settings saved successfully!"}
                                        </div>
                                        <Button type="submit">
                                            <Save className="w-4 h-4 mr-2" />
                                            Save Changes
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Global Scripts & Tags */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Globe className="h-5 w-5" />
                                    Global Tags & 3rd-Party Scripts
                                </CardTitle>
                                <CardDescription>
                                    These tags are injected on <b>all pages</b> across all regions. Perfect for analytics, tracking pixels, or 3rd-party chat widgets.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleGlobalSave} className="space-y-6">
                                    <div className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="globalHeadTags">Global Head Tags</Label>
                                            <Textarea
                                                id="globalHeadTags"
                                                value={globalHtml.headTags}
                                                onChange={(e) => setGlobalHtml({ ...globalHtml, headTags: e.target.value })}
                                                placeholder="<script>...</script>"
                                                className="font-mono text-xs"
                                            />
                                            <p className="text-xs text-gray-500">Injected into &lt;head&gt; on all pages</p>
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="globalBodyTags">Global Body Start Tags</Label>
                                            <Textarea
                                                id="globalBodyTags"
                                                value={globalHtml.bodyTags}
                                                onChange={(e) => setGlobalHtml({ ...globalHtml, bodyTags: e.target.value })}
                                                placeholder="<noscript>...</noscript>"
                                                className="font-mono text-xs"
                                            />
                                            <p className="text-xs text-gray-500">Injected immediately after &lt;body&gt; on all pages</p>
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="globalFooterTags">Global Footer Tags</Label>
                                            <Textarea
                                                id="globalFooterTags"
                                                value={globalHtml.footerTags}
                                                onChange={(e) => setGlobalHtml({ ...globalHtml, footerTags: e.target.value })}
                                                placeholder="<script>...</script>"
                                                className="font-mono text-xs"
                                            />
                                            <p className="text-xs text-gray-500">Injected before &lt;/body&gt; on all pages</p>
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="liveChatScript">3rd-Party Chat Script (Optional)</Label>
                                            <Textarea
                                                id="liveChatScript"
                                                value={liveChatScript}
                                                onChange={(e) => setLiveChatScript(e.target.value)}
                                                placeholder={`<!-- Example: Tidio -->\n<script src="//code.tidio.co/XXXXXXXXXX.js" async></script>`}
                                                className="font-mono text-xs min-h-[100px]"
                                            />
                                            <p className="text-xs text-gray-500">Leave blank if using the built-in live chat.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t">
                                        <div className="text-sm text-green-600 font-medium">
                                            {globalSaveStatus === "success" && "Global settings saved!"}
                                        </div>
                                        <Button type="submit">
                                            <Save className="w-4 h-4 mr-2" />
                                            Save Global Scripts
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}
