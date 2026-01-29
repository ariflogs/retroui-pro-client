import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Avatar } from "@/components/retroui/Avatar";
import { Facebook, Instagram, Twitter, Dribbble, Linkedin } from "lucide-react";

export const data = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Chief Tech Wizard",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-07/member_1.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Emma Thompson",
    role: "Design Guru",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-07/member_2.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Oliver Smith",
    role: "Project Maestro",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-07/member_3.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Mia Johnson",
    role: "Marketing Maven",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-07/member_4.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    id: 5,
    name: "Ethan Brown",
    role: "Content Wizard",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-07/member_5.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "Ava Wilson",
    role: "Creative Visionary",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-07/member_6.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
];

export default function TeamSeven() {
  return (
    <section className="min-h-screen bg-white flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <Badge
            variant="surface"
            className="bg-[#E7F193] uppercase mb-6 inline-flex"
          >
            WHO WE ARE
          </Badge>
          <Text as="h1" className="font-sans font-bold mb-4">
            Meet our awesome crew!
          </Text>
          <Text className="text-base md:text-lg max-w-2xl">
            Check it out - our team is tuned in to your every move and ready to
            listen!
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {data.map((member) => (
            <Card key={member.id} className="p-8 bg-[#F9F5F2] rounded-xl">
              <Avatar className="w-24 h-24 bg-[#E7F193] rounded-lg mb-6">
                <Avatar.Image
                  src={member.image}
                  alt={member.name}
                  className="object-cover"
                />
                <Avatar.Fallback>{member.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Text as="h3" className="font-bold font-sans mb-1">
                {member.name}
              </Text>
              <Text className="mb-6">
                {member.role}
              </Text>

              <div className="flex gap-2">
                <a
                  href={member.social.facebook}
                  className="w-10 h-10 bg-[#C4A1FF] border-2 border-black rounded-lg flex items-center justify-center hover:bg-[#C4A1FF]/50 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-black" fill="black" />
                </a>
                <a
                  href={member.social.instagram}
                  className="w-10 h-10 bg-[#C4A1FF] border-2 border-black rounded-lg flex items-center justify-center hover:bg-[#C4A1FF]/50 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-black" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-[#C4A1FF] border-2 border-black rounded-lg flex items-center justify-center hover:bg-[#C4A1FF]/50 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-black" fill="black" />
                </a>
                <a
                  href={member.social.dribbble}
                  className="w-10 h-10 bg-[#C4A1FF] border-2 border-black rounded-lg flex items-center justify-center hover:bg-[#C4A1FF]/50 transition-colors"
                  aria-label="Dribbble"
                >
                  <Dribbble className="w-5 h-5 text-black" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-[#C4A1FF] border-2 border-black rounded-lg flex items-center justify-center hover:bg-[#C4A1FF]/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-black" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}