import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { ArrowUpRight } from "lucide-react";

const FeaturesSectionNine = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Text as="h2" className="mb-4">
            Our Amazing Feature
          </Text>
          <Text className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            sed orci eu dui auctor efficitur. Etiam in hendrerit justo.
          </Text>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="border-[3px] p-6">
              <div className="flex mb-4">
                <img className="w-16 h-16" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/box_bg_yellow.png" alt="asterisk icon" />
                <img className="w-16 h-16" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/x_bg_green.png" alt="asterisk icon" />
              </div>
              <Text as="h3" className="mb-2">
                Analyze your data
              </Text>
              <Text className="mb-6">
                Lorem ipsum dolor sit amet, sectetur adipiscing elit, efficitur. Etiam in
                hendrerit justo.
              </Text>
              <Button className="w-full font-sans justify-center">
                Learn more <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Collaborate Securely card */}
            <div className="border-[3px] p-6">
              <Text as="h3" className="mb-2">
                Collaborate Securely
              </Text>
              <Text className="mb-6">
                Lorem ipsum dolor sit amet, sectetur adipiscing elit, efficitur. Etiam in
                hendrerit justo.
              </Text>
              <Button className="w-full font-sans justify-center bg-[#85FFAA] hover:bg-[#40FC79]">
                Learn more <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            
            </div>
          </div>

          {/* Center - Phone Mockup */}
          <div className="flex justify-center">
            <img
              src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/iphone_shop_collection_red_2.png"
              alt="Mobile App Interface"
              className="w-80 h-auto"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Collaborate Securely card */}
            <div className="border-[3px] p-6">
              <Text as="h3" className="mb-4">
                Collaborate Securely
              </Text>
              <Text className="mb-6">
                Lorem ipsum dolor sit amet, sectetur adipiscing elit, efficitur. Etiam in
                hendrerit justo.
              </Text>
              <Button className="w-full font-sans justify-center bg-[#CEEBFC] hover:bg-[#8BD0F8]">
                Learn more <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="border-[3px] p-6">
              <div className="flex mb-4">
                <img className="w-16 h-16" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/asterisk_bg_yellow.png" alt="asterisk icon" />
                <img className="w-16 h-16" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/plus_bg_green.png" alt="plus icon" />
              </div>
              <Text as="h3" className="mb-2">
                Analyze your data
              </Text>
              <Text className="mb-6">
                Lorem ipsum dolor sit amet, sectetur adipiscing elit, efficitur. Etiam in
                hendrerit justo.
              </Text>
              <Button className="w-full font-sans justify-center bg-[#EA435F] hover:bg-[#E61639] text-white">
                Learn more <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionNine;