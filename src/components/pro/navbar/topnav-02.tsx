import { Button } from "@/components/retroui/Button";
import { Phone, Mail, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "About", href: "#" },
  { name: "Catelog", href: "#" },
  { name: "Places", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Contact", href: "#" },
];

function TopNavTwo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-[600px]">
      {/* Top contact bar */}
      <div className="bg-primary border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium hidden md:inline">+(406) 555-0120</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="font-medium hidden md:inline">ckctm12@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="#">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b-2 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-head font-bold">LOGO</div>

          <div className="hidden md:flex items-center gap-8 font-medium">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:underline underline-offset-4 decoration-primary decoration-2"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="items-center">
              <Button size="sm" variant="secondary">
                Create Account
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button size="icon" className="md:hidden p-2 hover:-translate-y-1 transition-transform" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div className="flex flex-col justify-center space-y-1">
                <div className={`w-5 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-black transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t-2 border-black bg-white animate-in fade-in duration-300">
            <div className="px-4 py-4 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-lg font-medium hover:underline underline-offset-4 decoration-primary decoration-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default TopNavTwo;