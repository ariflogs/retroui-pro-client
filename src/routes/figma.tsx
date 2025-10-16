import { Check } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Text } from "@/components/ui";
import { useAuth } from "@/state/auth";

export const Route = createFileRoute("/figma")({
  component: RetroUIForFigma,
});

function RetroUIForFigma() {
  const { user } = useAuth();

  return (
    <div className="mx-auto container max-w-5xl pt-24 px-4">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-4/6">
            <Text as="h1" className="lg:text-5xl mb-2">
              RetroUI kit for Figma
            </Text>

            <Text className="text-lg mb-6">
              Building software with Neobrutalism design system? RetroUI Figma
              kit can help you improve and fasten your design and development
              process.
            </Text>
            <img
              src="/images/figma_banner.svg"
              className="w-100% h-100% rounded-lg border-2 border-black mb-8"
            />

            {/* Includes Section */}
            <section className="my-16">
              <Text as="h2" className="mb-4 text-outlined">
                What's Included
              </Text>
              <ul className="space-y-2 text-lg">
                <li>
                  <Check className="inline-block text-yellow-400 w-5 h-5 mr-2" />
                  Over 50+ pre-designed components for Figma
                </li>
                <li>
                  <Check className="inline-block text-yellow-400 w-5 h-5 mr-2" />
                  Interactive prototypes and animations
                </li>
                <li>
                  <Check className="inline-block text-yellow-400 w-5 h-5 mr-2" />
                  Fully customizable styles and themes
                </li>
                <li>
                  <Check className="inline-block text-yellow-400 w-5 h-5 mr-2" />
                  Lifetime updates and support
                </li>
              </ul>
            </section>
          </div>

          <div className="w-full lg:w-2/5 relative">
            <div className="border-2 rounded-lg p-8 bg-white h-100% sticky top-20">
              {!user && (
                <>
                  <div className="space-y-4 mb-12">
                    <div className="flex flex-col">
                      <Text as="h3">Pro Bundle</Text>
                      <Text className="font-medium text-gray-600 mb-6">
                        Blocks + Figma Kit + Templates
                      </Text>

                      <Text as="h2" className="lg:text-6xl">
                        $149.00
                      </Text>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <Link to="/pricing">
                      <Button className="w-full">Access Now</Button>
                    </Link>
                  </div>
                </>
              )}

              {user && user.isPro && (
                <a href="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/RetroUI%20Figma.zip">
                  <Button className="w-full">Download Now</Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RetroUIForFigma;
