import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Flame, Play } from "lucide-react";

const HeroSectionThree = () => {
    return (
        <div className="bg-white">
            {/* Hero Content */}
            <div className="max-w-6xl mx-auto py-20 px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row max-lg:space-y-8 lg:space-x-12 items-center">
                    {/* Right Column */}
                    <div className="flex justify-center items-center flex-1">
                        <div className="max-w-96 h-auto relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-primary z-0 border-2 transform rotate-8"></div>
                            <img className="w-full h-auto border-2 object-cover relative z-1" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/products/apple_vision.jpg" alt="Apple Vision Pro" />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <Badge size="sm" className="mb-4 flex items-center gap-2" variant="surface">
                            <Flame className="w-4 h-4" />
                            Best Choice
                        </Badge>
                        <Text as="h1" className="leading-tight mb-2 lg:text-5xl">
                            Experience Without
                            <br />
                            Limitation
                        </Text>

                        <Text className="mb-8">
                            World&apos;s first 8K Pro Display with True Tone technology, gets you the best experience in the world.
                        </Text>

                        <div className="flex flex-col lg:flex-row gap-4">
                            <Button>Get Yours Now</Button>
                            <Button variant="secondary">
                                <Play className="w-4 h-4 mr-2" />
                                Watch Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionThree;
