import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Database, PlugZap, Rabbit } from "lucide-react";

const FeaturesSectionTen = () => {
  const features = [
    {
      icon: <Database className="h-6 w-6 text-[#5784BD]" />,
      title: "Analyze your data",
      description: "Knowledge is power. Analyze your data to make informed decisions.",
      accent: "bg-[#5784BD]/20",
      bgImg: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/feature_10_1.png"
    },
    {
      icon: <PlugZap className="h-6 w-6 text-[#D14D87]" />,
      title: "Collaborate Securely",
      description: "Collaborate with your team in real-time. Share your data securely.",
      accent: "bg-[#D14D87]/20",
      bgImg: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/feature_10_2.png"
    },
    {
      icon: <Rabbit className="h-6 w-6 text-[#D5CDBA]" />,
      title: "Easy & Faster",
      description: "Intuitive interface. Easy to use. Fast to deploy.",
      accent: "bg-[#D5CDBA]/20",
      bgImg: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/feature_10_3.png"
    },
  ];

  return (
    <div className="bg-[#599D77] py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <Text as="h2" className="text-white mb-2">
            Our Amazing Feature
          </Text>
          <Text className="text-lg text-white max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            sed orci eu dui auctor efficitur. Etiam in hendrerit justo.
          </Text>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden px-6 py-8 bg-[#F9F5F2] relative"
            >
              <img src={feature.bgImg} alt="feature image" className="absolute top-0 right-0 h-20" />

              <div className={`w-14 h-14 ${feature.accent} rounded-full flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>


              {/* Content section */}
              <Text as="h4" className="mb-2">
                {feature.title}
              </Text>
              <Text className="text-muted-foreground">
                {feature.description}
              </Text>
            </Card>
          ))}
        </div>

        <Button className="mx-auto" size="lg">
            Get Started
          </Button>
      </div>
    </div>
  );
};

export default FeaturesSectionTen;