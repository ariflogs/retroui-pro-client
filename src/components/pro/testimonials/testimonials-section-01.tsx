import React from "react";
import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>
)

const testimonials = [
  {
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-01/person_1.png",
    rating: 4,
    name: "Michael Thompson",
    text: "The service provided was exceptional, making my experience seamless and enjoyable. I couldn't have asked for a better team to work with!",
  },
  {
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-01/person_2.png",
    rating: 5,
    name: "Sarah Johnson",
    text: "From start to finish, the professionalism and attention to detail were outstanding. I highly recommend their services!",
  },
  {
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-01/person_3.png",
    rating: 3,
    name: "Emily Carter",
    text: "Working with this team transformed our project. Their insights and support were invaluable, leading to great results!",
  },
];

export default function TestimonialsSectionOne() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <Text
        as="h2"
        className="text-center mb-20"
      >
        Hear what our clients have to say!
      </Text>

      {/* Three columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-1 flex-col items-center gap-6"
          >
            {/* Circular avatar */}
            <Avatar className="size-40 border-2 bg-primary">
              <Avatar.Image src={t.avatar} alt={t.name} />
              <Avatar.Fallback>{t.name.split(" ").map((n) => n[0]).join("")}</Avatar.Fallback>
            </Avatar>

            {/* Name, stars, text */}
            <div className="flex flex-col items-center text-center gap-4 w-full">
              <Text
                as="h3"
                className="leading-none"
              >
                {t.name}
              </Text>

              {/* Star rating image */}
              <div className="flex gap-1 relative">
                {[...Array(t.rating)].map((_, i) => (
                  <img key={i} src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-01/active_star.svg" className="size-7" />
                ))}
                {[...Array(5 - t.rating)].map((_, i) => (
                  <img key={i} src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-01/inactive_star.svg" className="size-7" />
                ))}
              </div>

              <Text>
                "{t.text}"
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
