"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Education Coordinator at Dribbble",
    avatar: "https://www.figma.com/api/mcp/asset/d7f0b7aa-fdb0-4c94-80cc-5d0917d6c3b4",
    rating: 4,
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing",
  },
];

const stats = [
  { value: "149+", label: "Global Reach" },
  { value: "$569", label: "Total Revenue" },
];

// Decorative shape assets
const shapeBlob = "https://www.figma.com/api/mcp/asset/a357f6bd-f4c5-4594-be30-76ab23640251";
const shapeSnowflake = "https://www.figma.com/api/mcp/asset/da0e198e-2f84-40e8-b9f3-46c109e60494";
const shapeArcs = "https://www.figma.com/api/mcp/asset/eb54e996-bc96-4f4d-b0b6-178bee2f548b";
const shapeButterfly = "https://www.figma.com/api/mcp/asset/ab73eafd-5f1c-4431-8006-ef9594bb55d4";

export default function TestimonialsSection11() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative bg-[#f9f5f2] py-[100px] overflow-hidden">
      {/* Decorative shapes — right side */}
      <div className="absolute right-0 top-0 h-full w-[195px] pointer-events-none flex flex-col justify-around items-center py-10">
        <img src={shapeBlob} alt="" className="w-[130px]" />
        <img src={shapeSnowflake} alt="" className="w-[130px]" />
        <img src={shapeArcs} alt="" className="w-[130px]" />
        <img src={shapeButterfly} alt="" className="w-[130px]" />
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
              onClick={handlePrev}
              className="flex-1 bg-white border-[3px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_black] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-[30px] h-[30px]" strokeWidth={2} />
            </button>
            <button
              onClick={handleNext}
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
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Review card */}
            <div className="flex-1 bg-white border-[3px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_black] px-[35px] py-[30px] flex flex-col gap-[23px] justify-center overflow-hidden">
              {/* Name, role, stars — 87px tall block */}
              <div className="flex items-center h-[87px] w-full">
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
                  <div className="flex gap-[4px]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-[23px] h-[23px]"
                        style={{
                          fill: i < current.rating ? "#599d77" : "none",
                          color: "#599d77",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial text */}
              <p
                className="text-[20px] text-black leading-normal"
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
