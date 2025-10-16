import { Text } from "@/components/retroui/Text";

const servicesData = [
  {
    icon: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/globe.svg",
    bgColor: "bg-[#C4A1FF]",
    title: "Web Development",
    description:
      "From concept to code, I build responsive, high-performance, and unique websites.",
  },
  {
    icon: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/phone.svg",
    bgColor: "bg-[#E7F193]",
    title: "App Development",
    description:
      "Create native and cross-platform mobile applications with seamless user experiences.",
  },
  {
    icon: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/pen_paint.svg",
    bgColor: "bg-[#AFFFA6]",
    title: "UI/UX Design",
    description:
      "Design intuitive and engaging user interfaces with focus on user experience.",
  },
];

const FeaturesSectionEleven = () => {
  return (
    <section id="services" className="bg-[#F9F5F2] py-20">
      {/* === Section Header === */}
      <div className="w-full container max-w-6xl px-4 xl:px-0 mx-auto text-start mb-8">
        <Text className="mb-2 text-xl">
          Passion led us here
        </Text>
        <Text as="h2">
          What can I do for you
        </Text>
      </div>


      {/* === Services Grid === */}
      <div className="w-full border-y-3">
        <div className="w-full container max-w-6xl px-4 xl:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full border-x-3 border-black">
            {servicesData.map((service, index) => (
              <div
                key={service.title}
                className={`group p-6 xl:p-8 text-start transition-all duration-300 hover:bg-white/50 ${
                  // Mobile: border-bottom except last item
                  index < servicesData.length - 1
                    ? "border-b-3 md:border-b-0"
                    : ""
                  } ${
                  // Tablet: border-right for first item in row
                  index === 0 ? "md:border-r-3 xl:border-r-0" : ""
                  } ${
                  // Desktop: vertical borders  
                  index > 0 ? "xl:border-l-3" : ""
                  } border-black`}
              >
                <div
                  className={`w-12 h-12 lg:w-20 lg:h-20 p-2 lg:p-4 rounded-full border-2 shadow group-hover:shadow-none duration-300 transition-all flex items-center justify-center mb-6 lg:mb-8 ${service.bgColor}`}
                >
                  <img className="w-full h-full" src={service.icon} alt={service.title} />
                </div>

                <Text
                  as="h3"
                  className="mb-2 transition-colors leading-tight"
                >
                  {service.title}
                </Text>
                <Text
                  className="text-gray-700 group-hover:text-gray-900 transition-colors leading-relaxed"
                >
                  {service.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionEleven;
