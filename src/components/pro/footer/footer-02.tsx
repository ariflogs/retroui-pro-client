import { Text } from "@/components/retroui/Text";
import { Dribbble, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const footerSections = {
  product: [
    { name: "Web Design", href: "#" },
    { name: "Mobile Apps", href: "#", highlight: true },
    { name: "Branding", href: "#" },
    { name: "Consulting", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Community", href: "#" },
    { name: "Contact", href: "#" },
  ],
};

function FooterTwo() {
  return (
    <div className="pt-24">
      <footer className="bg-white border-t-2 border-black">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-2">
                <img className="w-9 h-9" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/logos/nexus.svg" alt="Nexus Logo" />
                <span className="text-3xl font-head font-normal">NEXUS</span>
              </div>
              <Text className="text-muted-foreground leading-relaxed text-sm mb-12 max-w-sm">
                Building the future of digital experiences with bold design and cutting-edge technology.
              </Text>
              <div className="flex gap-4">
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


            <div>
              <Text as="h4" className="mb-6">
                PRODUCT
              </Text>
              <ul className="space-y-2">
                {footerSections.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="hover:underline underline-offset-4 decoration-primary decoration-2 transition-all"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Text as="h4" className="mb-6">
                COMPANY
              </Text>
              <ul className="space-y-2">
                {footerSections.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="hover:underline underline-offset-4 decoration-primary decoration-2 transition-all"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Text as="h4" className="mb-6">
                SUPPORT
              </Text>
              <ul className="space-y-2">
                {footerSections.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="hover:underline underline-offset-4 decoration-primary decoration-2 transition-all"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary border-t-2">
          <div className="max-w-6xl text-sm mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground font-medium">
              © 2024 NEXUS. All rights reserved.
            </div>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a
                href="#"
                className="text-black hover:underline underline-offset-4 decoration-primary-foreground decoration-2"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-black hover:underline underline-offset-4 decoration-primary-foreground decoration-2"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterTwo;