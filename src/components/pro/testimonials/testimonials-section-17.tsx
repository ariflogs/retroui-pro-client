import React from "react";

// Avatar photos (circular, yellow background)
const avatarMichael = "https://www.figma.com/api/mcp/asset/bdcdccb8-c5f0-4148-9201-1bab1bd65a4b";
const avatarSarah = "https://www.figma.com/api/mcp/asset/3783ed15-d7e0-44a6-bed0-13c8503eb2d8";
const avatarEmily = "https://www.figma.com/api/mcp/asset/ca1e9b7f-d8b8-441c-9a7f-327852fdf812";

// Star rating images (pre-rendered, different ratings per person)
const stars4 = "https://www.figma.com/api/mcp/asset/4816c00f-cdfe-421b-9772-bce19ec32e7e"; // 4/5
const stars5 = "https://www.figma.com/api/mcp/asset/15c585e8-71e1-487b-a721-a7e076315a42"; // 5/5
const stars3 = "https://www.figma.com/api/mcp/asset/f674ef1a-bb73-4025-a0f9-0474d6b08c69"; // 3/5

const testimonials = [
  {
    avatar: avatarMichael,
    stars: stars4,
    name: "Michael Thompson",
    text: `"The service provided was exceptional, making my experience seamless and enjoyable. I couldn't have asked for a better team to work with!"`,
  },
  {
    avatar: avatarSarah,
    stars: stars5,
    name: "Sarah Johnson",
    text: `"From start to finish, the professionalism and attention to detail were outstanding. I highly recommend their services!"`,
  },
  {
    avatar: avatarEmily,
    stars: stars3,
    name: "Emily Carter",
    text: `"Working with this team transformed our project. Their insights and support were invaluable, leading to great results!"`,
  },
];

export default function TestimonialsSection17() {
  return (
    <section className="bg-white py-[80px] flex flex-col items-center gap-[48px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[8px] text-center">
        <p
          className="text-[16px] text-black uppercase tracking-[0.48px] leading-normal"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Client Feedback
        </p>
        <h2
          className="text-[40px] text-black leading-tight"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          Hear what our clients have to say!
        </h2>
      </div>

      {/* Three columns */}
      <div className="flex gap-[64px] items-start justify-center w-full max-w-[1301px] px-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-1 flex-col items-center gap-[16px] px-[24px] py-[40px] rounded-[32px] min-w-0"
          >
            {/* Circular avatar */}
            <div className="shrink-0 size-[170px] rounded-full overflow-hidden">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name, stars, text */}
            <div className="flex flex-col items-center gap-[16px] w-full">
              <p
                className="text-[24px] text-black text-center leading-[1.5]"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                {t.name}
              </p>

              {/* Star rating image */}
              <div className="h-[25px] w-[157px] relative">
                <img
                  src={t.stars}
                  alt="rating"
                  className="w-full h-full object-contain"
                />
              </div>

              <p
                className="text-[16px] text-black text-center leading-[1.5] w-full"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {t.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
