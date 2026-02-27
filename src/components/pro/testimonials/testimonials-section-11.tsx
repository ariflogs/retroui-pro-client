"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Education Coordinator at Dribbble",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/person_1.png",
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/person_2.png",
    text: "The platform exceeded all our expectations. Implementation was smooth and the results were immediate. Our team productivity increased by 40%!",
  },

  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/person_3.png",
    text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help. Best investment we made this year.",
  }
];

const stats = [
  { value: "149+", label: "Global Reach" },
  { value: "$569", label: "Total Revenue" },
];

export default function TestimonialsSection11() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const navigate = (dir: "prev" | "next") => {
    setFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        dir === "prev"
          ? prev === 0 ? testimonials.length - 1 : prev - 1
          : prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setFading(false);
    }, 250);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative bg-[#f9f5f2] py-[100px] overflow-hidden">
      {/* Decorative shapes — right side */}
      <div className="absolute right-0 top-0 h-full w-[195px] pointer-events-none flex flex-col justify-around items-center py-10">
        <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_1.svg" alt="" className="w-[130px]" />
        <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_2.svg" alt="" className="w-[130px]" />
        <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_3.svg" alt="" className="w-[130px]" />
        <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_4.svg" alt="" className="w-[130px]" />
      </div>

      <div className="max-w-[812px] mx-auto px-4 flex flex-col gap-[68px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center">
          <h2
            className="font-bold text-[50px] text-black capitalize leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Proven Results & Real Experience
          </h2>
          <p
            className="text-[20px] text-black"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            See how our platform has transformed businesses across industries
          </p>
        </div>

        {/* Cards area */}
        <div className="flex flex-col gap-[27px]">
          {/* Stats + Navigation row */}
          <div className="flex gap-[27px] h-[54px] items-stretch">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border-[3px] border-black rounded-[10px] shadow-[3px_3px_0px_0px_black] px-5 flex items-center shrink-0"
              >
                <p
                  className="font-bold text-[20px] whitespace-nowrap leading-none"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="text-black">{stat.value}</span>{" "}
                  <span className="text-[#599d77]">{stat.label}</span>
                </p>
              </div>
            ))}

            <button
              onClick={() => navigate("prev")}
              className="flex-1 bg-white border-[3px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_black] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-[30px] h-[30px]" strokeWidth={2} />
            </button>
            <button
              onClick={() => navigate("next")}
              className="flex-1 bg-white border-[3px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_black] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ArrowRight className="w-[30px] h-[30px]" strokeWidth={2} />
            </button>
          </div>

          {/* Testimonial row */}
          <div className="flex gap-[27px] h-[314px]">
            {/* Photo */}
            <div className="border-[3px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_black] w-[313px] shrink-0 overflow-hidden bg-[#e8d5c0]">
              <img
                src={current.avatar}
                alt={current.name}
                className={`w-full h-full object-cover object-top transition-opacity duration-250 ${fading ? "opacity-0" : "opacity-100"}`}
              />
            </div>

            {/* Review card */}
            <div className="flex-1 bg-white border-[3px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_black] px-[35px] py-[30px] flex flex-col gap-[23px] justify-center overflow-hidden">
              {/* Name, role, stars — 87px tall block */}
              <div className={`flex items-center h-[87px] w-full transition-opacity duration-250 ${fading ? "opacity-0" : "opacity-100"}`}>
                <div className="flex flex-col h-full justify-between px-[10px] w-full">
                  <div>
                    <p
                      className="font-bold text-[30px] text-black leading-none"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {current.name}
                    </p>
                    <p
                      className="text-[16px] text-black font-light capitalize mt-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {current.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial text */}
              <p
                className={`text-[20px] text-black leading-normal transition-opacity duration-250 ${fading ? "opacity-0" : "opacity-100"}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {current.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
