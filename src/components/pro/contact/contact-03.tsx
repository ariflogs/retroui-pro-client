import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Textarea } from "@/components/retroui/Textarea";
import { Text } from "@/components/retroui/Text";
import { Label } from "@/components/retroui/Label";

// https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/amelia_one.png


function ContactThree() {
  return (
    <div className="py-16 bg-background">

      <div className="relative max-xl:px-4 overflow-hidden bg-[url('https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/backgrounds/bg_gred_FED13B.png')] bg-cover bg-center bg-no-repeat">

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-16 max-w-6xl mx-auto">
          {/* Left Side - Content */}
          <div className="flex flex-col items-center justify-between pt-20">
            <div className="text-center lg:text-left">
              <Text as="h2" className="mb-6 font-sans">
                Lets Get in Touch!
              </Text>
              <Text className="text-muted-foreground leading-relaxed">
                Have a question or need assistance?<br />
                Reach out to us via email, phone, or the contact form below.<br />
                We're eager to assist you.
              </Text>
            </div>

            <div className="mt-auto relative max-xl:hidden">
              <img className="w-[400px]" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/amelia_one.png" alt="Woman with binoculars" />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex items-center justify-center py-12 xl:py-20">
            <div className="w-full max-w-md">
              <div className="bg-background rounded-xl p-8 border-2 shadow-lg">
                <Text as="h3" className="font-sans mb-8 font-bold">
                  SEND MESSAGE
                </Text>

                <form className="space-y-6">
                  <div className="flex flex-col space-y-2">
                    <Label>
                      Your Name
                    </Label>
                    <Input
                      placeholder="Enter Name"
                      className="w-full rounded-md"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label>
                      Email
                    </Label>
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      className="w-full rounded-md"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label>
                      Message
                    </Label>
                    <Textarea
                      placeholder="Enter your message"
                      rows={4}
                      className="w-full rounded-md resize-none"
                    />
                  </div>

                  <Button className="w-full font-sans justify-center font-bold rounded-md">
                    SUBMIT
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactThree;