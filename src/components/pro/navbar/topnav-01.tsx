import { Button } from "@/components/retroui/Button";
import { useState } from "react";

const navItems = [
    {name: "Product", href: "#"},
    {name: "Features", href: "#"},
    {name: "Pricing", href: "#"},
    {name: "About", href: "#"},
];

function TopNavOne() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-[600px]">
      <nav className="border-b-2 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-head">LOGO</div>

          <div className="hidden md:flex items-center gap-8 font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:underline underline-offset-4 decoration-primary decoration-2"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button className="font-sans font-bold py-1" variant="outline">
              Log in
            </Button>
            <Button className="font-sans font-bold py-1">Sign up</Button>
          </div>

          {/* Mobile menu button */}
          <Button size="icon" className="md:hidden p-2 hover:-translate-y-1 transition-transform shadow-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="flex flex-col justify-center space-y-1">
              <div className={`w-5 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-black transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-black bg-white animate-in fade-in duration-300">
            <div className="px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium hover:underline underline-offset-4 decoration-primary decoration-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t-2 border-black">
                <Button className="font-sans flex-1 justify-center font-bold py-2" variant="outline">
                  Log in
                </Button>
                <Button className="font-sans flex-1 justify-center font-bold py-2">Sign up</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default TopNavOne;
