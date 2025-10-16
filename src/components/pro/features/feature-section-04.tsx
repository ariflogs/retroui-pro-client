import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { ArrowUpRight } from "lucide-react";

const FeaturesSectionFour = () => {
  return (
    <div className="bg-white py-20 relative overflow-hidden">
      <div className="w-full relative">
        {/* Main Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-y-4">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* OUR SERVICES */}
            <div className="bg-[#FED13B] p-10 border-r-4 border-black">
              <Text as="h3">
                OUR SERVICES
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </div>

            {/* Web Development */}
            <div className="bg-[#5F4FE6] flex-1 p-10 text-white relative overflow-hidden border-r-4 border-t-4 border-black">
              {/* Icons */}
              <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/asterisk.svg" className="absolute h-40 w-40 lg:h-60 lg:w-60 -top-20 -right-20 lg:-top-30 lg:-right-32" />

              <div className="flex gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-black shadow">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/next_black.png" className="w-8 h-8" />
                </div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-black shadow">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/react_black.png" className="w-8 h-8" />
                </div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-black shadow">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/tailwind_black.png" className="w-8 h-8" />
                </div>
              </div>

              <Text as="h3" className="text-2xl font-black mb-4">
                Web Development
              </Text>
              <Text className="mb-6 font-medium">
                Clean code. Brutal performance. From landing pages to web apps:
                we build fast, scalable, bug-free websites using modern tech
                stacks.
              </Text>
              <Button className="font-sans">
                Learn more <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* CMS Integration */}
            <div className="bg-[#C4FF83] p-10">
              <Text as="h3" className="mb-2">
                CMS Integration
              </Text>
              <Text className="mb-6">
                Power and control. We set you up with easy-to-use content
                management systems (like WordPress, Strapi, or Sanity).
              </Text>
              <Button className="font-sans">
                Learn more <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            {/* SEO & Speed Optimization */}
            <div className="bg-white p-10 border-t-4 border-black">
              <Text as="h3" className="mb-2">
                SEO & Speed Optimization
              </Text>
              <Text className="mb-6">
                Blazing-fast load times and on-page SEO that gets you seen.
                Built-in performance — no plugins needed.
              </Text>
              <Button className="bg-[#5F4FE6] text-white font-sans hover:bg-[#5F4FE6]/90">
                Learn more <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionFour;