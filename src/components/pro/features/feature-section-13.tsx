import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

const FeaturesSectionThirteen = () => {
  const features = [
    {
      icon: "🗄️",
      title: "Analyze your data",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing elit, efficitur. Etiam in hendrerit justo.",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      decorativeColor: "bg-white",
    },
    {
      icon: "👥",
      title: "Collaborate Securely", 
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing elit, efficitur. Etiam in hendrerit justo.",
      bgColor: "bg-pink-500",
      textColor: "text-white",
      decorativeColor: "bg-white",
    },
    {
      icon: "⚡",
      title: "Easy & Faster",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing elit, efficitur. Etiam in hendrerit justo.",
      bgColor: "bg-green-400",
      textColor: "text-black",
      decorativeColor: "bg-black",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="solid" className="bg-green-400 text-black border-4 border-black font-bold">
              ⚡ New Innovation
            </Badge>
            
            <div>
              <Text as="h1" className="text-5xl font-black leading-tight mb-6">
                The perfect balance of<br />
                speed and security
              </Text>
              <Text className="text-lg text-gray-700 mb-8 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Pellentesque sed orci eu dui auctor efficitur.
                Etiam in hendrerit justo.
              </Text>
            </div>

            <div className="flex gap-4">
              <Button className="bg-green-400 hover:bg-green-500 text-black font-bold border-4 border-black">
                Discover Now
              </Button>
              <Button variant="ghost" className="text-black font-bold">
                Get Demo →
              </Button>
            </div>
          </div>

          {/* Right Side - Colorful Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Top row */}
            <div className="bg-blue-600 border-4 border-black p-6 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <div className="text-2xl text-blue-600">⭐</div>
              </div>
            </div>
            <div className="bg-pink-500 border-4 border-black p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-4 bg-gradient-to-r from-transparent via-white to-white opacity-60"></div>
              <div className="w-8 h-8 bg-white rounded-full mx-auto"></div>
            </div>

            {/* Middle row */}
            <div className="bg-green-400 border-4 border-black p-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-black rounded-sm transform rotate-45"></div>
            </div>
            <div className="bg-blue-700 border-4 border-black p-6 flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-full"></div>
            </div>

            {/* Bottom row */}
            <div className="bg-blue-600 border-4 border-black p-6 flex items-center justify-center">
              <div className="text-2xl text-pink-400">✱</div>
            </div>
            <div className="bg-green-400 border-4 border-black p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-black rounded-full transform translate-x-4 -translate-y-4"></div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} border-4 border-black p-8 relative overflow-hidden`}
            >
              {/* Decorative Elements */}
              {index === 0 && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-full transform translate-x-4 -translate-y-4"></div>
              )}
              {index === 1 && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-white transform translate-x-6 -translate-y-6 rounded-bl-full"></div>
              )}
              {index === 2 && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-black transform translate-x-8 -translate-y-8 rounded-bl-full"></div>
              )}

              <div className="relative z-10">
                <div className={`w-12 h-12 ${feature.decorativeColor} rounded-full flex items-center justify-center mb-6`}>
                  <span className="text-xl">{feature.icon}</span>
                </div>
                
                <Text as="h3" className={`text-2xl font-black mb-4 ${feature.textColor}`}>
                  {feature.title}
                </Text>
                <Text className={feature.textColor}>
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

export default FeaturesSectionThirteen;