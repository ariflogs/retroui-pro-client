import { ArrowUpRight } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

const HeroSectionSix = () => {
    return (
        <section className="bg-[#F9F5F2] pt-20 px-4 lg:px-8 border-y-3 border-black">
            <div className="container max-w-6xl w-full mx-auto">
                <div className="flex flex-col w-full justify-center items-center text-center gap-8 lg:gap-12">
                    {/* === Left Column: Text Content === */}
                    <div className="max-w-3xl mx-auto flex flex-col items-center">
                        <Text className="text-base lg:text-lg">
                            Hi, my name is Olivia
                        </Text>

                        <Text as="h1" className="font-medium mt-4">
                            Turning Ideas Into
                            Interactive {" "}
                            <span className="inline-block px-2 bg-[#e7f192] border-3 rotate-3 mt-3">
                                Realities.
                            </span>
                        </Text>

                        <Text className="text-base lg:text-lg mt-4">
                            I am a UI/UX designer with a passion for crafting performant,
                            scalable, and user-friendly interfaces. Always looking for
                            new challenges and opportunities to grow my skills.
                        </Text>

                        <Button
                            className="bg-[#c4a1ff] hover:bg-[#b488ff] mt-8"
                            size="lg"
                        >
                            Get In Touch
                            <ArrowUpRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>

                    {/* === Right Column: Image === */}
                    <div className="relative w-full max-w-2xl">
                        <img
                            src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/oliver_cropped.png"
                            alt="Olivia - UI/UX Designer working on creative projects with design tools and colorful elements"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionSix;
