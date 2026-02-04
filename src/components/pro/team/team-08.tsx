import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Linkedin, Dribbble, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", key: "linkedin" },
  { icon: Twitter, label: "Twitter", key: "twitter" },
  { icon: Dribbble, label: "Dribbble", key: "dribbble" },
] as const;

const data = [
  {
    id: 1,
    name: "Yuki Tanaka",
    role: "Creative Director",
    description:
      "Obsessed with pixels, brutalism, and breaking grid systems. Crafting bold visuals since 2015.",
    image:
      "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-08/team_member_01.png",
    bgColor: "bg-[#83d2ed]",
    social: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Lead Developer",
    description:
      "Transforms caffeine into clean code. Full-stack architect with a passion for performance.",
    image:
      "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-08/team_member_02.png",
    bgColor: "bg-[#ffdb33]",
    social: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Product Manager",
    description:
      "Aligns teams and defines roadmaps. The driving force behind every successful launch.",
    image:
      "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-08/team_member_03.png",
    bgColor: "bg-[#ff874f]",
    social: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
];

type TeamMember = (typeof data)[number];

const TeamCard = ({ member }: { member: TeamMember }) => (
  <Card className="overflow-hidden rounded-3xl border-2 flex flex-col h-full shadow-none hover:shadow-none">
    <div
      className={`${member.bgColor} border-b-2 h-80 lg:h-86 relative overflow-hidden`}
    >
      <img
        src={member.image}
        alt={member.name}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[300px] h-auto"
      />
    </div>

    <div className="flex flex-col flex-1">
      <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
        <Badge variant="solid" size="sm" className="w-fit text-xs capitalize">
          {member.role}
        </Badge>
        <div className="flex flex-col gap-2">
          <Text as="h3" className="capitalize">
            {member.name}
          </Text>
          <Text className="text-sm leading-relaxed">{member.description}</Text>
        </div>
      </div>
      <div className="border-t-2 flex">
        {socialLinks.map(({ icon: Icon, label, key }, i) => {
          const href = member.social?.[key];
          if (!href) return null;
          return (
            <a
              key={key}
              href={href}
              className={`flex-1 flex items-center justify-center py-4 group hover:bg-black transition-colors ${i < 2 ? "border-r-2" : ""}`}
              aria-label={label}
            >
              <Icon className="size-5 group-hover:text-white transition-colors" />
            </a>
          );
        })}
      </div>
    </div>
  </Card>
);

export default function TeamEight() {
  return (
    <section className="min-h-screen bg-background flex items-center py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center px-4 md:px-8">
          <Text as="h1" className="uppercase mb-3">
            Meet the Team
          </Text>
          <Text className="text-lg md:text-xl text-black">
            The creative minds and builders behind everything we do.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {data.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
