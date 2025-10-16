import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Input } from "@/components/retroui/Input";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const PricingTableSix = () => {
  return (
    <div className="bg-[#C4FF83] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Free Trial Card */}
          <div className="col-span-1 lg:col-span-2 bg-white border-4 flex flex-col justify-between border-black shadow-lg p-6 lg:p-8">
            <Text as="h2" className="font-normal mb-8">
              Unlock a 3 Months Free Trial.
            </Text>

            <div className="space-y-4">
              <Input
                type="email"
                placeholder="your@email.com"
                className="w-full py-2"
              />

              <Button
                size="lg"
                className="w-full bg-[#C4FF83] hover:bg-[#ABFE51] justify-between"
              >
                Yes, Subscribe for free trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Basic Plan */}
          <div className="col-span-1 bg-[#5F4FE6] border-[3px] shadow-lg border-black p-6 lg:p-8 text-white relative">
            <div className="flex items-center gap-3 mb-6">
              <Text as="h3">
                Basic Plan
              </Text>
            </div>

            <ul className="space-y-2 mb-8">
              <li>• All limited links</li>
              <li>• Chat support</li>
              <li>• Optimize hashtags</li>
            </ul>

            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-head">$50</span>
              <span className="text-xl font-medium ml-2">/month</span>
            </div>

            <Button
              size="lg"
              className="w-full justify-center"
            >
              Get Started
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="col-span-1 bg-[#5F4FE6] border-[3px] border-black shadow-lg p-6 lg:p-8 text-white">
            <Text as="h3" className="mb-6">
              Pro Plan
            </Text>

            <ul className="space-y-2 mb-8">
              <li>• All limited links</li>
              <li>• Chat support</li>
              <li>• Optimize hashtags</li>
            </ul>

            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-head">$100</span>
              <span className="text-lg font-medium ml-2">/month</span>
            </div>

            <Button
              size="lg"
              className="w-full justify-center"
            >
              Get Started
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTableSix;