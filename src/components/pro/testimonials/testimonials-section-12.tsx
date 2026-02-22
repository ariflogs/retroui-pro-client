"use client";

import React from "react";
import { ArrowRight, Star } from "lucide-react";

// Avatar photos
const avatarFloyd1 = "https://www.figma.com/api/mcp/asset/e367f488-1139-480d-83fc-f3afa8ca816f";
const avatarFloyd2 = "https://www.figma.com/api/mcp/asset/e22778c1-9efc-4f0f-a011-bc6862340dc1";
const avatarFloyd3 = "https://www.figma.com/api/mcp/asset/1b239beb-0323-4bc6-acd6-82d6b30ececc";

// Decorative assets
const decorBlueBowtie = "https://www.figma.com/api/mcp/asset/5b9fd47c-b7a0-4b5e-b605-6334f759e2ed";
const decorPinkBlob = "https://www.figma.com/api/mcp/asset/bfcb0849-f89d-40fa-9ea4-c97820fa2abd";
const decorTile1 = "https://www.figma.com/api/mcp/asset/238a99bc-4a70-48cb-bc91-d0cb7779849f";
const decorTile2 = "https://www.figma.com/api/mcp/asset/79cccf3d-02a5-446e-96f0-8e352b7acc4b";
const decorTile3 = "https://www.figma.com/api/mcp/asset/30f27031-a1f3-476b-b7f1-d5742ff63dfd";
const decorTile4 = "https://www.figma.com/api/mcp/asset/64f3d9aa-3afd-485b-8929-c5d1d0956423";

const progressIndicator = "https://www.figma.com/api/mcp/asset/b88d14ba-4491-4a31-8b1d-007a69d73021";

export default function TestimonialsSection12() {
  return (
    <section className="bg-[#f9f5f2] px-[133px] py-[56px] overflow-hidden">
      <div className="flex flex-col gap-[54px] items-center w-full">
        {/* Main content */}
        <div className="flex flex-col gap-[62px] items-start w-full">
          {/* Header row */}
          <div className="flex items-start justify-between w-full">
            {/* Title + subtitle */}
            <div className="flex flex-col gap-[10px] items-start">
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

            {/* Yellow CTA button */}
            <button className="bg-[#ffe75a] border-[3px] border-black rounded-full shadow-[2px_2px_0px_0px_black] w-[75px] h-[74px] flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity">
              <ArrowRight className="w-[28px] h-[28px]" strokeWidth={2.5} />
            </button>
          </div>

          {/* Cards row */}
          <div className="flex gap-[36px] items-stretch w-full">
            {/* Card 1 — wide, full review */}
            <div className="relative bg-white border-[3px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_black] p-[40px] flex flex-col justify-between overflow-hidden w-[503px] shrink-0">
              {/* Review content */}
              <div className="flex flex-col gap-[23px] z-10 relative">
                <div className="flex flex-col gap-[8px]">
                  <p
                    className="font-bold text-[30px] text-black leading-normal"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    "Mind Blown"
                  </p>
                  <p
                    className="text-[20px] text-black leading-normal"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    We went from struggling with manual processes to having a
                    fully automated system in just 2 weeks. The transformation
                    has been absolutely mind-blowing
                  </p>
                </div>
                {/* Stars */}
                <div className="flex gap-[4px]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-[23px] h-[23px]"
                      style={{
                        fill: i < 4 ? "#599d77" : "none",
                        color: "#599d77",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="flex flex-col gap-[17px] w-[264px] z-10 relative">
                <div className="border-[3px] border-black rounded-[5px] w-[121px] h-[121px] overflow-hidden bg-[#f9f5f2] shrink-0">
                  <img
                    src={avatarFloyd1}
                    alt="Floyd Miles"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="font-bold text-[30px] text-black leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Floyd Miles
                  </p>
                  <p
                    className="font-light text-[16px] text-black capitalize mt-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Education Coordinator at Dribbble
                  </p>
                </div>
              </div>

              {/* Decorative blue bowtie — bottom right */}
              <div className="absolute bottom-0 right-0 w-[238px] h-[232px] pointer-events-none">
                <img
                  src={decorBlueBowtie}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Card 2 — narrow, title only */}
            <div className="relative bg-white border-[3px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_black] p-[40px] flex flex-col justify-between overflow-hidden flex-1">
              {/* Title */}
              <p
                className="font-bold text-[30px] text-black leading-normal z-10 relative"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                "The Time
                <br />
                Machine"
              </p>

              {/* Author */}
              <div className="flex flex-col gap-[17px] z-10 relative">
                <div className="border-[3px] border-black rounded-[5px] w-[121px] h-[121px] overflow-hidden bg-[#f9f5f2] shrink-0">
                  <img
                    src={avatarFloyd2}
                    alt="Floyd Miles"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="font-bold text-[30px] text-black leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Floyd Miles
                  </p>
                  <p
                    className="font-light text-[16px] text-black capitalize mt-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Education Coordinator
                  </p>
                </div>
              </div>

              {/* Decorative pink blob — top right */}
              <div
                className="absolute top-[-65px] right-[-20px] w-[203px] h-[204px] pointer-events-none"
                style={{ transform: "rotate(61.6deg)" }}
              >
                <img
                  src={decorPinkBlob}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Card 3 — narrow, title only */}
            <div className="relative bg-white border-[3px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_black] p-[40px] flex flex-col justify-between overflow-hidden flex-1">
              {/* Title */}
              <p
                className="font-bold text-[30px] text-black leading-normal z-10 relative"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                "Helpful
                <br />
                Inovative"
              </p>

              {/* Author */}
              <div className="flex flex-col gap-[17px] z-10 relative">
                <div className="border-[3px] border-black rounded-[5px] w-[121px] h-[121px] overflow-hidden bg-[#f9f5f2] shrink-0">
                  <img
                    src={avatarFloyd3}
                    alt="Floyd Miles"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="font-bold text-[30px] text-black leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Floyd Miles
                  </p>
                  <p
                    className="font-light text-[16px] text-black capitalize mt-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Education Coordinator
                  </p>
                </div>
              </div>

              {/* Decorative 2×2 tiles — top right */}
              <div className="absolute top-[-34px] right-[-20px] flex pointer-events-none">
                <div className="flex flex-col">
                  <img src={decorTile1} alt="" className="w-[71px] h-[71px]" />
                  <img src={decorTile2} alt="" className="w-[71px] h-[71px]" />
                </div>
                <div className="flex flex-col">
                  <img src={decorTile3} alt="" className="w-[71px] h-[71px]" />
                  <img src={decorTile4} alt="" className="w-[71px] h-[71px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="w-[447px] h-[15px] shrink-0">
          <img
            src={progressIndicator}
            alt="pagination"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
