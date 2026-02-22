import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 25"
    fill="currentColor"
  >
    <path d="M0 24.846V15.23c0-4.308 1.077-7.846 3.231-10.615C5.385 1.846 8.615.308 12.923 0l1.231 2.461c-3.077.616-5.384 1.847-6.923 3.693C5.692 8 4.923 10.154 4.923 12.615h5.539v12.231H0zm21.846 0V15.23c0-4.308 1.077-7.846 3.231-10.615C27.231 1.846 30.461.308 34.769 0L36 2.461c-3.077.616-5.385 1.847-6.923 3.693-1.539 1.846-2.308 4-2.308 6.461h5.538v12.231H21.846z" />
  </svg>
);

const testimonials = [
  {
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-03/person_1.png",
    name: "Floyd Miles",
    role: "Education Coordinator at Dribbble",
    text: "I was skeptical at first, but the results speak for themselves. The user interface is intuitive and support is top-notch.",
  },
  {
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-03/person_1.png",
    name: "Sarah Connor",
    role: "Product Manager at Notion",
    text: "Working with this platform has completely transformed how our team collaborates. The experience has been nothing short of amazing.",
  },
  {
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-03/person_1.png",
    name: "James Wilson",
    role: "Lead Designer at Figma",
    text: "The attention to detail and polish in this product is exceptional. It's clear the team cares deeply about the user experience.",
  },
  {
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-03/person_1.png",
    name: "Emily Chen",
    role: "CTO at Startup Hub",
    text: "From onboarding to daily use, every step has been seamless. This has become an essential part of our workflow.",
  },
];

export default function TestimonialsSectionThree() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-24 text-center">
        <Text>What Our Customers Say</Text>
        <Text as="h2">Read Our Success Story</Text>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col border-2 border-black rounded-3xl bg-card overflow-hidden"
          >
            {/* Body: quote icon + testimonial text */}
            <div className="flex items-start gap-4 p-8 h-full">
              <div className="shrink-0 size-16">
                <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-03/quote.svg" alt="quote" className="size-10" />
              </div>
              <Text className="text-lg">
                {t.text}
              </Text>
            </div>

            {/* Footer: avatar + name + role */}
            <div className="flex items-center border-t-2 gap-4">
              <div className="shrink-0 size-24 border-r-2 bg-primary overflow-hidden">
                <Avatar className="size-full border-none rounded-none">
                  <Avatar.Image src={t.avatar} alt={t.name} className="object-cover" />
                  <Avatar.Fallback className="rounded-none bg-primary">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </Avatar.Fallback>
                </Avatar>
              </div>
              <div className="flex flex-col gap-2">
                <Text as="h3" className="leading-none">{t.name}</Text>
                <Text className="capitalize text-sm">{t.role}</Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
