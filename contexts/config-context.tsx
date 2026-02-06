"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export interface RegionConfig {
    price: number
    currency: string
    paymentLink: string
    stripePublishableKey?: string
}

export type ConfigState = Record<string, RegionConfig>

interface ConfigContextType {
    config: ConfigState
    updateConfig: (region: string, newConfig: Partial<RegionConfig>) => void
    getRegionConfig: (region: string) => RegionConfig & { currencySymbol: string }
    isLoading: boolean
}

const defaultRegionConfig: RegionConfig = {
    price: 59,
    currency: "EUR",
    paymentLink: "https://buy.stripe.com/5kQ5kDamQ66tdLI8oEdAk00",
}

const defaultState: ConfigState = {
    default: { ...defaultRegionConfig },
    fr: { ...defaultRegionConfig },
    de: { ...defaultRegionConfig },
    gb: { ...defaultRegionConfig, currency: "GBP", price: 49 },
    ca: { ...defaultRegionConfig, currency: "CAD", price: 79 },
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined)

export function ConfigProvider({ children }: { children: ReactNode }) {
    const [config, setConfig] = useState<ConfigState>(defaultState)
    const [isLoading, setIsLoading] = useState(true)

    // Load from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem("site_config_v2")
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
            localStorage.setItem("site_config_v2", JSON.stringify(updated))
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
                updateConfig,
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
