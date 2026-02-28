import type { PagesFunction } from "@cloudflare/workers-types"

interface Env {
    CHAT_KV: KVNamespace
}

export const onRequest: PagesFunction<Env> = async (context) => {
    if (context.request.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders() })
    }
    if (context.request.method !== "POST") {
        return json({ error: "Method not allowed" }, 405)
    }

    try {
        const { sessionId, text, sender } = await context.request.json() as {
            sessionId: string
            text: string
            sender: "user" | "admin"
        }

        if (!sessionId || !text || !sender) {
            return json({ error: "sessionId, text, and sender are required" }, 400)
        }

        const sessionRaw = await context.env.CHAT_KV.get(`chat:session:${sessionId}`)
        if (!sessionRaw) {
            return json({ error: "Session not found" }, 404)
        }

        const session = JSON.parse(sessionRaw)
        session.messages.push({
            id: crypto.randomUUID(),
            sender,
            text,
            timestamp: Date.now(),
        })

        // If admin replied, mark as replied
        if (sender === "admin") {
            session.lastAdminReply = Date.now()
        }

        await context.env.CHAT_KV.put(
            `chat:session:${sessionId}`,
            JSON.stringify(session),
            { expirationTtl: 86400 }
        )

        return json({ ok: true })
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
