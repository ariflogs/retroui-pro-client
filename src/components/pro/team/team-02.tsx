import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Linkedin, Twitter, Dribbble } from "lucide-react";

export default function TeamTwo() {
  return (
    <section className="min-h-screen bg-background flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-16">
          <Badge
            variant="solid"
            className="inline-flex mb-6"
          >
            Top Team
          </Badge>
          <Text as="h2" className="text-4xl lg:text-5xl mb-2">
            Meet our amazing crew!
          </Text>
          <Text className="text-md lg:text-lg text-muted-foreground max-w-xl">
            At our company, we believe in innovation and creativity. Join us on
            this exciting journey!
          </Text>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((member) => (
            <Card key={member.id} className="overflow-hidden p-6">
              {/* Image Section */}
              <div className={`relative h-96 ${member.bgColor} overflow-hidden mb-6`}>
                {/* Team member image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <Card.Header className="p-0">
                <Card.Title className="mb-1">
                  {member.name}
                </Card.Title>
                <Text className="font-medium mb-2">{member.role}</Text>
                <Card.Description className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {member.bio}
                </Card.Description>

                {/* Social Icons */}
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 border-2 border-border flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 border-2 border-border flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 border-2 border-border flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Dribbble"
                  >
                    <Dribbble className="w-4 h-4" />
                  </a>
                </div>
              </Card.Header>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export const data = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Creative Ninja",
    bio:
      "At our firm, we bring innovation and passion. Our team is dedicated to making a difference.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-02/team_member_01.png",
    bgColor: "bg-primary",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    id: 2,
    name: "Marcus Anderson",
    role: "Innovation Specialist",
    bio:
      "We are committed to excellence and pushing boundaries in our field.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-02/team_member_02.png",
    bgColor: "bg-cyan-300",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    id: 3,
    name: "Emily Zhang",
    role: "Visionary Leader",
    bio:
      "Our mission is to inspire and empower through groundbreaking solutions.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-02/team_member_03.png",
    bgColor: "bg-pink-300",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Strategy Guru",
    bio:
      "We aim to create impactful experiences that resonate with our audience.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-02/team_member_04.png",
    bgColor: "bg-lime-300",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    id: 5,
    name: "Olivia Bennett",
    role: "Design Wizard",
    bio:
      "Our team is passionate about creating unique solutions that stand out.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-02/team_member_05.png",
    bgColor: "bg-orange-300",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    id: 6,
    name: "James Cooper",
    role: "Tech Innovator",
    bio: "We strive to lead the way in technology and creativity.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-02/team_member_06.png",
    bgColor: "bg-purple-300",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
];

