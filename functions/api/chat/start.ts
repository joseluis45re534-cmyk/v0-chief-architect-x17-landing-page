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
        const { name, email, message } = await context.request.json() as {
            name: string
            email: string
            message: string
        }

        if (!email || !message) {
            return json({ error: "email and message are required" }, 400)
        }

        const sessionId = crypto.randomUUID()
        const now = Date.now()

        const session = {
            sessionId,
            name: name || "Guest",
            email,
            status: "open",
            startedAt: now,
            messages: [
                {
                    id: crypto.randomUUID(),
                    sender: "user",
                    text: message,
                    timestamp: now,
                },
            ],
        }

        // Store session
        await context.env.CHAT_KV.put(
            `chat:session:${sessionId}`,
            JSON.stringify(session),
            { expirationTtl: 86400 } // 24h
        )

        // Update sessions index
        const indexRaw = await context.env.CHAT_KV.get("chat:sessions_index")
        const index: string[] = indexRaw ? JSON.parse(indexRaw) : []
        if (!index.includes(sessionId)) {
            index.unshift(sessionId)
            // Keep last 200 sessions
            const trimmed = index.slice(0, 200)
            await context.env.CHAT_KV.put("chat:sessions_index", JSON.stringify(trimmed), {
                expirationTtl: 86400 * 7,
            })
        }

        return json({ sessionId, ok: true })
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
