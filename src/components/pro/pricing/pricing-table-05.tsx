import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Gem, Goal } from "lucide-react";

const PricingTableFive = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Text as="h2" className="font-sans mb-4">
            Simple Pricing
          </Text>
          <Text className="text-lg text-muted-foreground">
            14 days unlimited free trial. No contract or credit card required.
          </Text>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          <div
            className="relative border-[3px]"
          >
            <div className="p-8">
              {/* Icon */}
              <div className="w-12 h-12 bg-primary border-2 rounded-lg flex items-center justify-center mb-6">
                <Goal className="w-6 h-6" />
              </div>

              {/* Plan Name */}
              <Text as="h3" className="mb-2">
                Pre-made Template
              </Text>

              <Text className="text-muted-foreground mb-8 leading-relaxed">
                Save time and money with our ready-to-use template for your website. 
              </Text>

              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center md:justify-between">
                <div className="flex items-start">
                  <Text className="text-lg mr-2">From</Text>
                  <span className="text-5xl font-black">$99</span>
                </div>

                <Button className="py-2 px-5">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          <div
            className="relative border-[3px] bg-[url(https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/backgrounds/bg_gred_FED13B.png)] bg-cover bg-center"
          >
            <div className="p-8">
              {/* Icon */}
              <div className="w-12 h-12 bg-secondary text-white border-2 border-black rounded-lg flex items-center justify-center mb-6">
                <Gem className="w-6 h-6" />
              </div>

              <Text as="h3" className="mb-4">
                Custom Development
              </Text>
              <Text className="text-muted-foreground mb-8 leading-relaxed">
                Need a custom solution? Our team of experts can help you build a website that meets your needs.
              </Text>

              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center md:justify-between">
                <div className="flex items-start">
                  <Text className="text-lg mr-2">From</Text>
                  <span className="text-5xl font-bold">$990</span>
                </div>

                <Button className="py-2 px-5" variant="secondary">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTableFive;