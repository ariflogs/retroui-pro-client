interface FeatureProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  imageUrl?: string;
}

// Feature.tsx
import React from "react";

const FeatureCard: React.FC<FeatureProps> = ({
  title,
  description,
  icon,
  color,
  imageUrl,
}) => {
  return (
    <div
      className={`relative p-8 rounded-3xl border-4 border-black ${color} 
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
            hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
            transition-all duration-300 hover:-translate-y-1`}
    >
      {/* Icon Container */}
      <div
        className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl 
            border-4 border-black flex items-center justify-center transform rotate-6"
      >
        <span className="text-3xl">{icon}</span>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-black mt-4">{title}</h3>
        <p className="text-lg font-medium">{description}</p>

        {imageUrl && (
          <div className="mt-6 rounded-2xl border-4 border-black overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

// LargeFeature.tsx
const LargeFeature: React.FC<FeatureProps> = ({
  title,
  description,
  icon,
  color,
  imageUrl,
}) => {
  return (
    <div
      className={`relative p-12 rounded-3xl border-4 border-black ${color} 
            shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div
            className="inline-block bg-white px-6 py-3 rounded-2xl 
                border-4 border-black transform -rotate-3 mb-8"
          >
            <span className="text-4xl">{icon}</span>
          </div>
          <h2 className="text-4xl font-black mb-6">{title}</h2>
          <p className="text-xl font-medium leading-relaxed">{description}</p>
          <button
            className="mt-8 bg-black text-white px-8 py-4 rounded-xl border-4 
                  border-black font-bold text-xl hover:bg-gray-800 active:translate-y-1 
                  transition-all"
          >
            Learn More
          </button>
        </div>
        {imageUrl && (
          <div
            className="rounded-2xl border-4 border-black overflow-hidden 
                shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

// FeaturesSection.tsx
const FeaturesSectionThree = () => {
  const features = [
    {
      title: "Lightning Fast",
      description:
        "Process thousands of requests in milliseconds with our optimized infrastructure.",
      icon: "⚡",
      color: "bg-[#FF90E8]",
      imageUrl: "/speed.jpg",
    },
    {
      title: "Super Secure",
      description:
        "Enterprise-grade security with end-to-end encryption and regular audits.",
      icon: "🔒",
      color: "bg-[#7DF9FF]",
      imageUrl: "/security.jpg",
    },
    {
      title: "Easy Integration",
      description:
        "Connect with your favorite tools using our simple API and SDKs.",
      icon: "🔌",
      color: "bg-[#98FB98]",
      imageUrl: "/integration.jpg",
    },
    {
      title: "Smart Analytics",
      description:
        "Get powerful insights with our advanced analytics dashboard.",
      icon: "📊",
      color: "bg-[#FFA07A]",
      imageUrl: "/analytics.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5E4] p-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <span
            className="bg-[#FF90E8] px-6 py-2 rounded-xl border-4 
                border-black inline-block transform -rotate-2 text-6xl font-black"
          >
            Powerful
          </span>
          <span
            className="bg-[#7DF9FF] px-6 py-2 rounded-xl border-4 
                border-black inline-block transform rotate-2 text-6xl font-black"
          >
            Features
          </span>
        </div>
        <p className="text-2xl font-bold">
          Everything you need to build something amazing
        </p>
      </div>

      {/* Main Feature */}
      <div className="max-w-6xl mx-auto mb-16">
        <LargeFeature {...features[0]} />
      </div>

      {/* Feature Grid */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-12"
      >
        {features.slice(1).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSectionThree;
