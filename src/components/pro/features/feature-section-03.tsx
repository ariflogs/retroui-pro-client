import { Text } from "@/components/retroui/Text";
import { Copy, DnaIcon, EarthIcon, LockKeyhole, Star, Zap } from "lucide-react";

const FeaturesSectionThree = () => {
  const features = [
    {
      icon: <DnaIcon className="w-12 h-12 text-[#C4FF83]" />,
      title: "Unique Design",
      description: "While our competitors use generic templates, we have unique design that will make your website stand out.",
    },
    {
      icon: <Zap className="w-10 h-10 text-[#C4FF83]" />,
      title: "Ship Fast",
      description: "We have ton of built in components, blocks and tempales that let's you go from zero to production in minutes.",
    },
    {
      icon: <Copy className="w-10 h-10 text-[#C4FF83]" />,
      title: "Copy & Paste",
      description: "Using our components and blocks are as easy as just copy pasting a text",
    }
  ];

  return (
    <div className="bg-[#5F4FE6] py-20 relative overflow-hidden">
      <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/asterisk.svg" className="absolute h-40 w-40 lg:h-80 lg:w-80 -top-20 -right-20 lg:-top-32 lg:-right-42" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row gap-28 items-center">
          {/* Left side - Main content */}
          <div className="text-white">
            <Text as="h2" className="mb-16 drop-shadow-[4px_4px_0_black]">
              Our Amazing Features
            </Text>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="text-white">
                    <Text as="h3">
                      {feature.title}
                    </Text>
                    <Text className="text-gray-200 font-medium leading-relaxed">
                      {feature.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Stacked cards */}
          <div>
            <div
              className="inline-block bg-white shadow-lg border-2 border-black p-6 ml-16 max-w-72"
            >
              <div className="text-black gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-6 h-6" />
                  <Text as="h4">
                    Unique Design
                  </Text>
                </div>
                <Text className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </div>
            </div>
            <div
              className="inline-block bg-[#C4FF83] shadow-xl border-2 border-black p-6 pb-10"
            >
              <div className="text-black gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <LockKeyhole className="w-6 h-6" />
                  <Text as="h4">
                    Ship Fast
                  </Text>
                </div>
                <Text className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </div>
            </div>
            <div className="flex items-end gap-12 -mt-4">
              <div className="flex-shrink-0 bg-white h-20 w-20 rounded-full flex justify-center items-center shadow-lg">
                <EarthIcon className="w-12 h-12" />
              </div>
              <div
                className="inline-block bg-[#FED13B] shadow-xl border-2 border-black p-6"
              >
                <div className="text-black">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-8 h-8" />
                    <Text as="h4">
                      Copy & Paste
                    </Text>
                  </div>
                  <Text className="text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  </Text>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionThree;