import {
  Calendar,
  Clock,
  Share2,
  MessageSquare,
  Bookmark,
  ArrowLeft,
} from "lucide-react";

export function BlogDetailPageOne() {
  return (
    <div className="bg-white">
      {/* Back button */}
      <div className="container mx-auto px-4 py-6">
        <a
          href="/blog"
          className="inline-flex items-center font-medium hover:underline"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Blog
        </a>
      </div>

      <article className="container mx-auto px-4 pb-20">
        {/* Article header */}
        <header className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 font-medium border-2 border-black">
              Design Trends
            </span>
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-1" />
              <span>May 15, 2025</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-1" />
              <span>8 min read</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Neo-Brutalism: The Raw Design Movement Taking Over The Web
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Explore the rise of neo-brutalism and why designers are embracing
            its bold, unpolished aesthetic in modern web design.
          </p>

          {/* Author info */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-black mr-4">
              <img
                src="/team-member-3.png"
                alt="Alex Rodriguez"
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-bold">Alex Rodriguez</div>
              <div className="text-gray-600 text-sm">Design Director</div>
            </div>
          </div>
        </header>

        {/* Featured image */}
        <div className="max-w-5xl mx-auto mb-12 relative">
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/blog-image-1.png"
              alt="Neo-Brutalism Design Examples"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-3xl mx-auto">
          {/* Social sharing sidebar */}
          <div className="hidden lg:block fixed left-8 top-1/3 space-y-4">
            <button className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white hover:bg-gray-100 transition-colors">
              <Share2 size={18} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white hover:bg-gray-100 transition-colors">
              <MessageSquare size={18} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white hover:bg-gray-100 transition-colors">
              <Bookmark size={18} />
            </button>
          </div>

          {/* Main content */}
          <div className="prose prose-lg max-w-none">
            <h2>The Origins of Neo-Brutalism</h2>
            <p>
              Neo-brutalism draws inspiration from the architectural brutalism
              movement of the 1950s to 1970s. Characterized by raw concrete,
              exposed structural elements, and an unapologetically rugged
              aesthetic, brutalist architecture was divisive but undeniably
              memorable.
            </p>
            <p>
              In the digital realm, neo-brutalism emerged as a reaction to the
              homogenized, ultra-polished interfaces that dominated web design
              for years. Designers began experimenting with harsher contrasts,
              unrefined elements, and a deliberately "undesigned" approach that
              prioritizes authenticity over perfection.
            </p>

            <h2>Key Characteristics of Neo-Brutalism in Web Design</h2>
            <ul>
              <li>
                <strong>Bold, high-contrast colors</strong> - Often primary
                colors with little to no gradients
              </li>
              <li>
                <strong>Thick, prominent borders</strong> - Usually black,
                creating strong visual boundaries
              </li>
              <li>
                <strong>Raw typography</strong> - Sans-serif fonts with extreme
                weights and deliberate misalignment
              </li>
              <li>
                <strong>Harsh shadows</strong> - No subtle drop shadows;
                instead, bold, offset shadows
              </li>
              <li>
                <strong>Minimal decoration</strong> - Embracing the "raw"
                aesthetic with little ornamentation
              </li>
            </ul>

            <blockquote className="border-l-4 border-purple-500 pl-4 italic">
              "Neo-brutalism isn't about being ugly—it's about being honest. It
              strips away pretense and embraces the raw nature of digital
              design. It's a rebellion against the sameness that has dominated
              the web."
              <cite>— Sarah Johnson, Design Theorist</cite>
            </blockquote>

            <h2>Why Designers Are Embracing Neo-Brutalism</h2>
            <p>
              In an era where websites often look indistinguishable from one
              another, neo-brutalism offers a way to stand out. Its distinctive
              aesthetic immediately signals to users that they're experiencing
              something different—something with personality and edge.
            </p>
            <p>
              For brands looking to appeal to younger, design-savvy audiences,
              neo-brutalism communicates authenticity and a willingness to break
              conventions. It's particularly popular among creative agencies,
              technology startups, and fashion brands that want to position
              themselves as forward-thinking and unafraid to take risks.
            </p>

            <h3>Finding Balance: Neo-Brutalism and Usability</h3>
            <p>
              While pure neo-brutalism can sometimes sacrifice usability for
              aesthetic impact, many designers are finding ways to incorporate
              its distinctive elements while maintaining good user experience.
              The key is knowing which rules to break and which to preserve.
            </p>
            <p>
              Successful neo-brutalist designs maintain clear information
              hierarchy, readable typography, and intuitive navigation while
              incorporating the style's signature visual elements. The result is
              websites that are both functional and memorably distinctive.
            </p>

            <h2>The Future of Neo-Brutalism</h2>
            <p>
              As with any design trend, neo-brutalism will evolve. We're already
              seeing designers incorporate elements of the style into more
              balanced compositions, creating what some call "soft brutalism" or
              "brutalism lite."
            </p>
            <p>
              What's likely to endure is the movement's emphasis on
              authenticity, distinctiveness, and breaking away from homogenized
              design. Even as specific visual treatments change, the underlying
              philosophy of neo-brutalism—embracing the raw and unpolished—will
              continue to influence digital design.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            <span className="px-3 py-1 border-2 border-black bg-gray-100 text-sm font-medium">
              Design
            </span>
            <span className="px-3 py-1 border-2 border-black bg-gray-100 text-sm font-medium">
              Trends
            </span>
            <span className="px-3 py-1 border-2 border-black bg-gray-100 text-sm font-medium">
              Web Development
            </span>
            <span className="px-3 py-1 border-2 border-black bg-gray-100 text-sm font-medium">
              UI/UX
            </span>
          </div>

          {/* Share buttons (mobile) */}
          <div className="mt-12 flex items-center justify-between lg:hidden border-t-2 border-b-2 border-gray-200 py-4">
            <div className="text-gray-700 font-medium">Share this article</div>
            <div className="flex space-x-4">
              <button className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white">
                <Share2 size={18} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white">
                <MessageSquare size={18} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white">
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Author bio */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-black">
                    <img
                      src="/team-member-3.png"
                      alt="Alex Rodriguez"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2">About the Author</h3>
                  <h4 className="text-xl font-bold mb-4">Alex Rodriguez</h4>
                  <p className="mb-4">
                    Alex is our Design Director with over 10 years of experience
                    in digital product design. He specializes in emerging design
                    trends and has spoken at numerous design conferences
                    worldwide.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="px-4 py-2 bg-black text-white font-bold hover:bg-purple-600 transition-colors"
                    >
                      More Articles
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 border-2 border-black font-bold hover:bg-gray-100 transition-colors"
                    >
                      Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related articles */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href="#"
                className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all group"
              >
                <div className="relative h-48 overflow-hidden border-b-2 border-black">
                  <img
                    src={`/blog-image-${i + 1}.png`}
                    alt="Blog post thumbnail"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2 text-sm text-gray-600">
                    <Calendar size={14} className="mr-1" />
                    <span>April 28, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {i === 1
                      ? "Breaking Design Rules: When Ugly Becomes Beautiful"
                      : i === 2
                        ? "The Psychology Behind High-Contrast Interfaces"
                        : "Designing With Intention: The Art of Digital Brutalism"}
                  </h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm font-medium px-2 py-1 bg-gray-100">
                      {i === 1
                        ? "UX Theory"
                        : i === 2
                          ? "Psychology"
                          : "Design Process"}
                    </span>
                    <span className="text-sm flex items-center">
                      <Clock size={14} className="mr-1" />
                      {i === 1 ? "6 min" : i === 2 ? "10 min" : "7 min"}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg mb-8">
              Get the latest articles, resources, and design inspiration
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow border-2 border-black p-3 focus:outline-none"
              />
              <button className="bg-black text-white font-bold py-3 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
