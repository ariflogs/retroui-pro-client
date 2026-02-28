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
    <section className="bg-[#5F4FE6] relative overflow-clip px-4 py-24">
      {/* Background Decoration */}
      <div className="h-[800px] w-[800px] rounded-full bg-white/10 absolute -right-1/10 -bottom-1/10"></div>

      <div className="container mx-auto w-full h-full max-w-7xl relative">
        <div className="flex justify-between mb-12">
          <Text
            as="h1"
            className="font-normal text-white text-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            WHAT THEY SAY
            <br />
            ABOUT US?
          </Text>

          <Button
            onClick={handleNext}
            size="icon"
            className="border-3 rounded-full p-4 shrink-0 size-18"
            aria-label="Next testimonial"
          >
            <ArrowRight className="size-12" strokeWidth={2} />
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:items-end h-full relative gap-8 lg:gap-12 px-8 md:px-12 xl:px-0">
          <Card className="p-8 rounded-xl relative w-full lg:max-w-[480px]">
            <div className="absolute -top-8 -left-8 lg:-top-14 lg:-left-14 md:block">
              <img
                src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-09/quote.svg"
                alt="Quotation marks"
                className="size-18 lg:size-25"
              />
            </div>
            <Text
              className="text-lg"
            >
              {currentTestimonial.text}
            </Text>

            <div className="absolute -bottom-8 -right-8 lg:-bottom-14 lg:-right-14 -rotate-y-180 md:block">
              <img
                src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-09/quote.svg"
                alt="Quotation marks"
                className="size-18 lg:size-25"
              />
            </div>
          </Card>


          <div className="relative flex">
            <Card className="w-full flex max-lg:gap-6 items-center p-4 rounded-xl lg:absolute w-full lg:max-w-[280px] top-12 lg:-left-[140px]">

              <div className="lg:hidden border-2 border-black rounded-full w-[100px] h-[100px]">
                <div className="border-8 border-[#C4FF83] rounded-full overflow-hidden">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
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
                  as="h3">
                  {currentTestimonial.name}
                </Text>
                <Text className="text-gray-600 font-medium text-sm">
                  {currentTestimonial.role}
                </Text>
              </div>

            </Card>

            <div className="hidden lg:block w-[300px] h-[300px] lg:w-[480px] lg:h-[480px]">
              <div className="border-4 border-black rounded-full">
                <div className="border-20 border-[#C4FF83] rounded-full overflow-hidden">
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
      </div >
    </section >
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