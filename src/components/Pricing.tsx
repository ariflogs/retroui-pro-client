import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Check, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function Pricing() {
    return (
        <section className="relative">
            <div className="container max-w-4xl w-full mx-auto">
                <div className="text-center mb-12">
                    <Badge variant="solid" className="rounded-full">
                        ⚡ LIMITED TIME OFFER ⚡
                    </Badge>
                    <Text as="h2" className="mt-8 mb-2">
                        Pricing That You Can&apos;t Miss
                    </Text>
                    <Text className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get access to all premium components, templates, and future updates for one time payment.
                    </Text>
                </div>

                <Card className="shadow-none max-w-3xl mx-auto w-full block">
                    <Card.Content className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Features */}
                            <div className="flex-1">
                                <Text className="text-xl font-bold mb-6 text-center lg:text-left">
                                    What You Get:
                                </Text>
                                <ul className="space-y-3">
                                    {[
                                        "Access All React, and Figma Components",
                                        "Access All Website Templates",
                                        "Unlimited Component Copies",
                                        "Pay Once, Get Lifetime Updates",
                                        "Commercial License",
                                    ].map((feature) => (
                                        <li key={feature} className="text-muted-foreground flex items-start gap-2">
                                            <span>
                                                <CheckCircle className="w-4 h-4 bg-primary rounded-full mt-1" />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pricing */}
                            <div className="text-center lg:text-left flex flex-col justify-center">
                                <div className="mb-6">
                                    <div className="flex items-baseline justify-center lg:justify-start gap-4 mb-2">
                                        <span className="font-head text-5xl lg:text-6xl text-outlined">
                                            $99
                                        </span>
                                        <span className="font-bold text-2xl lg:text-3xl line-through text-gray-500">
                                            $199
                                        </span>
                                    </div>
                                    <Text className="text-sm text-gray-600 mt-1">
                                        One-time payment • No recurring fees
                                    </Text>
                                </div>

                                <Button className="w-full">
                                   Get Access
                                </Button>
                            </div>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        </section>
    );
}
