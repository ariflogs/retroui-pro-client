"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Card } from "@/components/retroui/Card";

export default function TestimonialNine() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="h-[800px] bg-[#5F4FE6] relative overflow-clip px-4 py-20">
      {/* Background Decoration */}
      <div className="h-[800px] w-[800px] rounded-full bg-white/10 absolute -right-1/10 -bottom-1/10"></div>

      <div className="container mx-auto w-full h-full max-w-7xl relative">
        <div className="absolute -top-10 right-5 md:right-10 z-20">
          <Button
            onClick={handleNext}
            variant="default"
            size="icon"
            className="border-3 rounded-full p-4"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-10 h-10" strokeWidth={2} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center h-full">
          <div className="flex flex-col justify-between h-full">
            <Text
              as="h1"
              className="font-normal text-white text-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              WHAT THEY SAY
              <br />
              ABOUT US?
            </Text>

            <Card className="p-8 rounded-xl relative">
              <div className="absolute -top-10 -left-10 z-10 hidden md:block">
                <img
                  src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-09/quote.svg"
                  alt="Quotation marks"
                  className="size-25"
                />
              </div>
              <Text
                className="text-black text-lg lg:text-xl leading-relaxed"
              >
                {currentTestimonial.text}
              </Text>

              <div className="absolute -bottom-10 -right-10 z-10 -rotate-y-180 hidden md:block">
                <img
                  src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-09/quote.svg"
                  alt="Quotation marks"
                  width={100}
                  height={100}
                />
              </div>
            </Card>
          </div>

          {/* Right Side - Image and Info Card */}
          <div className="flex flex-col justify-center items-end h-full relative">
              <Card className="w-full p-4 rounded-xl absolute">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${index < currentTestimonial.rating
                        ? "fill-[#6366F1] text-[#6366F1]"
                        : "fill-gray-300 text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <Text
                  as="h3"
                  className="font-sans font-bold text-2xl mb-1 text-black"
                >
                  {currentTestimonial.name}
                </Text>
                <Text as="p" className="text-gray-600 text-sm">
                  {currentTestimonial.role}
                </Text>
              </Card>
              <div className="w-[500px] h-[500px]">
                <div className="border-4 border-black rounded-full">
                  <div className="border-30 border-[#C4FF83] rounded-full shadow-xl overflow-hidden">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
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
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-09/sabbir.jpg",
    rating: 5,
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-09/sabbir.jpg",
    rating: 5,
    text: "The platform exceeded all our expectations. Implementation was smooth and the results were immediate. Our team productivity increased by 40%!",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-09/sabbir.jpg",
    rating: 4,
    text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help. Best investment we made this year.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-09/sabbir.jpg",
    rating: 5,
    text: "Outstanding service and incredible results! The platform is intuitive, powerful, and has streamlined our entire marketing operations.",
  },
  {
    id: 5,
    name: "James Anderson",
    role: "CEO & Founder",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-09/sabbir.jpg",
    rating: 5,
    text: "Game-changing solution for our business. The ROI was evident within the first month. Couldn't be happier with our decision to switch.",
  },
];