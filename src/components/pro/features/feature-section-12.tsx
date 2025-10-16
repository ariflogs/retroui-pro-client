import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

const FeaturesSectionTwelve = () => {
  const features = [
    {
      icon: "🗄️",
      title: "Analyze your data",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing elit, efficitur. Etiam in hendrerit justo.",
      bgColor: "bg-blue-200",
      accent: "bg-blue-500",
    },
    {
      icon: "👥",
      title: "Collaborate Securely",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing elit, efficitur. Etiam in hendrerit justo.",
      bgColor: "bg-pink-200",
      accent: "bg-pink-500",
    },
    {
      icon: "😊",
      title: "Easy & Faster",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing elit, efficitur. Etiam in hendrerit justo.",
      bgColor: "bg-gray-200",
      accent: "bg-gray-500",
    },
  ];

  return (
    <div className="bg-green-500 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Text as="h2" className="text-5xl font-black text-white mb-6">
            Our Amazing Feature
          </Text>
          <Text className="text-lg text-white max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            sed orci eu dui auctor efficitur. Etiam in hendrerit justo.
          </Text>
          
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold border-4 border-black px-8 py-3">
            Get Started
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-4 border-black bg-white overflow-hidden"
            >
              {/* Top colored section with icon */}
              <div className={`${feature.bgColor} p-6 relative`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                </div>
                
                {/* Decorative shape */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${feature.accent} rounded-bl-full opacity-60`}></div>
              </div>
              
              {/* Content section */}
              <div className="p-6 bg-white">
                <Text as="h3" className="text-xl font-black mb-3">
                  {feature.title}
                </Text>
                <Text className="text-gray-700">
                  {feature.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionTwelve;