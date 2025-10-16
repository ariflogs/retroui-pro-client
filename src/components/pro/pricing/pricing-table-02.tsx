import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Switch } from "@/components/retroui/Switch";
import { Text } from "@/components/retroui/Text";

export default function PricingTableTwo() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "BASIC",
      monthlyPrice: 9,
      annualPrice: 90, // 10 months price (2 months free)
      description: "Perfect for startups and small projects.",
      features: [
        "5 Projects",
        "20GB Storage",
        "Basic Analytics",
        "Email Support",
      ],
      color: "bg-white",
      buttonColor: "bg-black hover:bg-[#333]",
    },
    {
      name: "PRO",
      monthlyPrice: 29,
      annualPrice: 290, // 10 months price (2 months free)
      description: "For growing businesses and teams.",
      features: [
        "25 Projects",
        "100GB Storage",
        "Advanced Analytics",
        "Priority Support",
        "API Access",
      ],
      popular: true,
      color: "bg-white",
      buttonColor: "bg-black hover:bg-[#333]",
    },
    {
      name: "ENTERPRISE",
      monthlyPrice: 99,
      annualPrice: 990, // 10 months price (2 months free)
      description: "For large organizations and complex needs.",
      features: [
        "Unlimited Projects",
        "500GB Storage",
        "Custom Analytics",
        "24/7 Support",
        "Dedicated Account Manager",
        "Custom Integrations",
      ],
      color: "bg-white",
      buttonColor: "bg-black hover:bg-[#333]",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-8 rounded-lg">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div>
          <Text className="font-medium mb-4">#Pricing</Text>
          <Text as="h1" className="mb-2">
            CHOOSE YOUR PLAN
          </Text>
          <Text className="text-muted-foreground">
            Simple, transparent pricing that grows with you. Try any plan free
            for 14 days.
          </Text>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <span className={`text-lg ${!isAnnual ? "font-bold" : ""}`}>
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-black"
          />
          <div className="flex flex-col items-start">
            <span className={`text-lg ${isAnnual ? "font-bold" : ""}`}>
              Annual
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden border-2 border-black bg-white relative"
          >
            {plan.popular && (
              <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1 text-sm font-bold text-primary-foreground">
                POPULAR
              </div>
            )}
            <div className="bg-black p-6 text-white">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                <span className="ml-1 text-xl font-normal text-gray-300">
                  /{isAnnual ? "year" : "month"}
                </span>
              </div>
              <p className="mt-4 text-gray-300">{plan.description}</p>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-black" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8 w-full">
                {plan.name === "ENTERPRISE" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
