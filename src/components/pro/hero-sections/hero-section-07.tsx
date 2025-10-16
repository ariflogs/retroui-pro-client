import { ArrowUpRight } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { Avatar } from "@/components/retroui/Avatar";

const HeroSectionSeven = () => {
    return (
        <section className="bg-[#5F4FE6] pt-40 border-y-3 border-black relative overflow-hidden">
            <div className="container min-h-[550px] w-full mx-auto relative">
                <div className="flex relative flex-col px-4 lg:px-20 z-1">
                    <div className="text-white">
                        <div className="flex items-center gap-4">
                            <Text as="h1" className="font-medium drop-shadow-[4px_4px_0_black]">
                                Cortex Insights
                            </Text>
                            <Button className="hidden lg:flex font-sans bg-[#C4FF83] hover:bg-[#9FD65A]" size="lg">Get Started
                                <ArrowUpRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                        <Text as="h1" className="font-medium drop-shadow-[4px_4px_0_black]">
                            Elevate Your Business
                        </Text>
                        <Button className="flex lg:hidden font-sans bg-[#C4FF83] hover:bg-[#9FD65A] mt-4">Get Started
                            <ArrowUpRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-center gap-2">
                            <Text className="text-[#FED13B] text-lg">Customers</Text>
                            <img className="h-[2px]" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/h_line.svg" />
                            <img className="h-7" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/sprinke.svg" />
                        </div>

                        <div className="flex -space-x-4 mt-2">
                            <Avatar className=" shadow-[2px_2px_0px_0px_black]">
                                <Avatar.Image src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_a.png" />
                            </Avatar>
                            <Avatar className=" shadow-[2px_2px_0px_0px_black]">
                                <Avatar.Image src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_b.png" />
                            </Avatar>
                            <Avatar className=" shadow-[2px_2px_0px_0px_black]">
                                <Avatar.Image src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_c.png" />
                            </Avatar>
                            <Avatar className=" shadow-[2px_2px_0px_0px_black]">
                                <Avatar.Fallback className="bg-white text-black font-bold text-sm">50+</Avatar.Fallback>
                            </Avatar>
                        </div>
                    </div>

                </div>
                <img
                    src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/lily_one.png"
                    className="lg:absolute bottom-0 right-0 max-w-[600px] w-full z-0"
                    alt="Olivia - UI/UX Designer working on creative projects with design tools and colorful elements"
                />
            </div>

            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/sprinkle_lime.svg" className="absolute h-8 w-8 top-20 left-52 transform rotate-12" />
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/sprinkle_lime.svg" className="absolute h-16 w-16 bottom-80 right-10 transform rotate-32" />
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/sprinkle_lime.svg" className="absolute h-14 w-14 bottom-20 left-80" />
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/asterisk.svg" className="hidden lg:block absolute h-100 w-100 -bottom-40 -left-52" />
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/asterisk.svg" className="absolute h-40 w-40 lg:h-100 lg:w-100 -top-20 -right-20 lg:-top-40 lg:-right-52" />
        </section>
    );
};

export default HeroSectionSeven;
