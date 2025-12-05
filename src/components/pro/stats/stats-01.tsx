import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Server, Settings, TrendingUp } from "lucide-react";

export const data = [
  {
    icon: Settings,
    label: "Projects",
    value: "120+",
    description:
      "Some of the renowned brands we've worked with.",
  },
  {
    icon: TrendingUp,
    label: "Revenue Generated",
    value: "$1.5M+",
    description:
      "Our clients have seen tremendous returns on their investments.",
    hasHighlight: true,
  },
  {
    icon: Server,
    label: "Uptime",
    value: "99.99%",
    description:
      "We ensure our clients' servers are always running smoothly.",
  },
];


export default function StatsOne() {
  return (
    <section className="min-h-max py-24 px-4 bg-[url('https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/backgrounds/x-blurred-yellow.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto w-full">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((stat, index) => (
            <Card
              key={index}
              className="group border-3 rounded-xl p-6"
            >            
              <div className="flex items-center gap-2 mb-12 lg:mb-18">
                <stat.icon className="w-5 h-5 text-black" strokeWidth={2} />
                <Text className="font-sans font-semibold">
                  {stat.label}
                </Text>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <Text as="h2" className="text-5xl lg:text-6xl font-normal">
                  {stat.value}
                </Text>
                <Text className="text-foreground lg:text-lg leading-relaxed">
                  {stat.description}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}