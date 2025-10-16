import { Text } from "@/components/retroui/Text";
import { ArrowRight } from "lucide-react";

export default function HowRetroUIWorks() {
  return (
    <section className="max-w-6xl mx-auto max-lg:px-4 py-24">
      <div className="text-center mb-16">
        <Text as="h2" className="mb-4">
          How It Works?
        </Text>
        <Text className="text-muted-foreground max-w-xl text-lg mx-auto">
          Getting started with RetroUI is simple. Just three steps to transform your design workflow.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1: Browse */}
        <div className="relative">
          <div className="border-2 shadow-md bg-background p-8 rounded-md">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary border-2 border-black shadow-md mb-6 rounded">
              <span className="text-2xl font-bold text-black">1</span>
            </div>
            <Text as="h3" className="mb-4">
              Browse
            </Text>
            <Text className="text-muted-foreground">
              Explore our libra and find the perfect component for your project.
            </Text>
          </div>

          {/* Arrow connector */}
          <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-background border-2 border-black rotate-45 flex items-center justify-center">
              <ArrowRight className="h-4 w-4 -rotate-45" />
            </div>
          </div>
        </div>

        {/* Step 2: Copy */}
        <div className="relative">
          <div className="border-2 shadow-md bg-background p-8 rounded-md">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary border-2 border-black shadow-md mb-6 rounded">
              <span className="text-2xl font-bold text-black">2</span>
            </div>
            <Text as="h3" className="mb-4">
              Copy
            </Text>
            <Text className="text-muted-foreground">
              Click the copy button to copy the component code to your clipboard.
            </Text>
          </div>

          {/* Arrow connector */}
          <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-background border-2 border-black rotate-45 flex items-center justify-center">
              <ArrowRight className="h-4 w-4 -rotate-45" />
            </div>
          </div>
        </div>

        {/* Step 3: Paste */}
        <div className="relative">
          <div className="border-2 shadow-md bg-background p-8 rounded-md">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary border-2 border-black shadow-md mb-6 rounded">
              <span className="text-2xl font-bold text-black">3</span>
            </div>
            <Text as="h3" className="mb-4">
              Paste
            </Text>
            <Text className="text-muted-foreground">
              Paste directly into your Webflow project and start using it.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}