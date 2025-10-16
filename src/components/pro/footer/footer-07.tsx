import { Button } from "@/components/retroui/Button";
import { useState } from "react";

const footerSections = {
  services: [
    { name: "Postural correction", href: "#" },
    { name: "Pain rehabilitation", href: "#" },
    { name: "Functional analysis", href: "#" },
  ],
  about: [
    { name: "Experts", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "News", href: "#" },
    { name: "About", href: "#" },
    { name: "Contacts", href: "#" },
  ],
};

function FooterSeven() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-50 border-4 border-black rounded-3xl mx-4 mb-4">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold text-[#6366F1] mb-6 uppercase tracking-wide">
              SERVICES
            </h3>
            <ul className="space-y-4">
              {footerSections.services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-[#6366F1] mb-6 uppercase tracking-wide">
              ABOUT US
            </h3>
            <ul className="space-y-4">
              {footerSections.about.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#6366F1] border border-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="text-2xl font-head font-bold text-black">
                NEXUS
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <p className="text-gray-700">+1 891 989-11-91</p>
              <p className="text-gray-700">hello@logoipsum.com</p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold text-black mb-4">Book & Save your spot</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-0 rounded-lg"
                  required
                />
                <Button 
                  type="submit" 
                  className="px-6 py-3 bg-[#C4FF83] text-black font-bold border-2 border-black hover:bg-[#82FF74] transition-colors rounded-lg"
                >
                  SUBSCRIBE →
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 mt-8">
          <div className="text-gray-600 mb-4 md:mb-0">
            © 2023 — Copyright
          </div>

          <div className="flex gap-4 mb-4 md:mb-0">
            <a
              href="#"
              className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.888 3.488"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSeven;