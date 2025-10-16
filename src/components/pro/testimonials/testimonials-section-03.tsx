interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    quote: string;
    image: string;
    accentColor: string;
  }
  
  import { Avatar } from "@/components/retroui/Avatar";
  import { Card } from "@/components/retroui/Card";
  import { Text } from "@/components/retroui/Text";
  // TestimonialCard.tsx
  import React from "react";
  
  const QuoteIcon = () => (
    <svg
      className="w-12 h-12"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
  
  const TestimonialCard: React.FC<TestimonialProps> = ({
    name,
    role,
    company,
    quote,
    image,
    accentColor,
  }) => {
    return (
      <Card
        className={`relative rounded-2xl border-4 border-black 
            ${accentColor} shadow-lg`}
      >
        <div
          className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl 
            border-4 border-black transform rotate-6"
        >
          <QuoteIcon />
        </div>
  
        <Card.Content className="p-8 flex flex-col h-full">
          <p className="text-xl font-bold mb-8 leading-relaxed">{quote}</p>
  
          <div className="mt-auto flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl border-4 border-black overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-black text-xl">{name}</h3>
              <p className="font-bold">
                {role} @ {company}
              </p>
            </div>
          </div>
        </Card.Content>
      </Card>
    );
  };
  
  // FeaturedTestimonial.tsx
  const FeaturedTestimonial: React.FC<TestimonialProps> = ({
    name,
    role,
    company,
    quote,
    image,
    accentColor,
  }) => {
    return (
      <Card
        className={`relative rounded-2xl border-4 border-black ${accentColor}
            shadow-xl`}
      >
        <div
          className="absolute -top-12 -left-12 bg-accent p-6 rounded-2xl 
            border-4 border-black transform -rotate-6"
        >
          <QuoteIcon />
        </div>
  
        <Card.Content className="grid md:grid-cols-2 gap-12 items-center p-12">
          <div className="order-2 md:order-1">
            <Text className="text-3xl font-bold mb-8 leading-relaxed">
              {quote}
            </Text>
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20 rounded-2xl border-4 border-black overflow-hidden">
                <Avatar.Image
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </Avatar>
              <div>
                <h3 className="font-black text-2xl">{name}</h3>
                <p className="font-bold text-xl">
                  {role} @ {company}
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/company-logo.png"
              alt="Company"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </Card.Content>
      </Card>
    );
  };
  
  // TestimonialsSection.tsx
  const TestimonialsSectionThree = () => {
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "TechCorp",
        quote:
          "This product has completely transformed how we handle our workflow. The team productivity has increased by 200%!",
        image: "/sarah.jpg",
        accentColor: "bg-[#FF90E8]",
      },
      {
        name: "Mike Chen",
        role: "CEO",
        company: "StartupX",
        quote:
          "Implementing this solution was the best decision we made this year. Our customers love the new experience.",
        image: "/mike.jpg",
        accentColor: "bg-[#7DF9FF]",
      },
      {
        name: "Emma Davis",
        role: "Design Lead",
        company: "CreativeStudio",
        quote:
          "The attention to detail and customer support is unmatched. This is exactly what we needed!",
        image: "/emma.jpg",
        accentColor: "bg-[#98FB98]",
      },
      // Add more testimonials as needed
    ];
  
    return (
      <div className="min-h-screen bg-[#FFF5E4] p-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-black mb-6">
            <span
              className="bg-[#FF90E8] px-6 py-2 rounded-xl border-4 
                border-black inline-block transform -rotate-2"
            >
              Customer Love
            </span>
          </h1>
          <p className="text-2xl font-bold">
            See what our amazing customers have to say!
          </p>
        </div>
  
        {/* Featured Testimonial */}
        <div className="max-w-6xl mx-auto mb-16">
          <FeaturedTestimonial {...testimonials[0]} />
        </div>
  
        {/* Grid of Testimonials */}
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-12"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    );
  };
  
  export default TestimonialsSectionThree;
  