
import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { Megaphone } from "lucide-react";

const HeroSectionFour = () => {
    return (
        <div className="bg-white py-20 px-4 lg:px-8">
            <div className="container py-32 max-w-6xl mx-auto flex flex-col items-center text-center relative">
                <div className="absolute inset-0 rounded-[60%] opacity-80" style={{
                    backgroundImage: 'url(https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/backgrounds/grid.svg)',
                    maskImage: 'radial-gradient(ellipse 70% 80% at center, black 30%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at center, black 30%, transparent 70%)'
                }}></div>

                <div className="relative z-1">
                    <Badge variant="solid" className="inline-flex items-center gap-2">
                        <Megaphone className="w-4 h-4" />
                        Breaking News
                    </Badge>
                    <Text as="h1" className="mt-8">
                        Boring Websites Are
                        <br />
                        <span className="italic underline underline-offset-8 decoration-wavy decoration-primary">
                            Now Banned!
                        </span>
                    </Text>
                    <Text className="mt-6 text-muted-foreground lg:text-lg font-medium max-w-xl mx-auto">
                        We are excited to announce that our platform is now live and ready to use. Join us today and start building your next big project!
                    </Text>
                    <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
                        <Button size="lg">
                            Get Started
                        </Button>
                        <Button size="lg" variant="outline">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionFour;