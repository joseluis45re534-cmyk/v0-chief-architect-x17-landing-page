"use client"

import { useConfig } from "@/contexts/config-context"
import { useEffect, useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function LiveChatWidget() {
    const { globalConfig, isLoading } = useConfig()
    const [isOpen, setIsOpen] = useState(false)
    const [scriptInjected, setScriptInjected] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    // Animate in after mount
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 800)
        return () => clearTimeout(timer)
    }, [])

    // Inject the live chat script when it becomes available
    useEffect(() => {
        if (isLoading || !globalConfig.liveChatScript || scriptInjected) return

        const container = document.createElement("div")
        container.innerHTML = globalConfig.liveChatScript

        // Extract and re-create script elements (innerHTML doesn't execute them)
        const scripts = Array.from(container.querySelectorAll("script"))
        scripts.forEach((originalScript) => {
            const newScript = document.createElement("script")
            Array.from(originalScript.attributes).forEach((attr) => {
                newScript.setAttribute(attr.name, attr.value)
            })
            if (originalScript.textContent) {
                newScript.textContent = originalScript.textContent
            }
            document.head.appendChild(newScript)
        })

        // Append non-script elements into a hidden container in body
        scripts.forEach((s) => s.remove())
        if (container.innerHTML.trim()) {
            container.style.display = "none"
            document.body.appendChild(container)
        }

        setScriptInjected(true)
    }, [globalConfig.liveChatScript, isLoading, scriptInjected])

    const handleChatClick = () => {
        // Try to open common live chat widgets
        if (typeof window !== "undefined") {
            // Tidio
            if ((window as any).tidioChatApi) {
                (window as any).tidioChatApi.open()
                return
            }
            // Crisp
            if ((window as any).$crisp) {
                (window as any).$crisp.push(["do", "chat:show"])
                    ; (window as any).$crisp.push(["do", "chat:open"])
                return
            }
            // Tawk.to
            if ((window as any).Tawk_API) {
                (window as any).Tawk_API.maximize()
                return
            }
            // Intercom
            if ((window as any).Intercom) {
                (window as any).Intercom("show")
                return
            }
            // LiveChat
            if ((window as any).LC_API) {
                (window as any).LC_API.open_chat_window()
                return
            }
        }

        // Fallback: open email
        window.open("mailto:support@chiefarchitectpro.com", "_blank")
    }

    // Don't render if not visible yet
    if (!isVisible) return null

    return (
        <>
            {/* Floating Widget Button */}
            <div
                className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3"
                style={{
                    transform: isVisible ? "translateY(0)" : "translateY(100px)",
                    opacity: isVisible ? 1 : 0,
                    transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease",
                }}
            >
                {/* Tooltip label */}
                {!globalConfig.liveChatScript && (
                    <div
                        className="bg-white text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full shadow-lg border border-gray-200"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        Chat with us 👋
                    </div>
                )}

                {/* Main button */}
                <button
                    onClick={handleChatClick}
                    aria-label="Open live chat support"
                    className="group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl text-white transition-all duration-300 hover:scale-110 active:scale-95"
                    style={{
                        background: "linear-gradient(135deg, #1a3e6e 0%, #2d5a91 100%)",
                    }}
                >
                    {/* Pulse ring */}
                    <span
                        className="absolute inset-0 rounded-full animate-ping opacity-25"
                        style={{ backgroundColor: "#1a3e6e" }}
                    />
                    {/* Inner pulse ring */}
                    <span
                        className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{ backgroundColor: "#2d5a91", filter: "blur(4px)" }}
                    />
                    <MessageCircle className="w-6 h-6 relative z-10" strokeWidth={2} />
                </button>
            </div>
        </>
    )
}
