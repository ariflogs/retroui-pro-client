import React, { useState } from "react";
import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";

interface PricingCardProps {
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
  isYearly: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  features,
  isPopular = false,
  isYearly,
}) => {
  const price = isYearly ? yearlyPrice : monthlyPrice;
  const period = isYearly ? 'yearly' : 'monthly';
  return (
    <div
      className={`w-96 p-8 rounded-2xl border-4 border-black shadow-lg relative ${isPopular ? "bg-accent" : "bg-white"}`}
    >
     
      {
        isPopular && <Badge variant="solid" className="rounded-lg absolute top-2 right-2">Popular</Badge>
      }

      <Text className="text-xl font-medium mb-4">{title}</Text>

      <div className="mb-8">
        <span className="text-4xl font-bold">${price}</span>
        <span className="ml-2">/{period}</span>
      </div>

      <Text className="mb-6">{description}</Text>

      <div className="mb-8">
        <Text as="h5" className="font-sans font-bold mb-4">What's included</Text>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <span
                className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center
                    ${isPopular ? "bg-black" : "bg-white"}`}
              >
                <svg
                  className={`w-4 h-4 ${isPopular ? "text-white" : "text-black"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        className={`w-full py-4 rounded-xl border-4 border-black font-bold text-lg
            transition-transform active:translate-y-1 
            ${isPopular
            ? "bg-black text-white hover:bg-gray-800"
            : "bg-white text-black hover:bg-gray-100"
          }`}
      >
        Get Started Now
      </button>
    </div>
  );
};

// App.tsx
const PricingTableThree = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-16 rounded-lg">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Text as="h2" className="mb-2">
          Simple Pricing
        </Text>
        <Text className="text-muted-foreground text-lg">
          We don't over complicate pricing to make it confusing.
        </Text>

        <div className="border-4 bg-white p-2 rounded-xl flex items-center justify-between w-60 h-20 mx-auto mt-8">
          <button 
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              !isYearly 
                ? 'bg-black text-white border-2 border-black' 
                : 'bg-transparent text-black hover:bg-gray-50'
            }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              isYearly 
                ? 'bg-black text-white border-2 border-black' 
                : 'bg-transparent text-black hover:bg-gray-50'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <PricingCard
          title="Standard Plan"
          description="Basic plan for small businesses"
          monthlyPrice={19}
          yearlyPrice={190}
          features={[
            "All analytics features",
            "Up to 1,00,000 tracked visits",
            "Basic support",
            "Up to 10 team members",
          ]}
          isYearly={isYearly}
        />
        <PricingCard
          isPopular
          title="Pro Plan"
          description="Pro plan for medium businesses"
          monthlyPrice={49}
          yearlyPrice={490}
          features={[
            "All analytics features",
            "Unlimited tracked visits",
            "Premium support",
            "Unlimited team members",
          ]}
          isYearly={isYearly}
        />
      </div>
    </div>
  );
};

export default PricingTableThree;
