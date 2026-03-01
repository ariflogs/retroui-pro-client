import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";

const testimonials = [
  {
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-02/person_1.png",
    name: "Alex Johnson",
    affiliation: "Neighborhood",
    rating: 5,
    text: "Creating my own mobile app is super easy now, thanks to Circle's awesome assistive tech!",
  },
  {
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-02/person_1.png",
    name: "Jamie Lee",
    affiliation: "Group",
    rating: 5,
    text: "Making my own mobile app is a breeze these days, all thanks to Circle's handy assistive tools!",
  },
  {
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-02/person_1.png",
    name: "Chris Taylor",
    affiliation: "Collective",
    rating: 4,
    text: "Building my own mobile app is a piece of cake now, thanks to Circle's fantastic assistive technologies!",
  },
  {
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-02/person_1.png",
    name: "Jordan Smith",
    affiliation: "Crew",
    rating: 5,
    text: "Creating my own mobile app is super simple these days, thanks to Circle's amazing assistive tech!",
  },
];

export default function TestimonialsSectionTwo() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <Text as="h2" className="text-center mb-24">
        Here's what folks are saying about Circle!
      </Text>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col items-center gap-8">
            {/* 5 star rating */}
            <div className="flex gap-2">
              {[...Array(t.rating)].map((_, i) => (
                <img
                  key={i}
                  src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-02/star.svg"
                  className="size-10"
                />
              ))}
            </div>

            {/* Review text + profile */}
            <div className="flex flex-col items-center gap-4 w-full">
              <Text className="text-center text-lg font-medium">
                {t.text}
              </Text>

              <div className="flex items-center gap-5">
                <Avatar className="size-16 border-[2.5px] bg-primary shrink-0">
                  <Avatar.Image src={t.avatar} alt={t.name} />
                  <Avatar.Fallback>{t.name.split(" ").map((n) => n[0]).join("")}</Avatar.Fallback>
                </Avatar>
                <div>
                  <Text as="h3">{t.name}</Text>
                  <Text>{t.affiliation}</Text>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
