import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Linkedin, Twitter, Github, Globe } from "lucide-react";

export default function TeamSix() {
  return (
    <section className="min-h-screen bg-[#F6F6F6] flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <Text className="text-[#5F4FE6] font-bold mb-2 uppercase tracking-wider">
            WHO WE ARE
          </Text>
          <Text as="h1" className="mb-4">
            Meet our team
          </Text>
          <Text className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Just take a look - each member of the team is watching your every
            gesture and will hear your every whisper.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((member) => (
            <Card
              key={member.id}
              className="py-2 bg-[#C4FF83] h-full flex flex-col items-center justify-between text-center rounded-xl hover:shadow"
            >
              <Card.Header>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-64 h-52 mb-6 object-cover"
                />

                <Card.Title className="mb-1">{member.name}</Card.Title>
                <Text className="mb-4 font-medium">{member.role}</Text>
                <Card.Description className="leading-relaxed text-sm">{member.bio}</Card.Description>
              </Card.Header>
              <Card.Content className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, key }) => {
                  const href = member.social?.[key];
                  if (!href) return null;
                  return (
                    <a
                      key={key}
                      href={href}
                      className="size-10 bg-[#5F4FE6] rounded-full flex items-center justify-center hover:bg-[#4F3FD6] transition-colors"
                      aria-label={label}
                    >
                      <Icon className="size-5 text-white" />
                    </a>
                  );
                })}
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", key: "linkedin" },
  { icon: Twitter, label: "Twitter", key: "twitter" },
  { icon: Github, label: "Github", key: "github" },
  { icon: Globe, label: "Website", key: "website" },
] as const;

const data = [
  {
    id: 1,
    name: "Lila Harper",
    role: "Creative Director",
    bio: "Countless adaptations of classic texts are at your fingertips.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-06/member_1.png",
    social: { linkedin: "#", twitter: "#", github: "#", website: "#" },
  },
  {
    id: 2,
    name: "Emma Collins",
    role: "Lead Designer",
    bio: "A variety of unique inspirations of timeless literature are available.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-06/member_2.png",
    social: { linkedin: "#", twitter: "#", github: "#", website: "#" },
  },
  {
    id: 3,
    name: "Jake Thompson",
    role: "Project Manager",
    bio: "Numerous renditions of famous writings can be found.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-06/member_3.png",
    social: { linkedin: "#", twitter: "#", github: "#", website: "#" },
  },
  {
    id: 4,
    name: "Sophie Reynolds",
    role: "Marketing Specialist",
    bio: "A plethora of creative takes on well known texts exists.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-06/member_4.png",
    social: { linkedin: "#", twitter: "#", github: "#", website: "#" },
  },
];