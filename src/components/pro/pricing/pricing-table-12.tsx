import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Check, X, ChevronDown, TrendingUp } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    id: "premium",
    name: "Premium",
    description: "Our most advanced tools, unlimited contacts, and priority support; built for teams.",
    price: "350",
    buttonText: "Buy Now",
    buttonVariant: "primary" as const,
    monthlyEmails: "150,000",
    seats: "3 Seats",
    support: "24/7 Email & Chat Support",
    onboarding: "Assisted",
    roles: "5 Roles",
    automatedJourneys: "Enhanced",
    features: {
      prebuiltTemplates: true,
      integrations: true,
      basicReporting: true,
      formsLanding: true,
      creativeAssistant: true,
      roleAccess: true,
      removeBranding: true,
      abTesting: true,
      emailScheduling: true,
      prebuiltJourneys: true
    }
  },
  {
    id: "standard",
    name: "Standard",
    description: "Sell even more with personalization, optimization tools, and enhanced automations.",
    price: "20",
    originalPrice: "Free",
    trialText: "for 1 month",
    buttonText: "Sign Up Free",
    buttonVariant: "secondary" as const,
    recommended: true,
    monthlyEmails: "6,000",
    seats: "5 Seats", 
    support: "24/7 Email & Chat Support",
    onboarding: "Assisted",
    roles: "5 Roles",
    automatedJourneys: "Enhanced",
    features: {
      prebuiltTemplates: true,
      integrations: true,
      basicReporting: true,
      formsLanding: true,
      creativeAssistant: true,
      roleAccess: true,
      removeBranding: true,
      abTesting: true,
      emailScheduling: true,
      prebuiltJourneys: true
    }
  },
  {
    id: "essentials",
    name: "Essentials", 
    description: "Send the right content at the right time with testing and scheduling features.",
    price: "13",
    originalPrice: "Free",
    trialText: "for 1 month",
    buttonText: "Sign Up Free",
    buttonVariant: "secondary" as const,
    monthlyEmails: "5,000",
    seats: "Unlimited",
    support: "Phone & Priority Support",
    onboarding: "Dedicated",
    roles: "2 Roles",
    automatedJourneys: "✓",
    features: {
      prebuiltTemplates: true,
      integrations: true,
      basicReporting: true,
      formsLanding: true,
      creativeAssistant: true,
      roleAccess: false,
      removeBranding: true,
      abTesting: true,
      emailScheduling: true,
      prebuiltJourneys: false
    }
  },
  {
    id: "free",
    name: "Free",
    description: "Easily create email campaigns and learn more about your customers",
    price: "0",
    buttonText: "Sign Up Free", 
    buttonVariant: "secondary" as const,
    monthlyEmails: "1,000",
    seats: "Users",
    support: "Customer Support",
    onboarding: false,
    roles: false,
    automatedJourneys: false,
    features: {
      prebuiltTemplates: true,
      integrations: true,
      basicReporting: true,
      formsLanding: true,
      creativeAssistant: true,
      roleAccess: false,
      removeBranding: false,
      abTesting: false,
      emailScheduling: false,
      prebuiltJourneys: false
    }
  }
];

const featureRows = [
  { name: "Monthly Email Sends", key: "monthlyEmails" },
  { name: "1 Seat", key: "seats" },
  { name: "Email support for first 30 days", key: "support" },
  { name: "Pre-built Email Templates", key: "prebuiltTemplates" },
  { name: "300+ Integrations", key: "integrations" },
  { name: "Basic Reporting & Analytics", key: "basicReporting" },
  { name: "Forms & Landing Pages", key: "formsLanding" },
  { name: "Creative Assistant", key: "creativeAssistant" },
  { name: "Onboarding", key: "onboarding" },
  { name: "Role-based Access", key: "roleAccess" },
  { name: "Remove Mailchimp Branding", key: "removeBranding" },
  { name: "A/B Testing", key: "abTesting" },
  { name: "Email Scheduling", key: "emailScheduling" },
  { name: "Automated Customer Journeys", key: "automatedJourneys" },
  { name: "Pre-built Journeys", key: "prebuiltJourneys" }
];

const PricingTableTwelve = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [currency, setCurrency] = useState<'USD' | 'EUR'>('USD');

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Text as="h1" className="text-4xl lg:text-5xl font-black mb-4 leading-tight">
            Choose Your Plan &<br />
            Unlock Your Potential
          </Text>
          <Text className="text-lg text-gray-600 mb-8">
            Whether you're just starting out or scaling big, we've got the<br />
            perfect fit
          </Text>
          
          <div className="flex justify-end items-center gap-4 mb-8">
            <div className="flex border-2 border-black rounded overflow-hidden">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 text-sm font-medium ${
                  billingCycle === 'monthly' 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                Monthly
              </button>
            </div>
            
            <div className="flex border-2 border-black rounded overflow-hidden">
              <button className="px-4 py-2 text-sm font-medium bg-white text-black flex items-center gap-1">
                $ USD <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Left Sidebar */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <div className="bg-black text-white p-6 rounded-lg mb-6">
              <TrendingUp className="w-8 h-8 mb-4" />
              <Text as="h3" className="text-xl font-bold mb-2">
                Try before you buy!
              </Text>
              <Text className="text-sm mb-4 text-gray-300">
                Try the Standard or Essentials plan risk free for 1 month. Switch plans or cancel any time.
              </Text>
              <Badge className="bg-yellow-400 text-black font-bold">
                Trial Terms
              </Badge>
            </div>
          </div>

          {/* Pricing Cards and Feature Table */}
          <div className="col-span-9">
            {/* Pricing Cards Header */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="border-2 border-black p-6 relative">
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-black text-white font-bold text-xs px-3 py-1">
                        Mailchimp Recommends
                      </Badge>
                    </div>
                  )}
                  
                  <Text as="h3" className="text-xl font-bold mb-2">
                    {plan.name}
                  </Text>
                  <Text className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {plan.description}
                  </Text>
                  
                  <div className="mb-6">
                    {plan.originalPrice && (
                      <div className="flex items-baseline gap-2 mb-2">
                        <Text className="text-2xl font-bold">{plan.originalPrice}</Text>
                        <Text className="text-sm text-gray-500">{plan.trialText}</Text>
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <Text className="text-sm">Starts at</Text>
                      <Text className="text-sm">$</Text>
                      <Text className="text-3xl font-black">{plan.price}</Text>
                      <Text className="text-sm text-gray-500">/month*</Text>
                    </div>
                    {plan.trialText && !plan.originalPrice && (
                      <div className="flex items-baseline gap-2">
                        <Text className="text-sm text-gray-500">Then, starts at</Text>
                        <Text className="text-lg font-bold">${plan.price}</Text>
                        <Text className="text-sm text-gray-500">/month*</Text>
                      </div>
                    )}
                  </div>
                  
                  <Button
                    className={`w-full font-bold border-2 border-black ${
                      plan.buttonVariant === 'primary' 
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-black'
                        : 'bg-yellow-400 hover:bg-yellow-500 text-black'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              ))}
            </div>

            {/* Feature Comparison Table */}
            <div className="border-2 border-black">
              {featureRows.map((feature, index) => (
                <div key={feature.key} className={`grid grid-cols-5 ${index !== featureRows.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="p-4 bg-gray-50 font-medium text-sm border-r border-gray-200">
                    {feature.name}
                  </div>
                  {pricingPlans.map((plan) => (
                    <div key={plan.id} className="p-4 text-center text-sm border-r border-gray-200 last:border-r-0">
                      {feature.key === 'monthlyEmails' && (
                        <span className="font-medium">{plan.monthlyEmails}</span>
                      )}
                      {feature.key === 'seats' && (
                        <span className="font-medium">{plan.seats}</span>
                      )}
                      {feature.key === 'support' && (
                        <span className="font-medium">{plan.support}</span>
                      )}
                      {feature.key === 'onboarding' && (
                        <>
                          {plan.onboarding ? (
                            <span className="font-medium">{plan.onboarding}</span>
                          ) : (
                            <X className="w-5 h-5 mx-auto text-gray-400" />
                          )}
                        </>
                      )}
                      {feature.key === 'roleAccess' && (
                        <>
                          {plan.roles ? (
                            <span className="font-medium">{plan.roles}</span>
                          ) : (
                            <X className="w-5 h-5 mx-auto text-gray-400" />
                          )}
                        </>
                      )}
                      {feature.key === 'automatedJourneys' && (
                        <>
                          {plan.automatedJourneys ? (
                            <span className="font-medium">{plan.automatedJourneys}</span>
                          ) : (
                            <X className="w-5 h-5 mx-auto text-gray-400" />
                          )}
                        </>
                      )}
                      {typeof plan.features[feature.key as keyof typeof plan.features] === 'boolean' && (
                        <>
                          {plan.features[feature.key as keyof typeof plan.features] ? (
                            <Check className="w-5 h-5 mx-auto text-green-600" />
                          ) : (
                            <X className="w-5 h-5 mx-auto text-gray-400" />
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTableTwelve;