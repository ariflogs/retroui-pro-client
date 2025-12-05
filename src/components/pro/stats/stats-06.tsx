"use client";

import { PieChart } from "@/components/retroui/charts/PieChart";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { ResponsiveContainer } from "recharts";

// Stats 06 Data
export const statsData = [
  {
    title: "Interfaces processed over 3.5 million transactions.",
    value: "32M",
    bgColor: "bg-[#FF6B35]",
    textColor: "text-white",
    position: "top-left",
  },
  {
    title: "Growth backed by real and consistent metrics.",
    value: "34%",
    valueColor: "text-[#FF6B35]",
    bgColor: "bg-white",
    textColor: "text-black",
    position: "bottom-left",
  },
  {
    title: "Clients report 99% satisfaction with results.",
    value: "99%",
    valueColor: "text-[#FF6B35]",
    bgColor: "bg-white",
    textColor: "text-black",
    position: "top-right",
  },
  {
    title: "Experts powering every great solution.",
    value: "125+",
    valueColor: "text-[#FF6B35]",
    bgColor: "bg-black",
    textColor: "text-white",
    position: "bottom-right",
  },
];

export const chartData = [
  { name: "Feedback", value: 72, color: "var(--primary)" },
  { name: "Remaining", value: 28, color: "var(--secondary)" },
];


export default function StatsSix() {
  return (
    <section className="min-h-screen bg-white py-20 px-4 md:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            size="sm"
            className="mb-4 inline-block"
          >
            OUR NUMBERS
          </Badge>
          <Text as="h1" className="leading-tight font-normal">
            Our Results Speak For Themselves
          </Text>
        </div>

        {/* Stats Grid */}
        <div className="flex gap-6 items-start h-[500px]">
          {/* Left Column */}
          <div className="w-2/7 flex flex-col h-full gap-6">
            <Card
              className="bg-foreground shadow-primary p-4 lg:p-6 flex flex-col justify-between h-3/5"
            >
              <Text className="text-gray-200 font-medium mb-auto">
                {statsData[0].title}
              </Text>
              <Text as="h2" className="text-background font-normal text-5xl lg:text-6xl">
                {statsData[0].value}
              </Text>
            </Card>

            <Card
              className="p-4 lg:p-6 bg-background flex flex-col justify-between h-2/5"
            >
              <Text className="font-medium mb-auto">
                {statsData[1].title}
              </Text>

              <Text as="h2" className="font-medium text-5xl lg:text-6xl">
                {statsData[1].value}
              </Text>
            </Card>
          </div>

          {/* Center Column (Chart) */}
          <div className="flex-1 lg:col-span-1 h-full">
            <Card className="p-4 lg:p-6 flex flex-col justify-between h-full">
              <div className="flex flex-col items-center justify-center">
                <Text
                  as="h3"
                  className="font-sans"
                >
                  Satisfaction Rate
                </Text>
                <Text className="text-muted-foreground text-sm">
                  Last Updated On:{" "}
                  <span className="font-bold">Sep 29, 2021</span>
                </Text>
              </div>

              <div className="relative w-full my-8">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={80}
                    outerRadius={110}
                    colors={[chartData[0].color, chartData[1].color]}
                  />
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Text as="h2" className="text-4xl lg:text-5xl font-normal">
                    72%
                  </Text>
                </div>
              </div>

              <Text
                className="text-muted-foreground text-sm text-center leading-relaxed"
              >
                This score is calculated based on the user rating provided
                across an individual content type.
              </Text>
            </Card>
          </div>

          {/* Right Column */}
          <div className="w-2/7 flex flex-col h-full gap-6">
            <Card
              className="p-4 lg:p-6 bg-background flex flex-col justify-between h-2/5"
            >
              <Text className="font-medium mb-auto">{statsData[2].title}</Text>
              <Text as="h2" className="font-medium text-5xl lg:text-6xl">
                {statsData[2].value}
              </Text>
            </Card>

            <Card
              className="bg-foreground shadow-primary p-4 lg:p-6 flex flex-col justify-between h-3/5"
            >
              <Text className="text-gray-200 font-medium mb-auto">
                {statsData[3].title}
              </Text>
              <Text as="h2" className="text-background font-normal text-5xl lg:text-6xl">
                {statsData[3].value}
              </Text>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}