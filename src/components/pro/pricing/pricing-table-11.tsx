import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Check, X, TrendingUp } from "lucide-react";

const featureRows = [
  {
    name: "Monthly Email Sends",
    key: "monthlyEmails",
  },
  {
    name: "Seats",
    key: "seats",
  },
  {
    name: "Email Templates",
    key: "templates",
  },
  {
    name: "Newsletter Subscribers",
    key: "subscribers",
  },
  {
    name: "Priority Support",
    key: "support",
  },
  {
    name: "Third Party Integrations",
    key: "integrations",
  },
  {
    name: "Reporting & Analytics",
    key: "reporting",
  },
  {
    name: "Remove Branding",
    key: "branding",
  },
  {
    name: "Customer Onboarding",
    key: "onboarding",
  },
]

const pricingPlans = [
  {
    id: "premium",
    name: "Premium",
    description: "Our most advanced tools, unlimited contacts, and priority support",
    price: "199",
    buttonText: "Buy Now",
    buttonVariant: "primary" as const,
    features: [
      { key: "monthlyEmails", value: "150,000" },
      { key: "seats", value: "Unlimited" },
      { key: "templates", value: true },
      { key: "subscribers", value: "Unlimited" },
      { key: "support", value: "24/7 Email & Chat Support" },
      { key: "integrations", value: true },
      { key: "reporting", value: true },
      { key: "branding", value: true },
      { key: "onboarding", value: true },
    ]
  },
  {
    id: "standard",
    name: "Standard",
    description: "Sell even more with personalization, optimization tools, and automations.",
    price: "69",
    originalPrice: "Free",
    trialText: "for 1 month",
    buttonText: "Sign Up Free",
    buttonVariant: "secondary" as const,
    recommended: true,
    features: [
      { key: "monthlyEmails", value: "60,000" },
      { key: "seats", value: "5 Seats" },
      { key: "templates", value: true },
      { key: "subscribers", value: "10,000" },
      { key: "support", value: "24/7 Email & Chat Support" },
      { key: "integrations", value: true },
      { key: "reporting", value: true },
      { key: "branding", value: true },
      { key: "onboarding", value: true },
    ]
  },
  {
    id: "essentials",
    name: "Essentials",
    description: "Send the right content at the right time with testing and scheduling features.",
    price: "29",
    originalPrice: "Free",
    trialText: "for 1 month",
    buttonText: "Sign Up Free",
    buttonVariant: "secondary" as const,
    features: [
      { key: "monthlyEmails", value: "20,000" },
      { key: "subscribers", value: "5,000" },
      { key: "templates", value: true },
      { key: "seats", value: "3 Seats" },
      { key: "support", value: "Limited" },
      { key: "integrations", value: true },
      { key: "reporting", value: true },
      { key: "branding", value: true },
      { key: "onboarding", value: false },
    ]
  },
  {
    id: "free",
    name: "Free",
    description: "Easily create email campaigns and learn more about your customers",
    price: "0",
    buttonText: "Sign Up Free",
    buttonVariant: "secondary" as const,
    features: [
      { key: "monthlyEmails", value: "5,000" },
      { key: "subscribers", value: "1,000" },
      { key: "templates", value: true },
      { key: "seats", value: "1 Seat" },
      { key: "support", value: false },
      { key: "integrations", value: true },
      { key: "reporting", value: true },
      { key: "branding", value: true },
      { key: "onboarding", value: false },
    ]
  }
];

const PricingTableTwelve = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Text as="h2" className="mb-2 leading-tight">
            Pricing That Makes Sense
          </Text>
          <Text className="text-lg text-muted-foreground mb-8">
            Whether you're just starting out or scaling big, we've got the<br />
            perfect fit
          </Text>
        </div>



        {/* Pricing Table */}
        <table className="w-full border-2 border-l-0 border-t-0 border-black border-collapse table-fixed">
          <thead>
            <tr>
              <th className="align-top p-0 border-r-2 border-black text-left">
                <div className="pr-6">
                  <TrendingUp className="w-8 h-8 mb-4" />
                  <Text as="h3" className="mb-2">
                    Try before you buy!
                  </Text>
                  <Text className="text-sm text-muted-foreground font-normal mb-6">
                    Try the Standard or Essentials plan risk free for 1 month. Switch plans or cancel any time.
                  </Text>
                  <Badge variant="surface" size="sm">
                    Trial Terms
                  </Badge>
                </div>
              </th>

              {pricingPlans.map((plan, index) => (
                <th key={plan.id} className={`align-top p-0 text-left border-t-2 ${index !== pricingPlans.length - 1 ? 'border-r-2' : ''}`}>
                  <div className="px-6 py-10 relative">
                    {plan.recommended && (
                      <Badge size="sm" variant="solid" className="absolute top-0 left-0 right-0 w-full">
                        Most Popular
                      </Badge>
                    )}

                    <Text as="h4" className="mb-2">
                      {plan.name}
                    </Text>
                    <Text className="text-sm text-muted-foreground font-normal mb-6 leading-relaxed">
                      {plan.description}
                    </Text>

                    <div className="mb-8">
                      <div className="flex flex-col items-baseline gap-1">
                        <Text className="text-sm font-normal">Starts at</Text>
                        <Text className="text-3xl font-black">${plan.price}</Text>
                        <Text className="text-sm font-normal">/month*</Text>
                      </div>
                      {plan.trialText && !plan.originalPrice && (
                        <div className="flex items-baseline gap-2">
                          <Text className="text-sm text-gray-500">Then, starts at</Text>
                          <Text className="text-lg font-bold">${plan.price}</Text>
                          <Text className="text-sm text-gray-500">/month*</Text>
                        </div>
                      )}
                    </div>

                    <button
                      className={`w-full cursor-pointer bg-[#FFDB32] border-2 px-6 py-2.5 font-medium hover:shadow hover:-translate-y-1 duration-200 transition-all`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {featureRows.map((feature, index) => (
              <tr key={feature.key} className={`border-l-2 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'} ${index !== featureRows.length - 1 ? 'border-y-2' : ''}`}>
                <td className="px-6 py-4 text-sm border-r-2">
                  {feature.name}
                </td>

                {pricingPlans.map((plan, planIndex) => {
                  const planFeature = plan.features.find(f => f.key === feature.key);
                  return (
                    <td key={plan.id} className={`p-2 text-center text-sm ${planIndex !== pricingPlans.length - 1 ? 'border-r-2 border-black' : ''}`}>
                      {typeof planFeature?.value === 'boolean' ? (
                        planFeature.value ? (
                          <Check className="w-5 h-5 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 mx-auto" />
                        )
                      ) : planFeature?.value ? (
                        <span className="font-medium">{planFeature.value}</span>
                      ) : (
                        <X className="w-5 h-5 mx-auto" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTableTwelve;