import type { PagesFunction } from "@cloudflare/workers-types"

interface Env {
    CHAT_KV: KVNamespace
}

export const onRequest: PagesFunction<Env> = async (context) => {
    if (context.request.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders() })
    }

    const url = new URL(context.request.url)
    const sessionId = url.searchParams.get("sessionId")
    const since = parseInt(url.searchParams.get("since") || "0", 10)

    if (!sessionId) {
        return json({ error: "sessionId is required" }, 400)
    }

    try {
        const sessionRaw = await context.env.CHAT_KV.get(`chat:session:${sessionId}`)
        if (!sessionRaw) {
            return json({ error: "Session not found" }, 404)
        }

        const session = JSON.parse(sessionRaw)
        const newMessages = since > 0
            ? session.messages.filter((m: any) => m.timestamp > since)
            : session.messages

        return json({
            messages: newMessages,
            status: session.status,
        })
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
