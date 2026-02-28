import type { PagesFunction } from "@cloudflare/workers-types"

interface Env {
    CHAT_KV: KVNamespace
}

export const onRequest: PagesFunction<Env> = async (context) => {
    if (context.request.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders() })
    }

    try {
        const indexRaw = await context.env.CHAT_KV.get("chat:sessions_index")
        const sessionIds: string[] = indexRaw ? JSON.parse(indexRaw) : []

        const sessions = await Promise.all(
            sessionIds.map(async (id) => {
                const raw = await context.env.CHAT_KV.get(`chat:session:${id}`)
                if (!raw) return null
                const s = JSON.parse(raw)
                const lastMsg = s.messages[s.messages.length - 1]
                return {
                    sessionId: s.sessionId,
                    name: s.name,
                    email: s.email,
                    status: s.status,
                    startedAt: s.startedAt,
                    messageCount: s.messages.length,
                    lastMessage: lastMsg ? { text: lastMsg.text, sender: lastMsg.sender, timestamp: lastMsg.timestamp } : null,
                }
            })
        )

        return json({ sessions: sessions.filter(Boolean) })
    } catch (e: any) {
        return json({ error: e.message }, 500)
    }
}

function json(data: unknown, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json", ...corsHeaders() },
    })
}

function corsHeaders() {
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }
}
