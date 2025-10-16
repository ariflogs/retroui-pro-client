import { Button } from "@/components/retroui/Button";
import { useState } from "react";

const footerSections = {
  info: [
    { name: "Company", href: "#" },
    { name: "Products", href: "#" },
    { name: "Engineering", href: "#" },
    { name: "Services", href: "#" },
    { name: "Productions", href: "#" },
  ],
  about: [
    { name: "Gallery", href: "#" },
    { name: "Technologies", href: "#" },
    { name: "Contacts", href: "#" },
  ],
};

function FooterEight() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback:", { name, phone });
    setName("");
    setPhone("");
  };

  const handleSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Feedback Card */}
          <div className="bg-white text-black rounded-lg p-6 border-4 border-orange-500">
            <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase tracking-wide">
              FEEDBACK
            </h3>
            <h4 className="text-xl font-bold mb-6 leading-tight">
              Seeking personalized support? Request a call from our team
            </h4>
            
            <form onSubmit={handleFeedback} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1 uppercase tracking-wide">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  placeholder="Mich"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-black focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1 uppercase tracking-wide">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  placeholder="(+88)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-black focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-orange-500 text-white font-bold py-3 hover:bg-orange-600 transition-colors rounded"
              >
                Send a request
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-6 uppercase tracking-wide">
              INFO
            </h3>
            <ul className="space-y-3">
              {footerSections.info.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-6 uppercase tracking-wide">
              ABOUT US
            </h3>
            <ul className="space-y-3">
              {footerSections.about.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-orange-500 mb-4 uppercase tracking-wide">
                CONTACT US
              </h4>
              <div className="space-y-2">
                <p className="text-gray-300">+1 (999) 999-99-99</p>
                <p className="text-gray-300">hello@logoipsum.com</p>
                <p className="text-gray-300">London</p>
              </div>
            </div>
          </div>

          {/* Subscription & Logo */}
          <div>
            <div className="flex justify-end mb-8">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center border-2 border-white">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold text-orange-500 mb-4 uppercase tracking-wide">
                SUBSCRIPTION
              </h4>
              <form onSubmit={handleSubscription} className="flex">
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-800 border-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  required
                />
                <Button 
                  type="submit" 
                  className="px-4 py-3 bg-orange-500 text-white border-2 border-orange-500 hover:bg-orange-600 transition-colors"
                >
                  →
                </Button>
              </form>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>

            <div className="text-right">
              <p className="text-gray-400">© 2025— Copyright</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterEight;