import { useState } from "react";

const NewsletterCTAOne = () => {
  const [email, setEmail] = useState("");

  return (
    <div
      className="bg-[#98FB98] p-8 md:p-12 rounded-3xl border-4 border-black 
      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl border-4 
          border-black flex items-center justify-center"
        >
          <span className="text-4xl">✉️</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-lg mb-8 font-medium">
          Get the latest updates and exclusive offers directly to your inbox!
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-xl border-4 border-black 
              text-lg font-medium focus:outline-none focus:ring-4 
              focus:ring-[#FF90E8]"
          />
          <button
            className="px-8 py-4 bg-black text-white rounded-xl border-4 
            border-black font-bold text-xl hover:bg-gray-800 
            active:translate-y-1 transition-all"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCTAOne;
