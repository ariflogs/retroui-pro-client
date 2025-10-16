import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";

const FeaturesSectionTwo = () => {
  const features = [
    {
      icon: "🚀",
      title: "Quick Deployment",
      description:
        "Deploy your code to production in seconds. Automatic CI/CD pipeline with zero configuration.",
      tag: "Developer Tools",
    },
    {
      icon: "⚡",
      title: "Edge Computing",
      description:
        "Run your code closer to your users with our global edge network across 200+ locations.",
      tag: "Performance",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description:
        "Bank-level security with SSL, 2FA, SSO, and role-based access control built-in.",
      tag: "Security",
    },
    {
      icon: "🔍",
      title: "Real-time Monitoring",
      description:
        "Monitor your application performance, errors, and user behavior in real-time.",
      tag: "Analytics",
    },
    {
      icon: "🤖",
      title: "AI Powered",
      description:
        "Built-in AI capabilities for code optimization, error prediction, and automated testing.",
      tag: "Intelligence",
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description:
        "Detailed insights into your application's performance, usage, and user behavior.",
      tag: "Analytics",
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-12 inline-block" variant="surface">
            Platform Features
          </Badge>
          <Text as="h2" className="mb-4">
            Everything you need to{" "}
            <span className="bg-primary px-3 border-2 border-black inline-block transform -rotate-1">
              build faster
            </span>
          </Text>
          <Text className="text-lg font-medium text-muted-foreground max-w-2xl mx-auto">
            Powerful features to help you build, deploy, and scale your
            applications without the complexity.
          </Text>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border-4 border-black bg-white hover:-translate-y-1 hover:shadow-lg shadow-primary transition-all duration-200"
            >
              <div className="p-6">
                <Badge
                  variant="outline"
                  size="sm"
                  className="inline-block mb-6"
                >
                  {feature.tag}
                </Badge>
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                <Text as="h3" className="mb-2">
                  {feature.title}
                </Text>
                <Text className="text-muted-foreground">
                  {feature.description}
                </Text>
              </div>

              {/* Bottom Bar */}
              <div className="border-t-4 border-black p-4 flex justify-between items-center bg-white">
                <span className="font-bold">Learn More</span>
                <span className="font-black text-xl group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionTwo;
