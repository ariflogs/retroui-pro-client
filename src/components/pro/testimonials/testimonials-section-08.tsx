"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Carousel } from "@/components/retroui/Carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

export default function TestimonialEight() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className="min-h-screen bg-[#5F4FE6] items-center py-20 px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Text as="h2" className="text-white text-4xl lg:text-5xl font-medium">
            Customer Stories
          </Text>
          <Text className="text-white/90 text-lg">
            See how our platform has transformed businesses across industries
          </Text>
        </div>

        <div className="relative max-w-7xl mx-auto mb-8">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
          >
            <Carousel.Content className="m-0">
              {testimonials.map((testimonial) => (
                <Carousel.Item
                  key={testimonial.id}
                  className="md:basis-1/2 px-4 py-8"
                >
                  <Card className="relative flex flex-col h-full min-h-[300px] overflow-visible bg-[#FCFFE7] p-8 shadow-lg">
                    <div className="absolute -top-13 right-6 hidden md:block">
                      <img
                        src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-08/quote.png"
                        alt="Quotation marks"
                        width={100}
                        height={100}
                      />
                    </div>

                    <Card.Header className="flex items-start gap-x-6 mb-6 p-0">
                      <div className="flex items-center gap-x-5">
                        <div className="w-20 h-20">
                          <img
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="grow min-w-0">
                          <Card.Title className="mb-0">
                            {testimonial.name}
                          </Card.Title>
                          <Card.Description className="text-lg">
                            {testimonial.role}
                          </Card.Description>
                        </div>
                      </div>
                    </Card.Header>

                    <hr className="border-t-2 border-black mb-6" />

                    <Text className="text-lg leading-relaxed">
                      {testimonial.text}
                    </Text>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel.Content>
          </Carousel>
        </div>

        <div
          className="flex justify-center items-center gap-8"
          aria-label="Testimonials navigation"
        >
          <Button
            variant="default"
            onClick={() => api?.scrollPrev()}
            className="bg-[#C4FF83] hover:bg-[#C4FF83] py-3 px-5"
            aria-label="Previous testimonials"
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="default"
            onClick={() => api?.scrollNext()}
            className="bg-[#C4FF83] hover:bg-[#C4FF83] py-3 px-5"
            aria-label="Next testimonials"
          >
            <ArrowRight />
          </Button>
        </div>
    </section>
  );
}

export const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Education Coordinator",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-08/person_1.png",
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-08/person_2.png",
    text: "The platform exceeded all our expectations. Implementation was smooth and the results were immediate. Our team productivity increased by 40%!",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-08/person_1.png",
    text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help. Best investment we made this year.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-08/person_2.png",
    text: "Outstanding service and incredible results! The platform is intuitive, powerful, and has streamlined our entire marketing operations.",
  },
  {
    id: 5,
    name: "James Anderson",
    role: "CEO & Founder",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-08/person_1.png",
    text: "Game-changing solution for our business. The ROI was evident within the first month. Couldn't be happier with our decision to switch.",
  },
];
