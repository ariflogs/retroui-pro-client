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

const TestimonialCard = ({ photo, name, rating, text }: TestimonialCardProps) => {
  return (
    <div className="relative shrink-0 w-full min-h-[280px]">
      {/* Purple avatar with unique border radius */}
      <div className="h-40 w-40 bg-[#c4a1ff] rounded-l-full border-3 overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Star Rating */}
      <div className="absolute left-[280px] top-[72px] flex gap-1">
        {[...Array(5)].map((_, j) => (
          <Star
            key={j}
            className="w-6 h-6 text-[#f06292]"
            fill={j < rating ? "#f06292" : "none"}
          />
        ))}
      </div>

      {/* Testimonial Card */}
      <div className="absolute left-28 top-28 w-[312px] bg-white border-2 border-black rounded p-4 flex flex-col gap-2">
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
          <header className="relative flex flex-col items-center justify-center gap-1 md:gap-2 border-b-2 h-24 md:h-32 py-2 px-4">
            <Text
              as="h1"
              className="text-2xl md:text-4xl lg:text-5xl text-center tracking-wide"
            >
              Our Customer Feedback
            </Text>
            <Text className="text-sm md:text-xl text-black text-center font-normal tracking-wide">
              Don&apos;t take our word for it. Trust our customers
            </Text>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-32 md:w-40 h-24 md:h-32 pointer-events-none hidden lg:block">
              <img
                src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/globe_decor.png"
                alt=""
                width={100}
                height={100}
                className="absolute top-0 right-0 w-20 md:w-24"
              />
              <img
                src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/squiggle_decor.png"
                alt=""
                width={140}
                height={60}
                className="absolute top-6 md:top-8 -right-2 md:right-[-10px] w-28 md:w-36"
              />
            </div>
          </header>

          {/* Testimonial Slider with Pattern Background */}
          <div className="relative h-[400px] overflow-hidden bg-[#f9f5f2]">
            {/* Background Pattern - Grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #e5e5e5 1px, transparent 1px),
                  linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />

            {/* Testimonials Carousel */}
            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
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
          <div className="flex justify-end border-t-2">
            <button
              onClick={() => api?.scrollPrev()}
              className="h-24 w-24 md:h-32 md:w-32 flex items-center justify-center border-l-2 border-r-2 bg-[#e7f193] group transition-colors duration-300 hover:bg-black"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-12 h-12 group-hover:text-white" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="h-24 w-24 md:h-32 md:w-32 flex items-center justify-center bg-[#e7f193] group transition-colors duration-300 hover:bg-black"
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-12 h-12 group-hover:text-white" />
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
    photo: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/person_1.png",
    name: "Floyd Miles",
    rating: 4,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
  {
    id: 2,
    photo: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/person_2.png",
    name: "Sarah Johnson",
    rating: 5,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
  {
    id: 3,
    photo: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/person_3.png",
    name: "Michael Chen",
    rating: 4,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
  {
    id: 4,
    photo: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/person_1.png",
    name: "Emily Rodriguez",
    rating: 5,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
  {
    id: 5,
    photo: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/person_2.png",
    name: "James Anderson",
    rating: 4,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.\n\nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor",
  },
];
