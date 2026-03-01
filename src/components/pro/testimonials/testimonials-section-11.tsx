"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

const stats = [
  { value: "149+", label: "Global Reach" },
  { value: "$569", label: "Total Revenue" },
];

export default function TestimonialEleven() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const navigate = (dir: "prev" | "next") => {
    setFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        dir === "prev"
          ? prev === 0 ? testimonials.length - 1 : prev - 1
          : prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setFading(false);
    }, 250);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative min-h-screen bg-[#f9f5f2] py-20 overflow-hidden flex items-center">
      <div className="absolute right-0 top-0 h-full w-32 hidden md:flex flex-col justify-around items-center py-10">
        <img
          src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_1.svg"
          alt="decoration element"
          className="w-full h-auto"
        />
        <img
          src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_2.svg"
          alt="decoration element"
          className="w-full h-auto"
        />
        <img
          src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_3.svg"
          alt="decoration element"
          className="w-full h-auto"
        />
        <img
          src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_4.svg"
          alt="decoration element"
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-4xl mx-auto w-full z-1 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Text as="h1" className="font-bold text-3xl md:text-4xl lg:text-5xl mb-2 capitalize">
            Proven Results & Real Experience
          </Text>
          <Text className="text-lg md:text-xl">
            See how our platform has transformed businesses across industries
          </Text>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 mb-6">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="border-3 rounded-xl col-span-1 lg:col-span-2 p-4 text-center"
            >
              <Text className="font-bold text-lg lg:text-xl whitespace-nowrap leading-none">
                <span className="text-[#599d77]">{stat.value}</span>{" "}
                {stat.label}
              </Text>
            </Card>
          ))}

          <Button
            onClick={() => navigate("prev")}
            variant="outline"
            className="col-span-1 border-3 rounded-xl h-14 justify-center bg-white"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-8" strokeWidth={2} />
          </Button>
          <Button
            onClick={() => navigate("next")}
            variant="outline"
            className="col-span-1 border-3 rounded-xl h-14 justify-center bg-white"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-8" strokeWidth={2} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card className="border-3 rounded-xl overflow-hidden h-64 md:h-80 lg:h-96 lg:col-span-2 bg-[#e8d5c0]">
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              width={313}
              height={314}
              className={`w-full h-full object-cover object-top transition-opacity duration-[250ms] ${fading ? "opacity-0" : "opacity-100"}`}
            />
          </Card>

          <Card className="lg:col-span-3 bg-white border-3 rounded-xl p-6 lg:p-8">
            <div className={`transition-opacity duration-[250ms] ${fading ? "opacity-0" : "opacity-100"}`}>
              <Text as="h3" className="font-bold text-2xl lg:text-3xl mb-1">
                {currentTestimonial.name}
              </Text>
              <Text className="text-sm lg:text-base text-muted-foreground capitalize mb-6">
                {currentTestimonial.role}
              </Text>
            </div>

            <Text className={`text-lg lg:text-xl leading-relaxed transition-opacity duration-[250ms] ${fading ? "opacity-0" : "opacity-100"}`}>
              {currentTestimonial.text}
            </Text>
          </Card>
        </div>
      </div>
    </section>
  );
}

export const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Education Coordinator at Dribbble",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/person_1.png",
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/person_2.png",
    text: "The platform exceeded all our expectations. Implementation was smooth and the results were immediate. Our team productivity increased by 40%!",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/person_3.png",
    text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help. Best investment we made this year.",
  },
];
