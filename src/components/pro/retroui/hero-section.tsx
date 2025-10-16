import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";

const platforms = [
    { name: 'UI Blocks', icon: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/ui_blocks.svg", link: '/blocks', description: 'Get 100+ unique UI blocks that you can just copy & paste into your project.' },
    { name: 'Templates', icon: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/templates.svg", link: '/templates', description: 'Bold, unique & responsive website templates, built with React & Next.js.' },
    { name: 'Figma Kit', icon: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/logos/figma.png", link: '/figma', description: 'Love to customize? Get access to Figma versions of our components.' }
];

export default function RetroUIHeroSection() {
    return <section className="relative py-24">
        <div className="container max-w-6xl relative mx-auto">
            {/* Decorative elements */}
            <div className="absolute -top-20 lg:-top-8 left-12">
                <img
                    src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/star_black_1.svg"
                    height={40}
                    width={40}
                    alt="black star"
                />
            </div>
            <div className="absolute -top-14 lg:top-0 left-16">
                <img
                    src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/star_yellow_1.svg"
                    height={36}
                    width={36}
                    alt="yellow star"
                    className="shine"
                />
            </div>

            <div className="absolute hidden lg:block bottom-0 right-16">
                <img
                    src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/star_black_1.svg"
                    height={40}
                    width={40}
                    alt="black star"
                />
            </div>
            <div className="absolute  hidden lg:block  bottom-8 right-20">
                <img
                    src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/star_yellow_1.svg"
                    height={36}
                    width={36}
                    alt="yellow star"
                    className="shine"
                />
            </div>

            {/* Hero content */}
            <div className="max-w-5xl text-center mx-auto">
                <div className="mb-12">
                    <Badge variant="surface" className="rounded-full animate-bounce">
                        Get 50% Off - Limited Time Only!
                    </Badge>
                </div>
                <Text as="h1" className="mb-2">
                    Not Every Website Has To <span className="text-outlined italic">Look The Same!</span>
                </Text>
                <Text className="text-lg mb-8 max-w-3xl mx-auto">
                    Get access to neo brutalist style UI blocks, templates, and Figma kit. Designed to help you {' '}
                    <span className="font-bold">stand out</span>.
                </Text>
            </div>


        </div>

        <div className="container max-w-6xl max-lg:px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 mt-24">
            {platforms.map((platform) => (
                <a href={platform.link} key={platform.name}>
                    <div className="border-2 relative overflow-hidden text-center w-full border-black shadow-md shadow-primary hover:shadow-none transition-all hover:translate-y-1 bg-background p-6 rounded-md">
                        <div className="flex w-full items-center justify-center mb-6">
                            <img src={platform.icon} alt={platform.name} className="w-20 h-20" />
                        </div>
                        <Text as="h3" className="mb-2 text-black">{platform.name}</Text>
                        <Text className="font-medium text-muted-foreground">
                            {platform.description}
                        </Text>
                    </div>
                </a>
            ))}
        </div>
    </section>
}