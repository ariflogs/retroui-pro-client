import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Select } from "@/components/retroui/Select";
import { Textarea } from "@/components/retroui/Textarea";
import { Text } from "@/components/retroui/Text";
import { Mail, Phone, MapPin } from "lucide-react";

function ContactFour() {
  return (
    <div className="bg-[#5F4FE6] py-16 max-xl:px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-8 gap-16">
          <div className="max-w-lg text-white">
            <Text as="h2" className="mb-2 font-medium lg:text-5xl">
              Let's Connect
            </Text>
            <Text className="text-lg  leading-relaxed">
              Ready to transform your business? Get in touch and let's make it happen!
            </Text>
          </div>

          <div className="hidden lg:flex justify-end">
            <img className="w-[400px]" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/letter_sharing.png" alt="Letter Sharing" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8 text-white">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#C4FF83] border-2 border-border shadow-md flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-border" />
              </div>
              <div>
                <Text as="h4" className="font-sans font-medium">
                  EMAIL US
                </Text>
                <Text>
                  meherab788@gmail.com
                </Text>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#C4FF83] border-2 border-border shadow-md flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-border" />
              </div>
              <div>
                <Text as="h4" className="font-sans font-medium">
                  CALL US
                </Text>
                <Text>
                  +1 (234) 567-8900
                </Text>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#C4FF83] border-2 border-border shadow-md flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-border" />
              </div>
              <div>
                <Text as="h4" className="font-sans font-medium">
                  VISIT US
                </Text>
                <Text>
                  123 Innovation Street<br />
                  Tech District, CA 90210
                </Text>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your name"
                  className="w-full bg-white text-black"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white text-black"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select>
                  <Select.Trigger className="w-full bg-white text-black">
                    <Select.Value placeholder="Project type" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="web-design">Web Design</Select.Item>
                    <Select.Item value="mobile-app">Mobile App</Select.Item>
                    <Select.Item value="branding">Branding</Select.Item>
                    <Select.Item value="consulting">Consulting</Select.Item>
                  </Select.Content>
                </Select>

                <Select>
                  <Select.Trigger className="w-full bg-white text-black">
                    <Select.Value placeholder="Budget" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="5k-10k">$5k - $10k</Select.Item>
                    <Select.Item value="10k-25k">$10k - $25k</Select.Item>
                    <Select.Item value="25k-50k">$25k - $50k</Select.Item>
                    <Select.Item value="50k+">$50k+</Select.Item>
                  </Select.Content>
                </Select>
              </div>

              <Input
                placeholder="Your website title"
                className="w-full bg-white text-black"
              />

              <Textarea
                placeholder="Project details, context or how can i help you"
                rows={5}
                className="w-full bg-white text-black"
              />

              <Button 
                className="w-full bg-[#C4FF83] hover:bg-[#AAFC3D] font-sans justify-center"
              >
                Send Your Project Idea's
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFour;