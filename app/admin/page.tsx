"use client"

import { useState, useEffect } from "react"
import { useConfig } from "@/contexts/config-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Lock, Save, AlertCircle, Globe, MessageCircle } from "lucide-react"

const REGIONS = [
    { id: "default", name: "Default (Global)", flag: "🌐" },
    { id: "fr", name: "France", flag: "🇫🇷" },
    { id: "de", name: "Germany", flag: "🇩🇪" },
    { id: "gb", name: "United Kingdom", flag: "🇬🇧" },
    { id: "ca", name: "Canada", flag: "🇨🇦" },
]

export default function AdminPage() {
    const { config, updateConfig, globalConfig, updateGlobalConfig } = useConfig()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")
    const [selectedRegion, setSelectedRegion] = useState("default")
    const [formData, setFormData] = useState({
        price: "",
        currency: "",
        paymentLink: "",
        headTags: "",
        bodyTags: "",
        footerTags: "",
    })
    const [liveChatScript, setLiveChatScript] = useState("")
    const [saveStatus, setSaveStatus] = useState<"idle" | "success">("idle")
    const [chatSaveStatus, setChatSaveStatus] = useState<"idle" | "success">("idle")

    // Initialize form data when config or region changes
    useEffect(() => {
        const regionConfig = config[selectedRegion] || config["default"]
        if (regionConfig) {
            setFormData({
                price: regionConfig.price.toString(),
                currency: regionConfig.currency,
                paymentLink: regionConfig.paymentLink,
                headTags: regionConfig.headTags || "",
                bodyTags: regionConfig.bodyTags || "",
                footerTags: regionConfig.footerTags || "",
            })
        }
    }, [config, selectedRegion])

    // Sync live chat script from global config
    useEffect(() => {
        setLiveChatScript(globalConfig.liveChatScript || "")
    }, [globalConfig.liveChatScript])

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Simple client-side protection (obfuscated)
        if (btoa(password) === "YWRtaW4xMjM=") {
            // admin123
            setIsAuthenticated(true)
        } else {
            alert("Invalid password")
        }
    }

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        updateConfig(selectedRegion, {
            price: Number(formData.price),
            currency: formData.currency,
            paymentLink: formData.paymentLink,
            headTags: formData.headTags,
            bodyTags: formData.bodyTags,
            footerTags: formData.footerTags,
        })
        setSaveStatus("success")
        setTimeout(() => setSaveStatus("idle"), 3000)
    }

    const handleChatSave = (e: React.FormEvent) => {
        e.preventDefault()
        updateGlobalConfig({ liveChatScript })
        setChatSaveStatus("success")
        setTimeout(() => setChatSaveStatus("idle"), 3000)
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Admin Access</CardTitle>
                        <CardDescription className="text-center">Enter password to manage settings</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                <Lock className="w-4 h-4 mr-2" />
                                Login
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-2xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Payment Settings</h1>
                    <p className="text-gray-500">Manage global pricing and payment configuration</p>
                </div>

                <Alert variant="default" className="bg-blue-50 border-blue-200 text-blue-800">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Configuration Mode</AlertTitle>
                    <AlertDescription>
                        Changes are saved to your local browser storage. To persist these changes for all users in production, you
                        must update the source code or enable Cloudflare KV.
                    </AlertDescription>
                </Alert>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="h-5 w-5" />
                            Region Configuration
                        </CardTitle>
                        <CardDescription>Select a region to configure its pricing and payment details</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-6">
                            <Label htmlFor="region" className="mb-2 block">
                                Select Region
                            </Label>
                            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select region" />
                                </SelectTrigger>
                                <SelectContent>
                                    {REGIONS.map((region) => (
                                        <SelectItem key={region.id} value={region.id}>
                                            {region.flag} {region.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="p-4 bg-muted/50 rounded-lg border mb-6">
                            <h3 className="font-semibold mb-1 text-sm text-gray-700">
                                Editing: {REGIONS.find((r) => r.id === selectedRegion)?.name}
                            </h3>
                            <p className="text-xs text-gray-500">
                                These settings will apply to users visiting <code>/{selectedRegion === "default" ? "" : selectedRegion}</code>
                            </p>
                        </div>

                        <form onSubmit={handleSave} className="space-y-6">
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="price">Product Price</Label>
                                    <Input
                                        id="price"
                                        type="number"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="currency">Currency Code</Label>
                                    <Select
                                        value={formData.currency}
                                        onValueChange={(value) => setFormData({ ...formData, currency: value })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select currency" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="EUR">EUR (€)</SelectItem>
                                            <SelectItem value="USD">USD ($)</SelectItem>
                                            <SelectItem value="GBP">GBP (£)</SelectItem>
                                            <SelectItem value="CAD">CAD ($)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="paymentLink">Stripe Payment Link</Label>
                                    <Input
                                        id="paymentLink"
                                        value={formData.paymentLink}
                                        onChange={(e) => setFormData({ ...formData, paymentLink: e.target.value })}
                                        placeholder="https://buy.stripe.com/..."
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="headTags">Head Tags (Scripts, Styles, Meta)</Label>
                                    <Textarea
                                        id="headTags"
                                        value={formData.headTags}
                                        onChange={(e) => setFormData({ ...formData, headTags: e.target.value })}
                                        placeholder="<script>...</script>"
                                        className="font-mono text-xs"
                                    />
                                    <p className="text-xs text-gray-500">Injected at the end of &lt;head&gt;</p>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="bodyTags">Body Tags (Start)</Label>
                                    <Textarea
                                        id="bodyTags"
                                        value={formData.bodyTags}
                                        onChange={(e) => setFormData({ ...formData, bodyTags: e.target.value })}
                                        placeholder="<noscript>...</noscript>"
                                        className="font-mono text-xs"
                                    />
                                    <p className="text-xs text-gray-500">Injected at the start of &lt;body&gt;</p>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="footerTags">Footer Tags (End)</Label>
                                    <Textarea
                                        id="footerTags"
                                        value={formData.footerTags}
                                        onChange={(e) => setFormData({ ...formData, footerTags: e.target.value })}
                                        placeholder="<script>...</script>"
                                        className="font-mono text-xs"
                                    />
                                    <p className="text-xs text-gray-500">Injected at the end of &lt;body&gt;</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <div className="text-sm text-green-600 font-medium">
                                    {saveStatus === "success" && "Settings saved successfully!"}
                                </div>
                                <Button type="submit">
                                    <Save className="w-4 h-4 mr-2" />
                                    Save Changes
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Live Chat Configuration */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MessageCircle className="h-5 w-5" />
                            Live Chat Configuration
                        </CardTitle>
                        <CardDescription>
                            Paste your live chat widget embed script here. Supports Tidio, Crisp, Tawk.to, Intercom, LiveChat and more.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleChatSave} className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="liveChatScript">Embed Script</Label>
                                <Textarea
                                    id="liveChatScript"
                                    value={liveChatScript}
                                    onChange={(e) => setLiveChatScript(e.target.value)}
                                    placeholder={`<!-- Example: Tidio -->\n<script src="//code.tidio.co/XXXXXXXXXX.js" async></script>\n\n<!-- Example: Tawk.to -->\n<script>var Tawk_API=Tawk_API||{} ...</script>`}
                                    className="font-mono text-xs min-h-[140px]"
                                />
                                <p className="text-xs text-gray-500">
                                    The script will be injected into the page and a sticky 💬 chat button will appear on all pages. Leave empty to hide the button.
                                </p>
                            </div>

                            <Alert variant="default" className="bg-amber-50 border-amber-200 text-amber-800">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Popular Live Chat Services</AlertTitle>
                                <AlertDescription className="text-xs space-y-1 mt-1">
                                    <div>• <strong>Tidio:</strong> tidio.com → Settings → Widget → Get code</div>
                                    <div>• <strong>Crisp:</strong> crisp.chat → Settings → Integrations → Setup Instructions</div>
                                    <div>• <strong>Tawk.to:</strong> tawk.to → Administration → Widget Code</div>
                                    <div>• <strong>Intercom:</strong> intercom.com → Settings → Installation</div>
                                </AlertDescription>
                            </Alert>

                            <div className="flex items-center justify-between">
                                <div className="text-sm text-green-600 font-medium">
                                    {chatSaveStatus === "success" && "Live chat script saved!"}
                                </div>
                                <Button type="submit">
                                    <Save className="w-4 h-4 mr-2" />
                                    Save Chat Script
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
