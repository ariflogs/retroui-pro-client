import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for small projects and individual developers",
    features: [
      "Up to 5 projects",
      "10GB storage",
      "Basic analytics",
      "24/7 support",
      "API access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "79",
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom domains",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large scale applications and organizations",
    features: [
      "Unlimited everything",
      "500GB storage",
      "Custom analytics",
      "Dedicated support",
      "Premium API access",
      "Custom domains",
      "Advanced security",
      "SLA guarantee",
    ],
    popular: false,
  },
];

const PricingTableOne = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="inline-block mb-8" variant="solid">
            Simple & Transparent Pricing
          </Badge>
          <Text as="h2" className="text-4xl font-black mb-4">
            Choose Your{" "}
            <span className="bg-primary px-2 border-4 border-black">
              Perfect
            </span>{" "}
            Plan
          </Text>
          <Text className="text-lg text-muted-foreground">
            No hidden fees. No surprises. Switch plans or cancel anytime.
          </Text>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border-4 border-black bg-white shadow-lg ${
                plan.popular ? "shadow-primary" : "shadow-black"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 -right-4 bg-black text-primary px-4 py-1 font-bold">
                  MOST POPULAR
                </div>
              )}

              <div
                className={`p-8 ${
                  plan.popular ? "bg-primary" : "bg-white"
                } border-b-4 border-black`}
              >
                <Text as="h3" className="mb-2">
                  {plan.name}
                </Text>
                <p className="text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-black">$</span>
                  <span className="text-6xl font-black">{plan.price}</span>
                  <span className="text-xl font-bold">/mo</span>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-black flex items-center justify-center bg-accent rounded-lg">
                        ✓
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  className="w-full"
                  // className={`w-full py-4 font-bold text-lg transition-all ${
                  //   plan.popular
                  //     ? "bg-black text-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#FFE600]"
                  //     : "border-4 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  // }`}
                >
                  Get Started →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary border-4 border-black flex items-center justify-center font-bold text-2xl">
              ?
            </div>
            <Text as="h3">Frequently Asked Questions</Text>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and wire transfers.",
              },
              {
                q: "Is there a long-term contract?",
                a: "No, all plans are month-to-month with no long-term commitment.",
              },
              {
                q: "What's your refund policy?",
                a: "We offer a 30-day money-back guarantee for all plans.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-l-2 border-black pl-4">
                <Text className="font-bold mb-2">{faq.q}</Text>
                <Text className="text-muted-foreground">{faq.a}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTableOne;
