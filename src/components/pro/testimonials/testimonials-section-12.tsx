"use client";

import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Text } from "@/components/retroui/Text";

const testimonials = [
  {
    id: 0,
    title: '"Mind Blown"',
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing!",
    rating: 4,
    name: "Floyd Miles",
    role: "Education Coordinator at Dribbble",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/person_1.png",
    decorClass: "absolute bottom-0 right-0 w-[238px] h-[232px]",
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
    decorClass: "absolute top-[-65px] right-[-20px] w-[203px] h-[204px] rotate-[61.6deg]",
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
    decorClass: "absolute top-[-34px] right-[-20px] w-[142px] h-[142px]",
    decorSrc: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-11/dec_3.svg",
  },
];

export default function TestimonialsSection12() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-[#f9f5f2] px-8 lg:px-[133px] py-[56px] overflow-hidden">
      <div className="flex flex-col gap-[54px] items-center w-full">
        <div className="flex flex-col gap-[62px] items-start w-full">

          {/* Header */}
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-[10px]">
              <Text as="h2" className="capitalize">Proven Results & Real Experience</Text>
              <Text>See how our platform has transformed businesses across industries</Text>
            </div>
            <button
              onClick={() => setSelected((prev) => (prev + 1) % testimonials.length)}
              className="bg-[#ffe75a] border-[3px] border-black rounded-full shadow-[2px_2px_0px_0px_black] w-[75px] h-[74px] flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-[28px] h-[28px]" strokeWidth={2.5} />
            </button>
          </div>

          {/* Cards */}
          <div className="flex gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                onClick={() => setSelected(t.id)}
                className={`relative bg-white border-[3px] border-black rounded-[10px] shadow-[4px_4px_0px_0px_black] p-[40px] flex flex-col justify-between overflow-hidden cursor-pointer transition-[width] duration-500 ease-in-out h-[450px] ${
                  selected === t.id ? "w-[503px]" : "w-[240px]"
                }`}
              >
                {/* Top: title + body */}
                <div className="flex flex-col gap-[23px] z-10 relative">
                  <Text as="h3" className="font-bold">{t.title}</Text>

                  {/* Body text + stars — waits for card to expand, then fades in */}
                  <div
                    className={`flex flex-col gap-[23px] transition-opacity duration-300 pointer-events-none ${
                      selected === t.id ? "opacity-100 delay-200 pointer-events-auto" : "opacity-0"
                    }`}
                  >
                    <Text>{t.text}</Text>
                    <div className="flex gap-[4px]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-[23px] h-[23px] ${
                            i < t.rating ? "fill-[#599d77] text-[#599d77]" : "fill-none text-[#599d77]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom: author */}
                <div className="flex flex-col gap-[17px] z-10 relative">
                  <div className="border-[3px] border-black rounded-[5px] w-[121px] h-[121px] overflow-hidden bg-[#f9f5f2] shrink-0">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <Text as="h4" className="font-bold leading-none">{t.name}</Text>
                    <Text className="font-light text-sm capitalize mt-1">{t.role}</Text>
                  </div>
                </div>

                {/* Decorative */}
                <img src={t.decorSrc} alt="" className={`${t.decorClass} pointer-events-none object-contain`} />
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-3 items-center">
          {testimonials.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t.id)}
              className={`rounded-full transition-all duration-300 ${
                selected === t.id ? "w-8 h-3 bg-black" : "w-3 h-3 bg-black/30"
              }`}
              aria-label={`Testimonial ${t.id + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
