import { ArrowUp } from "lucide-react";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export const data = [
  {
    description: "Showing how fast and consistently we help brands.",
    label: "Company growth",
    value: "240%",
  },
  {
    description:
      "Ongoing projects globally prove the scalability and solutions.",
    label: "Active projects",
    value: "625+",
  },
  {
    description: "Highlighting the reliability and quality of our services.",
    label: "Customer satisfaction",
    value: "99%",
  },
  {
    description:
      "Combine diverse talent to deliver excellence across all fronts.",
    label: "Team members",
    value: "175+",
  },
];

export default function StatsTwo() {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Text
            as="h1"
            className="font-normal mb-4"
          >
            Our growth in
            <br />
            powerful numbers
          </Text>
          <Text className="text-muted-foreground text-base lg:text-lg max-w-xl">
            Every number here reflects our journey helping tech companies grow
            smarter and faster.
          </Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((stat, index) => (
            <Card
              key={index}
              className="bg-[#F9F5F2] border-3 rounded-xl p-6 flex flex-col justify-between min-h-[280px]"
            >
              <Text
                className="text-foreground mb-auto"
              >
                {stat.description}
              </Text>

              <div className="mt-8">
                <Text className="font-medium text-sm mb-2">
                  {stat.label}
                </Text>
                <div className="flex items-end gap-3">
                  <Text
                    as="h2"
                    className="font-sans text-5xl lg:text-6xl"
                  >
                    {stat.value}
                  </Text>
                  <div className="w-8 h-8 bg-[#599D77]/20 rounded-full flex items-center justify-center">
                    <ArrowUp
                      className="w-4 h-4 text-[#599D77]"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
