import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

const FeaturesSectionOne = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Detailed Feature Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="solid" className="inline-block font-medium">
              Powerful Features
            </Badge>
            <Text as="h2">Built for serious developers</Text>

            <div className="space-y-6">
              {[
                {
                  title: "API Integration",
                  description:
                    "RESTful APIs with automatic documentation and versioning",
                },
                {
                  title: "Serverless Functions",
                  description: "Deploy code without managing infrastructure",
                },
                {
                  title: "Database Management",
                  description: "Automated scaling, backups, and maintenance",
                },
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-black pl-4">
                  <Text className="font-bold text-lg">{item.title}</Text>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <Button>Explore All Features →</Button>
          </div>

          {/* Feature Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary transform translate-x-3 translate-y-3" />
            <div className="relative border-4 border-black bg-white p-8">
              {/* Code Preview */}
              <div className="bg-black text-white p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#FF605C]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD44]" />
                  <div className="w-3 h-3 rounded-full bg-[#00CA4E]" />
                </div>
                <div className="space-y-2">
                  <div className="text-[#90FF9B]">
                    // Deploy with one command
                  </div>
                  <div className="text-[#90E8FF]">$ npm run deploy</div>
                  <div className="text-gray-400">
                    Building project...
                    <span className="text-[#FFE600]"> Done!</span>
                  </div>
                  <div className="text-[#FF90E8]">
                    ✨ Deployed to production
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="border-2 border-black p-4 bg-accent">
                  <Text className="text-2xl font-bold">99.9%</Text>
                  <Text className="font-medium">Uptime</Text>
                </div>
                <div className="border-2 border-black p-4 bg-accent">
                  <Text className="text-2xl font-bold">&lt;100ms</Text>
                  <Text className="font-medium">Latency</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionOne;
