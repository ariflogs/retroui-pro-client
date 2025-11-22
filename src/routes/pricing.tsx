import PricingFAQ from "@/components/FAQ";
import { Button, Card, Text } from "@/components/ui";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Check, User, Users } from "lucide-react";
import { useState } from "react";

type PlanType = "solo" | "team";

const isProduction = import.meta.env.PROD;

const PLANS = {
  team: {
    name: "Team",
    plans: {
      essential: {
        name: "Essential Plan",
        price: 299,
        features: [
          "10 user licenses",
          "Invite your team members",
          "Access all UI blocks",
          "New UI blocks every week",
          "Unlimited projects",
          "Lifetime access to all future updates",
        ],
        priceIds: {
          dev: "price_1S8ee2IBZN3mPAToqjBX411R",
          prod: "price_1S8SlAIk5hDvmUOWozLjB28w",
        },
      },
      pro: {
        name: "Pro Plan",
        price: 449,
        features: [
          "10 user licenses",
          "Invite your team members",
          "Access all UI blocks",
          "New UI blocks every week",
          "3 Website templates",
          "Figma UI Kit",
          "Admin Dashboard",
          "Unlimited projects",
          "Lifetime access to all future updates",
        ],
        priceIds: {
          dev: "price_1S8eePIBZN3mPAToEG7ECmHE",
          prod: "price_1S8TGVIk5hDvmUOWO41ci17D",
        },
      },
    },
  },
  solo: {
    name: "Solo",
    plans: {
      essential: {
        name: "Essential Plan",
        price: 119,
        features: [
          "Single user license",
          "Access all UI blocks",
          "New UI blocks every week",
          "Unlimited projects",
          "Lifetime access to all future updates",
        ],
        priceIds: {
          dev: "price_1S01dpIk5hDvmUOWJEtAG7hl",
          prod: "price_1STdPlIk5hDvmUOWd9yC7vi6",
        },
      },
      pro: {
        name: "Pro Plan",
        price: 199,
        features: [
          "Single user license",
          "Access all UI blocks",
          "New UI blocks every week",
          "3 Website templates",
          "Figma UI Kit",
          "Admin Dashboard",
          "Unlimited projects",
          "Lifetime access to all future updates",
        ],
        priceIds: {
          dev: "price_1Rj4L4Ik5hDvmUOWBrrQ2iwX",
          prod: "price_1R8dWQIk5hDvmUOWdlwOMayb",
        },
      },
    },
  },
};

export const Route = createFileRoute("/pricing")({
  component: RouteComponent,
});

function RouteComponent() {
  const [planType, setPlanType] = useState<PlanType>("solo");

  const createCheckoutMutation = useMutation({
    mutationFn: async ({ planKey, planType }: { planKey: string; planType: PlanType }) => {
      const plan = PLANS[planType].plans[planKey as keyof typeof PLANS.solo.plans];
      const priceId = isProduction ? plan.priceIds.prod : plan.priceIds.dev;
      
      console.log(priceId, 'priceId');
      return fetch("https://workers.retroui.dev/checkout/create-stripe-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ priceId, promoCode: "" }),
      }).then((res) => res.json());
    },
    onSuccess: async (data) => {
      if (data?.sessionUrl) {
        window.location.href = data.sessionUrl;
      }
    },
    onError: (error) => {
      console.error("Checkout error:", error);
    },
  });

  const getPrice = (planKey: string, type: PlanType) => {
    return PLANS[type].plans[planKey as keyof typeof PLANS.solo.plans].price;
  };

  const getFeatures = (planKey: string, type: PlanType) => {
    return PLANS[type].plans[planKey as keyof typeof PLANS.solo.plans].features;
  };

  return (
    <div className="container max-w-6xl px-4 mx-auto pt-24">
      <div className="text-center max-w-4xl mx-auto">
        <Text as="h1">Pay once, use forever</Text>
        <Text className="text-xl max-w-2xl mx-auto mt-4">
          Get lifetime access to premium components, templates, figma kit, plus
          all future updates for a simple one-time price.
        </Text>
      </div>

      {/* Plan Type Toggle */}
      <div className="flex justify-center my-12">
        <div className="flex space-x-2 rounded-lg text-lg font-medium border-2 border-black p-2 bg-white">
          <button
            onClick={() => setPlanType("solo")}
            className={`px-6 py-2 flex items-center gap-2 rounded-md font-medium transition-colors ${
              planType === "solo"
                ? "bg-primary outline-2"
                : "bg-white"
            }`}
          >
            <User className="w-5 h-5" />
            Solo
          </button>
          <button
            onClick={() => setPlanType("team")}
            className={`px-6 py-2 flex items-center gap-2 rounded-md font-medium transition-colors ${
              planType === "team"
                ? "bg-primary outline-2"
                : "bg-white"
            }`}
          >
            <Users className="w-5 h-5" />
            Team
          </button>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Essential Plan */}
          <Card className="relative shadow-none p-4 w-full">
            <Card.Content>
              <Text className="text-2xl font-semibold mb-8">
                {PLANS[planType].plans.essential.name}
              </Text>
              <Text as="h2" className="text-5xl lg:text-6xl mb-6">
                ${getPrice("essential", planType)}
              </Text>

              <Button
                className="w-full mb-8"
                onClick={() => createCheckoutMutation.mutate({ planKey: "essential", planType })}
                disabled={createCheckoutMutation.isPending}
              >
                {createCheckoutMutation.isPending ? "Processing..." : "Buy Now"}
              </Button>

              <ul className="space-y-3">
                {getFeatures("essential", planType).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card.Content>
          </Card>

          {/* Pro Plan */}
          <Card className="relative shadow-none p-4 w-full">
            <Card.Content>
              <Text className="text-2xl font-semibold mb-8">
                {PLANS[planType].plans.pro.name}
              </Text>
              <Text as="h2" className="text-5xl lg:text-6xl mb-6">
                ${getPrice("pro", planType)}
              </Text>

              <Button
                className="w-full mb-8"
                onClick={() => createCheckoutMutation.mutate({ planKey: "pro", planType })}
                disabled={createCheckoutMutation.isPending}
              >
                {createCheckoutMutation.isPending ? "Processing..." : "Buy Now"}
              </Button>

              <ul className="space-y-3">
                {getFeatures("pro", planType).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card.Content>
          </Card>
        </div>
      </div>

      <PricingFAQ />
    </div>
  );
}
