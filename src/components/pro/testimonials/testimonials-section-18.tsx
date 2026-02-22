import React from "react";

// Avatar (same for all cards in this design)
const avatar = "https://www.figma.com/api/mcp/asset/28a534a2-d3a0-4369-b81c-632cce9ae167";

// Star icons (5 per card — each is a separate outlined yellow star image)
const star1 = "https://www.figma.com/api/mcp/asset/c861760f-1599-437a-a93c-7a193d0cf201";
const star2 = "https://www.figma.com/api/mcp/asset/4e151a04-e666-4c20-a13a-178f55066a76";
const star3 = "https://www.figma.com/api/mcp/asset/72e2c729-77ea-4aad-a139-10c75848c443";
const star4 = "https://www.figma.com/api/mcp/asset/aa1491bf-e1d8-471c-94fd-5ab26037c1a7";

// Each card uses: star1, star2, star2, star3, star4
const starRow = [star1, star2, star2, star3, star4];

const testimonials = [
  {
    name: "Alex Johnson",
    affiliation: "Neighborhood",
    text: "Creating my own mobile app is super easy now, thanks to Circle's awesome assistive tech!",
  },
  {
    name: "Jamie Lee",
    affiliation: "Group",
    text: "Making my own mobile app is a breeze these days, all thanks to Circle's handy assistive tools!",
  },
  {
    name: "Chris Taylor",
    affiliation: "Collective",
    text: "Building my own mobile app is a piece of cake now, thanks to Circle's fantastic assistive technologies!",
  },
  {
    name: "Jordan Smith",
    affiliation: "Crew",
    text: "Creating my own mobile app is super simple these days, thanks to Circle's amazing assistive tech!",
  },
];

function TestimonialCard({
  name,
  affiliation,
  text,
}: {
  name: string;
  affiliation: string;
  text: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-[40px] p-[30px] rounded-[10px] min-w-0">
      {/* 5 star icons */}
      <div className="flex items-center gap-[8.5px]">
        {starRow.map((src, i) => (
          <img key={i} src={src} alt="star" className="w-[51px] h-[51px]" />
        ))}
      </div>

      {/* Review text + profile */}
      <div className="flex flex-col items-center gap-[20px] w-full">
        <p
          className="text-[20px] text-black text-center leading-[1.5] w-full"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {text}
        </p>

        {/* Profile */}
        <div className="flex items-center gap-[20px]">
          <div className="shrink-0 size-[65px] rounded-full overflow-hidden">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <p
              className="font-bold text-[24px] text-black leading-normal whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {name}
            </p>
            <p
              className="text-[20px] text-black leading-normal"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {affiliation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection18() {
  return (
    <section className="bg-white py-[80px] flex flex-col items-center gap-[60px] max-w-[1213px] mx-auto px-4">
      {/* Heading */}
      <h2
        className="text-[52px] text-black text-center w-full leading-[65px]"
        style={{ fontFamily: "'Archivo Black', sans-serif" }}
      >
        Here's what folks are saying about Circle!
      </h2>

      {/* 2×2 card grid */}
      <div className="flex flex-col gap-[37.5px] w-full">
        {/* Row 1 */}
        <div className="flex gap-[37.5px] w-full">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        {/* Row 2 */}
        <div className="flex gap-[37.5px] w-full">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
        </div>
      </div>
    </section>
  );
}
