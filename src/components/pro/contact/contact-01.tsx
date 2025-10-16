import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Select } from "@/components/retroui/Select";
import { Textarea } from "@/components/retroui/Textarea";
import { Text } from "@/components/retroui/Text";
import { Mail, Phone, MapPin } from "lucide-react";

function ContactOne() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-5xl max-xl:px-4 mx-auto">
        <div className="text-center mb-16">
          <Text as="h2" className="mb-4 inline-block underline underline-offset-8 decoration-primary">
            LET'S CONNECT
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Section */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white border-2 border-black shadow-md flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <Text as="h4" className="mb-2">
                  EMAIL US
                </Text>
                <Text className="text-muted-foreground">
                  meherab786@gmail.com
                </Text>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white border-2 border-black shadow-md flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <Text as="h4" className="mb-2">
                  CALL US
                </Text>
                <Text className="text-muted-foreground">
                  +1 (234) 567-8900
                </Text>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white border-2 border-black shadow-md flex items-center justify-center">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <Text as="h4" className="mb-2">
                  VISIT US
                </Text>
                <Text className="text-muted-foreground">
                  123 Innovation Street<br />
                  Tech District, CA 90210
                </Text>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="order-1 lg:order-2">
            <Text as="h3" className="mb-6">
              SEND MESSAGE
            </Text>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your name"
                  className="w-full"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select>
                  <Select.Trigger className="w-full">
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
                  <Select.Trigger className="w-full">
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
                placeholder="Your website (if exists)"
                className="w-full"
              />

              <Textarea
                placeholder="Project details, context or how can I help you"
                rows={6}
                className="w-full"
              />
              <Button className="w-full font-bold justify-center">
                Send Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactOne;