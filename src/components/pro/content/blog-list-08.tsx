import { Loader2 } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";

interface BlogPost {
  id: number;
  title: string;
  excerpt?: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
  tags: string[];
  size: "small" | "medium" | "large";
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "BEYOND THE RACETRACK: LIFESTYLE OF MOTORSPORT",
    date: "AUG 17",
    category: "LIFESTYLE",
    imageUrl:
      "https://images.unsplash.com/photo-1746483965671-44ed1704e4fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=776",
    slug: "beyond-racetrack-motorsport",
    tags: ["SPORT", "LIFESTYLE", "TIPS AND TRICKS", "INTERVIEW"],
    size: "large",
    featured: true,
  },
  {
    id: 2,
    title: "MENTAL HEALTH MATTERS: BREAKING THE SILENCE",
    date: "AUG 02",
    category: "HEALTH",
    imageUrl:
      "https://images.unsplash.com/photo-1760632373541-8db1f9eb8d19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=884",
    slug: "mental-health-breaking-silence",
    tags: ["HEALTH", "LIFESTYLE", "PSYCHOLOGY"],
    size: "medium",
  },
  {
    id: 3,
    title: "FURNITURE THAT SERVES STYLE AND PURPOSE",
    date: "JUL 29",
    category: "INTERIOR",
    imageUrl:
      "https://images.unsplash.com/photo-1760445645512-e5dbf41503e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=772",
    slug: "furniture-style-purpose",
    tags: ["INTERIOR", "STYLE"],
    size: "large",
  },
  {
    id: 4,
    title: "INNOVATIONS IN AI AND MICROELECTRONICS",
    date: "AUG 13",
    category: "TECHNOLOGY",
    imageUrl:
      "https://images.unsplash.com/photo-1760292343750-b476acc543b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=726",
    slug: "ai-microelectronics-innovations",
    tags: ["AI", "INNOVATION", "MICROELECTRONICS"],
    size: "large",
  },
  {
    id: 5,
    title: "URBAN ARCHITECTURE TRENDS",
    date: "JUL 15",
    category: "ARCHITECTURE",
    imageUrl:
      "https://images.unsplash.com/photo-1760625525684-3564699070a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
    slug: "urban-architecture-trends",
    tags: ["ARCHITECTURE", "DESIGN", "URBAN"],
    size: "small",
  },
  {
    id: 6,
    title: "DIGITAL ART REVOLUTION",
    date: "AUG 05",
    category: "ART",
    imageUrl:
      "https://images.unsplash.com/photo-1760681556033-c350007657e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
    slug: "digital-art-revolution",
    tags: ["ART", "DIGITAL", "INNOVATION"],
    size: "medium",
  },
  {
    id: 7,
    title: "LANDSCAPE ARCHITECTURE TRENDS",
    date: "JUL 15",
    category: "ARCHITECTURE",
    imageUrl:
      "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=780",
    slug: "landscape-architecture-trends",
    tags: ["ARCHITECTURE", "DESIGN", "LANDSCAPE"],
    size: "small",
  },
  {
    id: 8,
    title: "NEO BRUTALISM: SOVIET INFLUENCE",
    date: "JUL 15",
    category: "ARCHITECTURE",
    imageUrl:
      "https://images.unsplash.com/photo-1687893641851-3d9946c661e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=776",
    slug: "neo-brutalism-soviet-influence",
    tags: ["ARCHITECTURE", "DESIGN", "BRUTALISM"],
    size: "small",
  }
];

export default function BlogSectionEight() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group break-inside-avoid"
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <Text
                  as="h4"
                  className="font-sans mb-3 group-hover:underline decoration-primary decoration-3 underline-offset-2 transition-all duration-300 uppercase"
                >
                  {post.title}
                </Text>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      size="sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <Button className="mt-20 mx-auto font-sans" variant="secondary">Load More <Loader2 className="ml-2 size-4" /></Button>
      </div>
    </section>
  );
}