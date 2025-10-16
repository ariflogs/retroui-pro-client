import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Select } from "@/components/retroui/Select";
import { Textarea } from "@/components/retroui/Textarea";
import { Text } from "@/components/retroui/Text";
import { Facebook, Twitter, Dribbble, Github, Linkedin, RocketIcon } from "lucide-react";
import { Label } from "@/components/retroui/Label";

function ContactTwo() {
  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-5xl max-xl:px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <Text as="h2" className="mb-4">
                LET'S<br />COLLABORATE
              </Text>
              <Text className="text-muted-foreground">
                Ready to build something extraordinary? Let's turn your wildest ideas into digital reality!
              </Text>
            </div>

            <div>
              <Text as="h4" className="mb-2">
                EMAIL ME AT
              </Text>
              <a href="mailto:" className="text-lg">
                arif@retroui.dev
              </a>
            </div>

            <div>
              <Text as="h4" className="mb-2">
                FOLLOW ME AT
              </Text>
              <div className="flex gap-4">
                <Button asChild size="icon" variant="secondary" className="rounded-full justify-center items-center h-12 w-12">
                  <a href="#">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="icon" variant="secondary" className="rounded-full justify-center items-center h-12 w-12">
                  <a href="#">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="icon" variant="secondary" className="rounded-full justify-center items-center h-12 w-12">
                  <a href="#">
                    <Dribbble className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="icon" variant="secondary" className="rounded-full justify-center items-center h-12 w-12">
                  <a href="#">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="icon" variant="secondary" className="rounded-full justify-center items-center h-12 w-12">
                  <a href="#">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <Label>
                    Your Name
                  </Label>
                  <Input
                    placeholder="Enter Name"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label>
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Label>
                  Project Type
                </Label>
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
              </div>
              <div className="flex flex-col space-y-2">
                <Label>
                  Budget
                </Label>
                <Select>
                  <Select.Trigger className="w-full">
                    <Select.Value placeholder="$5k-$10K" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="5k-10k">$5k - $10k</Select.Item>
                    <Select.Item value="10k-25k">$10k - $25k</Select.Item>
                    <Select.Item value="25k-50k">$25k - $50k</Select.Item>
                    <Select.Item value="50k+">$50k+</Select.Item>
                  </Select.Content>
                </Select>
              </div>
              <div className="flex flex-col space-y-2">
                <Label>
                  Project Details
                </Label>
                <Textarea
                  placeholder="Project details, context or how can i help you"
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button variant="secondary">
                LAUNCH PROJECT <RocketIcon className="ml-2 size-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTwo;