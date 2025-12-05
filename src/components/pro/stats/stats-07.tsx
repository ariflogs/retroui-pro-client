"use client";

import { AreaChart } from "@/components/retroui/charts/AreaChart";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";

export const statsData = [
  {
    title: "Business expansion",
    value: "65%",
    description: "Expansion by helping brands scale in new markets",
  },
  {
    title: "Capital raised",
    value: "4,5B",
    description: "Customers choose our platform to grow sustainably",
  },
  {
    title: "Team members",
    value: "10K",
    description: "Talented team members support clients.",
  },
  {
    title: "Customer satisfaction",
    value: "99%",
    description: "Satisfaction thanks to results and seamless experiences.",
  },
];

export const statsChartData = [
  { day: "MON", Sales: 280, Cost: 180 },
  { day: "TUE", Sales: 320, Cost: 220 },
  { day: "WED", Sales: 340, Cost: 240 },
  { day: "THU", Sales: 300, Cost: 200 },
  { day: "FRI", Sales: 350, Cost: 250 },
  { day: "SAT", Sales: 320, Cost: 220 },
  { day: "SUN", Sales: 340, Cost: 240 },
];

export default function Stats07() {
  return (
    <section className="min-h-screen bg-white py-20 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Chart Card */}
        <Card className="flex flex-col md:flex-row gap-8 lg:gap-12 shadow-none px-6 py-8 mb-10 w-full">
          <div className="flex flex-col gap-8 justify-between items-start mb-6">
            <div>
              <Text as="h3" className="font-sans font-bold mb-1">
                Total Sales & Costs
              </Text>
              <Text className="text-foreground">Last 7 days</Text>
            </div>
            <div className="mt-4 text-start">
              <Text as="h2" className="font-sans font-bold mb-2 text-5xl lg:text-6xl">
                $350K
              </Text>
              <div className="flex items-end gap-2">
                <Badge variant="surface" size="sm">↑ 8.56K</Badge>
                <Text className="text-muted-foreground font-medium text-sm">vs last 7 days</Text>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col h-full justify-center items-start">
            <div className="flex items-center justify-end gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary"></div>
                <Text className="text-base font-semibold">Sales</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary"></div>
                <Text className="text-base font-semibold">Cost</Text>
              </div>
            </div>
            <div className="w-full h-[200px]">
              <AreaChart
                className="w-full h-full"
                data={statsChartData}
                index="day"
                categories={["Sales", "Cost"]}
                strokeColors={["var(--primary)", "var(--secondary)"]}
                fillColors={["var(--primary)", "var(--secondary)"]}
                showGrid={false}
              />
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="space-y-4">
              <Text className="font-sans font-medium text-lg">{stat.title}</Text>
              <Text as="h2" className="font-sans text-4xl lg:text-5xl">
                {stat.value}
                <span className="text-primary">+</span>
              </Text>
              <Text className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}