"use client"

import { useConfig } from "@/contexts/config-context"
import { useEffect } from "react"

export function GlobalHtmlHeadTags() {
    const { globalConfig, isLoading } = useConfig()

    useEffect(() => {
        if (isLoading || !globalConfig?.headTags) return

        const div = document.createElement("div")
        div.innerHTML = globalConfig.headTags

        const scripts: HTMLScriptElement[] = []
        const otherNodes: Node[] = []

        Array.from(div.childNodes).forEach((node) => {
            if (node.nodeName === "SCRIPT") {
                const script = document.createElement("script")
                Array.from((node as HTMLScriptElement).attributes).forEach((attr) => {
                    script.setAttribute(attr.name, attr.value)
                })
                script.appendChild(document.createTextNode(node.textContent || ""))
                scripts.push(script)
            } else {
                otherNodes.push(node.cloneNode(true))
            }
        })

        otherNodes.forEach((node) => document.head.appendChild(node))
        scripts.forEach((script) => document.head.appendChild(script))

        return () => {
            otherNodes.forEach((node) => {
                if (document.head.contains(node)) document.head.removeChild(node)
            })
            scripts.forEach((script) => {
                if (document.head.contains(script)) document.head.removeChild(script)
            })
        }
    }, [globalConfig?.headTags, isLoading])

    return null
}

export function GlobalHtmlBodyTags() {
    const { globalConfig, isLoading } = useConfig()
    if (isLoading || !globalConfig?.bodyTags) return null
    return <div dangerouslySetInnerHTML={{ __html: globalConfig.bodyTags }} />
}

export function GlobalHtmlFooterTags() {
    const { globalConfig, isLoading } = useConfig()
    if (isLoading || !globalConfig?.footerTags) return null
    return <div dangerouslySetInnerHTML={{ __html: globalConfig.footerTags }} />
}
