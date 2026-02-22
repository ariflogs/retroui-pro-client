import React from "react";

const avatarPhoto = "https://www.figma.com/api/mcp/asset/b98a1604-22b9-4387-a063-2a2cb437dc62";
const quoteIcon = "https://www.figma.com/api/mcp/asset/6dc81c24-e50d-4bbc-83b8-86f9d16af25b";

const testimonials = [
  {
    name: "Floyd Miles",
    role: "Education Coordinator at Dribbble",
    text: "I was skeptical at first, but the results speak for themselves. The user interface is intuitive and support is top-notch.",
  },
  {
    name: "Floyd Miles",
    role: "Education Coordinator at Dribbble",
    text: "I was skeptical at first, but the results speak for themselves. The user interface is intuitive and support is top-notch.",
  },
  {
    name: "Floyd Miles",
    role: "Education Coordinator at Dribbble",
    text: "I was skeptical at first, but the results speak for themselves. The user interface is intuitive and support is top-notch.",
  },
  {
    name: "Floyd Miles",
    role: "Education Coordinator at Dribbble",
    text: "I was skeptical at first, but the results speak for themselves. The user interface is intuitive and support is top-notch.",
  },
];

function TestimonialCard({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) {
  return (
    <div className="flex-1 min-w-0 bg-white border-2 border-black rounded-[24px] overflow-hidden flex flex-col h-[307px]">
      {/* Quote + review text */}
      <div className="flex-1 flex gap-[48px] items-end p-[32px]">
        <p
          className="flex-1 text-[24px] text-black leading-normal tracking-[-0.44px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {text}
        </p>
        {/* Quote icon */}
        <div className="shrink-0 w-[36px] h-[25px] self-start">
          <img src={quoteIcon} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Author row */}
      <div className="border-t-2 border-black h-[96px] flex items-stretch shrink-0">
        {/* Yellow avatar box */}
        <div className="w-[96px] shrink-0 border-r-2 border-black overflow-hidden relative bg-[#ffdb32]">
          <img
            src={avatarPhoto}
            alt={name}
            className="absolute max-w-none"
            style={{
              width: "262.83%",
              height: "175.18%",
              left: "-83.23%",
              top: "-6.67%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Name + role */}
        <div className="flex flex-col justify-center gap-[8px] pl-[16px] py-[16px]">
          <p
            className="text-[30px] text-black leading-none"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            {name}
          </p>
          <p
            className="font-light text-[16px] text-black capitalize leading-normal"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection16() {
  return (
    <section className="bg-white py-[64px] flex flex-col items-center gap-[64px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[6px] text-center">
        <p
          className="text-[24px] text-black leading-normal"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          What Our Customers Say
        </p>
        <h2
          className="text-[48px] text-black capitalize leading-tight"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          Read our Success story
        </h2>
      </div>

      {/* 2×2 card grid */}
      <div className="flex flex-col gap-[48px] w-full max-w-[1145px] px-4">
        {/* Row 1 */}
        <div className="flex gap-[48px] h-[307px]">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        {/* Row 2 */}
        <div className="flex gap-[48px] h-[307px]">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
        </div>
      </div>
    </section>
  );
}
