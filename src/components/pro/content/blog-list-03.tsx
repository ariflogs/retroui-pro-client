import { Calendar } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Avatar } from "@/components/retroui/Avatar";

interface BlogPost {
  id: number;
  title: string;
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
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1628848427006-43ffd87cdff4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
    slug: "technology-workplace-impact",
    author: {
      name: "Jason Francisco",
      avatar:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_a.png",
    },
  },
  {
    id: 2,
    title: "10 Principles of Neo-Brutalism in Modern Web Design",
    date: "May 10, 2025",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1716034349591-9e825f2664af?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "neo-brutalism-principles",
    author: {
      name: "Jason Francisco",
      avatar:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_b.png",
    },
  },
  {
    id: 3,
    title: "Building Accessible Interface with Minimal Design.",
    date: "April 28, 2025",
    category: "Development",
    imageUrl:
      "https://images.unsplash.com/photo-1727786464880-c660f017c727?q=80&w=2943&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "accessible-minimal-interfaces",
    author: {
      name: "Jason Francisco",
      avatar:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_c.png",
    },
  },
  {
    id: 4,
    title: "The Psychology of High-Contrast Design Elements",
    date: "April 15, 2025",
    category: "UX Research",
    imageUrl:
      "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "psychology-high-contrast-design",
    author: {
      name: "Jason Francisco",
      avatar:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_b.png",
    },
  },
];

export default function BlogSectionThree() {
  const featuredPost = blogPosts[0];
  const allPosts = blogPosts.slice(1);

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-6xl px-4 mx-auto">
        <article className="relative bg-white border-black group mb-32">
          <div className="relative h-[480px]">
            <img
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              className="object-cover w-full h-full transition-transform"
            />

            {/* Overlay content */}
            <div className="absolute -bottom-20 left-8 lg:left-20 p-4 lg:p-8 bg-background max-w-xl border-2 shadow hover:shadow-md">
              <div className="mb-4">
                <Badge variant="surface" size="sm">
                  {featuredPost.category}
                </Badge>
              </div>
              <Text
                as="h3"
                className="mb-4 text-xl lg:text-2xl"
              >
                {featuredPost.title}
              </Text>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <Avatar.Image
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                  />
                  <Avatar.Fallback>
                    {featuredPost.author.name.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
                <div>
                  <Text className="font-bold text-sm">
                    {featuredPost.author.name}
                  </Text>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <Text className="text-muted-foreground text-xs font-medium">
                      {featuredPost.date}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {allPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card border-2 shadow group transition-all hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden p-4">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full border-2"
                />
              </div>
              <div className="p-4 flex flex-col items-start space-y-4">
                <Badge size="sm" variant="surface">
                  {post.category}
                </Badge>
                <Text
                  as="h4"
                >
                  {post.title}
                </Text>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <Avatar.Image
                      src={post.author.avatar}
                      alt={post.author.name}
                    />
                    <Avatar.Fallback>
                      {post.author.name.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-sm">
                      {post.author.name}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar size={12} className="mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}