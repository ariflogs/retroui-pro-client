"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

export default function TestimonialFive() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-max bg-[#5F4FE6] relative overflow-clip flex items-center justify-center py-20 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Content */}
          <div className="w-full md:max-w-md flex flex-col justify-between gap-8 md:gap-80">
            <Text
              as="h1"
              className="uppercase text-white text-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              WHAT THEY SAY
              <br />
              ABOUT US?
            </Text>

            <div className="space-y-7">
              <Text
                as="p"
                className="text-white/90 text-base md:text-lg leading-relaxed"
              >
                {currentTestimonial.text}
              </Text>

              <div className="flex gap-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-8 h-8 stroke-1 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] ${
                      index < currentTestimonial.rating
                        ? "fill-[#C4FF83] "
                        : "fill-white "
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-10 items-center justify-end">
            {/* Avatar Circle */}
            <div className="hidden md:block absolute -top-40 -right-40 w-[650px] h-[650px]">
              <div className="border-40 border-[#C4FF83] rounded-full shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="border-3 border-black rounded-full">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="block md:hidden size-80">
              <div className="border-30 md:border-40 border-[#C4FF83] rounded-full shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="border-3 border-black rounded-full">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="text-center md:text-end text-white">
              <Text as="h1" className="font-bold font-sans mb-2 text-white">
                {currentTestimonial.name}
              </Text>
              <Text as="h3" className="font-sans text-white">
                {currentTestimonial.role}
              </Text>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="default"
              onClick={() => setCurrentIndex(index)}
              className={`w-6 h-6 p-0 mx-2 cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "bg-[#C4FF83]" : "bg-muted"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
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

