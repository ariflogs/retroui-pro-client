import { Badge } from '@/components/retroui/Badge'
import { Button, Text } from '@/components/ui'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/affiliate')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto px-4 mt-24 text-center">
                <div className="mb-6">
                    <Badge variant="solid" className="rounded-full">
                        Introducing Affiliate Program! ✨
                    </Badge>
                </div>

                <Text as="h1" className='mb-4'>Partner with RetroUI and earn 30% commission</Text>

                <p className="text-xl text-muted-foreground font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                    Join our affiliate program and start earning by referring your friends or audience to RetroUI.
                </p>

                <a href="https://logging-studio.trackdesk.com/sign-up" target="_blank">
                    <Button size="lg">
                        Join Affiliate Program
                    </Button>
                </a>
            </div>

            {/* Steps Section */}
            <div className="max-w-6xl mx-auto px-4 mt-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-pink-100 border-2 border-black p-8 shadow-lg rounded-lg">
                        <div className="bg-pink-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-black mb-4 border-2 border-black rounded">
                            1
                        </div>
                        <Text as="h3" className="mb-4">Join The Program</Text>
                        <p className="text-gray-700 leading-relaxed font-medium">
                            Visit {" "}
                            <a href="https://logging-studio.trackdesk.com/sign-up" target="_blank" className="font-medium bg-yellow-300 px-1 border border-black">
                                Our Affilate Page
                            </a>{" "}
                            and get your unique referral link to share with your audience.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-blue-100 border-2 border-black p-8 shadow-lg rounded-lg">
                        <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-black mb-4 border-2 border-black rounded">
                            2
                        </div>
                        <Text as="h3" className="mb-4">Share RetroUI</Text>
                        <p className="text-gray-700 leading-relaxed font-medium">
                            Share your referral link (e.g.{" "}
                            <span className="bg-yellow-300 px-1 font-medium text-black border border-black">
                                pro.retroui.dev?ref=yourname
                            </span>
                            ) online. There's no limit to how much you can make as an affiliate.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-green-100 border-2 border-black p-8 shadow-lg rounded-lg">
                        <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center text-2xl font-black mb-4 border-2 border-black rounded">
                            3
                        </div>
                        <Text as="h3" className="mb-4">Get Paid!</Text>
                        <p className="text-gray-700 leading-relaxed font-medium">
                            For every sale made through your referral link, you'll get <span className="bg-yellow-300 px-1 font-medium text-black border border-black">30%</span> of the total sale paid to you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
