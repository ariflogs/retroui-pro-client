import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
    return (
        <section className="flex items-center justify-center max-lg:px-4">
            <div className="max-w-6xl w-full mx-auto relative">
                <div className="bg-white border-4 border-black p-8 lg:p-16 shadow-lg rounded-lg relative">
                    <div className="absolute inset-0 z-0" style={{
                        backgroundImage: `
                              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                            `,
                        backgroundSize: "20px 30px",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
                    }} />

                    {/* Main heading */}
                    <Text as="h2" className="text-center mb-6 leading-tight relative z-1">
                        Unlock Access to All
                        <br />
                        <span className="text-outlined">Components & Templates</span>
                    </Text>

                    {/* Subtext */}
                    <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto leading-relaxed relative z-1">
                        Get access to all the framer components and build you next framer project. New components added regularly,
                        get started today!
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center relative z-1">
                        <Link to="/pricing">
                            <Button variant="secondary" size="lg" className="max-lg:text-base max-lg:px-6">
                                Get Unlimited Access
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
