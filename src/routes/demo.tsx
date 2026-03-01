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
import TestimonialsSectionEleven from "@/components/pro/testimonials/testimonials-section-11";
import TestimonialsSectionTwelve from "@/components/pro/testimonials/testimonials-section-12";
import TestimonialsSectionThirteen from "@/components/pro/testimonials/testimonials-section-13";
import TestimonialsSectionFourteen from "@/components/pro/testimonials/testimonials-section-14";
import TestimonialsSectionFifteen from "@/components/pro/testimonials/testimonials-section-15";
import { Text } from "@/components/retroui/Text";

export const Route = createFileRoute("/demo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container space-y-36 mx-auto">
      <Text as="h1">1</Text>
      <TestimonialsSectionOne />
      <Text as="h1">2</Text>
      <TestimonialsSectionTwo />
      <Text as="h1">3</Text>
      <TestimonialsSectionThree />
      <Text as="h1">4</Text>
      <TestimonialsSectionFour />
      <Text as="h1">5</Text>
      <TestimonialsSectionFive />
      <Text as="h1">6</Text>
      <TestimonialsSectionSix />
      <Text as="h1">7</Text>
      <TestimonialsSectionSeven />
      <Text as="h1">8</Text>
      <TestimonialsSectionEight />
      <Text as="h1">9</Text>
      <TestimonialsSectionNine />
      <Text as="h1">10</Text>
      <TestimonialsSectionTen />
      <Text as="h1">11</Text>
      <TestimonialsSectionEleven />
      <Text as="h1">12</Text>
      <TestimonialsSectionTwelve />
      <Text as="h1">13</Text>
      <TestimonialsSectionThirteen />
      <Text as="h1">14</Text>
      <TestimonialsSectionFourteen />
      <Text as="h1">15</Text>
      <TestimonialsSectionFifteen />
    </div>
  );
}
