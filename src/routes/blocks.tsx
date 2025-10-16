import { createFileRoute, Link } from "@tanstack/react-router";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";
import { useQuery } from "@tanstack/react-query";
import { LoadingState } from "@/components/Loader";
import { ErrorState } from "@/components/ErrorState";

type ColorType = "red" | "blue" | "yellow" | "green" | "purple";

interface SectionCardProps {
  name: string;
  variantCount: number;
  image: string;
  color: ColorType;
}

// Constants
const COLOR_CLASSES: Record<ColorType, string> = {
  red: "bg-red-300",
  blue: "bg-blue-300",
  yellow: "bg-yellow-300",
  green: "bg-green-300",
  purple: "bg-purple-300",
};

// Components
const SectionCard = ({
  name,
  variantCount,
  image,
  color,
}: SectionCardProps) => {
  return (
    <div className="group rounded-lg border-2 border-black bg-white overflow-hidden transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="relative h-48 border-b-2 border-black overflow-hidden">
        <img
          src={image || `/placeholder.svg?height=200&width=400`}
          alt={name}
          className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <Text as="h3" className="mb-2">
          {name}
        </Text>
        <Badge size="sm" className={COLOR_CLASSES[color]}>
          {variantCount} variants
        </Badge>
      </div>
    </div>
  );
};

const CTABanner = () => (
  <section className="py-24">
    <div className="container rounded-lg mx-auto text-center py-16 bg-black text-white">
      <Text as="h2" className="mb-2">
        READY TO GET STARTED?
      </Text>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Get access to all blocks and components with a lifetime purchase.
      </p>
      <Link to={"/blocks"}>
        <Button
          size="lg"
          className="rounded-md shadow-white flex items-center mx-auto hover:transform hover:translate-y-[-2px] transition-transform"
        >
          Get lifetime access <ArrowRight className="ml-2" />
        </Button>
      </Link>
    </div>
  </section>
);

function RouteComponent() {
  const {
    data: blockCategories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blockCategories"],
    queryFn: () => fetch("https://workers.retroui.dev/blocks/categories").then((res) => res.json()),
  });

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error as Error} />;
  if (!blockCategories) return null;

  return (
    <div className="container max-w-6xl mx-auto max-lg:px-4 mt-24 space-y-32">
      {/* <div className="my-12 container max-w-6xl mx-auto px-12 py-12 bg-white rounded-md py-6 border-2 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          }}
        />
        <div className="flex items-center space-x-2 mb-6">
          <img src="/logos/react.png" alt="react logo" className="w-18 h-18" />
          <span className="text-5xl font-sans">+</span>
          <img src="/logos/brutui.svg" alt="brutui logo" className="w-16 h-16" />
        </div>
        <Text as="h1" className="font-normal">
          UI Blocks, 
        </Text>
      </div> */}

      {blockCategories.map((section: any, index: number) => (
        <section
          key={section.slug}
          id={section.slug}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Text as="h2" className="mb-12">
            <span className="bg-primary px-4 py-2">{section.name}</span>
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.categories.map((category: any) => (
              <Link
                key={category.slug}
                to="/$slug"
                params={{
                  slug: category.slug,
                }}
              >
                <SectionCard
                  key={category.slug}
                  name={category.name}
                  variantCount={category.variantCount}
                  image={category.coverImage}
                  color={category.color as ColorType}
                />
              </Link>
            ))}
          </div>
        </section>
      ))}

      <CTABanner />
    </div>
  );
}

export const Route = createFileRoute("/blocks")({
  component: RouteComponent,
});
