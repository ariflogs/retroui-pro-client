"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";
import { Carousel } from "@/components/retroui/Carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

export default function TestimonialNine() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <section className="min-h-screen bg-white flex items-center py-20">
      <div className="max-w-3xl mx-auto w-full px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Text as="h1" className="font-bold mb-4">
            What Our Clients Say
          </Text>
          <Text as="p" className="text-lg text-muted-foreground">
            Real stories from real customers
          </Text>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Decorative quote */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[160px] leading-none font-serif text-black/5 select-none pointer-events-none">
            &ldquo;
          </div>

          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="relative z-10"
          >
            <Carousel.Content>
              {testimonials.map((testimonial) => (
                <Carousel.Item key={testimonial.id} className="text-center px-4 md:px-12">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote text */}
                  <Text
                    as="h3"
                    className="font-sans font-normal text-xl md:text-2xl leading-relaxed mb-10 text-gray-800"
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </Text>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">
                    <Avatar className="w-16 h-16 border-2 border-black">
                      <Avatar.Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
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
                </Carousel.Item>
              ))}
            </Carousel.Content>
          </Carousel>
        </div>

        {/* Navigation with counter */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => api?.scrollPrev()}
            className="w-10 h-10 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <Text className="font-mono text-sm tabular-nums min-w-[4rem] text-center">
            {String(current).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </Text>

          <button
            onClick={() => api?.scrollNext()}
            className="w-10 h-10 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
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
    avatar: "/testimonial/avatar-01.png",
    rating: 5,
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "/testimonial/avatar-01.png",
    rating: 5,
    text: "The platform exceeded all our expectations. Implementation was smooth and the results were immediate. Our team productivity increased by 40%!",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    avatar: "/testimonial/avatar-01.png",
    rating: 4,
    text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help. Best investment we made this year.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "/testimonial/avatar-01.png",
    rating: 5,
    text: "Outstanding service and incredible results! The platform is intuitive, powerful, and has streamlined our entire marketing operations.",
  },
  {
    id: 5,
    name: "James Anderson",
    role: "CEO & Founder",
    avatar: "/testimonial/avatar-01.png",
    rating: 5,
    text: "Game-changing solution for our business. The ROI was evident within the first month. Couldn't be happier with our decision to switch.",
  },
];
