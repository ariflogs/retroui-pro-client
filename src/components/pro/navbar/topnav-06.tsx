import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { ArrowRight, Users } from "lucide-react";
import { useState } from "react";

function TopNavSix() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="min-h-[600px] bg-white px-4">
      <nav className="bg-[#F6F6F6] border-2 border-t-0 rounded-b-lg max-w-5xl mx-auto mb-6 px-4 lg:px-6 py-4">
        <div className="flex flex-wrap items-center gap-6 justify-between">
          <Button
            className="max-md:w-full max-md:justify-center bg-[#5F4FE6] text-white font-sans rounded-lg hover:bg-[#4938C2]"
          >
            <Users className="h-4 w-4 mr-2" />
            Join Our Community
            <ArrowRight className="h-4 w-4 ml-3" />
          </Button>

          {/* Center Logo */}
          <div className="text-center">
            <Text className="font-head text-2xl leading-tight">Cortex</Text>
            <Text className="font-head text-[#5F4FE6] text-2xl leading-tight">Insights</Text>
          </div>

          {/* Right Actions */}``
          <div className="flex gap-3">
            <Button
              className="bg-[#5F4FE6] text-white font-sans rounded-lg hover:bg-[#4938C2]"
            >
              Book a session
            </Button>

            <Button
              className="bg-[#C4FF83] rounded-lg hover:bg-[#82FF74]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-5 h-full flex flex-col justify-center space-y-1">
                <div className={`w-5 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Menu Card */}
      {isMenuOpen && (
        <div className="bg-[#F6F6F6] border-2 border-black rounded-lg shadow-lg max-w-5xl mx-auto transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-4 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-4">
          <div className="grid md:grid-cols-3 gap-8 items-center p-8">
            <div className="space-y-6">
              <div className="bg-[#5F4FE6]/10 group rounded-lg p-4 cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <Text className="text-2xl font-bold text-black">Classes</Text>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </div>
                <Text className="text-muted-foreground text-sm">Join the most advance learnings</Text>
              </div>

              <div className="flex flex-col space-y-2">
                <a href="#" className="font-medium hover:underline underline-offset-4 decoration-[#5F4FE6] decoration-2 text-lg">Trainers</a>
                <a href="#" className="font-medium hover:underline underline-offset-4 decoration-[#5F4FE6] decoration-2 text-lg">Blog</a>
                <a href="#" className="font-medium hover:underline underline-offset-4 decoration-[#5F4FE6] decoration-2 text-lg">Our Journey</a>
              </div>
            </div>

            <div className="flex justify-center">
              <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/warrior.png" className="w-[200px]" />
            </div>

            <div className="space-y-6 flex flex-col justify-between h-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <a href="#" className="hover:underline underline-offset-2 decoration-[#5F4FE6] decoration-1">Sessions</a>
                  <a href="#" className="hover:underline underline-offset-2 decoration-[#5F4FE6] decoration-1">About Us</a>
                  <a href="#" className="hover:underline underline-offset-2 decoration-[#5F4FE6] decoration-1">Pricing</a>
                </div>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="hover:underline underline-offset-2 decoration-[#5F4FE6] decoration-1">Careers</a>
                  <a href="#" className="hover:underline underline-offset-2 decoration-[#5F4FE6] decoration-1">Press</a>
                  <a href="#" className="hover:underline underline-offset-2 decoration-[#5F4FE6] decoration-1">Partners</a>
                </div>
              </div>

              <div className="flex flex-col">
                <a href="#" className="text-sm text-muted-foreground underline">Help Center</a>
                <a href="#" className="text-sm text-muted-foreground underline">support@mail.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopNavSix;