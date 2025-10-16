import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

const FeaturesSectionFive = () => {
  const stats = [
    { value: "10X", label: "FASTER" },
    { value: "99.9%", label: "UPTIME" },
    { value: "0", label: "DOWNTIME" },
    { value: "10K", label: "DOWNLOAD" },
  ];

  return (
    <div className="bg-[#5F4FE6] py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-white w-full lg:w-3/5">
            <Text as="h2" className="mb-6 drop-shadow-[4px_4px_0_black]">
              LIGHTNING<br />
              FAST DEPLOYMENT
            </Text>
            
            <Text className="text-lg mb-8 text-gray-100 max-w-lg">
              Deploy your applications in seconds, not hours. Our
              revolutionary platform transforms the way you ship code
              to production.
            </Text>
          </div>

          {/* Right side - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 w-full lg:w-2/5">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white text-center font-bold w-full p-4 shadow-lg hover:shadow-xl transition-shadow shadow-primary"
              >
                <Text className="text-xl mb-2">
                  {stat.value}
                </Text>
                <Text className="text-lg tracking-wide">
                  {stat.label}
                </Text>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionFive;