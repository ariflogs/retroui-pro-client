import { ArrowUpRight } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

const HeroSectionEight = () => {
    return (
        <section className="bg-[#5F4FE6] pt-20 border-y-3 border-black relative overflow-hidden">
            <div className="container min-h-[550px] w-full px-4 mx-auto relative flex flex-col lg:flex-row items-end gap-8 text-white">
                <img
                    src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/emily_one.png"
                    className="max-w-[600px] w-full lg:w-1/3 z-0"
                    alt="Olivia - UI/UX Designer working on creative projects with design tools and colorful elements"
                />

                <div className="w-full max-lg:text-center lg:w-2/3 flex relative flex-col max-lg:items-center items-start pb-32">
                    <div>
                        <Text as="h1" className="font-medium drop-shadow-[4px_4px_0_black]">
                            The Best Designer
                            <br />
                            Money Can Buy You
                        </Text>

                        <Text className="mt-4 lg:text-lg max-w-2xl">
                            Hello, I'm Emily, a UI/UX designer with a passion for crafting performant,
                            scalable, and user-friendly interfaces. Always looking for
                            new challenges to grow my skills.
                        </Text>
                    </div>


                    <div className="mt-12 flex flex-col md:flex-row max-md:justify-center items-center gap-8">
                        <Button className="font-sans bg-[#C4FF83] hover:bg-[#9FD65A]" size="lg">Get Started
                            <ArrowUpRight className="ml-2 w-5 h-5" />
                        </Button>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                <img
                                    src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_a.png"
                                    className="w-12 h-12 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_black]"
                                    alt="Person A"
                                />
                                <img
                                    src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_b.png"
                                    className="w-12 h-12 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_black]"
                                    alt="Person B"
                                />
                                <img
                                    src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_c.png"
                                    className="w-12 h-12 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_black]"
                                    alt="Person C"
                                />
                            </div>
                            <div className="flex flex-col items-start">
                                <Text className="font-medium text-xl">250+</Text>
                                <Text className="text-sm text-gray-100">
                                    Happy Customers
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/sprinkle_lime.svg" className="absolute h-10 w-10 top-20 left-60 transform rotate-12" />
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/asterisk.svg" className="absolute h-40 w-40 -bottom-20 lg:-bottom-52 -right-20 lg:-right-52" />
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/asterisk.svg" className="absolute h-20 w-20 top-20 right-20" />
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/asterisk.svg" className="absolute h-40 w-40 lg:h-100 lg:w-100 -top-20 -left-20 lg:-top-52 lg:-left-52" />
        </section>
    );
};

export default HeroSectionEight;
