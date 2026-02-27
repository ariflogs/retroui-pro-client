"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Star, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";


export default function TestimonialTen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const currentTestimonial = testimonials[currentIndex];

    const navigateNext = () => {
        setFading(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            setFading(false);
        }, 250);
    };

    return (
        <section className="min-h-screen bg-[#599D77] py-20 px-4 relative overflow-clip flex items-center">
            <div className="absolute -top-5 -right-5 z-0">
                <img
                    src="/testimonial/green-bg.svg"
                    alt=""
                    className="w-full h-auto"
                />
            </div>
            <div className="max-w-7xl mx-auto z-10">
                <div className="text-center mb-16">
                    <Text as="h1" className="text-white font-bold font-sans mb-4">
                        Proven Results & Real Experience
                    </Text>
                    <Text as="h4" className="text-white font-sans">
                        See how our platform has transformed businesses across industries
                    </Text>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
                    {/* Stats Card 1 - Global Reach */}
                    <Card className="relative md:col-span-2 bg-[#F9F5F2] border-3 border-black rounded-xl p-6 overflow-clip">
                        <div className=" absolute -top-10 -right-10">
                            <img
                                src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-10/dec_3.svg"
                                alt="decoration element"
                                className="w-30 h-auto"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-[#D14D87]/20 flex items-center justify-center">
                                <TrendingUp
                                    className="w-7 h-7 text-[#D14D87]"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <div>
                                <Text as="h3" className="font-bold md:text-3xl font-sans">
                                    140+
                                </Text>
                                <Text as="p" className="text-black">
                                    Global Reach
                                </Text>
                            </div>
                        </div>
                    </Card>

                    {/* Stats Card 2 - Total Revenue */}
                    <Card className="relative md:col-span-2 bg-[#F9F5F2] border-3 rounded-xl p-6 overflow-clip">
                        <div className=" absolute -top-5 -right-5">
                            <img
                                src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-10/dec_2.svg"
                                alt="decoration element"
                                className="w-25 h-auto"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-[#5784BD]/20 flex items-center justify-center">
                                <DollarSign
                                    className="w-7 h-7 text-[#5784BD]"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <div>
                                <Text as="h3" className="font-bold md:text-3xl font-sans">
                                    568M
                                </Text>
                                <Text as="p" className="text-black">
                                    Total Revenue
                                </Text>
                            </div>
                        </div>
                    </Card>

                    <Button
                        onClick={navigateNext}
                        variant="outline"
                        className="w-full h-full bg-[#F9F5F2] border-3 rounded-xl flex justify-center cursor-pointer"
                        aria-label="Next testimonial"
                    >
                        <ArrowRight className="w-12 h-12 text-black" strokeWidth={2} />
                    </Button>

                    <Card className={`rounded-xl md:col-span-2 border-3 overflow-hidden h-64 md:h-96 transition-opacity duration-[250ms] ${fading ? "opacity-0" : "opacity-100"}`}>
                        <img
                            src={currentTestimonial.avatar}
                            alt="avatar"
                            className="w-full h-full object-cover"
                        />
                    </Card>

                    <Card className={`relative lg:col-span-3 bg-[#F9F5F2] border-3 rounded-xl p-8 overflow-clip transition-opacity duration-[250ms] ${fading ? "opacity-0" : "opacity-100"}`}>
                        <div className="absolute -top-10 -right-10">
                            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-10/dec_1.svg" alt="" className="w-40 h-auto" />
                        </div>
                        <div className="relative z-10">
                            <Text as="h3" className="font-bold md:text-3xl font-sans mb-1">
                                {currentTestimonial.name}
                            </Text>
                            <Text as="h4" className="text-muted-foreground mb-4 font-sans">
                                {currentTestimonial.role}
                            </Text>
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className={`w-5 h-5 ${index < currentTestimonial.rating
                                                ? "fill-[#599D77] text-[#599D77]"
                                                : "fill-none text-[#599D77]"
                                            }`}
                                    />
                                ))}
                            </div>
                            <Text as="h5" className="text-black leading-relaxed font-sans">
                                {currentTestimonial.text}
                            </Text>
                        </div>
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
        role: "Education Coordinator",
        avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-10/person_1.png",
        rating: 5,
        text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing!",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "Product Manager",
        avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-10/person_2.png",
        rating: 5,
        text: "The platform exceeded all our expectations. Implementation was smooth and the results were immediate. Our team productivity increased by 40%!",
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Chief Technology Officer",
        avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-10/person_1.png",
        rating: 4,
        text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help. Best investment we made this year.",
    },
    {
        id: 4,
        name: "Emily Rodriguez",
        role: "Marketing Director",
        avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-10/person_2.png",
        rating: 5,
        text: "Outstanding service and incredible results! The platform is intuitive, powerful, and has streamlined our entire marketing operations.",
    },
    {
        id: 5,
        name: "James Anderson",
        role: "CEO & Founder",
        avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-10/person_1.png",
        rating: 5,
        text: "Game-changing solution for our business. The ROI was evident within the first month. Couldn't be happier with our decision to switch.",
    },
];