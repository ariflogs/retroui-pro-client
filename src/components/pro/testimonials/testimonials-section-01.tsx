import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";

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
        className="text-center mb-24"
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
