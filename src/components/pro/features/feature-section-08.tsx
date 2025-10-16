import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { Calendar, DollarSign, Goal } from "lucide-react";

const FeaturesSectionEight = () => {
  const features = [
    {
      icon: <Goal className="w-8 h-8" />,
      title: "Get a reliable ride in minutes",
      color: "text-red-500",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule your ride in advance",
      color: "text-red-500",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Earn rewards on every ride",
      color: "text-red-500",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Phone Image */}
          <div className="flex w-[320px] justify-center lg:justify-start">
              <img 
                src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/iphone_shop_collection_red.png" 
                alt="Mobile App Interface"
                className="w-80 h-auto"
              />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <Text as="h4" className="mb-2">
                RIDE WITH US
              </Text>
              
              <Text as="h2" className="mb-4 drop-shadow-[4px_4px_0_#FED13B]">
                A few quick taps, One great trip
              </Text>
              
              <Text className="text-lg text-muted-foreground mb-12">
                No matter your destination, we'll get you where you need to go
              </Text>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`${feature.color} flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <Text className="text-xl font-semibold">
                    {feature.title}
                  </Text>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row flex-wrap gap-4">
              <Button 
                size="lg"
              >
                Sign Up for ride
              </Button>
              
              <Button 
                variant="link" 
                className="underline decoration-2 decoration-red-500"
                size="lg"
              >
                Learn more →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionEight;