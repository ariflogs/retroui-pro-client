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
    <div className="relative flex flex-col h-full overflow-hidden aspect-[3/4] p-8">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={`${name} background`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative mt-auto bg-white border-2 p-4">
        <blockquote className="text-md mb-4">
          {"“ "}
          {text}
          {" ”"}
        </blockquote>

        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Text as="h5">
              {name}
            </Text>
            <Text className="text-sm font-medium text-muted-foreground">
              {role}
            </Text>
          </div>

          <div className="absolute -right-4 -bottom-4">
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-14/star_dec.png" alt="" className="w-14 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialFourteen() {
  return (
    <section className="bg-[#f9f5f2] py-20">
      {/* Header */}
      <div className="border-t-3 py-6">
        <div className="max-w-6xl px-4 mx-auto">
          <Text className="mb-2 text-lg">
            What Our Customers Say
          </Text>
          <Text as="h2">
            Read our Success story
          </Text>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="w-full border-y-3">
        <div className="w-full container max-w-6xl px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full divide-y-3 md:divide-x-3 divide-black border-x-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
                key={testimonial.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}

export const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Education Coordinator",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-14/person_1.png",
    text: "We went from struggling to having a fully automated system in just 2 weeks.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-14/person_2.png",
    text: "We went from struggling to having a fully automated system in just 2 weeks.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-14/person_3.png",
    text: "We went from struggling to having a fully automated system in just 2 weeks.",
  }
];
