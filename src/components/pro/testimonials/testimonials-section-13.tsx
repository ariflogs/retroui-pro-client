"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

// Avatar photos
const photo1 = "https://www.figma.com/api/mcp/asset/9bfad34f-15ff-4087-9bfd-c80efb4ce416";
const photo2 = "https://www.figma.com/api/mcp/asset/e3a64865-e47c-484f-a4ef-78feb08bc191";
const photo3 = "https://www.figma.com/api/mcp/asset/35b3f6cb-bed7-47d4-9f79-0a1a5a12c7bd";

// Decorative globe + squiggle (top-right of header)
const globeDecor = "https://www.figma.com/api/mcp/asset/4541e00f-9652-4185-ae2f-f8f9c43ad6e6";
const squiggleDecor = "https://www.figma.com/api/mcp/asset/0c7b5de3-5a26-4f47-b358-cdcdda94ac50";

// Background tile images (9 unique variants mapped from Figma)
const V  = "https://www.figma.com/api/mcp/asset/b45f7e9d-b2c3-40a8-a782-355e5f146302";
const V1 = "https://www.figma.com/api/mcp/asset/53f21dcf-d4a9-4f2e-ba3b-6b80b623eb2b";
const V2 = "https://www.figma.com/api/mcp/asset/a0313d04-73d9-4171-a83a-e1370b50c046";
const V3 = "https://www.figma.com/api/mcp/asset/2eed4d44-bccf-463a-8938-dd2e7dd19af7";
const V4 = "https://www.figma.com/api/mcp/asset/72762fd7-1fb9-4684-b2e8-3c52adc5ff39";
const V5 = "https://www.figma.com/api/mcp/asset/fe7c7d3a-67ef-4a27-9f27-527b5780e996";
const V6 = "https://www.figma.com/api/mcp/asset/3dc1dea2-3a98-44ff-888a-7274dcbb1bb3";
const V7 = "https://www.figma.com/api/mcp/asset/1e79d5eb-c4bc-4028-8d4d-3dd6a42c3f97";
const V8 = "https://www.figma.com/api/mcp/asset/dce59d0e-22f9-41e0-bd0f-ad3f0acd8f99";

// 4 rows × 9 columns = 36 tiles
const tileRows: string[][] = [
  [V,  V1, V2, V2, V3, V4, V4, V4, V4],
  [V5, V5, V4, V4, V3, V4, V4, V4, V4],
  [V6, V6, V7, V7, V8, V7, V7, V7, V7],
  [V6, V6, V7, V7, V8, V7, V7, V7, V7],
];

const testimonials = [
  {
    photo: photo1,
    name: "Floyd Miles",
    rating: 4,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
  {
    photo: photo2,
    name: "Floyd Miles",
    rating: 4,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
  {
    photo: photo3,
    name: "Floyd Miles",
    rating: 4,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
];

// Avatar size and card offset (matches Figma pixel values)
const AVATAR = 220;
const CARD_OFFSET = 110; // card starts at center of avatar
const CARD_WIDTH = 312;
const STAR_LEFT = 279; // ml-[278.82px]
const STAR_TOP = 72;   // mt-[72.31px]

export default function TestimonialsSection13() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section
      className="bg-[#f9f5f2] border-[2.891px] border-black flex flex-col gap-[38px] py-[38px] overflow-hidden"
    >
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="relative px-[31.6px] flex flex-col gap-[7.65px]">
        <h2
          className="font-black text-[40px] text-black tracking-[0.8px]"
          style={{ fontFamily: "'Archivo', sans-serif" }}
        >
          Our Customer Feedback
        </h2>
        <p
          className="text-[20px] text-black tracking-[0.4px] max-w-[532px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Don't take our word for it. Trust our customers
        </p>

        {/* Globe + squiggle decoration */}
        <div className="absolute top-0 right-8 w-[160px] h-[120px] pointer-events-none">
          <img src={globeDecor} alt="" className="absolute top-0 right-0 w-[100px]" />
          <img src={squiggleDecor} alt="" className="absolute top-8 right-[-10px] w-[140px]" />
        </div>
      </div>

      {/* ── Tile grid + testimonials ────────────────────────────────── */}
      <div className="relative border-y-[2.891px] border-black h-[399.624px] overflow-hidden">
        {/* Background tiles */}
        <div
          className="absolute inset-0 grid"
          style={{ gridTemplateColumns: "repeat(9, 1fr)", gridTemplateRows: "repeat(4, 1fr)" }}
        >
          {tileRows.flat().map((src, i) => (
            <img key={i} src={src} alt="" className="w-full h-full object-cover" />
          ))}
        </div>

        {/* Three testimonial groups, centered */}
        <div className="absolute inset-0 flex items-center justify-center gap-[54px] px-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative shrink-0"
              style={{ width: `${CARD_OFFSET + CARD_WIDTH}px`, height: `${AVATAR + 60}px` }}
            >
              {/* Purple avatar (circle with top-right corner square) */}
              <div
                className="absolute top-0 left-0 border-[3px] border-black shadow-[4px_4px_0px_0px_black] overflow-hidden"
                style={{
                  width: AVATAR,
                  height: AVATAR,
                  background: "#c4a1ff",
                  borderRadius: "115px 0 115px 115px",
                }}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: "115px 0 115px 115px" }}
                />
              </div>

              {/* Stars (positioned to the right of avatar) */}
              <div
                className="absolute flex gap-[4px]"
                style={{ left: STAR_LEFT, top: STAR_TOP }}
              >
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-[25px] h-[25px]"
                    style={{
                      fill: j < t.rating ? "#f06292" : "none",
                      color: "#f06292",
                    }}
                  />
                ))}
              </div>

              {/* White testimonial card (overlaps center of avatar) */}
              <div
                className="absolute bg-white border-2 border-black rounded-[3px] shadow-[4px_4px_0px_0px_black] flex flex-col gap-[9px] p-[18px]"
                style={{ left: CARD_OFFSET, top: CARD_OFFSET, width: CARD_WIDTH }}
              >
                <p
                  className="font-black text-[20px] text-black uppercase tracking-[-0.4px]"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[14px] text-black leading-normal overflow-hidden"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    display: "-webkit-box",
                    WebkitLineClamp: 6,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Navigation buttons ──────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-[24px]">
        <button
          onClick={prev}
          className="flex items-center justify-center border-[2px] border-black rounded-[8px] shadow-[3px_3px_0px_0px_black] w-[58px] h-[58px] hover:opacity-90 transition-opacity"
          style={{ background: "#e7f193" }}
        >
          <ArrowLeft className="w-[27px] h-[27px]" strokeWidth={2.5} />
        </button>
        <button
          onClick={next}
          className="flex items-center justify-center border-[2px] border-black rounded-[8px] shadow-[3px_3px_0px_0px_black] w-[58px] h-[58px] hover:opacity-90 transition-opacity"
          style={{ background: "#e7f193" }}
        >
          <ArrowRight className="w-[27px] h-[27px]" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
