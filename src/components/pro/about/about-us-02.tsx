import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { ArrowUpRight } from "lucide-react";

export default function AboutUsThree() {
  const features = [
    {
      number: "1.",
      title: "Who We Are",
      description: "You get a 2-week free trial to kick the Smarty tries. We want you to."
    },
    {
      number: "2.",
      title: "What Do We Do",
      description: "We give you a free course that guides you through the process."
    },
    {
      number: "3.",
      title: "How Do We Help",
      description: "Use our multimedia lecturers, videos, and coaching sessions."
    },
    {
      number: "4.",
      title: "Create success story",
      description: "With access to online learning resources anyone can transform."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between space-y-6 space-x-6 items-start mb-16">
          <div>
            <Text as="h2" className="mb-4 font-sans lg:text-6xl">
              About Us
            </Text>
            <Text className="text-lg text-gray-600 max-w-md">
              At Besnik Consultancy, we take pride in our values – service, integrity, and excellence.
            </Text>
          </div>

          <Button
            className="font-sans px-6"
          >
            Learn more
            <ArrowUpRight size={18} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-12 items-start">
          {/* Features Grid */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-2 bg-[#F9F5F2] p-6"
              >
                <Text as="h3" className="text-4xl font-sans text-[#599D77] mb-4">
                  {feature.number}
                </Text>
                <Text as="h4" className="font-sans mb-2 font-semibold text-[#599D77]">
                  {feature.title}
                </Text>
                <Text className="text-gray-700 text-sm font-sans leading-relaxed">
                  {feature.description}
                </Text>
              </div>
            ))}
          </div>

          {/* Images Grid */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-6">
            <div className="lg:mt-8 flex flex-col gap-6">
              <div className="shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1540205193769-1264ffceda80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern interior workspace"
                  className="w-full object-cover"
                />
              </div>

              <div className="shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1574073763042-9dbe6ae03853?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern chair and decor"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Bottom left image */}
            <div className="lg:-mt-8 flex flex-col gap-6">
              <div className="shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern living space"
                  className="w-full object-cover"
                />
              </div>
              <div className="shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=1702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cozy reading corner"
                  className="w-full object-cover"
                />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}