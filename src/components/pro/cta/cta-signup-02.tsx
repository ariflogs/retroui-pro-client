const colors = {
  primary: "bg-[#FF3366]", // Vibrant pink
  secondary: "bg-[#00E5BE]", // Bright teal
  accent: "bg-[#FFB800]", // Warm yellow
  surface: "bg-[#F2F6FF]", // Cool light background
  gradient: "bg-gradient-to-r from-[#FF3366] via-[#FF8C37] to-[#FFB800]",
};

const SignupCTATwo = () => {
  return (
    <div className={`${colors.surface} p-8 md:p-12 relative overflow-hidden`}>
      {/* Playful Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 right-[20%] w-40 h-40 
        ${colors.primary} rotate-12 opacity-10`}
        />
        <div
          className={`absolute bottom-12 left-[15%] w-32 h-32 
        ${colors.secondary} -rotate-12 opacity-10`}
        />
        <div
          className={`absolute top-[40%] right-[10%] w-24 h-24 
        ${colors.accent} rotate-45 opacity-10`}
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Main Content Box */}
        <div
          className="bg-white border-[12px] border-black 
        shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform 
        hover:-translate-y-1 transition-transform"
        >
          <div className="p-8 md:p-12">
            {/* Top Badge */}
            <div className="flex justify-center mb-10">
              <div
                className={`${colors.gradient} px-8 py-3 border-4 
              border-black transform -rotate-2 hover:rotate-0 
              transition-transform`}
              >
                <span
                  className="text-2xl font-black text-white 
                mix-blend-hard-light"
                >
                  ⚡️ SUPERCHARGE YOUR WORKFLOW
                </span>
              </div>
            </div>

            <div
              className="flex flex-col md:flex-row items-center 
            justify-between gap-12"
            >
              {/* Left Content */}
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-8">
                  <span
                    className={`inline-block ${colors.secondary} px-6 
                  py-2 border-4 border-black transform rotate-1 mb-4`}
                  >
                    14 Days Free
                  </span>
                  <br />
                  <span
                    className={`inline-block ${colors.primary} px-6 
                  py-2 border-4 border-black text-white transform -rotate-1`}
                  >
                    Zero Risk!
                  </span>
                </h2>

                {/* Feature Stack */}
                <div className="space-y-4 mb-8">
                  {[
                    { text: "Unlimited Access", icon: "🚀" },
                    { text: "Premium Support", icon: "💫" },
                    { text: "No Credit Card", icon: "💳" },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 ${colors.surface} 
                      px-6 py-4 border-4 border-black transform hover:-rotate-1 
                      transition-transform`}
                    >
                      <div
                        className={`${colors.accent} w-12 h-12 flex 
                      items-center justify-center border-4 border-black`}
                      >
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <span className="font-bold text-xl">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA */}
              <div className="w-full md:w-auto">
                <button
                  onClick={() => (window.location.href = "/signup")}
                  className="group relative w-full md:w-auto bg-black 
                  text-white px-12 py-6 border-8 border-black font-black 
                  text-2xl hover:bg-gray-800 active:translate-y-1 
                  transition-all min-w-[280px]"
                >
                  <span
                    className={`absolute inset-0 ${colors.accent} 
                  transform translate-x-3 translate-y-3 -z-10 
                  group-hover:translate-x-2 group-hover:translate-y-2 
                  transition-transform`}
                  />
                  Start Free Trial
                </button>

                <div className="mt-6 text-center">
                  <span
                    className={`inline-block ${colors.secondary} px-4 
                  py-2 border-4 border-black font-bold transform rotate-1`}
                  >
                    Join 10,000+ Happy Users! 🎉
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className={`border-t-[12px] border-black ${colors.surface} 
          p-8`}
          >
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { icon: "⚡️", text: "Lightning Fast" },
                { icon: "🔒", text: "Bank-Level Security" },
                { icon: "🎯", text: "Smart Analytics" },
                { icon: "🔄", text: "Seamless Updates" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white px-6 py-3 
                  border-4 border-black transform hover:translate-y-[-4px] 
                  transition-transform"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-10 flex justify-center">
          <div className={`${colors.gradient} p-1 border-4 border-black`}>
            <div className="bg-white px-8 py-4 border-2 border-black">
              <div className="flex items-center gap-6">
                <div className="text-3xl font-black">4.9/5</div>
                <div className="text-2xl text-[#FFB800]">★★★★★</div>
                <div className="font-bold text-lg">Trusted by 1,000+ Teams</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCTATwo;
