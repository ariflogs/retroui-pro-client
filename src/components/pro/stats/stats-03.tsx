import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { FileText, Users, BarChart3, User } from "lucide-react";

export const statsData = [
  {
    icon: FileText,
    value: "200+",
    label: "Websites build",
  },
  {
    icon: Users,
    value: "97%",
    label: "Client satisfaction",
  },
  {
    icon: BarChart3,
    value: "120+",
    label: "Active projects",
  },
  {
    icon: User,
    value: "100+",
    label: "Amazing clients",
  },
];
export default function StatsThree() {
  return (
    <section className="min-h-screen bg-white py-20 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start gap-2">
          <Badge size="sm" variant="outline" className="bg-[#599D77] text-white rounded-md">Numbers</Badge>
          <Text
            as="h1"
            className="font-normal"
          >
            Project insights
          </Text>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="bg-[#F9F5F2] border-black rounded-xl p-6 flex items-center gap-4"
            >
              <div
                className="w-12 h-12 bg-white rounded-lg border-2 border-[#599D77] flex items-center justify-center shrink-0"
                style={{
                  boxShadow:
                    "0 1.434px 1.913px 0 rgba(255, 255, 255, 0.40) inset, 0 -2.869px 20px 0 rgba(89, 157, 119, 0.48) inset",
                }}
              >
                <stat.icon className="w-6 h-6 text-[#599D77]" strokeWidth={2} />
              </div>
              <div>
                <Text
                  as="h2"
                  className="font-sans font-bold mb-1"
                >
                  {stat.value}
                </Text>
                <Text className="text-foreground">
                  {stat.label}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}