import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

export const statsData = [
  {
    value: "$3.8M",
    description:
      "Projects completed exceed $3.8M, showing consistent trust and impactful results.",
  },
  {
    value: "1.5M",
    description:
      "Our platforms process over 1.5 million smooth user interactions worldwide.",
  },
  {
    value: "32%",
    description:
      "Lead acquisition costs reduced by 32% using targeted design strategies.",
  },
];

export default function Stats05() {
  return (
    <section className="min-h-screen bg-[#C4FF83] py-20 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span
              className="text-[#5F4FE6] bg-transparent font-semibold mb-4 inline-block"
            >
              OUR NUMBERS
            </span>
            <Text
              as="h1"
              className="font-normal"
            >
              Our results in
              <br />
              tangible numbers
            </Text>
          </div>

          <div className="flex gap-4">
            <Button
              className="bg-[#5F4FE6] text-white rounded-lg hover:bg-[#5558E3]"
              asChild
            >
              <a href="#">Get started</a>
            </Button>
            <Button variant="outline" className="rounded-lg bg-white" asChild>
              <a href="#">About company</a>
            </Button>
          </div>
        </div>

        <div className="bg-[#5F4FE6] border-3 rounded-xl shadow-none">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-3 md:divide-y-0 md:divide-x-3 divide-black">
            {statsData.map((stat, index) => (
              <div key={index} className="p-8 md:p-10">
                <Text as="h2" className="text-white font-sans text-5xl lg:text-6xl mb-4">
                  {stat.value}
                  <span className="text-[#FED13B]">+</span>
                </Text>
                <Text className="text-gray-200 font-medium leading-relaxed">
                  {stat.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
