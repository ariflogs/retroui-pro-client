import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

export default function AboutUsOne() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative border-3 w-full h-full max-h-[400px] max-w-[400px] shadow-[-16px_16px_0px_0px_var(--color-primary)]">
            <img
              src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/normal_p_1.png"
              alt="Professional woman"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div>
              <Text as="h2" className="mb-6 font-normal lg:text-6xl">
                About Me
              </Text>
              <div className="space-y-4 mb-8 text-muted-foreground">
                <Text className="text-lg">
                  I am a UI/UX Designer with a passion for creating beautiful experiences.<br />
                  After working as a designer for 12+ years, I help companies build strong design foundations and design teams that drive growth.
                </Text>

                <Text className="text-lg">
                  If you need help with your design, I'm here to help. Let's work together to create something beautiful.
                </Text>
              </div>

            <Button className="px-6">
              Contact Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}