import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Textarea } from "@/components/retroui/Textarea";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Phone, MapPin, MessageCircle, Headphones, BadgeQuestionMark } from "lucide-react";
import { Label } from "@/components/retroui/Label";

function ContactFive() {
  return (
    <div className="bg-[#599D77] py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* Left Card - Need Help */}
          <div className="flex flex-col h-full bg-white rounded-lg p-8 border-2 border-black shadow-lg">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#D9E3DA] text-[#599D77] border-2 border-[#599D77] h-8 w-8 flex items-center justify-center rounded-full">
                  <Headphones className="h-4 w-4" />
                </span>
                <Badge variant="surface" className="bg-[#D9E3DA] text-[#599D77] border-[#599D77] rounded-full py-1">
                  Contact Us
                </Badge>
              </div>

              <Text as="h2" className="mb-2 font-sans">
                Need any help?
              </Text>

              <Text className="leading-relaxed">
                Reach out to us via email, phone, or the contact form below. We're eager to assist you.
              </Text>
            </div>

            <div className="relative bg-[url('https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/street_map.png')] bg-cover bg-center bg-no-repeat rounded-lg border-2 border-[#599D77] h-64 overflow-hidden">

              <div className="absolute flex flex-col gap-4 bottom-4 left-4">
                <Badge variant="outline" className="bg-white rounded-full outline-[#599D77] flex items-center font-normal gap-2">
                  <Phone className="h-4 w-4 text-[#599D77]" />
                  +1 999 888-77-64
                </Badge>

                <Badge variant="outline" className="bg-white rounded-full outline-[#599D77] flex items-center font-normal gap-2">
                  <MapPin className="h-4 w-4 text-[#599D77]" />
                  Boston, United States
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white rounded-lg p-8 border-2 border-black shadow-lg relative">
              <img className="absolute top-0 right-0 w-28" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/feature_10_1.png" alt="contact form abstract" />

              <Text as="h3" className="font-bold font-sans">
                Contact Form
              </Text>
              <Text className="mb-6 text-sm">
                Our team will get back to you shortly
              </Text>

              <form className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <Label className="font-medium">
                    Full name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    placeholder="Enter your full name"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <Label className="font-medium">
                    Business email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <Label className="font-medium">
                    How can we help you?
                  </Label>
                  <Textarea
                    placeholder="Enter your message here"
                    rows={2}
                    className="w-full resize-none rounded-lg"
                  />
                </div>

                <Button className="w-full font-sans font-bold justify-center rounded-lg">
                  Submit
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border-2 border-black shadow-lg relative">
                <img className="w-20 absolute top-0 right-0" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/feature_10_2.png" alt="Live Chat" />

                <div className="w-14 h-14 bg-[#D14D87]/20 rounded-full border-2 border-[#D14D87] flex items-center justify-center mb-4">
                  <MessageCircle className="h-7 w-7 text-[#D14D87]" />
                </div>

                <Text as="h3" className="font-sans font-bold">
                  Live Chat
                </Text>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-black shadow-lg relative">
                <img className="w-20 absolute top-0 right-0" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/el_1_599D77.png" alt="FAQ" />

                <div className="w-14 h-14 bg-[#599D77]/20 rounded-full border-2 border-[#599D77] flex items-center justify-center mb-4">
                  <BadgeQuestionMark className="h-7 w-7 text-[#599D77]" />
                </div>

                <Text as="h3" className="font-sans font-bold">
                  Read FAQ
                </Text>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactFive;