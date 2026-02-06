"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface ConfigState {
    price: number
    currency: string
    paymentLink: string
    stripePublishableKey?: string
}

interface ConfigContextType extends ConfigState {
    updateConfig: (newConfig: Partial<ConfigState>) => void
    isLoading: boolean
    currencySymbol: string
}

const defaultConfig: ConfigState = {
    price: 59,
    currency: "EUR",
    paymentLink: "https://buy.stripe.com/5kQ5kDamQ66tdLI8oEdAk00",
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined)

export function ConfigProvider({ children }: { children: ReactNode }) {
    const [config, setConfig] = useState<ConfigState>(defaultConfig)
    const [isLoading, setIsLoading] = useState(true)

    // Load from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem("site_config")
            if (stored) {
                setConfig((prev) => ({ ...prev, ...JSON.parse(stored) }))
            }
        } catch (e) {
            console.error("Failed to load config from storage", e)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const updateConfig = (newConfig: Partial<ConfigState>) => {
        setConfig((prev) => {
            const updated = { ...prev, ...newConfig }
            localStorage.setItem("site_config", JSON.stringify(updated))
            return updated
        })
    }

    const currencySymbol = config.currency === "EUR" ? "€" : config.currency === "GBP" ? "£" : "$"

    return (
        <ConfigContext.Provider
            value={{
                ...config,
                updateConfig,
                isLoading,
                currencySymbol,
            }}
        >
            {children}
        </ConfigContext.Provider>
    )
}

export function useConfig() {
    const context = useContext(ConfigContext)
    if (context === undefined) {
        throw new Error("useConfig must be used within a ConfigProvider")
    }
    return context
}
