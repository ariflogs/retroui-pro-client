import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Check } from 'lucide-react'

export const Route = createFileRoute('/invite')({
    component: InvitePage,
    validateSearch: (search: Record<string, unknown>) => {
        return {
            token: (search.token as string) || '',
        }
    },
})

interface InvitationInfo {
    id: number
    role: string
    token: string
    expiresAt: string
    createdAt: string
    organizationName: string
    organizationLogo?: string
    invitedByName: string
}

function InvitePage() {
    const { token: inviteToken } = useSearch({ from: '/invite' })

    const acceptMutation = useMutation({
        mutationFn: async () => {
            if (!inviteToken) throw new Error("Missing tokens")
            return await fetch("https://workers.retroui.dev/organization/accept-invitation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${inviteToken}`,
                },
                body: JSON.stringify({ inviteToken }),
            }).then((res) => res.json())
        },
        onSuccess: () => {
            toast.success(`Successfully joined!`)
        },
        onError: (error: any) => {
            const message = error?.message || "Failed to accept invitation"
            toast.error(message)
        }
    })

    useEffect(() => {
        acceptMutation.mutate()
    }, [])

    return (
        <div className="max-w-2xl mx-auto py-24 w-full">
            <div className="border-2 border-black bg-white p-12 relative transform rounded-lg">
                <div className="absolute -top-6 -left-6 bg-green-400 border-2 border-black rounded-full w-16 h-16 flex items-center justify-center transform -rotate-12">
                    <Check className="w-8 h-8 text-black" />
                </div>

                <div className="text-center mb-8">
                    <Text as="h2">
                        Invitation Accepted!
                    </Text>

                    <p className="text-xl mt-4">
                        You can now sign in using your email and start building with your team.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Link to="/sign-in">
                        <Button>Sign In</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
