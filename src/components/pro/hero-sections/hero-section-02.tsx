import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Text } from "@/components/retroui/Text";

const HeroSectionTwo = () => {
  return (
    <div className="bg-white">
      {/* Hero Content */}
      <div className="max-w-6xl mx-auto py-20 px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row max-lg:space-y-8 lg:space-x-12 items-center">
          <div className="w-full lg:w-3/5">
            <Text as="h1" className="leading-tight mb-4 lg:text-5xl">
              Your Mindset Shapes
              <br />
              <span className="bg-primary px-2 border-4 border-black">
                Your Future
              </span>
            </Text>

            <Text className="text-lg text-muted-foreground font-medium mb-8">
              Join our newsletter and get weekly business insights and updates
              directly to your inbox!
            </Text>

            <form className="flex gap-4 max-w-lg">
              <Input placeholder="Enter your email" type="email" aria-label="Email address" />
              <Button type="submit" className="w-60 justify-center self-stretch">
                Subscribe
              </Button>
            </form>

            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-4">
                <img
                  src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_a.png"
                  className="w-12 h-12 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_black]"
                  alt="Person A"
                />
                <img
                  src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_b.png"
                  className="w-12 h-12 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_black]"
                  alt="Person B"
                />
                <img
                  src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_c.png"
                  className="w-12 h-12 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_black]"
                  alt="Person C"
                />
              </div>
              <div>
                <div className="font-medium text-xl">25K+ Professionals</div>
                <div className="text-gray-400">
                  Trusts us with their email.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center items-center lg:w-2/5">
            <img className="w-full max-w-80 h-auto object-cover" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/email.png" alt="Email newsletter illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTwo;