"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export interface RegionConfig {
    price: number
    currency: string
    paymentLink: string
    stripePublishableKey?: string
    headTags?: string
    bodyTags?: string
    footerTags?: string
}

export type ConfigState = Record<string, RegionConfig>

export interface GlobalSiteConfig {
    liveChatScript: string
    headTags?: string
    bodyTags?: string
    footerTags?: string
}

const defaultGlobalConfig: GlobalSiteConfig = {
    liveChatScript: "",
    headTags: "",
    bodyTags: "",
    footerTags: "",
}

interface ConfigContextType {
    config: ConfigState
    globalConfig: GlobalSiteConfig
    updateConfig: (region: string, newConfig: Partial<RegionConfig>) => void
    updateGlobalConfig: (newConfig: Partial<GlobalSiteConfig>) => void
    getRegionConfig: (region: string) => RegionConfig & { currencySymbol: string }
    isLoading: boolean
}

const defaultRegionConfig: RegionConfig = {
    price: 69,
    currency: "USD",
    paymentLink: "https://buy.stripe.com/14A28qfPw0B0cte59TcEw01",
    headTags: "",
    bodyTags: "",
    footerTags: "",
}

const defaultState: ConfigState = {
    default: { ...defaultRegionConfig },
    fr: { ...defaultRegionConfig, currency: "EUR", paymentLink: "https://buy.stripe.com/14A28qfPw0B0cte59TcEw01" },
    de: { ...defaultRegionConfig, currency: "EUR", paymentLink: "https://buy.stripe.com/14A28qfPw0B0cte59TcEw01" },
    gb: { ...defaultRegionConfig, currency: "GBP", price: 59, paymentLink: "https://buy.stripe.com/14A28qfPw0B0cte59TcEw01" },
    ca: { ...defaultRegionConfig, currency: "CAD", price: 79, paymentLink: "https://buy.stripe.com/14A28qfPw0B0cte59TcEw01" },
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined)

export function ConfigProvider({ children }: { children: ReactNode }) {
    const [config, setConfig] = useState<ConfigState>(defaultState)
    const [globalConfig, setGlobalConfig] = useState<GlobalSiteConfig>(defaultGlobalConfig)
    const [isLoading, setIsLoading] = useState(true)

    // Load from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem("site_config_v3")
            if (stored) {
                setConfig((prev) => ({ ...prev, ...JSON.parse(stored) }))
            } else {
                // Migration from v1 if exists
                const oldStored = localStorage.getItem("site_config")
                if (oldStored) {
                    const oldConfig = JSON.parse(oldStored)
                    setConfig((prev) => ({
                        ...prev,
                        default: { ...prev.default, ...oldConfig },
                    }))
                }
            }
        } catch (e) {
            console.error("Failed to load config from storage", e)
        }

        // Load global config
        try {
            const storedGlobal = localStorage.getItem("site_global_config")
            if (storedGlobal) {
                setGlobalConfig((prev) => ({ ...prev, ...JSON.parse(storedGlobal) }))
            }
        } catch (e) {
            console.error("Failed to load global config from storage", e)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const updateConfig = (region: string, newConfig: Partial<RegionConfig>) => {
        setConfig((prev) => {
            const updated = {
                ...prev,
                [region]: {
                    ...(prev[region] || defaultRegionConfig),
                    ...newConfig,
                },
            }
            localStorage.setItem("site_config_v3", JSON.stringify(updated))
            return updated
        })
    }

    const updateGlobalConfig = (newConfig: Partial<GlobalSiteConfig>) => {
        setGlobalConfig((prev) => {
            const updated = { ...prev, ...newConfig }
            localStorage.setItem("site_global_config", JSON.stringify(updated))
            return updated
        })
    }

    const getRegionConfig = (region: string) => {
        const regionConfig = config[region] || config["default"] || defaultRegionConfig
        const currencySymbol =
            regionConfig.currency === "EUR"
                ? "€"
                : regionConfig.currency === "GBP"
                    ? "£"
                    : regionConfig.currency === "USD"
                        ? "$"
                        : "$"
        return { ...regionConfig, currencySymbol }
    }

    return (
        <ConfigContext.Provider
            value={{
                config,
                globalConfig,
                updateConfig,
                updateGlobalConfig,
                getRegionConfig,
                isLoading,
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
