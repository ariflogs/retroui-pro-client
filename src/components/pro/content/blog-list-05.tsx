import { ArrowRight } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Attack On Titans",
    excerpt:
      "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
    date: "1 Month Ago",
    category: "Fantasy",
    imageUrl:
      "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
    slug: "attack-on-titans",
    readTime: "12 Min Read",
  },
  {
    id: 2,
    title: "Attack On Titans",
    excerpt:
      "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
    date: "1 Month Ago",
    category: "Fantasy",
    imageUrl:
      "https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
    slug: "attack-on-titans-2",
    readTime: "12 Min Read",
  },
  {
    id: 3,
    title: "Attack On Titans",
    excerpt:
      "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
    date: "1 Month Ago",
    category: "Fantasy",
    imageUrl:
      "https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
    slug: "attack-on-titans-3",
    readTime: "12 Min Read",
  }
];

export default function BlogSectionFive() {
  const featuredPost = blogPosts[0];
  const mainPosts = blogPosts.slice(1);

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-5xl px-4 mx-auto">
        {/* Featured Post */}
        <article
          className="bg-card grid grid-cols-1 md:grid-cols-2 md:gap-8 border-2 group transition-all mb-8"
        >
          <div className="relative overflow-hidden border-r-2">
            <img
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 md:pl-0">
            <div className="flex items-center gap-4 mb-4">
              <Badge size="sm" className="bg-[#E7F193] border-2">
                {featuredPost.category}
              </Badge>
              <span className="text-[#C4A1FF] text-2xl">•</span>
              <Text className="text-sm font-medium">
                {featuredPost.date}
              </Text>
            </div>
            <Text
              as="h3"
              className="mb-2 font-sans"
            >
              {featuredPost.title}
            </Text>
            <Text className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {featuredPost.excerpt}
            </Text>
            
            <div className="flex items-center justify-between bg-[#C4A1FF] border-2 px-2">
              <Text className="text-sm font-medium">
                {featuredPost.readTime}
              </Text>
              <a
                href="#"
                className="border-x-2 px-3 py-1 bg-background flex items-center gap-2 font-medium text-sm"
              >
                Read Full
                <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {mainPosts.map((post) => {
            return (
              <article
                key={post.id}
                className="bg-card border-2 group transition-all"
              >
                <div className="relative h-64 overflow-hidden border-b-2 border-black">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge size="sm" className="bg-[#E7F193] border-2">
                      {post.category}
                    </Badge>
                    <span className="text-[#C4A1FF] text-2xl">•</span>
                    <Text className="text-sm font-medium">
                      {post.date}
                    </Text>
                  </div>
                  <Text
                    as="h3"
                    className="mb-3 font-sans"
                  >
                    {post.title}
                  </Text>
                  <Text className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </Text>
                  <div className="flex items-center justify-between bg-[#C4A1FF] border-2 px-2">
                    <Text className="text-sm font-medium">
                      {post.readTime}
                    </Text>
                    <a
                      href="#"
                      className="border-x-2 px-3 py-1 bg-background flex items-center gap-2 font-medium text-sm"
                    >
                      Read Full
                      <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}