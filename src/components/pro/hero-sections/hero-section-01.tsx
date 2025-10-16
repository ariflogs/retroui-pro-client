import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

const HeroSectionOne = () => {
  return (
    <div className="min-h-[90vh] bg-white">
      {/* Navigation */}

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <Badge className="mb-8 inline-block" variant="solid">
              🚀 Launching on Product Hunt
            </Badge>

            <Text as="h1" className="leading-tight mb-6">
              Build Better{" "}
              <span className="bg-primary px-2 border-4 border-black">
                Software
              </span>{" "}
              Faster
            </Text>

            <Text className="text-lg text-muted-foreground font-medium border-l-4 border-black pl-4 mb-8">
              The only platform you need to build, deploy, and scale your SaaS
              application. Join 10,000+ developers who ship better code.
            </Text>

            <div className="flex items-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-black text-white shadow-primary hover:bg-black"
              >
                Start Building →
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary transform translate-x-3 translate-y-3" />
            <div className="relative border-4 border-black bg-white p-8">
              <div className="aspect-video bg-black/10 flex items-center justify-center">
                <span className="font-bold text-xl">Product Demo</span>
              </div>
              <Badge
                variant="solid"
                className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-2 font-bold"
              >
                Watch Now
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionOne;
