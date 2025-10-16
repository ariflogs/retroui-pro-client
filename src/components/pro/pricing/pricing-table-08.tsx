import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "intro",
    name: "Intro",
    price: "20",
    description: "For most businesses that want to optimize web queries",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users"
    ],
    highlighted: false
  },
  {
    id: "base",
    name: "Base",
    price: "50",
    description: "For most businesses that want to optimize web queries",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users"
    ],
    highlighted: false
  },
  {
    id: "pro",
    name: "Pro",
    price: "100",
    description: "For most businesses that want to optimize web queries",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users"
    ],
    highlighted: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "200",
    description: "For most businesses that want to optimize web queries",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users"
    ],
    highlighted: false
  }
];

const PricingTableEight = () => {
  return (
    <div className="bg-[#C4FF83] py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-32">
          <Text as="h2" className="font-sans font-black drop-shadow-[4px_4px_0_white] mb-4">
            Simple, transparent pricing
          </Text>
          <Text className="text-lg">
            14 days unlimited free trial. No contract or credit card required.
          </Text>
        </div>

        {/* Pricing Grid */}
        <div className="relative">
          {/* Container with border */}
          <div className="border-4 border-black bg-white">
            <div className="grid lg:grid-cols-4 relative">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative p-8 ${plan.highlighted
                      ? 'bg-[#5F4FE6] text-white outline outline-4 outline-black -mt-18'
                      : 'bg-transparent'
                    }`}
                >
                  {/* Most Popular Badge */}
                  {plan.highlighted && (
                    <div className="flex justify-end items-start h-18 mb-auto">
                      <Badge className="bg-[#4031B3] text-white px-6 py-2 font-bold inline-block">
                        MOST POPULAR
                      </Badge>
                    </div>
                  )}

                  {/* Pricing */}
                  <div className="flex items-baseline mb-8">
                    <span className="text-5xl">${plan.price}</span>
                    <span className={`text-lg font-medium ml-2 ${plan.highlighted ? 'text-white' : 'text-[#5F4FE6]'}`}>
                      /month
                    </span>
                  </div>

                  {/* Plan Name */}
                  <Text as="h3" className="font-sans font-black mb-2">
                    {plan.name}
                  </Text>

                  {/* Description */}
                  <Text className={`mb-8 leading-relaxed font-normal ${plan.highlighted ? 'text-white' : 'text-black'}`}>
                    {plan.description}
                  </Text>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 rounded-full p-[2px] ${plan.highlighted ? 'text-white bg-white/10' : 'text-black bg-[#C4FF83] border'
                          }`} />
                        <span className={`${plan.highlighted ? 'text-white' : 'text-black'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`${plan.highlighted ? 'bg-[#C4FF83] text-black' : 'bg-[#5F4FE6] text-white'} w-full cursor-pointer mb-8 border-2 border-black px-6 py-2.5 font-medium hover:shadow hover:-translate-y-1 duration-200 transition-all`}
                  >
                    Choose plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTableEight;