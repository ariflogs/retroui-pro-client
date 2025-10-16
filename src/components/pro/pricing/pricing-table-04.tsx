import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import React, { useState } from "react";

interface PricingTierProps {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  accentColor: string;
  recommended?: boolean;
  isYearly: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  accentColor,
  recommended = false,
  isYearly,
}) => {
  const price = isYearly ? yearlyPrice : monthlyPrice;
  const period = isYearly ? 'year' : 'mo';
  return (
    <div
      className={`relative w-full p-6 rounded-2xl border-4 border-black 
        ${accentColor} shadow-lg h-full flex flex-col`}
    >
      {recommended && (
        <Badge
          variant="surface"
          className="absolute -top-4 -right-4 rounded-lg outline-[3px] text-base transform rotate-6"
        >
          Popular!
        </Badge>
      )}

      <div className="mb-6">
        <h2 className="text-3xl font-black mb-2">{name}</h2>
        <p className="text-lg opacity-85">{description}</p>
      </div>

      <div className="flex items-baseline mb-8">
        <span className="text-5xl font-black">${price}</span>
        <span className="text-xl ml-2">/{period}</span>
      </div>

      <div className="bg-white border-4 border-black rounded-2xl p-6 mb-8">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <span
                className="w-8 h-8 shrink-0 rounded-lg border-2 border-black bg-primary
                flex items-center justify-center"
              >
                ✓
              </span>
              <span className="text-black font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        size="lg"
        variant="secondary"
        className="w-full rounded-xl justify-center mt-auto"
      >
        Choose {name}
      </Button>
    </div>
  );
};

const PricingTableFour = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: "Perfect for small projects",
      accentColor: "bg-[#FF90E8]",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      name: "Pro",
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: "Best for growing businesses",
      accentColor: "bg-[#7DF9FF]",
      recommended: true,
      features: [
        "Up to 20 team members",
        "Unlimited storage",
        "Advanced analytics",
        "24/7 Priority support",
        "Custom integrations",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: "For large scale operations",
      accentColor: "bg-[#FFA07A]",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Custom analytics",
        "Dedicated support",
        "Custom solutions",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5E4] py-16 px-8 rounded-lg">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Text className="text-6xl font-black mb-6">
          <span
            className="bg-yellow-300 px-4 py-2 rounded-xl border-4 border-black 
            inline-block transform -rotate-2"
          >
            Simple
          </span>{" "}
          <span
            className="bg-[#FF90E8] px-4 py-2 rounded-xl border-4 border-black 
            inline-block transform rotate-2"
          >
            Pricing
          </span>
        </Text>
        <p className="text-2xl">
          Choose the perfect plan for your needs. No hidden fees!
        </p>
        
       
      </div>

      <div className="border-4 bg-white p-2 rounded-xl flex items-center justify-between w-60 h-16 mb-8">
          <button 
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              !isYearly 
                ? 'bg-black text-white border-2 border-black' 
                : 'bg-transparent text-black hover:bg-gray-50'
            }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              isYearly 
                ? 'bg-black text-white border-2 border-black' 
                : 'bg-transparent text-black hover:bg-gray-50'
            }`}
          >
            Yearly
          </button>
      </div>

      {/* Pricing Cards */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-8 items-start"
      >
        {plans.map((plan) => (
          <PricingTier
            key={plan.name}
            name={plan.name}
            monthlyPrice={plan.monthlyPrice}
            yearlyPrice={plan.yearlyPrice}
            description={plan.description}
            features={plan.features}
            accentColor={plan.accentColor}
            recommended={plan.recommended}
            isYearly={isYearly}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingTableFour;
