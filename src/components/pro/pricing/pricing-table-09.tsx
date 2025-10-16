import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    id: "personal",
    name: "Personal",
    price: "16",
    accentColor: "#AFFFA6",
    recommended: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgImg: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/person_idea_AFFFA6.png",
    features: [
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
    price: "24",
    accentColor: "#E7F193",
    recommended: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgImg: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/person_designing_C4A1FF.png",
    features: [
      "Screen recording & cam bubble",
      "Instant editing",
      "Unlimited transcriptions",
      "Privacy controls",
      "Viewer insights"
    ]
  },
  {
    id: "teams",
    name: "Teams",
    price: "32",
    accentColor: "#C4A1FF",
    recommended: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgImg: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/team_work_C4A1FF.png",
    features: [
      "Screen recording & cam bubble",
      "Instant editing",
      "Unlimited transcriptions",
      "Privacy controls",
      "Viewer insights"
    ]
  }
];

const PricingTableNine = () => {
  return (
    <div className="bg-[#F9F5F2] py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-40 relative">
          <Badge variant="solid">
            Pricing Plan
          </Badge>
          <Text as="h2" className="mt-6">
            Choose Your Plan
          </Text>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white border-2 p-6 shadow-lg ${plan.recommended ? '-mt-16 mb-16' : ''}`}
            >
              <img src={plan.bgImg} alt="pricing image" className="w-full mb-6" />

              <div className="relative">
                <Text as="h3" className="mb-4">
                  {plan.name}
                </Text>

                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-black">$</span>
                  <span className="text-6xl font-black">{plan.price}</span>
                  <span className="text-lg font-medium ml-2">/month</span>
                </div>


                <Text className="text-sm leading-relaxed">
                  {plan.description}
                </Text>

                {/* Divider */}
                <div className="border-b-1 border-black my-6"></div>

                {/* Key Features */}
                <Text className="font-medium mb-4">Key Features</Text>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="bg-[#F9F5F2] rounded-full p-1 mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-muted-foreground" />
                      </span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className={`w-full inline-block text-center cursor-pointer bg-[${plan.accentColor}] border-2 px-6 py-2.5 font-medium hover:shadow hover:-translate-y-1 duration-200 transition-all`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTableNine;