import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Textarea } from "@/components/retroui/Textarea";
import { Text } from "@/components/retroui/Text";
import { MessageCircle, Headphones, Send } from "lucide-react";
import { Card } from "@/components/retroui/Card";
import { Label } from "@/components/retroui/Label";

function ContactSix() {
  return (
    <div className="bg-[#F9F5F2] min-h-screen py-16 max-lg:px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12">
          <Text as="h2" className="mb-4 lg:text-5xl font-sans">
            Have a question ?
          </Text>
          <Text className="max-w-2xl mx-auto">
            Reach out to us via email, phone, or the contact form below. We are always available to help you.
          </Text>
        </div>

        {/* Action Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Live Chat Card */}
          <Card className="rounded-xl py-4 px-6 cursor-pointer hover:translate-y-1 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 shrink-0 bg-[#E7F193] rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <Card.Title className="font-sans lg:text-2xl mb-1">
                  Live Chat
                </Card.Title>
                <Card.Description className="text-muted-foreground text-sm">
                  Our customer support is available to answer your questions.
                </Card.Description>
              </div>
            </div>
          </Card>

          {/* Call Center Card */}
          <Card className="rounded-xl py-4 px-6 cursor-pointer hover:translate-y-1 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 shrink-0 bg-[#E7F193] rounded-full flex items-center justify-center">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <Card.Title className="font-sans lg:text-2xl mb-1">
                  Call Center
                </Card.Title>
                <Card.Description className="text-muted-foreground text-sm">
                  Our call center is available to answer your questions.
                </Card.Description>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Contact Form Card */}
        <Card className="rounded-xl w-full p-2 shadow-none">
          <Card.Header>
            <Card.Title className="font-sans">
              Contact Form
            </Card.Title>
            <Card.Description>
              Our team will get back to you shortly
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <form className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="flex flex-col space-y-2">
                    <Label>
                      Full name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      placeholder="John Doe"
                      className="w-full bg-white rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label>
                      Business email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white rounded-lg"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col space-y-2">
                  <Label>
                    How can we help you?
                  </Label>
                  <Textarea
                    placeholder="Enter your message here"
                    rows={5}
                    className="w-full bg-white rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-end">
              <Button
                className="rounded-lg justify-center font-sans bg-[#C4A1FF] hover:bg-[#C4A1FF]/80"
              >
                <Send className="mr-2 h-4 w-4" />
                
                Submit
              </Button>
              </div>
            </form>
          </Card.Content>


        </Card>
      </div>
    </div>
  );
}

export default ContactSix;