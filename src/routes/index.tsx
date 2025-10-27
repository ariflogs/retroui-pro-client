import { createFileRoute, Link } from "@tanstack/react-router";
import "../App.css";
import { Text } from "@/components/ui";
import { Badge } from "@/components/retroui/Badge";
import NeoBrutalistShowcase from "@/components/NeoBrutalistShowcase";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import TestimonialsSection from "@/components/Testimonials";

export const Route = createFileRoute("/")({
  component: Index,
});

const platforms = [
  { name: 'UI Blocks', icon: "/icons/ui_blocks.svg", link: '/blocks', color: 'bg-blue-300', badge: '', description: 'Get 100+ unique UI blocks that you can just copy & paste into your project.', features: ['100+ ready-to-use UI blocks', 'Built with React, TailwindCSS & TypeScript', '', 'New Updates Every Week'] },
  { name: 'Templates', icon: "/icons/templates.svg", link: '/templates', color: 'bg-blue-500', badge: '', description: 'Bold, unique & responsive website templates, built with React & Next.js.', features: ['20+ ready-to-use Webflow blocks', 'Copy & paste components', 'No coding required', 'New Updates Every Week'] },
  { name: 'Figma Kit', icon: "/logos/figma.png", link: '/figma', color: 'bg-purple-500', badge: 'Coming Soon', description: 'Love to customize? Get access to Figma versions of our components.', features: ['100+ ready-to-use Figma blocks', 'All components mobile responsive', 'Easily change colors and styles', 'New Updates Every Week'] }
];

function Index() {
  return (
    <div className="space-y-36">
      {/* Hero Section */}
      <section className="relative pt-36">
        <div className="container max-w-6xl relative mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-20 lg:-top-8 left-12">
            <img
              src="/icons/star_black_1.svg"
              height={40}
              width={40}
              alt="black star"
            />
          </div>
          <div className="absolute -top-14 lg:top-0 left-16">
            <img
              src="/icons/star_yellow_1.svg"
              height={36}
              width={36}
              alt="yellow star"
              className="shine"
            />
          </div>

          <div className="absolute hidden lg:block bottom-0 right-16">
            <img
              src="/icons/star_black_1.svg"
              height={40}
              width={40}
              alt="black star"
            />
          </div>
          <div className="absolute  hidden lg:block  bottom-8 right-20">
            <img
              src="/icons/star_yellow_1.svg"
              height={36}
              width={36}
              alt="yellow star"
              className="shine"
            />
          </div>

          {/* Hero content */}
          <div className="max-w-5xl text-center mx-auto">
            <div className="mb-12">
              <Badge variant="surface" className="rounded-full animate-bounce">
              New UI Blocks Every Week!
              </Badge>
            </div>
            <Text as="h1" className="mb-2">
              Not Every Website Has To <span className="text-outlined italic">Look The Same!</span>
              {/* Ship <span className="text-outlined">unique</span> and{" "}
              <span className="text-outlined">playful</span> websites in minutes */}
            </Text>
            <Text className="text-lg mb-8 max-w-3xl mx-auto">
              Get access to neo brutalist style React UI blocks, templates, and Figma kit. Designed to help you {' '}
              <span className="font-bold">stand out</span>.
            </Text>
          </div>


        </div>

        <div className="container max-w-6xl max-lg:px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 mt-24">
        {platforms.map((platform) => (
          <Link to={platform.link} key={platform.name}>
            <div className="border-2 relative overflow-hidden text-center w-full border-black shadow-md shadow-primary hover:shadow-none transition-all hover:translate-y-1 bg-background p-6 rounded-md">
              <div className="flex w-full items-center justify-center mb-6">
                <img src={platform.icon} alt={platform.name} className="w-20 h-20" />
              </div>
              <Text as="h3" className="mb-2 text-black">{platform.name}</Text>
              <Text className="font-medium text-muted-foreground">
                {platform.description}
              </Text>

              {/* <ul className="mt-6 space-y-2">
                {platform.features.map((feature) => (
                  <li key={feature} className="text-muted-foreground flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul> */}
            </div>
          </Link>
        ))}
      </div>
      </section>

    

      <NeoBrutalistShowcase />
      <HowItWorks />
      <TestimonialsSection />
      <CTA />
    </div>
  );
}
