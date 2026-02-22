"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Carousel } from "@/components/retroui/Carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

export default function TestimonialSeven() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className="min-h-screen bg-[#5F4FE6] flex items-center py-20 px-4">
      <div className="container mx-auto md:px-0">
        <header className="flex flex-col mb-16 gap-4">
          <Text as="h1" className="font-sans text-center text-white">
            Customer Stories
          </Text>
          <Text as="h4" className="font-sans text-center text-white/90">
            See how our platform has transformed businesses across industries
          </Text>
        </header>

        <div className="relative max-w-7xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="p-4 md:p-8"
          >
            <Carousel.Content>
              {testimonials.map((testimonial) => (
                <Carousel.Item
                  key={testimonial.id}
                  className="md:basis-1/2"
                >
                  <Card className="relative flex flex-col h-full min-h-[300px] overflow-visible bg-[#FCFFE7] p-8 shadow-lg">
                    <div className="absolute -top-12 right-6 z-10 hidden md:block">
                      <img
                        src="/testimonial/quote-icon-02.png"
                        alt="Quotation marks"
                        width={100}
                        height={100}
                      />
                    </div>

                    <Card.Header className="flex items-start gap-x-6 mb-6 p-0">
                      <div className="flex items-center gap-x-5">
                        <div className="w-20 h-20">
                          <img
                            src="/testimonial/avatar-02.png"
                            alt={`${testimonial.name} avatar`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="grow min-w-0">
                          <Card.Title className="text-2xl font-sans font-bold mb-1 truncate text-black">
                            {testimonial.name}
                          </Card.Title>
                          <Card.Description className="text-lg text-gray-700">
                            {testimonial.role}
                          </Card.Description>
                        </div>
                      </div>
                    </Card.Header>

                    <hr className="border-t-2 border-black mb-6" />

                    <Text as="h5" className="font-sans leading-relaxed text-gray-900">
                      {testimonial.text}
                    </Text>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel.Content>
          </Carousel>
        </div>

        <nav
          className="flex justify-center items-center gap-x-10 mt-8"
          aria-label="Testimonials navigation"
        >
          <Button
            variant="default"
            onClick={() => api?.scrollPrev()}
            className="bg-[#C4FF83] hover:bg-[#C4FF83] py-2"
            aria-label="Previous testimonials"
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="default"
            onClick={() => api?.scrollNext()}
            className="bg-[#C4FF83] hover:bg-[#C4FF83] py-2"
            aria-label="Next testimonials"
          >
            <ArrowRight />
          </Button>
        </nav>
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
