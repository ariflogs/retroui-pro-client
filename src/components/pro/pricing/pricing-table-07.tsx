import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Check, DollarSign } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    badge: "Free",
    badgeColor: "bg-[#5784BD]/20 text-[#5784BD]",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Quick video messages",
    buttonText: "Sign Up, It's Free",
    buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-black",
    decorativeColor: "bg-blue-400",
    bgImg: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/feature_10_1.png",
    features: [
      "Up to 50 Creators Lite",
      "Up to 25 videos/person",
      "Up to 5 mins/video"
    ],
    keyFeatures: [
      "Screen recording & cam bubble",
      "Instant editing",
      "Unlimited transcriptions",
      "Privacy controls",
      "Viewer insights"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    badge: "Popular",
    badgeColor: "bg-[#D14D87]/20 text-[#D14D87]",
    monthlyPrice: 20,
    yearlyPrice: 14,
    description: "Quick video messages",
    buttonText: "Sign Up, 14-Days Trial",
    buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-black",
    decorativeColor: "bg-pink-400",
    bgImg: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/feature_10_2.png",
    features: [
      "Up to 50 Creators Lite",
      "Up to 25 videos/person",
      "Up to 5 mins/video"
    ],
    keyFeatures: [
      "Screen recording & cam bubble",
      "Instant editing",
      "Unlimited transcriptions",
      "Privacy controls",
      "Viewer insights"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "Custom",
    badgeColor: "bg-[#599D77]/20 text-[#599D77]",
    monthlyPrice: 199,
    yearlyPrice: 139,
    description: "Quick video messages",
    buttonText: "Contact Sales",
    buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-black",
    decorativeColor: "bg-green-400",
    bgImg: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/el_1_599D77.png",
    features: [
      "Up to 50 Creators Lite",
      "Up to 25 videos/person",
      "Up to 5 mins/video"
    ],
    keyFeatures: [
      "Screen recording & cam bubble",
      "Instant editing",
      "Unlimited transcriptions",
      "Privacy controls",
      "Viewer insights"
    ]
  }
];

const PricingTableSeven = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="bg-[#5F4FE6] py-20 min-h-screen relative overflow-hidden">
      {/* Decorative Elements */}


      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <Text as="h2" className="text-white mb-8 font-normal">
              Choose Your Plan &<br />
              <span className="drop-shadow-[4px_4px_0_black] text-[#C4FF83]">Unlock Your Potential</span>
            </Text>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-white">
              <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/doller_sign_C4FF83.png" alt="dollar sign" className="w-6 h-6" />
              <span className="font-medium">Save upto 30%</span>
            </div>

            <div className="relative border-2 bg-primary p-2 flex w-48 items-center">
              {/* Sliding background */}
              <div
                className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-white border border-black transition-transform duration-300 ease-in-out ${isYearly ? 'translate-x-0' : 'translate-x-full'}`}
              ></div>
              <button
                onClick={() => setIsYearly(true)}
                className="w-1/2 relative px-3 py-1 font-medium transition-colors duration-300 flex-1 text-center"
              >
                Yearly
              </button>
              {/* Buttons */}
              <button
                onClick={() => setIsYearly(false)}
                className="w-1/2 flex-1 relative px-3 py-1 font-medium transition-colors duration-300 flex-1 text-center"
              >
                Monthly
              </button>

            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white border-2 shadow-lg relative overflow-hidden"
            >
              <div className="h-20 px-8 flex items-end w-full">
                <img src={plan.bgImg} alt="feature image" className="absolute top-0 right-0 h-20" />

                <Badge className={`${plan.badgeColor} px-4`}>
                  {plan.badge}
                </Badge>
              </div>

              <div className="p-8 relative">
                {/* Pricing */}
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-black">$</span>
                  <span className="text-6xl font-black">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="text-lg font-medium ml-2">/month</span>
                </div>

                {/* Plan Name & Description */}
                <Text as="h3" className="mb-1">
                  {plan.name}
                </Text>
                <Text className="text-muted-foreground mb-8">
                  {plan.description}
                </Text>

                {/* CTA Button */}
                <button
                  className={`w-full cursor-pointer mb-8 bg-[#FFDB32] border-2 px-6 py-2.5 font-medium hover:shadow hover:-translate-y-1 duration-200 transition-all`}
                >
                  {plan.buttonText}
                </button>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="font-medium">• {feature}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-b-2 border-black mb-6"></div>

                {/* Key Features */}
                <Text className="font-bold mb-4">Key Features</Text>
                <div className="space-y-3">
                  {plan.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTableSeven;