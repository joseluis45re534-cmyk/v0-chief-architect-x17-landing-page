"use client"

import { useConfig } from "@/contexts/config-context"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function GlobalTags() {
    const { config, isLoading } = useConfig()
    const pathname = usePathname()
    const [regionConfig, setRegionConfig] = useState(config.default)

    useEffect(() => {
        if (isLoading) return

        // Determine region from pathname
        const pathSegments = pathname?.split("/").filter(Boolean) || []
        const firstSegment = pathSegments[0]

        let currentRegion = "default"
        if (firstSegment && config[firstSegment]) {
            currentRegion = firstSegment
        }

        setRegionConfig(config[currentRegion] || config.default)
    }, [pathname, config, isLoading])

    // Inject Head Tags
    useEffect(() => {
        if (!regionConfig?.headTags) return

        // Create a temporary container to parse the string
        const div = document.createElement('div')
        div.innerHTML = regionConfig.headTags

        const scripts: HTMLScriptElement[] = []
        const otherNodes: Node[] = []

        // Separate scripts from other nodes
        Array.from(div.childNodes).forEach(node => {
            if (node.nodeName === 'SCRIPT') {
                const script = document.createElement('script')
                Array.from((node as HTMLScriptElement).attributes).forEach(attr => {
                    script.setAttribute(attr.name, attr.value)
                })
                script.appendChild(document.createTextNode(node.textContent || ''))
                scripts.push(script)
            } else {
                otherNodes.push(node.cloneNode(true))
            }
        })

        // Append non-scripts immediately
        otherNodes.forEach(node => {
            document.head.appendChild(node)
        })

        // Append scripts
        scripts.forEach(script => {
            document.head.appendChild(script)
        })

        return () => {
            // Cleanup injected nodes on unmount or change
            // Note: This is tricky because we don't want to remove everything from head
            // Ideally we track what we added. For this simple implementation, we might skip full cleanup
            // or clear specific marked tags if we had a way to identify them.
            // Given the dynamic nature, naive cleanup might be destructive.
            // For now, we'll rely on the fact that this component sits high up and persists mostly.
            otherNodes.forEach(node => {
                if (document.head.contains(node)) {
                    document.head.removeChild(node);
                }
            })
            scripts.forEach(script => {
                if (document.head.contains(script)) {
                    document.head.removeChild(script);
                }
            })
        }
    }, [regionConfig.headTags])

    if (!regionConfig?.bodyTags) return null

    return (
        <div dangerouslySetInnerHTML={{ __html: regionConfig.bodyTags }} />
    )
}

export function GlobalFooterTags() {
    const { config, isLoading } = useConfig()
    const pathname = usePathname()
    const [regionConfig, setRegionConfig] = useState(config.default)

    useEffect(() => {
        if (isLoading) return

        // Determine region from pathname
        const pathSegments = pathname?.split("/").filter(Boolean) || []
        const firstSegment = pathSegments[0]

        let currentRegion = "default"
        if (firstSegment && config[firstSegment]) {
            currentRegion = firstSegment
        }

        setRegionConfig(config[currentRegion] || config.default)
    }, [pathname, config, isLoading])

    if (!regionConfig?.footerTags) return null

    return (
        <div dangerouslySetInnerHTML={{ __html: regionConfig.footerTags }} />
    )
}
