import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { RocketIcon } from "lucide-react";

const FeaturesSectionSeven = () => {
  const stats = [
    { value: "10X", label: "FASTER" },
    { value: "99.9%", label: "UPTIME" },
    { value: "0.1%", label: "DOWNTIME" }
  ];

  return (
    <div className="bg-primary py-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Main Content Card */}
        <div className="bg-white p-12 border-4 flex flex-col items-center text-center">

          <Badge variant="surface" className="flex flex-shrink-0 p-4 border-2 mb-12">
            <RocketIcon className="w-10 h-10" />
          </Badge>

          {/* Title */}
          <Text as="h2" className="mb-4">
            LIGHTNING<br />
            FAST DEPLOYMENT
          </Text>

          {/* Description */}
          <Text className="text-muted-foreground text-lg  mb-16 max-w-2xl mx-auto">
            Deploy your applications in seconds, not hours. Our
            revolutionary platform transforms the way you ship code
            to production.
          </Text>

          {/* Stats Grid */}
          <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white p-6 font-bold text-center duration-300"
              >
                <Text className="text-xl mb-2">
                  {stat.value}
                </Text>
                <Text className="text-xl tracking-wide">
                  {stat.label}
                </Text>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <Button>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionSeven;