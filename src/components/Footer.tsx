import { Button, Text } from "./ui";
import { Link } from "@tanstack/react-router";
import { Twitter, Github, Mail, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t-2 mt-32">
      <div className="container max-w-6xl mx-auto pt-16 pb-4 max-lg:px-4">
        {/* Decorative stars */}
        <div className="absolute top-8 left-8">
          <img src="/icons/star_black_1.svg" height={24} width={24} alt="star" />
        </div>
        <div className="absolute top-12 right-12">
          <img src="/icons/star_yellow_1.svg" height={20} width={20} alt="star" className="shine" />
        </div>
        <div className="absolute bottom-8 left-16">
          <img src="/icons/star_yellow_1.svg" height={28} width={28} alt="star" className="shine" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-2 col-span-2">
            <Text as="h3">
              RetroUI
            </Text>
            <Text>
              Components and templates designed to help you stand out.
            </Text>

            
            <div className="flex space-x-4 mt-8">
              <a href="https://discord.gg/Jum3NJxK6Q" target="_blank">
                <Button variant="secondary" size="icon">
                  <span className="h-5 w-5">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M8.52062 13.8458C7.48059 13.8458 6.63159 12.9014 6.63159 11.7446 6.63159 10.5879 7.45936 9.64331 8.52062 9.64331 9.57123 9.64331 10.4308 10.5879 10.4096 11.7446 10.4096 12.9014 9.57123 13.8458 8.52062 13.8458ZM15.4941 13.8458C14.454 13.8458 13.604 12.9014 13.604 11.7446 13.604 10.5879 14.4328 9.64331 15.4941 9.64331 16.5447 9.64331 17.4043 10.5879 17.3831 11.7446 17.3831 12.9014 16.5553 13.8458 15.4941 13.8458ZM10.1253 4.32296 9.81655 3.76001 9.18323 3.86556C7.71915 4.10958 6.32658 4.54677 5.02544 5.14604L4.79651 5.25148 4.65507 5.46009C2.0418 9.31441 1.3258 13.1087 1.68032 16.8362L1.71897 17.2425 2.04912 17.4824C3.78851 18.7465 5.47417 19.5189 7.12727 20.0257L7.91657 20.2676 9.03013 17.5506C10.9397 18.0226 13.0592 18.0228 14.969 17.5511L16.0757 20.2683 16.8668 20.0256C18.5173 19.5193 20.2137 18.7472 21.9466 17.4811L22.2726 17.243 22.3131 16.8414C22.7491 12.5213 21.616 8.75773 19.3547 5.45652L19.2128 5.24944 18.9846 5.14504C17.6767 4.54685 16.2852 4.10981 14.8309 3.86573L14.2132 3.76207 13.8987 4.30369C13.8112 4.45445 13.7215 4.62464 13.6364 4.79687 12.5441 4.6847 11.456 4.68446 10.3726 4.79652 10.2882 4.62736 10.2025 4.4638 10.1253 4.32296ZM6.71436 16.6102C6.91235 16.7243 7.11973 16.8358 7.32557 16.9381L6.8764 18.034C5.75585 17.6259 4.61837 17.0637 3.4476 16.2557 3.22313 13.1178 3.86092 9.951 6.01196 6.68626 6.90962 6.29123 7.8535 5.98279 8.83606 5.77295 8.89631 5.89831 8.95235 6.02066 8.99839 6.12917L9.27128 6.77238 9.96259 6.67098C11.3152 6.4726 12.6772 6.47234 14.0523 6.67124L14.7424 6.77106 15.0147 6.12917C15.0621 6.01743 15.1167 5.89547 15.1743 5.77322 16.1525 5.98326 17.098 6.29212 18.0029 6.68812 19.8781 9.50857 20.8241 12.6544 20.5486 16.2552 19.3837 17.0625 18.2422 17.6249 17.1193 18.0335L16.6735 16.939C16.8799 16.8365 17.0879 16.7246 17.2865 16.6102 17.7763 16.328 18.3039 15.976 18.6402 15.6397L17.3606 14.3602C17.1969 14.5239 16.837 14.7808 16.3831 15.0423 15.9388 15.2983 15.498 15.5052 15.2164 15.5983 13.2126 16.2608 10.7883 16.2608 8.78443 15.5983 8.50285 15.5052 8.06205 15.2983 7.61772 15.0423 7.16383 14.7808 6.80392 14.5239 6.64017 14.3602L5.36065 15.6397C5.6969 15.976 6.2245 16.328 6.71436 16.6102Z" /></svg>
                  </span>
                </Button>
              </a>
              <a href="https://x.com/retrouidev" target="_blank">
                <Button variant="secondary" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://github.com/Logging-Stuff/RetroUI" target="_blank">
                <Button variant="secondary" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://dribbble.com/brutflow" target="_blank">
                <Button variant="secondary" size="icon">
                  <Dribbble className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:arif@retroui.dev" target="_blank">
                <Button variant="secondary" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 col-span-1">
            <Text className="text-xl font-bold">
              Quick Links
            </Text>
            <div className="space-y-2">
              {[
                { name: "UI Blocks", href: "/blocks" },
                { name: "Templates", href: "/templates" },
                { name: "Core Components", href: "https://retroui.dev/docs/components/button" },
                { name: "Affiliate", href: "/affiliate" },
              ].map((link) => (
                <Link key={link.name} to={link.href}>
                  <Text className="hover:font-bold transition-all hover:translate-x-1">
                    {link.name}
                  </Text>
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4 col-span-1">
            <Text className="text-xl font-bold">
              Support
            </Text>
            <div className="space-y-2">
              {[
                { name: "Documentation", href: "https://retroui.dev/docs" },
                { name: "Discord Community", href: "https://discord.gg/Jum3NJxK6Q" },
                { name: "Contact Us", href: "mailto:arif@retroui.dev" },
              ].map((link) => (
                <Link key={link.name} to={link.href}>
                  <Text className="hover:font-bold transition-all hover:translate-x-1">
                    {link.name}
                  </Text>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 py-4 border-t-2 text-sm border-black flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Text>
            © 2025 RetroUI. Made with ❤️ for designers & developers.
          </Text>
          <Text>
            A project by{" "}
            <a
              href="https://x.com/ariflogs"
              target="_blank"
              className="font-bold underline"
            >
              @ariflogs
            </a>
          </Text>
        </div>
      </div>
    </footer>
  );
}
