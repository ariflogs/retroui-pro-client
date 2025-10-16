"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Zap,
  Shield,
  Compass,
  BarChart,
  Users,
  MessageSquare,
} from "lucide-react";

export default function BentoGridTwo() {
  const features = [
    {
      title: "Lightning Fast",
      description:
        "Our platform is optimized for speed, ensuring quick load times and responsive interactions.",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-yellow-100",
      highlight: true,
    },
    {
      title: "Secure by Design",
      description: "Built with security as a priority, not an afterthought.",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-blue-100",
    },
    {
      title: "Intuitive Navigation",
      description: "Easy to use interface that guides users naturally.",
      icon: <Compass className="w-8 h-8" />,
      color: "bg-green-100",
    },
    {
      title: "Advanced Analytics",
      description: "Gain insights with comprehensive data visualization.",
      icon: <BarChart className="w-8 h-8" />,
      color: "bg-purple-100",
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with robust sharing features.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-pink-100",
      highlight: true,
    },
    {
      title: "24/7 Support",
      description: "Our team is always available to help with any issues.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "bg-orange-100",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.color} p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${feature.highlight ? "md:col-span-2" : ""}`}
              whileHover={{ y: -5 }}
              initial={{ rotate: index % 2 === 0 ? "1deg" : "-1deg" }}
            >
              <div className="bg-white inline-block p-3 rounded-lg border-2 border-black mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="mb-4">{feature.description}</p>

              {feature.highlight && (
                <div className="mt-2">
                  <button className="bg-black text-white px-4 py-2 rounded-lg font-medium flex items-center hover:bg-gray-800 transition-colors">
                    Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              )}

              {!feature.highlight && (
                <div className="flex items-center text-sm font-medium">
                  Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
