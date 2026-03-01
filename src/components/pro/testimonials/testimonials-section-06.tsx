"use client";

import React from "react";
import { ArrowLeft, ArrowRight, QuoteIcon } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Carousel } from "@/components/retroui/Carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({
  name,
  role,
  avatar,
  text,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col h-full w-full bg-background border-l-2">
      {/* Author Section */}
      <div className="flex items-stretch border-b-2">
        <div className="w-28 h-28 shrink-0 border-r-2 bg-primary overflow-hidden">
          <img
            src={avatar}
            alt={`${name} avatar`}
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0 pl-4 py-3 flex flex-col">
          <Text as="h3">{name}</Text>
          <Text>{role}</Text>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between gap-8">
        <div className="shrink-0">
          <QuoteIcon />
        </div>
        <blockquote className="text-lg leading-relaxed tracking-tight">
          {text}
        </blockquote>
      </div>
    </div>
  );
};

export default function TestimonialSix() {
  const [api, setApi] = React.useState<CarouselApi>();

  const displayedTestimonials = testimonials.map((t, index) => ({
    ...t,
  }));

  return (
    <section className="min-h-screen flex items-center py-20 md:py-28">
      <div className="w-full">
        {/* Main Container with Border */}
        <div className="border-y-2">
          <header className="flex flex-col items-center justify-center gap-1 md:gap-2 border-b-2 h-24 md:h-32 py-2 px-4">
            <Text
              as="h1"
              className="text-2xl md:text-4xl lg:text-5xl text-center tracking-wide italic"
            >
              Our Customer Feedback
            </Text>
            <Text className="text-sm md:text-xl text-black text-center font-normal tracking-wide">
              Don&apos;t take our word for it. Trust our customers
            </Text>
          </header>

          <div className="relative after:content-[''] after:absolute after:right-4 md:after:right-24 lg:after:right-32 after:top-0 after:bottom-0 after:w-0.5 after:bg-black after:z-10">
            <div className="px-4 md:px-24 lg:px-32 overflow-hidden">
              <Carousel
                setApi={setApi}
                opts={{ align: "start", loop: true }}
              >
                <Carousel.Content className="ml-0">
                  {displayedTestimonials.map((testimonial) => (
                    <Carousel.Item
                      key={testimonial.id}
                      className="pl-0 sm:basis-1/2 lg:basis-1/3"
                    >
                      <TestimonialCard
                        name={testimonial.name}
                        role={testimonial.role}
                        avatar={testimonial.avatar}
                        text="I was skeptical at first, but the results speak for themselves. The user interface is intuitive and support is top-notch."
                        rating={4}
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
              className="h-24 w-24 md:h-32 md:w-32 flex items-center justify-center border-l-2 border-r-2 bg-primary group transition-colors duration-300 hover:bg-black"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-12 h-12 group-hover:text-white" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="h-24 w-24 md:h-32 md:w-32 flex items-center justify-center bg-primary group transition-colors duration-300 hover:bg-black"
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
    name: "Floyd Miles",
    role: "Education Coordinator",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-06/person_1.png",
    rating: 5,
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-06/person_1.png",
    rating: 5,
    text: "The platform exceeded all our expectations. Implementation was smooth and the results were immediate. Our team productivity increased by 40%!",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-06/person_1.png",
    rating: 4,
    text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help. Best investment we made this year.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-06/person_1.png",
    rating: 5,
    text: "Outstanding service and incredible results! The platform is intuitive, powerful, and has streamlined our entire marketing operations.",
  },
  {
    id: 5,
    name: "James Anderson",
    role: "CEO & Founder",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-06/person_1.png",
    rating: 5,
    text: "Game-changing solution for our business. The ROI was evident within the first month. Couldn't be happier with our decision to switch.",
  },
];
