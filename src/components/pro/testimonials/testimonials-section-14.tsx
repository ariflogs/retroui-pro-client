"use client";

import React from "react";
import { Text } from "@/components/retroui/Text";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
}

const TestimonialCard = ({ name, role, image, text }: TestimonialCardProps) => {
  return (
    <div className="relative flex flex-col h-full border-2 border-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={`${name} background`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Testimonial Card - positioned at bottom */}
      <div className="relative mt-auto mx-5 mb-5 bg-white border-2 border-black p-3.5">
        {/* Quote Text */}
        <blockquote className="text-sm mb-2.5">
          <span className="text-xl">"</span>
          {text}
          <span className="text-xl">"</span>
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Text as="h3" className="font-bold text-base leading-tight">
              {name}
            </Text>
            <Text className="text-xs font-light capitalize leading-tight mt-0.5">
              {role} at Dribbble
            </Text>
          </div>

          {/* Star Badge */}
          <div className="ml-3 shrink-0">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
            >
              <circle cx="24" cy="24" r="23" fill="#FFD93D" stroke="black" strokeWidth="2" />
              <path
                d="M24 10L26.8 19.6L36.4 19.6L28.8 25.8L31.6 35.4L24 29.2L16.4 35.4L19.2 25.8L11.6 19.6L21.2 19.6L24 10Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialFourteen() {
  return (
    <section className="min-h-screen flex items-center py-20 md:py-28">
      <div className="w-full px-4 md:px-24 lg:px-32">
        {/* Header */}
        <header className="bg-[#f9f5f2] border-y-[3px] border-black px-6 md:px-12 lg:px-24 py-6 md:py-8 mb-0">
          <div className="flex flex-col gap-1.5">
            <Text className="text-2xl font-normal text-black">
              What Our Customers Say
            </Text>
            <Text as="h1" className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
              Read our Success story
            </Text>
          </div>
        </header>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#f9f5f2] border-b-[3px] border-black">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="h-[465px]">
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
              />
            </div>
          ))}
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
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-14/person_1.jpg",
    text: "We went from struggling to having a fully automated system in just 2 weeks.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-14/person_2.jpg",
    text: "We went from struggling to having a fully automated system in just 2 weeks.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-14/person_3.jpg",
    text: "We went from struggling to having a fully automated system in just 2 weeks.",
  },
];
