"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Carousel } from "@/components/retroui/Carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

export default function TestimonialFour() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className="min-h-screen bg-white flex items-center py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-0">
        <header className="flex flex-col mb-16 gap-4">
          <Text as="h1" className="uppercase text-center">
            Customer Stories
          </Text>
          <Text as="h4" className="font-sans text-center">
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
                  <Card className="relative flex flex-col h-full min-h-[300px] overflow-visible p-8 shadow-lg">
                    <div className="absolute -top-12 right-6 z-10 hidden md:block">
                      <img
                        src="/testimonial/quote-icon.png"
                        alt="Quotation marks"
                        width={100}
                        height={100}
                      />
                    </div>

                    <Card.Header className="flex items-start gap-x-6 mb-6">
                      <div className="flex items-center gap-x-5">
                        <Avatar className="w-20 h-20 shadow-md">
                          <Avatar.Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                          />
                          <Avatar.Fallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()}
                          </Avatar.Fallback>
                        </Avatar>
                        <div className="grow min-w-0">
                          <Card.Title className="text-2xl font-sans font-bold mb-1 truncate">
                            {testimonial.name}
                          </Card.Title>
                          <Card.Description className="text-lg text-muted-foreground">
                            {testimonial.role}
                          </Card.Description>
                        </div>
                      </div>
                    </Card.Header>

                    <Text as="h5" className="font-sans leading-relaxed">
                      <span className="font-bold">"</span>
                      {testimonial.text}
                      <span className="font-bold">"</span>
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
            aria-label="Previous testimonials"
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="default"
            onClick={() => api?.scrollNext()}
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
