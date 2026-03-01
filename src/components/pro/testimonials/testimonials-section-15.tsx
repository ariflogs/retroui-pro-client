"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Carousel } from "@/components/retroui/Carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
}

const TestimonialCard = ({ name, role, image, text }: TestimonialCardProps) => {
  return (
    <div className="relative flex flex-col border-[3px] border-black rounded-xl overflow-hidden shadow-lg aspect-[1/1] p-6 lg:p-10">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={`${name} background`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative mt-auto bg-white border-2 p-4 rounded-xl">
        <blockquote className="text-lg font-medium mb-4">
          <span className="text-2xl">“</span>
          {text}
          <span className="text-2xl">”</span>
        </blockquote>

        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Text as="h4">
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

export default function TestimonialFifteen() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className="bg-[#f9f5f2] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex flex-col text-center gap-2">
            <Text className="text-lg">
              What Our Customers Say
            </Text>
            <Text as="h2" className="text-4xl lg:text-5xl">
              Read our Success story
            </Text>
          </div>
        </div>

        <div className="mb-8">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <Carousel.Content className="-ml-8">
              {testimonials.map((testimonial) => (
                <Carousel.Item
                  key={testimonial.id}
                  className="pl-0 md:basis-1/2 pb-4 pl-8 pr-2"
                >
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      image={testimonial.image}
                      text={testimonial.text}
                    />
                </Carousel.Item>
              ))}
            </Carousel.Content>
          </Carousel>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center md:justify-between">
          <div className="flex gap-6">
            <Button
              onClick={() => api?.scrollPrev()}
              className="bg-[#e7f193] hover:bg-[#e7f193] border-[3px] rounded-xl h-14 px-6"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-6 h-6 stroke-3" />
            </Button>
            <Button
              onClick={() => api?.scrollNext()}
              className="bg-[#e7f193] hover:bg-[#e7f193] border-[3px] rounded-xl h-14 px-6"
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-6 h-6 stroke-3" />
            </Button>
          </div>

          {/* More Stories Button */}
          <Button
            className="bg-[#c4a1ff] hover:bg-[#c4a1ff] border-[3px] border-black rounded-xl h-14 px-6 text-lg"
          >
            More Success Stories
          </Button>
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
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-14/person_2.png",
    text: "We went from struggling to having a fully automated system in just 2 weeks.",
  },
];
