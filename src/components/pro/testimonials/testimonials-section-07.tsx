"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";

export default function TestimonialNine() {
  const [current, setCurrent] = React.useState(0);
  const [fading, setFading] = React.useState(false);

  const navigate = (direction: "prev" | "next") => {
    setFading(true);
    setTimeout(() => {
      setCurrent((prev) =>
        direction === "prev"
          ? (prev - 1 + testimonials.length) % testimonials.length
          : (prev + 1) % testimonials.length
      );
      setFading(false);
    }, 250);
  };

  const testimonial = testimonials[current];

  return (
      <section className="max-w-3xl mx-auto w-full px-4 py-20 mx-auto">
        <div className="relative">
          {/* Decorative quote */}
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-[250px] leading-none font-serif text-black/5 select-none pointer-events-none">
            &ldquo;
          </div>

          <div
            className={`relative text-center flex flex-col items-center gap-10 transition-opacity duration-250 ${fading ? "opacity-0" : "opacity-100"}`}
          >
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 text-black stroke-1 ${
                    i < testimonial.rating ? "fill-primary" : "fill-muted"
                  }`}
                />
              ))}
            </div>

            <Text
              className="text-xl lg:text-2xl leading-relaxed text-neutral-800"
            >
              &ldquo;{testimonial.text}&rdquo;
            </Text>

            <div className="flex flex-col items-center gap-3">
              <Avatar className="size-16 bg-primary">
                <Avatar.Image src={testimonial.avatar} alt={testimonial.name} />
                <Avatar.Fallback>
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
              <div>
                <Text as="h4" className="font-bold font-sans">
                  {testimonial.name}
                </Text>
                <Text className="text-muted-foreground text-sm">
                  {testimonial.role}
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => navigate("prev")}
            className="size-10 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="size-5" />
          </button>

          <Text className="font-mono text-sm tabular-nums min-w-[4rem] text-center">
            {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </Text>

          <button
            onClick={() => navigate("next")}
            className="size-10 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </section>
  );
}

export const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Education Coordinator",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-01/person_1.png",
    rating: 5,
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-01/person_2.png",
    rating: 5,
    text: "The platform exceeded all our expectations. Implementation was smooth and the results were immediate. Our team productivity increased by 40%!",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-01/person_3.png",
    rating: 4,
    text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help. Best investment we made this year.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-01/person_1.png",
    rating: 3,
    text: "Outstanding service and incredible results! The platform is intuitive, powerful, and has streamlined our entire marketing operations.",
  },
  {
    id: 5,
    name: "James Anderson",
    role: "CEO & Founder",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-01/person_2.png",
    rating: 5,
    text: "Game-changing solution for our business. The ROI was evident within the first month. Couldn't be happier with our decision to switch.",
  },
];