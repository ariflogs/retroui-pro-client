"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Carousel } from "@/components/retroui/Carousel";

export default function TestimonialThree() {
  return (
    <section className="min-h-screen bg-white flex items-center py-20 md:py-28">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-5 items-start justify-between mb-12 px-3">
          <div className="max-w-3xl">
            <Text as="h1" className="font-bold mb-4">
              Trusted By Thousand
            </Text>
            <Text as="p" className="text-lg">
              From solo entrepreneurs to Fortune 500 companies, everyone loves
              our platform
            </Text>
          </div>
        </div>

        {/* Testimonial Cards */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="px-3"
        >
          <Carousel.Content>
            {testimonials.map((testimonial) => (
              <Carousel.Item
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="flex flex-col p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-20 h-20 shrink-0">
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
                      <Text as="h3" className="font-bold font-sans mb-1">
                        {testimonial.name}
                      </Text>
                      <Text className="text-muted-foreground">
                        {testimonial.role}
                      </Text>
                    </div>
                  </div>

                  <Text className="text-gray-700 leading-relaxed flex-1">
                    {testimonial.text}
                  </Text>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel.Content>
          <Carousel.Previous />
          <Carousel.Next />
        </Carousel>
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