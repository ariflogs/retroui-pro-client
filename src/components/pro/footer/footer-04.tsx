import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { ArrowUpRight, Mail, Phone, Sparkle, Star } from "lucide-react";
import { useState } from "react";

function FooterFour() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phone number:", phoneNumber);
    setPhoneNumber("");
  };

  return (
    <div className="pt-24">
      <footer className="bg-white border-t-2 border-black">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
            <div className="flex gap-4">
              <Button className="rounded-full font-sans">
                Telegram →
              </Button>
              <Button className="rounded-full font-sans">
                WhatsApp →
              </Button>
            </div>

            <div className="flex space-x-4">
              <div className="flex items-center gap-2">
                <div className="bg-black rounded-full text-white p-1.5 shadow shadow-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:arif@retroui.dev"
                  className="hover:underline underline-offset-4"
                >
                  arif@retroui.dev
                </a>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-black rounded-full text-white p-1.5 shadow shadow-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="hover:underline underline-offset-4">+1 (555) 222-1111</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <img className="w-10 h-10" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/logos/nexus.svg" alt="Nexus Logo" />
            <span className="text-3xl font-bold">NEXUS</span>
          </div>

          <Text className="leading-relaxed mb-12 max-w-xl">
            Building the future of digital experiences with bold design and cutting-edge technology.
          </Text>

          <Text as="h3" className="font-sans mb-12">
            <span className="flex gap-2 items-center">
              <Badge variant="surface" className="rounded-full inline-flex items-center gap-2 py-1">
                <Sparkle className="w-4 h-4" /> Any questions?
              </Badge>
              JUST LEAVE YOUR
            </span>
            PHONE NUMBER AND WE WILL<br />
            CONTACT YOU SHORTLY
          </Text>

          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center">
              <input
                type="tel"
                placeholder="(+001) 123-456-7890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 text-4xl lg:text-5xl font-medium py-4 border-b-2 bg-transparent placeholder-muted focus:outline-none focus:border-primary transition-colors"
                required
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-full p-3"
              >
                <ArrowUpRight className="w-6 h-6" />
              </Button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default FooterFour;