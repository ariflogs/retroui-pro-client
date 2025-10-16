import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { ArrowRight } from "lucide-react";

export default function AboutUsFour() {
  return (
    <div className="w-full min-h-[800px] relative grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Image with Stats */}
      <div className="bg-[#599D77] py-12 h-full flex justify-center items-center order-2 lg:order-1">
        <div className="relative m-2 w-[300px] lg:w-[450px] h-auto">
          <img
            src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/tree.png"
            alt="Large tree in natural landscape"
            className="w-full h-full object-cover"
          />

          <div className="absolute -top-4 -left-4 bg-primary h-1.5 w-3/5"></div>
          <div className="absolute -right-4 -bottom-4 bg-primary h-1.5 w-3/5"></div>
          <div className="absolute -left-4 -top-4 bg-primary h-3/5 w-1.5"></div>
          <div className="absolute -right-4 -bottom-4 bg-primary h-3/5 w-1.5"></div>

          {/* Stats badges */}
          <div className="absolute -top-10 -left-8 lg:-left-18 bg-[#F9F5F2] border-2 p-3 shadow-md rounded-lg min-w-[150px]">
            <div className="flex items-center -space-x-1 mb-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-accent border border-black"></div>
              ))}
              <div className="w-4 h-4 rounded-full bg-accent border border-black flex items-center justify-center">+</div>
            </div>
            <Text className="text-sm font-medium">8000+ reviews</Text>
          </div>

          <div className="absolute top-12 -right-12 bg-[#F9F5F2] border-2 p-3 shadow-md rounded-lg min-w-[150px]">
            <Text className="text-sm text-[#599D77] font-medium mb-1">Monthly Members</Text>
            <Text className="text-2xl font-black">5000+</Text>
          </div>

          <div className="absolute -bottom-8 -left-8 bg-[#F9F5F2] border-2 p-3 shadow-md rounded-lg min-w-[150px]">
            <Text className="text-sm text-[#599D77] font-medium mb-1">Total Revenue</Text>
            <Text className="text-2xl font-black">$569</Text>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full h-full bg-[#F9F5F2] order-1 lg:order-2">
        <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/about_05_elements.png"
          className="w-full object-cover"
        />

        <div className="p-8 lg:p-12 flex flex-col items-start space-y-8">
          <Text as="h2" className="text-4xl lg:text-6xl font-sans">
            About Us
          </Text>

          <div className="space-y-4">
            <Text className="text-muted-foreground leading-relaxed">
              Welcome to AU Natural Organics. We are an organic store creating natural, organic beauty products that nurture and beautify your skin in a healthy way. We offer the healthiest, purest, and most effective organic skincare products so you can shop confidently with the peace of mind that you are revitalizing and nourishing your hair, skin and nails in an eco-friendly and non-toxic way.
            </Text>

            <Text className="text-muted-foreground leading-relaxed">
              We curate all our products, including our organic essential oils, natural butter, carrier oils, and oral care products, from handpicked natural, fresh ingredients
            </Text>
          </div>

          <Button
            className="font-sans rounded-md"
            asChild
          >
            <a href="#">
              EXPLORE
              <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}