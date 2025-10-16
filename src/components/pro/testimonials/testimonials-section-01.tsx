import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    quote:
      "This platform has completely transformed how we build and deploy. Deployment time reduced from hours to minutes.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "SC",
    company_logo: "/techflow.svg", // Replace with actual logo path
    rating: 5,
  },
  {
    quote:
      "The developer experience is unmatched. It's like they took all our pain points and solved them one by one.",
    author: "Mark Reynolds",
    role: "Lead Developer",
    avatar: "MR",
    company_logo: "/startup.svg", // Replace with actual logo path
    rating: 5,
  },
  {
    quote:
      "We've cut our infrastructure costs by 60% while improving performance. The ROI is absolutely incredible.",
    author: "Jessica Park",
    role: "Engineering Manager",
    avatar: "JP",
    company_logo: "/enterprise.svg", // Replace with actual logo path
    rating: 5,
  },
];

const TestimonialsSectionOne = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="solid" className="inline-block mb-12">
            💬 Wall of Love
          </Badge>
          <Text as="h2" className="mb-4">
            Trusted by{" "}
            <span className="bg-primary px-3 border-2 border-black inline-block transform -rotate-1">
              thousands
            </span>{" "}
            of developers
          </Text>
          <Text className="text-lg font-medium text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our customers have to say
            about their experience.
          </Text>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16 border-4 border-black p-8 bg-primary shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-24 h-24 border-4 border-black bg-white flex items-center justify-center font-black text-3xl shrink-0">
              SC
            </div>
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-black" />
                ))}
              </div>
              <blockquote className="text-2xl font-bold">
                "This platform has completely transformed how we build and
                deploy. Deployment time reduced from hours to minutes. The
                developer experience is simply unmatched."
              </blockquote>
              <div className="border-l-4 border-black pl-4">
                <div className="font-black text-lg">Sarah Chen</div>
                <div className="font-medium">CTO at TechFlow</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={index}
              className="border-4 border-black bg-white p-8 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#FFE600] transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-black" />
                ))}
              </div>
              <blockquote className="text-lg font-medium mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-2 border-black bg-primary flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-black text-white shadow-primary shadow-lg hover:bg-black"
          >
            Read More Stories →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSectionOne;
