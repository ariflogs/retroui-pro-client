import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Principles of Neo-Brutalism in Modern Web Design",
    excerpt:
      "Explore how neo-brutalism is changing the landscape of web design with bold colors and raw aesthetics.",
    date: "May 10, 2025",
    category: "Design",
    imageUrl: "/blog-image-1.png",
    slug: "neo-brutalism-principles",
    readTime: "8 min read",
    tags: ["Design", "Trends", "Web"],
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
    readTime: "6 min read",
    tags: ["Accessibility", "UI", "Minimal"],
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
    readTime: "10 min read",
    tags: ["Psychology", "UX", "Research"],
  },
  {
    id: 4,
    title: "Combining Typography and Color in Neo-Brutalist Designs",
    excerpt:
      "How to create effective type hierarchies with bold colors in the neo-brutalist style.",
    date: "April 5, 2025",
    category: "Typography",
    imageUrl: "/blog-image-4.png",
    slug: "typography-color-neo-brutalism",
    readTime: "7 min read",
    tags: ["Typography", "Color", "Design"],
  },
];

export default function BlogSectionThree() {
  return (
    <section className="py-24 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-400 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-pink-400 -z-10"></div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <div className="inline-block bg-black text-white px-4 py-1 font-mono text-sm mb-4">
              OUR BLOG
            </div>
            <h2 className="text-5xl font-black mb-4">Latest Insights</h2>
            <p className="text-xl max-w-xl">
              Thoughts, ideas, and perspectives on design, development, and
              digital culture.
            </p>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button className="px-4 py-2 border-2 border-black font-bold hover:bg-yellow-100 transition-colors">
              Design
            </button>
            <button className="px-4 py-2 border-2 border-black font-bold hover:bg-yellow-100 transition-colors">
              Development
            </button>
            <button className="px-4 py-2 border-2 border-black font-bold hover:bg-yellow-100 transition-colors">
              UX
            </button>
          </div>
        </div>

        <div className="mb-16">
          {/* Featured post - horizontal layout */}
          <article className="border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-16 group">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 relative">
                <img
                  src={
                    blogPosts[0].imageUrl ||
                    `/placeholder.svg?height=600&width=800&query=${blogPosts[0].title}`
                  }
                  alt={blogPosts[0].title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-yellow-400 text-black px-6 py-2 font-bold border-r-4 border-b-4 border-black">
                  FEATURED
                </div>
              </div>
              <div className="md:col-span-2 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-black text-white px-3 py-1 text-sm font-bold">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center text-sm font-mono">
                    <Calendar size={16} className="mr-2" />
                    {blogPosts[0].date}
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:underline decoration-yellow-400 decoration-4 underline-offset-4">
                  {blogPosts[0].title}
                </h3>
                <p className="mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm border-2 border-black px-2 py-1 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-mono text-sm">
                    {blogPosts[0].readTime}
                  </span>
                  <a
                    href={`/blog/${blogPosts[0].slug}`}
                    className="px-6 py-3 bg-black text-white font-bold inline-flex items-center hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    Read Article
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Regular posts - vertical layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1, 4).map((post) => (
              <article
                key={post.id}
                className="border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col h-full group"
              >
                <div className="relative">
                  <img
                    src={
                      post.imageUrl ||
                      `/placeholder.svg?height=300&width=500&query=${post.title}`
                    }
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover border-b-2 border-black"
                  />
                  <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-sm font-bold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3 text-sm">
                    <div className="flex items-center font-mono">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <span className="font-mono">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs border border-black px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-bold mt-auto group-hover:underline"
                  >
                    Continue Reading
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-bold border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            View All Articles
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
