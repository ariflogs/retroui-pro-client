"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export default function TestimonialTwelve() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="min-h-screen bg-[#f9f5f2] px-4 py-24 overflow-hidden flex items-center">
      <div className="flex flex-col gap-14 items-center w-full max-w-6xl mx-auto">
        <div className="flex flex-col gap-16 items-start w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6">
            <div>
              <Text as="h2" className="font-normal">
                Proven Results & Real Experience
              </Text>
              <Text className="text-lg">
                See how our platform has transformed businesses across industries
              </Text>
            </div>
            <Button
              onClick={() => setSelected((prev) => (prev + 1) % testimonials.length)}
              variant="outline"
              className="bg-[#ffe75a] border-3 border-black rounded-full w-16 h-16 shrink-0 hover:opacity-90 transition-opacity"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-7 h-7" strokeWidth={2.5} />
            </Button>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap gap-6 w-full">
            {testimonials.map((t) => (
              <Card
                key={t.id}
                onClick={() => setSelected(t.id)}
                className={`relative bg-white border-3 rounded-xl p-4 lg:p-6 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 ease-in-out shrink-0 h-[500px] ${selected === t.id
                  ? "w-full md:w-[calc(50%-12px)]"
                  : "w-[calc(50%-12px)] md:w-[calc(25%-18px)]"
                  }`}
              >
                <div className="flex flex-col gap-6 z-1 relative">
                  <Text as="h3" className="font-normal">
                    {t.title}
                  </Text>

                  <div
                    className={`flex flex-col gap-6 transition-opacity duration-300 ${selected === t.id ? "opacity-100 delay-200 visible" : "hidden opacity-0 pointer-events-none"
                      }`}
                  >
                    <Text className="text-base md:text-lg">{t.text}</Text>
                  </div>
                </div>

                <div className="flex flex-col gap-4 z-1 relative">
                  <div className="border-3 rounded-lg w-28 h-28 overflow-hidden bg-[#f9f5f2] shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={121}
                      height={121}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Text as="h4" className="font-normal">
                      {t.name}
                    </Text>
                    <Text className="text-sm text-muted-foreground">
                      {t.role}
                    </Text>
                  </div>
                </div>

                {/* Decorative */}
                <img
                  src={t.decorSrc}
                  alt="card-decoration"
                  width={238}
                  height={232}
                  className={`absolute top-0 -right-4 pointer-events-none object-contain transition-all duration-500 ease-in-out ${selected === t.id
                    ? "w-30 md:w-48 h-30 md:h-48"
                    : "w-24 md:w-32 h-24 md:h-32"
                    }`}
                  style={{
                    transform: selected === t.id
                      ? "translate(0, calc(500px - 100%)) rotate(0deg)"
                      : "translate(0, -2rem) rotate(90deg)",
                    transition: "all 500ms ease-in-out",
                  }}
                />
              </Card>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 items-center">
          {testimonials.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t.id)}
              className={`rounded-full transition-all duration-300 h-2 ${selected === t.id ? "w-80 bg-[#599d77]" : "w-2 bg-[#599d77]/30"
                }`}
              aria-label={`Testimonial ${t.id + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const testimonials = [
  {
    id: 0,
    title: '"Mind Blown"',
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing!",
    rating: 4,
    name: "Floyd Miles",
    role: "Education Coordinator at Dribbble",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/person_1.png",
    decorSrc: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_1.svg",
  },
  {
    id: 1,
    title: '"The Time Machine"',
    text: "The platform exceeded all our expectations. Implementation was smooth and the results were immediate. Our team productivity increased by 40%!",
    rating: 5,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/person_2.png",
    decorSrc: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_2.svg",
  },
  {
    id: 2,
    title: '"Helpful Innovative"',
    text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help. Best investment we made this year.",
    rating: 5,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/person_3.png",
    decorSrc: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_3.svg",
  },
];
