import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Input } from "@/components/retroui/Input";
import { Text } from "@/components/retroui/Text";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const footerSections = {
  product: [
    { name: "Business", href: "#" },
    { name: "Designers", href: "#" },
    { name: "Classrooms", href: "#" },
    { name: "Newcomers", href: "#" },
  ],
  learning: [
    { name: "Learn Hub", href: "#" },
    { name: "Manuals", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Communities", href: "#" },
  ],
  resources: [
    { name: "Tutorials", href: "#" },
    { name: "Editorials", href: "#" },
    { name: "Product", href: "#" },
    { name: "Newsroom", href: "#" },
  ],
  about: [
    { name: "Company", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Legal", href: "#" },
    { name: "Help", href: "#" },
  ],
};

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Use", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

function FooterFive() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <div className="pt-24">
      <footer className="bg-[#F6F6F6] border-t-3">
        {/* Newsletter Section */}
        <div className="bg-[#C4FF83] max-w-6xl -mt-16 mx-auto border-3 shadow border-black rounded-lg">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <Text as="h3" className="mb-2 font-sans font-bold">Book & Save your spot</Text>
                <Text>Get once in a lifetime experience at the best price.</Text>
              </div>


              <form onSubmit={handleSubscribe} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white rounded-md"
                />
                <Button variant="outline" type="submit" className="bg-white font-sans font-bold rounded-md">
                  SUBSCRIBE <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-12">
            {/* Logo and Illustration Section */}
            <div className="lg:col-span-3">
              <div className="w-60 relative">
                <img className="w-full" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/blue_jar.png" alt="blue jar" />

                <Card className="bg-white p-2 rounded-md w-60 absolute -bottom-4 left-20">
                  <Text className="text-lg font-bold">Cortex Insights</Text>
                  <Text className="text-muted-foreground text-sm">Get the most advance insights</Text>
                </Card>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <Text as="h5" className="font-sans font-bold mb-6">Product</Text>
                <ul className="space-y-2">
                  {footerSections.product.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-black transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Text as="h5" className="font-sans font-bold mb-6">Learning</Text>
                <ul className="space-y-2">
                  {footerSections.learning.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-black transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Text as="h5" className="font-sans font-bold mb-6">Resources</Text>
                <ul className="space-y-2">
                  {footerSections.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-black transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Text as="h5" className="font-sans font-bold mb-6">About</Text>
                <ul className="space-y-2">
                  {footerSections.about.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-black transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#5F4FE6]">
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#C4FF83] shadow border border-black rounded-full flex items-center justify-center">
                <span className="text-black text-sm font-bold">G</span>
              </div>
              <span className="text-white font-medium">Cortex Insights Inc.</span>
            </div>

            <div className="flex gap-6 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-100 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterFive;