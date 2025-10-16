import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Check, Star } from "lucide-react";
import { useState } from "react";

const PricingTableTen = () => {
  const [selectedPlan, setSelectedPlan] = useState<'solo' | 'family'>('solo');

  const plans = [
    {
      id: 'solo',
      title: 'Solo Plan',
      price: '$6.99 USD / MO',
      badge: 'MOST POPULAR',
    },
    {
      id: 'family',
      title: 'Family Plan',
      price: '$9.99 USD / MO',
      badge: '2-6 MEMBERS',
    }
  ];

  return (
    <div className="bg-white">
      {/* Bottom Yellow Section */}
      <div className="bg-primary py-20 relative">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <Text as="h3" className="text-4xl mb-16">
            Choose a plan for after<br />
            your 14-day free trial
          </Text>

          <div className="space-y-4 w-[400px] mx-auto mb-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id as 'solo' | 'family')}
                className={`relative border-4 border-black p-6 h-28 flex items-center cursor-pointer transition-all mx-auto ${
                  selectedPlan === plan.id ? 'bg-white scale-110' : 'bg-white/35'
                }`}
              >
                {selectedPlan === plan.id && (
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                )}
                <Badge size="sm" variant="solid" className="absolute top-0 left-0">
                  {plan.badge}
                </Badge>
                <div className="flex justify-between items-center w-full">
                  <Text className={`text-2xl ${selectedPlan === plan.id ? 'font-medium' : ''}`}>
                    {plan.title}
                  </Text>
                  <Text className={`text-lg ${selectedPlan === plan.id ? 'font-medium' : ''}`}>
                    {plan.price}
                  </Text>
                </div>
              </div>
            ))}
          </div>

          <Text className="mb-8">
            14 day free trial, then $83.99 USD per year ($6.99<br />
            USD/month, billed annually) plus applicable taxes
          </Text>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Button
              size="lg"
              variant="secondary"
              className="w-full font-sans justify-center shadow-white"
            >
              START MY FREE 2 WEEKS
            </Button>

            <Button
              size="lg"
              variant="link"
              className="w-full font-sans justify-center"
            >
              VIEW ALL PLANS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTableTen;