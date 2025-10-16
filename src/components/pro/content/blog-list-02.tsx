import { Calendar, ArrowRight } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
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
      "https://images.unsplash.com/photo-1503875154399-95d2b151e3b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbG9yZnVsfGVufDB8fDB8fHww",
    slug: "neo-brutalism-principles",
    author: {
      name: "Alex Rodriguez",
      avatar:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/person_c.png",
    },
  },
  {
    id: 2,
    title: "Building Accessible Interfaces with Minimal Design",
    excerpt:
      "Learn how to create beautiful, minimal interfaces that don't compromise on accessibility.",
    date: "April 28, 2025",
    category: "Development",
    imageUrl: "/blog-image-2.png",
    slug: "accessible-minimal-interfaces",
    author: {
      name: "Kimberly Hossain",
      avatar:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/person_b.png",
    },
  },
  {
    id: 3,
    title: "The Psychology of High-Contrast Design Elements",
    excerpt:
      "Understanding how high-contrast elements affect user perception and engagement with digital products.",
    date: "April 15, 2025",
    category: "UX Research",
    imageUrl: "/blog-image-3.png",
    slug: "psychology-high-contrast-design",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/person_a.png",
    },
  },
  {
    id: 4,
    title: "The Future of Web Design in the era of AI",
    excerpt:
      "Discover how AI is transforming web design and what the future holds for designers.",
    date: "March 22, 2025",
    category: "Design",
    imageUrl: "/blog-image-4.png",
    slug: "future-of-ai-in-web-design",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/person_a.png",
    },
  },
];

export default function BlogSectionTwo() {
  // Featured post is the first one
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <section className="py-24 px-4">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <Text as="h2" className="mb-2">
            From Our Blog
          </Text>
          <Text className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, thoughts, and explorations on design, development, and
            digital trends.
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 h-[600px]">
          {/* Featured post - takes up more space */}
          <article className="lg:col-span-8 border-4 bg-white shadow-lg group transition-all">
            <div className="grid md:grid-cols-2 h-full">
              <div className="relative border-b-4 md:border-b-0 md:border-r-3 border-black">
                <img
                  src={
                    featuredPost.imageUrl ||
                    `/placeholder.svg?height=500&width=500&query=${featuredPost.title}`
                  }
                  alt={featuredPost.title}
                  className="object-cover h-full w-full"
                />
                <Badge className="absolute top-0 left-0" variant="surface">
                  FEATURED
                </Badge>
              </div>
              <div className="p-8 flex flex-col items-start">
                <div className="flex items-center space-x-4 mb-6">
                  <Badge variant="solid" size="sm">
                    {featuredPost.category}
                  </Badge>

                  <div className="flex items-center text-sm">
                    <Calendar size={16} className="mr-2" />
                    {featuredPost.date}
                  </div>
                </div>
                <Text
                  as="h3"
                  className="mb-4 group-hover:underline decoration-primary decoration-4 transition-all duration-300 underline-offset-4"
                >
                  {featuredPost.title}
                </Text>
                <Text className="mb-6">{featuredPost.excerpt}</Text>
                <div className="flex flex-grow items-start justify-baseline">
                  <div className="flex items-center space-x-2 mb-6">
                    <Avatar className="h-10 w-10">
                      <Avatar.Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                      />
                      <Avatar.Fallback>
                        {featuredPost.author.name.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>
                    <span className="font-medium">
                      {featuredPost.author.name}
                    </span>
                  </div>
                </div>

                <a href={`/blog/${featuredPost.slug}`}>
                  <Button>
                    Read Article
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar with recent posts */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="border-2 bg-white p-6 shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-md transition-all group"
              >
                <div className="flex items-center mb-2 space-x-4">
                  <Badge variant="solid" size="sm">
                    {post.category}
                  </Badge>

                  <div className="text-sm flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                <Text
                  as="h4"
                  className="font-sans font-bold mb-4 group-hover:underline decoration-primary decoration-3 transition-all duration-300 underline-offset-2"
                >
                  {post.title}
                </Text>
                <div className="flex items-center">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-black mr-2">
                    <img
                      src={
                        post.author.avatar ||
                        `/placeholder.svg?height=100&width=100&query=person`
                      }
                      alt={post.author.name}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {post.author.name}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Button size="lg" variant="secondary">
            Browse All Articles
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
