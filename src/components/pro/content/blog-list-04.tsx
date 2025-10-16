import { ArrowUpRight, Clock, ChevronRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
  readTime: string;
  color: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Neo-Brutalism: The Raw Design Movement Taking Over The Web",
    excerpt:
      "Explore the rise of neo-brutalism and why designers are embracing its bold, unpolished aesthetic.",
    date: "May 10, 2025",
    category: "Design Trends",
    imageUrl: "/blog-image-1.png",
    slug: "neo-brutalism-design-trend",
    readTime: "8 min",
    color: "bg-yellow-400",
  },
  {
    id: 2,
    title: "Breaking Design Rules: When Ugly Becomes Beautiful",
    excerpt:
      "How intentionally breaking conventional design rules can lead to memorable user experiences.",
    date: "April 28, 2025",
    category: "UX Theory",
    imageUrl: "/blog-image-2.png",
    slug: "breaking-design-rules",
    readTime: "6 min",
    color: "bg-red-500",
  },
  {
    id: 3,
    title: "The Psychology Behind High-Contrast Interfaces",
    excerpt:
      "Understanding how extreme visual contrast affects user perception and engagement.",
    date: "April 15, 2025",
    category: "Psychology",
    imageUrl: "/blog-image-3.png",
    slug: "psychology-high-contrast",
    readTime: "10 min",
    color: "bg-blue-500",
  },
  {
    id: 4,
    title: "Designing With Intention: The Art of Digital Brutalism",
    excerpt:
      "How to create purposefully raw designs that still deliver exceptional user experiences.",
    date: "April 5, 2025",
    category: "Design Process",
    imageUrl: "/blog-image-4.png",
    slug: "designing-with-intention",
    readTime: "7 min",
    color: "bg-green-500",
  },
];

export default function BlogSectionFour() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background grid pattern */}
      {/* <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 z-0"></div> */}

      {/* Large decorative elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply opacity-30"></div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Header with extreme styling */}
        <div className="mb-20 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500 -z-10"></div>
          <div className="relative z-10">
            <div className="inline-block bg-black text-white px-6 py-3 font-mono text-lg transform -rotate-2 mb-6">
              LATEST POSTS
            </div>
            <h2 className="text-7xl font-black mb-8 leading-none tracking-tight">
              <span className="bg-yellow-400 px-4 py-2 inline-block transform rotate-1 mr-4">
                OUR
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 inline-block transform -rotate-1">
                BLOG
              </span>
            </h2>
            <p className="text-2xl max-w-2xl font-bold ml-12 border-l-8 border-black pl-6">
              Raw thoughts and unfiltered perspectives on design, development,
              and digital culture.
            </p>
          </div>
        </div>

        {/* Blog posts with extreme neo-brutalism styling */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          {/* Featured post - spans 8 columns with dramatic styling */}
          <article className="md:col-span-8 group cursor-pointer">
            <div className="relative">
              {/* Main image with thick border */}
              <div className="border-8 border-black relative overflow-hidden">
                <img
                  src={
                    blogPosts[0].imageUrl ||
                    `/placeholder.svg?height=600&width=800&query=${blogPosts[0].title}`
                  }
                  alt={blogPosts[0].title}
                  width={800}
                  height={500}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlapping category tag */}
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-6 py-3 font-black text-xl border-l-8 border-b-8 border-black transform rotate-3">
                  {blogPosts[0].category}
                </div>
              </div>

              {/* Content box that overlaps the image */}
              <div className="bg-white border-8 border-black p-8 max-w-[90%] ml-[10%] -mt-20 relative shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-2 group-hover:translate-y-2 transition-all">
                <h3 className="text-4xl font-black mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-lg mb-6">{blogPosts[0].excerpt}</p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-black text-white px-3 py-1">
                      <Clock size={18} className="mr-2" />
                      <span className="font-mono">{blogPosts[0].readTime}</span>
                    </div>
                    <div className="font-mono text-lg">{blogPosts[0].date}</div>
                  </div>

                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-black group-hover:bg-black group-hover:text-white transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar with other posts - spans 4 columns */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Sidebar header */}
            <div className="bg-black text-white p-6 border-8 border-black transform -rotate-1">
              <h3 className="text-3xl font-black mb-2">More Articles</h3>
              <p className="font-mono">Check out our latest content</p>
            </div>

            {/* Sidebar posts with extreme styling */}
            {blogPosts.slice(1, 4).map((post, index) => (
              <article
                key={post.id}
                className={`border-4 border-black ${post.color} p-6 transform ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0 transition-transform cursor-pointer group`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="bg-black text-white px-3 py-1 text-sm font-bold transform -rotate-2 group-hover:rotate-0 transition-transform">
                    {post.category}
                  </div>
                  <div className="flex items-center text-sm font-mono bg-white px-2 py-1 border-2 border-black">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-2 group-hover:underline">
                  {post.title}
                </h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-mono text-sm">{post.date}</span>
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full group-hover:bg-white group-hover:text-black border-2 border-black transition-colors">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Categories section with extreme styling */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {["All", "Design", "Development", "UX", "Psychology", "Trends"].map(
              (category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 border-4 border-black font-black text-lg ${
                    index === 0
                      ? "bg-black text-white"
                      : "bg-white hover:bg-yellow-400 transition-colors"
                  } transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:rotate-0 transition-transform`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* Newsletter signup with extreme styling */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 -z-10 transform rotate-12"></div>
          <div className="border-8 border-black bg-yellow-400 p-10 relative z-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-4xl font-black mb-4">
                  GET THE LATEST UPDATES
                </h3>
                <p className="text-xl font-bold mb-0">
                  Subscribe to our newsletter for fresh content delivered to
                  your inbox.
                </p>
              </div>
              <div>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow border-4 border-black p-4 text-lg font-bold focus:outline-none"
                  />
                  <button className="bg-black text-white border-4 border-black px-6 py-4 font-black text-lg hover:bg-blue-500 transition-colors">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
