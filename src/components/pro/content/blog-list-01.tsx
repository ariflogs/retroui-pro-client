import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Principles of Neo-Brutalism in Modern Web Design",
    excerpt:
      "Explore how neo-brutalism is changing the landscape of web design with bold colors and raw aesthetics.",
    date: "May 10, 2025",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1716034349591-9e825f2664af?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "neo-brutalism-principles",
  },
  {
    id: 2,
    title: "Building Accessible Interfaces with Minimal Design",
    excerpt:
      "Learn how to create beautiful, minimal interfaces that don't compromise on accessibility.",
    date: "April 28, 2025",
    category: "Development",
    imageUrl:
      "https://images.unsplash.com/photo-1727786464880-c660f017c727?q=80&w=2943&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "accessible-minimal-interfaces",
  },
  {
    id: 3,
    title: "The Psychology of High-Contrast Design Elements",
    excerpt:
      "Understanding how high-contrast elements affect user perception and engagement with digital products.",
    date: "April 15, 2025",
    category: "UX Research",
    imageUrl:
      "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "psychology-high-contrast-design",
  },
];

export default function BlogSectionOne() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="relative">
            <Text as="h2" className="relative">
              <span className="relative z-1">Latest Articles</span>
              <div className="absolute -bottom-1 max-w-[300px] left-0 right-0 h-3 bg-primary -rotate-1"></div>
            </Text>

            <Text className="text-lg text-muted-foreground mt-4 max-w-xl">
              Insights, thoughts, and explorations on design, development, and
              digital trends.
            </Text>
          </div>

          <Button variant="secondary">
            View All Posts
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="border-2 border-black bg-white shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow transition-all group"
            >
              <div className="relative h-56 overflow-hidden border-b-2 border-black">
                <img
                  src={
                    post.imageUrl ||
                    `/placeholder.svg?height=300&width=500&query=${post.title}`
                  }
                  alt={post.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 bg-black text-white px-4 py-2 font-bold text-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4 text-sm font-mono">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>
                <Text
                  as="h4"
                  className="mb-3 group-hover:underline decoration-primary-hover decoration-4 underline-offset-4"
                >
                  {post.title}
                </Text>
                <Text className="mb-6">{post.excerpt}</Text>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center font-bold group-hover:text-primary-hover transition-colors"
                >
                  Read Article
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
