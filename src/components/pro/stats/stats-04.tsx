import { Laptop, FileText } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

const data = [
  {
    icon: Laptop,
    label: "Website built:",
    description: "in value, helping brands go live with impactful design.",
    value: "$2.5",
    valueColor: "text-[#6366F1]",
    bgColor: "bg-[#C4FF83]",
  },
  {
    label: "Customer satisfaction",
    value: "99",
    valueColor: "text-white",
    bgColor: "bg-[#6366F1]",
  },
  {
    label: "Countries",
    value: "120",
    valueColor: "text-[#6366F1]",
    bgColor: "bg-[#6366F1]",
  },
  {
    icon: FileText,
    label: "Active projects:",
    description:
      "Globally prove the scalability and flexibility of our solutions.",
    value: "625",
    valueColor: "text-black",
    bgColor: "bg-[#C4FF83]",
  },
];

export default function StatsFour() {
  return (
    <section className="min-h-screen bg-[#FCFFE7] py-20 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <span
                className="text-[#5F4FE6] bg-transparent font-semibold mb-8 inline-block"
              >
                OUR NUMBERS
              </span>
              <Text as="h1" className="font-medium leading-tight mb-2">
                Performance metrics that speak for us
              </Text>
              <Text className="text-muted-foreground lg:text-md">
                Every number here reflects our journey helping tech companies
                grow smarter and faster.
              </Text>
            </div>

            <div className="flex gap-4">
              <Button
                className="bg-[#5F4FE6] text-white rounded-lg hover:bg-[#5558E3]"
                asChild
              >
                <a href="/stats/stats-03">Get Started</a>
              </Button>
              <Button
                variant="outline"
                className="bg-white rounded-lg flex items-center gap-2"
                asChild
              >
                <a href="/stats/stats-03">About company</a>
              </Button>
            </div>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <Card className="bg-[#C4FF83] rounded-lg p-6 shadow-none transition-all hover:shadow-md flex flex-col justify-between h-[300px]">
                <div>
                  <div className="w-12 h-12 bg-[#5F4FE6] rounded-lg border-2 flex items-center justify-center mb-4">
                    <Laptop className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <Text className="font-semibold mb-2">
                    {data[0].label}
                  </Text>
                  <Text className="text-foreground leading-tight">
                    {data[0].description}
                  </Text>
                </div>
                <Text
                  as="h2"
                  className="font-normal text-4xl lg:text-5xl"
                >
                  {data[0].value}
                  <span className="text-[#5F4FE6]">M</span>
                </Text>
              </Card>

              <Card className="bg-[#5F4FE6] rounded-lg p-6 flex flex-col justify-between shadow-none transition-all hover:shadow-md h-[180px]">
                <Text className="text-white font-semibold">
                  {data[1].label}
                </Text>
                <Text as="h2" className="font-normal text-4xl lg:text-5xl text-white">
                  {data[1].value}
                  <span className="text-[#C4FF83]">%</span>
                </Text>
              </Card>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <Card className="bg-[#5F4FE6] rounded-lg p-6 flex flex-col justify-between shadow-none transition-all hover:shadow-md h-[180px]">
                <Text className="text-white font-semibold">
                  {data[2].label}
                </Text>
                <Text as="h2" className="font-normal text-4xl lg:text-5xl text-white">
                  {data[2].value}
                  <span className="text-[#C4FF83]">+</span>
                </Text>
              </Card>

              <Card className="bg-[#C4FF83] rounded-lg p-6 flex flex-col justify-between h-[300px] shadow-none transition-all hover:shadow-md">
                <div>
                  <div className="w-12 h-12 border-2 bg-[#5F4FE6] rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <Text className="font-semibold mb-2">
                    {data[3].label}
                  </Text>
                  <Text className="leading-tight">
                    {data[3].description}
                  </Text>
                </div>
                <Text
                  as="h2"
                  className="font-normal text-4xl lg:text-5xl"
                >
                  {data[3].value}
                  <span className="text-[#5F4FE6]">+</span>
                </Text>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
