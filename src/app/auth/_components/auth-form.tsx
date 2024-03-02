'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"

export function AuthForm() {
    const form = useForm()

    const handleSubmit = form.handleSubmit(async (data) => {
        try {
            await signIn('email', { email: data.email, redirect: false})
            toast({
                title: 'Magic Link Sent',
                description: 'A magic link has been sent to your email. Please check your inbox.',
            })
        } catch (error) {
            toast({
                title: 'Error Occurred',
                description: 'An error occurred while signing in. Please try again later.',
            })
        }
    })

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader className="space-y-1">
                <CardTitle className="text-3xl font-bold">Login</CardTitle>
                <CardDescription>Enter your email below to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="m@example.com"
                            required
                            type="email" {...form.register('email')} />
                    </div>
                    <Button className="w-full">Send Magic Link</Button>
                </form>
            </CardContent>
        </Card>
    )
}
