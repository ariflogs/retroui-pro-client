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
  text: string;
}

const TestimonialCard = ({ photo, name, text }: TestimonialCardProps) => {
  return (
    <div className="relative shrink-0 w-full h-full min-h-[280px]">
      {/* Purple avatar with unique border radius */}
      <div className="h-40 w-40 bg-[#c4a1ff] rounded-l-full border-2 shadow overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Testimonial Card */}
      <div className="bg-white border-2 shadow p-4 flex flex-col gap-2 ml-18 -mt-18 relative">
        <Text as="h3" className="text-xl uppercase tracking-tight">
          {name}
        </Text>
        <Text className="text-sm leading-normal line-clamp-3">
          {text}
        </Text>
      </div>
    </div>
  );
};

export default function TestimonialThirteen() {
  return (
    <section className="min-h-screen flex items-center py-20 md:py-28 bg-[#f9f5f2]">
        <div className="border-y-2 divide-y-2 divide-black">
          <div className="h-32 py-2 px-4 flex flex-col justify-center max-w-7xl mx-auto relative">
            <Text
              as="h2"
              className="mb-2"
            >
              Our Customer Feedback
            </Text>
            <Text>
              Don&apos;t take our word for it. Trust our customers
            </Text>

            {/* Decorative Elements */}
            <div className="absolute z-1 top-4 right-8 w-32 md:w-40 h-24 md:h-32 pointer-events-none hidden lg:block">
              <img
                src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/dec.svg"
                alt=""
                width={140}
                height={60}
                className="absolute top-6 md:top-8 -right-2 md:right-[-10px] w-28 md:w-36"
              />
            </div>
            
          </div>

          <div className="relative overflow-hidden pt-18 pb-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 max-w-7xl mx-auto">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  photo={testimonial.photo}
                  name={testimonial.name}
                  text={testimonial.text}
                />
              ))}
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
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks.",

  },
  {
    id: 2,
    photo: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/person_2.png",
    name: "Sarah Johnson",
    text: "The platform exceeded all our expectations. Implementation was smooth and the results were immediate.",
  },
  {
    id: 3,
    photo: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/person_3.png",
    name: "Michael Chen",
    text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help.",
  },
  {
    id: 4,
    photo: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/person_1.png",
    name: "Emily Rodriguez",
    text: "Outstanding service and incredible results! The platform is intuitive, powerful, and has streamlined our entire marketing operations.",
  },
  {
    id: 5,
    photo: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/person_2.png",
    name: "James Anderson",
    text: "Game-changing solution for our business. The ROI was evident within the first month..",
  },
  {
    id: 6,
    photo: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-13/person_3.png",
    name: "Michael Chen",
    text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help.",
  },
];
