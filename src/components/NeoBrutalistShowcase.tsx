import { useEffect, useRef } from "react";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";

const websites = [
    {
        name: "Feastables",
        category: "Food",
        description: "Mr Beast Loves Neo Brutalism!",
        url: "feastables.com",
        image: "/examples/feastables.png"
    },
    {
        name: "Gumroad",
        category: "Payment",
        description: "Bold product marketplace with chunky buttons",
        url: "gumroad.com",
        image: "/examples/gumroad.png"
    },
    {
        name: "YouTube Rewind",
        category: "Media",
        description: "YouTube's brutalist rewind experience",
        url: "rewind.youtube/#!/lists",
        image: "/examples/youtube_rewind.png"
    },
    {
        name: "RozeBunker",
        category: "E-commerce",
        description: "Can't stop buying their drink once you see the website",
        url: "rozebunker.nl",
        image: "/examples/rozebunker.png"
    },
    {
        name: "Kristi Digital",
        category: "Portfolio",
        description: "Growth designers love neo brutalism",
        url: "kristi.digital",
        image: "/examples/kristi_digital.png"
    },
    {
        name: "GT Maru",
        category: "Design",
        description: "Creative brutalist portfolio design",
        url: "gt-maru.com",
        image: "/examples/gt_maru.png"
    }
];

export default function NeoBrutalistShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let translateX = 0;
        const speed = 0.5; // pixels per frame
        const itemWidth = 384 + 24; // w-96 (384px) + gap-6 (24px)
        const totalItems = websites.length;
        const resetPoint = -(itemWidth * totalItems);

        const animate = () => {
            translateX -= speed;
            
            // Reset to middle position when we've scrolled past the middle set
            if (translateX <= resetPoint) {
                translateX = 0;
            }

            if (container) {
                container.style.transform = `translateX(${translateX}px)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className="mx-auto">

            <div className="text-center mb-12 max-lg:px-4">
                <Text as="h2" className="mb-4">
                    All The Cool Companies😎 Are Using<br />
                    <span className="relative mt-2 mx-2 px-3 py-1 bg-primary text-black border-2 border-black transform -skew-x-12 inline-block">
                        Neo Brutalism
                    </span>
                </Text>
                <Text className="text-muted-foreground max-w-xl text-lg mx-auto">
                    See how top companies are using brutal design to stand out and grab attention.
                </Text>
            </div>

            {/* Sliding websites showcase */}
            <div className="overflow-hidden pb-4 mb-12">
                <div
                    ref={containerRef}
                    className="flex gap-6"
                    style={{
                        width: 'fit-content',
                        willChange: 'transform'
                    }}
                >
                {/* Triple the array to create seamless infinite loop */}
                {[...websites, ...websites, ...websites].map((site, index) => (
                    <div
                        key={`${site.name}-${index}`}
                        className="flex-shrink-0 w-96 bg-background border-2 border-black shadow-md hover:shadow-lg rounded-lg transition-all overflow-hidden group"
                    >
                        {/* Website preview mockup */}
                        <div className="h-52 border-b-2 border-black relative overflow-hidden bg-muted">
                            <img
                                src={site.image}
                                alt={`${site.name} website preview`}
                                className="object-cover h-full w-full"
                            />

                            <div className="absolute top-3 left-3 flex gap-1">
                                <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full border border-black"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full border border-black"></div>
                            </div>
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-1">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-white text-black border-white hover:bg-white/90"
                                    onClick={() => window.open(`https://${site.url}`, '_blank')}
                                >
                                    Visit Site
                                    <ExternalLink className="ml-2 h-3 w-3" />
                                </Button>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <Text className="font-bold text-xl">
                                    {site.name}
                                </Text>
                                <Badge size="sm" variant="outline">
                                    {site.category}
                                </Badge>
                            </div>
                            <Text className="text-muted-foreground text-sm">
                                {site.description}
                            </Text>
                        </div>
                    </div>
                ))}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <Text className="text-lg mb-4 text-muted-foreground">
                    Ready to build sites that stand out like these?
                </Text>
                <Link to="/blocks" className="inline-block mx-auto">
                    <Button>
                        Start Building
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}