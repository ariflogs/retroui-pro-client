import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Select } from "@/components/retroui/Select";
import { Textarea } from "@/components/retroui/Textarea";
import { Text } from "@/components/retroui/Text";
import { Label } from "@/components/retroui/Label";

function ContactSeven() {
  return (
    <div className="bg-background py-16">
      <div className="bg-[#F9F5F2] max-xl:px-4 border-y-2">
      
        <div className="max-w-6xl mx-auto py-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side - Content and Illustration */}
            <div className="space-y-8">
              <div>
                <Text as="h2" className="mb-4 font-sans">
                  Tell me about your project
                </Text>
                <Text className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  Any project starts with goal setting. If you have a vision, I can help you make it a reality. <br />
                  After the inquiry, I will reply within 2-3 working days, with an approximate quote for the project or with questions for more details. After that, we can have an intro call to discuss your project and see if it's a match.
                </Text>
              </div>

              {/* Illustration - People communicating */}
              <div className="w-full max-w-[380px]">
                <img className="w-full h-full object-cover" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/team_communication_purple.png" alt="Team Communication" />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <Label>
                    Your Name
                  </Label>
                  <Input
                    placeholder="Enter Name"
                    className="w-full bg-white"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label>
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <Label>
                    Project type
                  </Label>
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
                </div>
                <div className="flex flex-col space-y-2">
                  <Label>
                    Budget
                  </Label>
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
              </div>

              <div className="flex flex-col space-y-2">
                <Label>
                  Your Message
                </Label>
                <Textarea
                  placeholder="Project details, context or how can I help you"
                  rows={4}
                  className="w-full bg-white resize-none"
                />
              </div>

              <div className="flex justify-end">
                <Button 
                  className="font-sans bg-[#E7F193] hover:bg-[#D8E858]"
                >
                  Get in touch
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactSeven;