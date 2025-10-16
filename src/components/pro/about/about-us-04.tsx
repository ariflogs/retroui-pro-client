import { Text } from "@/components/retroui/Text";

export default function AboutUsFour() {
    const stats = [
        {
            number: "3.5",
            label: "Years of experience",
            bgColor: "bg-purple-500"
        },
        {
            number: "33",
            label: "Project Challenges",
            bgColor: "bg-purple-600"
        },
        {
            number: "830M+",
            label: "Positive reviews",
            bgColor: "bg-purple-500"
        },
        {
            number: "100K",
            label: "Trusted Students",
            bgColor: "bg-purple-600"
        }
    ];

    return (
        <section className="py-20 bg-[#FCFFE7]">
            <div className="container px-4 mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-strech">
                        {/* Left Content Card */}
                        <div className="border-2 bg-[#C4FF83] p-8 shadow-lg rounded-lg flex flex-col justify-between">
                            <div className="mb-8">
                                <Text className="font-medium mb-4">
                                    About Us
                                </Text>

                                <Text as="h2" className="text-4xl lg:text-6xl font-sans">
                                    Our Dream is Global Learning
                                </Text>
                            </div>


                            <div>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet fermentum laoreet. Morbi a turpis sit amet ipsum facilisis consequat eu sit amet augue. Maecenas luctus ante vitae dolor laoreet pharetra et id tellus. Sed sed ligula vel massa vehicula iaculis vel eu justo. Cras purus nisl, sodales eget mauris vitae, mattis laoreet felis.
                                </Text>
                            </div>
                        </div>

                        {/* Right Side - Image and Stats */}
                        <div className="space-y-6">
                            {/* Main Image */}
                            <div className="border-2 shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Team collaboration in office"
                                    className="w-full h-[280px] object-cover"
                                />
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className={`border-2 border-black bg-[#5F4FE6] p-6 shadow-lg rounded-lg`}
                                    >
                                        <Text className="text-3xl font-black text-white mb-2">
                                            {stat.number}
                                        </Text>
                                        <Text className="text-white text-sm font-medium">
                                            {stat.label}
                                        </Text>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}