"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Carousel } from "@/components/retroui/Carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

interface TestimonialCardProps {
  photo: string;
  name: string;
  rating: number;
  text: string;
}

// Background tile images (9 unique variants mapped from Figma)
const V = "https://www.figma.com/api/mcp/asset/b45f7e9d-b2c3-40a8-a782-355e5f146302";
const V1 = "https://www.figma.com/api/mcp/asset/53f21dcf-d4a9-4f2e-ba3b-6b80b623eb2b";
const V2 = "https://www.figma.com/api/mcp/asset/a0313d04-73d9-4171-a83a-e1370b50c046";
const V3 = "https://www.figma.com/api/mcp/asset/2eed4d44-bccf-463a-8938-dd2e7dd19af7";
const V4 = "https://www.figma.com/api/mcp/asset/72762fd7-1fb9-4684-b2e8-3c52adc5ff39";
const V5 = "https://www.figma.com/api/mcp/asset/fe7c7d3a-67ef-4a27-9f27-527b5780e996";
const V6 = "https://www.figma.com/api/mcp/asset/3dc1dea2-3a98-44ff-888a-7274dcbb1bb3";
const V7 = "https://www.figma.com/api/mcp/asset/1e79d5eb-c4bc-4028-8d4d-3dd6a42c3f97";
const V8 = "https://www.figma.com/api/mcp/asset/dce59d0e-22f9-41e0-bd0f-ad3f0acd8f99";

// Decorative globe + squiggle (top-right of header)
const globeDecor = "https://www.figma.com/api/mcp/asset/4541e00f-9652-4185-ae2f-f8f9c43ad6e6";
const squiggleDecor = "https://www.figma.com/api/mcp/asset/0c7b5de3-5a26-4f47-b358-cdcdda94ac50";

// 4 rows × 9 columns = 36 tiles
const tileRows: string[][] = [
  [V, V1, V2, V2, V3, V4, V4, V4, V4],
  [V5, V5, V4, V4, V3, V4, V4, V4, V4],
  [V6, V6, V7, V7, V8, V7, V7, V7, V7],
  [V6, V6, V7, V7, V8, V7, V7, V7, V7],
];

// Avatar size and card offset (matches Figma pixel values)
const AVATAR = 220;
const CARD_OFFSET = 110; // card starts at center of avatar
const CARD_WIDTH = 312;
const STAR_LEFT = 279;
const STAR_TOP = 72;

const TestimonialCard = ({ photo, name, rating, text }: TestimonialCardProps) => {
  return (
    <div
      className="relative shrink-0"
      style={{ width: `${CARD_OFFSET + CARD_WIDTH}px`, height: `${AVATAR + 60}px` }}
    >
      {/* Purple avatar (circle with top-right corner square) */}
      <div
        className="absolute top-0 left-0 border-[3px] border-black shadow-[4px_4px_0px_0px_black] overflow-hidden bg-[#c4a1ff]"
        style={{
          width: AVATAR,
          height: AVATAR,
          borderRadius: "115px 0 115px 115px",
        }}
      >
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
          style={{ borderRadius: "115px 0 115px 115px" }}
        />
      </div>

      {/* Stars (positioned to the right of avatar) */}
      <div
        className="absolute flex gap-1"
        style={{ left: STAR_LEFT, top: STAR_TOP }}
      >
        {[...Array(5)].map((_, j) => (
          <Star
            key={j}
            className="w-6 h-6"
            fill={j < rating ? "#f06292" : "none"}
            color="#f06292"
          />
        ))}
      </div>

      {/* White testimonial card (overlaps center of avatar) */}
      <div
        className="absolute bg-white border-2 border-black rounded shadow-[4px_4px_0px_0px_black] flex flex-col gap-2 p-4"
        style={{ left: CARD_OFFSET, top: CARD_OFFSET, width: CARD_WIDTH }}
      >
        <Text as="h3" className="text-xl uppercase tracking-tight">
          {name}
        </Text>
        <Text className="text-sm leading-normal line-clamp-6">
          {text}
        </Text>
      </div>
    </div>
  );
};

export default function TestimonialThirteen() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className="min-h-screen flex items-center py-20 md:py-28">
      <div className="w-full">
        {/* Main Container with Border */}
        <div className="border-y-2">
          {/* Header */}
          <header className="relative flex flex-col gap-2 border-b-2 py-10 px-8 md:px-16 lg:px-24">
            <Text
              as="h1"
              className="text-3xl md:text-4xl lg:text-5xl tracking-wide"
            >
              Our Customer Feedback
            </Text>
            <Text className="text-lg md:text-xl max-w-lg">
              Don&apos;t take our word for it. Trust our customers
            </Text>

            {/* Globe + squiggle decoration */}
            <div className="absolute top-8 right-8 w-40 h-32 pointer-events-none hidden lg:block">
              <img src={globeDecor} alt="" className="absolute top-0 right-0 w-24" />
              <img src={squiggleDecor} alt="" className="absolute top-8 right-[-10px] w-36" />
            </div>
          </header>

          {/* Testimonial Slider with Tile Background */}
          <div className="relative h-[400px] overflow-hidden">
            {/* Background tiles */}
            <div
              className="absolute inset-0 grid"
              style={{ gridTemplateColumns: "repeat(9, 1fr)", gridTemplateRows: "repeat(4, 1fr)" }}
            >
              {tileRows.flat().map((src, i) => (
                <img key={i} src={src} alt="" className="w-full h-full object-cover" />
              ))}
            </div>

            {/* Testimonials Carousel */}
            <div className="absolute inset-0 flex items-center justify-center px-8">
              <Carousel
                setApi={setApi}
                opts={{ align: "center", loop: true }}
                className="w-full max-w-6xl"
              >
                <Carousel.Content className="ml-0">
                  {testimonials.map((testimonial) => (
                    <Carousel.Item
                      key={testimonial.id}
                      className="pl-0 basis-full md:basis-1/2 lg:basis-1/3 flex justify-center"
                    >
                      <TestimonialCard
                        photo={testimonial.photo}
                        name={testimonial.name}
                        rating={testimonial.rating}
                        text={testimonial.text}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel.Content>
              </Carousel>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 border-t-2 py-10">
            <button
              onClick={() => api?.scrollPrev()}
              className="flex items-center justify-center border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_black] w-14 h-14 bg-[#e7f193] hover:opacity-90 transition-opacity"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-7 h-7" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="flex items-center justify-center border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_black] w-14 h-14 bg-[#e7f193] hover:opacity-90 transition-opacity"
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-7 h-7" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const testimonials = [
  {
    id: 1,
    photo: "https://www.figma.com/api/mcp/asset/9bfad34f-15ff-4087-9bfd-c80efb4ce416",
    name: "Floyd Miles",
    rating: 4,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
  {
    id: 2,
    photo: "https://www.figma.com/api/mcp/asset/e3a64865-e47c-484f-a4ef-78feb08bc191",
    name: "Sarah Johnson",
    rating: 5,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
  {
    id: 3,
    photo: "https://www.figma.com/api/mcp/asset/35b3f6cb-bed7-47d4-9f79-0a1a5a12c7bd",
    name: "Michael Chen",
    rating: 4,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
  {
    id: 4,
    photo: "https://www.figma.com/api/mcp/asset/9bfad34f-15ff-4087-9bfd-c80efb4ce416",
    name: "Emily Rodriguez",
    rating: 5,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
  {
    id: 5,
    photo: "https://www.figma.com/api/mcp/asset/e3a64865-e47c-484f-a4ef-78feb08bc191",
    name: "James Anderson",
    rating: 4,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
];
