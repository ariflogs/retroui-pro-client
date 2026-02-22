import { createFileRoute } from "@tanstack/react-router";
import TestimonialsSectionOne from "@/components/pro/testimonials/testimonials-section-01";
import TestimonialsSectionTwo from "@/components/pro/testimonials/testimonials-section-02";
import TestimonialsSectionThree from "@/components/pro/testimonials/testimonials-section-03";
import TestimonialsSectionFour from "@/components/pro/testimonials/testimonials-section-04";
import TestimonialsSectionFive from "@/components/pro/testimonials/testimonials-section-05";
import TestimonialsSectionSix from "@/components/pro/testimonials/testimonials-section-06";
import TestimonialsSectionSeven from "@/components/pro/testimonials/testimonials-section-07";
import TestimonialsSectionEight from "@/components/pro/testimonials/testimonials-section-08";
import TestimonialsSectionNine from "@/components/pro/testimonials/testimonials-section-09";
import TestimonialsSectionTen from "@/components/pro/testimonials/testimonials-section-10";

export const Route = createFileRoute("/demo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container space-y-36 mx-auto">
      <TestimonialsSectionOne />
      <TestimonialsSectionTwo />
      <TestimonialsSectionThree />
      <TestimonialsSectionFour />
      <TestimonialsSectionFive />
      <TestimonialsSectionSix />
      <TestimonialsSectionSeven />
      <TestimonialsSectionEight />
      <TestimonialsSectionNine />
      <TestimonialsSectionTen />
    </div>
  );
}
