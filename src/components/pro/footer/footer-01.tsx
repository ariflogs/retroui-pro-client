import { Dribbble, Github, Linkedin } from "lucide-react";

const footerLinks = [
  { name: "Products", href: "#" },
  { name: "Developers", href: "#" },
  { name: "Community", href: "#" },
  { name: "Press", href: "#" },
];

function FooterOne() {
  return (
    <div className="pt-24">
      <footer className="bg-primary border-t-2 border-black">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-3xl font-head font-bold text-black">
            NEXUS
          </div>

          <div className="flex flex-wrap gap-8 font-medium">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black hover:underline underline-offset-4 decoration-black decoration-2 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-background p-2 border-2 shadow-md hover:translate-y-1 hover:shadow-xs duration-200 transition-transform">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-background p-2 border-2 shadow-md hover:translate-y-1 hover:shadow-xs duration-200 transition-transform">
              <Dribbble className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-background p-2 border-2 shadow-md hover:translate-y-1 hover:shadow-xs duration-200 transition-transform">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterOne;