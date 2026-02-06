"use client"

import { useState, useEffect } from "react"
import { useConfig } from "@/contexts/config-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Lock, Save, AlertCircle } from "lucide-react"

export default function AdminPage() {
    const { price, currency, paymentLink, updateConfig } = useConfig()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")
    const [formData, setFormData] = useState({
        price: "",
        currency: "",
        paymentLink: "",
    })
    const [saveStatus, setSaveStatus] = useState<"idle" | "success">("idle")

    // Initialize form data from config
    useEffect(() => {
        if (price && currency && paymentLink) {
            setFormData({
                price: price.toString(),
                currency,
                paymentLink,
            })
        }
    }, [price, currency, paymentLink])

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
        updateConfig({
            price: Number(formData.price),
            currency: formData.currency,
            paymentLink: formData.paymentLink,
        })
        setSaveStatus("success")
        setTimeout(() => setSaveStatus("idle"), 3000)
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
                        <CardTitle>Global Settings</CardTitle>
                        <CardDescription>Updates apply to all language versions immediately</CardDescription>
                    </CardHeader>
                    <CardContent>
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
            </div>
        </div>
    )
}
