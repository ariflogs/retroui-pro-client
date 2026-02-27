"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Carousel } from "@/components/retroui/Carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
}

const TestimonialCard = ({ name, role, image, text }: TestimonialCardProps) => {
  return (
    <div className="relative flex flex-col h-full border-[3px] border-black rounded-xl overflow-hidden shadow-[6px_6px_0px_0px_black]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={`${name} background`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Testimonial Card - positioned at bottom */}
      <div className="relative mt-auto mx-7 mb-4 bg-white border-[3px] border-black p-5 rounded-xl">
        {/* Quote Text */}
        <blockquote className="text-lg mb-3">
          <span className="text-3xl">"</span>
          {text}
          <span className="text-3xl">"</span>
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Text as="h3" className="font-bold text-2xl leading-tight">
              {name}
            </Text>
            <Text className="text-sm font-light capitalize leading-tight mt-1">
              {role} at Dribbble
            </Text>
          </div>

          {/* Star Badge */}
          <div className="ml-3 shrink-0">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14"
            >
              <circle cx="30" cy="30" r="28" fill="#FFD93D" stroke="black" strokeWidth="2.5" />
              <path
                d="M30 12L33.5 24.5L45.5 24.5L36 32.25L39.5 44.75L30 37L20.5 44.75L24 32.25L14.5 24.5L26.5 24.5L30 12Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialFifteen() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className="min-h-screen bg-[#f9f5f2] py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="px-12 py-12 mb-0">
          <div className="flex flex-col gap-1">
            <Text className="text-2xl font-normal text-black">
              What Our Customers Say
            </Text>
            <Text as="h1" className="text-4xl md:text-5xl font-bold capitalize">
              Read our Success story
            </Text>
          </div>
        </header>

        {/* Testimonials Carousel */}
        <div className="px-12 mb-8">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <Carousel.Content className="ml-0">
              {testimonials.map((testimonial) => (
                <Carousel.Item
                  key={testimonial.id}
                  className="pl-0 md:basis-1/2 pr-12"
                >
                  <div className="h-[590px]">
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      image={testimonial.image}
                      text={testimonial.text}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel.Content>
          </Carousel>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between px-12">
          {/* Arrow Buttons */}
          <div className="flex gap-11">
            <Button
              variant="default"
              onClick={() => api?.scrollPrev()}
              className="bg-[#e7f193] hover:bg-[#e7f193] border-[3px] border-black rounded-xl shadow-[3px_3px_0px_0px_black] h-16 w-16 p-0 flex items-center justify-center"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-9 h-9" />
            </Button>
            <Button
              variant="default"
              onClick={() => api?.scrollNext()}
              className="bg-[#e7f193] hover:bg-[#e7f193] border-[3px] border-black rounded-xl shadow-[3px_3px_0px_0px_black] h-16 w-16 p-0 flex items-center justify-center"
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-9 h-9" />
            </Button>
          </div>

          {/* More Stories Button */}
          <Button
            variant="default"
            className="bg-[#c4a1ff] hover:bg-[#c4a1ff] border-[3px] border-black rounded-xl shadow-[3px_3px_0px_0px_black] px-8 py-4 h-auto"
          >
            <Text className="font-bold text-xl">More Success Stories</Text>
          </Button>
        </div>
      </div>
    </section>
  );
}

export const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Education Coordinator",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-15/person_1.jpg",
    text: "We went from struggling to having a fully automated system in just 2 weeks.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-15/person_2.jpg",
    text: "We went from struggling to having a fully automated system in just 2 weeks.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-15/person_3.jpg",
    text: "We went from struggling to having a fully automated system in just 2 weeks.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-15/person_4.jpg",
    text: "We went from struggling to having a fully automated system in just 2 weeks.",
  },
];
