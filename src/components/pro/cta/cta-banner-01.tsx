const CTABannerOne = () => (
  <div
    className="relative bg-[#7DF9FF] p-12 rounded-3xl border-4 border-black 
    shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
  >
    {/* Decorative Elements */}
    <div className="absolute top-6 right-6">
      <div
        className="w-20 h-20 bg-[#FF90E8] rounded-2xl border-4 border-black 
        transform rotate-12"
      />
    </div>
    <div className="absolute bottom-6 left-6">
      <div className="w-16 h-16 bg-yellow-300 rounded-full border-4 border-black" />
    </div>

    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-black mb-6">
        Limited Time Offer!
      </h1>
      <p className="text-xl md:text-2xl mb-8 font-medium">
        Get 50% off on annual plans. Don't miss out!
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button
          className="px-8 py-4 bg-black text-white rounded-xl border-4 
            border-black font-bold text-xl hover:bg-gray-800 
            active:translate-y-1 transition-all"
        >
          Claim Offer
        </button>
        <button
          className="px-8 py-4 bg-white rounded-xl border-4 border-black 
              font-bold text-xl hover:bg-gray-100 active:translate-y-1 
              transition-all"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default CTABannerOne;
