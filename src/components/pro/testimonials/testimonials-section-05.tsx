import { Avatar } from "@/components/retroui/Avatar";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Carousel } from "@/components/retroui/Carousel";

export default function TestimonialFive() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      {/* Testimonial Cards */}
      <Carousel
        opts={{ align: "start", loop: true }}
      >
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="max-w-3xl">
              <Text as="h2" className="text-4xl lg:text-5xl mb-2">
                Trusted By Thousands
              </Text>
              <Text className="text-lg">
                From solo entrepreneurs to Fortune 500 companies, everyone loves
                our platform
              </Text>
            </div>
          </div>

          <div className="flex gap-6">
            <Carousel.Previous variant="default" className="size-12 border-3 static translate-none hover:translate-y-1 active:translate-y-2" />
            <Carousel.Next variant="default" className="size-12 border-3 static translate-none hover:translate-y-1 active:translate-y-2" />
          </div>
        </div>


        <Carousel.Content className="gap-6">
          {testimonials.map((testimonial) => (
            <Carousel.Item
              key={testimonial.id}
              className="md:basis-1/2 lg:basis-2/5 mb-4"
            >
              <Card className="flex flex-col p-6 h-full shadow-lg border-3">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="size-18 border-3 shrink-0 bg-accent">
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
                    <Text as="h3">
                      {testimonial.name}
                    </Text>
                    <Text className="text-muted-foreground font-medium text-sm">
                      {testimonial.role}
                    </Text>
                  </div>
                </div>

                <Text className="text-lg leading-relaxed flex-1">
                  {testimonial.text}
                </Text>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel.Content>

      </Carousel>
    </section>
  );
}

export const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Education Coordinator",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-05/person_1.png",
    rating: 5,
    text: "We went from struggling with manual processes to having a fully automated system in just 2 weeks. The transformation has been absolutely mind-blowing!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-05/person_1.png",
    rating: 5,
    text: "The platform exceeded all our expectations. Implementation was smooth and the results were immediate. Our team productivity increased by 40%!",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-05/person_1.png",
    rating: 4,
    text: "Revolutionary product that transformed our workflow. The support team is exceptional and always ready to help. Best investment we made this year.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-05/person_1.png",
    rating: 5,
    text: "Outstanding service and incredible results! The platform is intuitive, powerful, and has streamlined our entire marketing operations.",
  },
  {
    id: 5,
    name: "James Anderson",
    role: "CEO & Founder",
    avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/testimonials/testimonials-section-05/person_1.png",
    rating: 5,
    text: "Game-changing solution for our business. The ROI was evident within the first month. Couldn't be happier with our decision to switch.",
  },
];