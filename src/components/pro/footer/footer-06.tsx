import { Text } from "@/components/retroui/Text";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dribbble, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  left: [
    { name: "Help", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  right: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Discover", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Board meetings", href: "#" },
  ],
};

function FooterSix() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <div className="pt-24">
      <footer className="bg-[#FCFFE7] border-t-2">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <Text className="text-7xl lg:text-9xl font-medium">CORTEX<br /><span className="text-[#5F4FE6]">INSIGHTS</span></Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
            {/* Left Section - Logo and Newsletter */}
            <div className="lg:col-span-3">
              <div className="max-w-md">
                <Text className="text-black text-lg leading-relaxed mb-4">
                  Subscribe to get tips and tactics to grow the way you want.
                </Text>

                <form onSubmit={handleSubscribe}>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 border-2 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-0"
                      required
                    />
                    <button
                      type="submit"
                      className="p-3 bg-[#C4FF83] text-black font-bold border-2 border-l-0 border-black hover:bg-[#82FF74] transition-colors"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Section - Links */}
            <div className="cols-span-1">
              <ul className="space-y-2">
                {footerLinks.left.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <ul className="space-y-2">
                {footerLinks.right.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <div className="flex flex-wrap gap-8 justify-between items-center">
            <div className="flex items-center order-2 lg:order-1 gap-2">
              <div className="w-8 h-8 bg-[#FCFFE7] shadow border border-black rounded-full flex items-center justify-center">
                <span className="text-black text-sm font-bold">G</span>
              </div>
              <span className="font-medium">Cortex Insights Inc.</span>
            </div>

            <div className="flex gap-4 order-1 lg:order-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Dribbble className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default FooterSix;