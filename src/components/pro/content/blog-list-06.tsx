import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "The Impact of Technology on the Workplace.",
        time: "3 hours ago",
        category: "technology",
        slug: "technology-workplace-impact",
        author: {
            name: "John Doe",
            avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_a.png",
        }
    },
    {
        id: 2,
        title: "Why Remote Work is the Future of the Workplace.",
        time: "2 days ago",
        category: "workplace",
        slug: "remote-work-future",
        author: {
            name: "John Doe",
            avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_b.png",
        }
    },
    {
        id: 3,
        title: "Common Mistakes people make when starting a business.",
        time: "1 week ago",
        category: "business",
        slug: "common-mistakes-starting-business",
        author: {
            name: "John Doe",
            avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_c.png",
        }
    },
    {
        id: 4,
        title: "The Role of AI in Modern Business.",
        time: "August 20, 2024",
        category: "business",
        slug: "ai-in-modern-business",
        author: {
            name: "John Doe",
            avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_b.png",
        }
    },
]

export default function BlogSectionSix() {
    return (
        <section className="py-24 bg-white">
            <div className="container max-w-6xl px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <Text as="h2" className="font-sans">
                        <span className="relative z-1">Latest Articles</span>
                    </Text>

                    <Button variant="outline" className="font-sans">
                        Read More <ArrowRight size={18} className="ml-2" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <a
                            href={`#${post.slug}`}
                            key={post.id}
                            className="group transition-all flex flex-col items-start space-y-4 hover:outline-2 p-4 cursor-pointer"
                        >
                            <Badge size="sm" variant="outline" className="py-[3px]">
                                {post.category}
                            </Badge>
                            <Text
                                as="h4"
                                className="font-sans font-medium"
                            >
                                {post.title}
                            </Text>
                            <div className="flex items-center gap-2">
                                <Avatar className="size-8">
                                    <Avatar.Image src={post.author.avatar} alt={post.author.name} />
                                </Avatar>
                                <span>
                                    ⋅
                                </span>
                                <Text className="text-muted-foreground text-sm font-medium">
                                    {post.time}
                                </Text>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section >
    );
}