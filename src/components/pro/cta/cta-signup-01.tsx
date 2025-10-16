import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { Badge } from "@/components/retroui/Badge";

const SignupCTAOne = () => {
  return (
    <div className="bg-primary p-8 md:p-12 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-20">
        {[...Array(48)].map((_, i) => (
          <div key={i} className="border border-black" />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Main Content Box */}
        <div className="bg-white border-5 border-black shadow-xl">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
              {/* Left Side Content */}
              <div>
                <Text as="h2" className="mb-6">
                  Get Started Now With
                  <span className="inline-block">14 Days Free Trial</span>
                </Text>
                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {["✓ Full Access", "✓ Premium Support", "✓ No Setup Fee"].map(
                    (feature, index) => (
                      <Badge key={index}>
                        <span className="font-medium">{feature}</span>
                      </Badge>
                    )
                  )}
                </div>
              </div>

              {/* Right Side CTA */}
              <div className="flex flex-col gap-6 md:flex-row md:justify-end">
                <Button size="lg">Start Free Trial</Button>
                <Button size="lg" variant="outline">
                  Book Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <div className="border-t-4 border-black bg-yellow-100 p-6">
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: "🔒", text: "Secure & Private" },
                { icon: "⚡", text: "Instant Setup" },
                { icon: "↩️", text: "Cancel Anytime" },
                { icon: "🎯", text: "Goal Tracking" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 bg-white border-2 border-black 
                  flex items-center justify-center"
                  >
                    {item.icon}
                  </div>
                  <span className="font-bold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCTAOne;
