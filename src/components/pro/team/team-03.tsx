import React from "react";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";
import { Linkedin, Twitter, Dribbble } from "lucide-react";

export const data = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Chief Visionary Officer",
    description:
      "Join us on an exhilarating journey filled with creativity and teamwork.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-03/team_member_01.png",
    avatarColor: "bg-orange-300",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    id: 2,
    name: "Jamie Smith",
    role: "Lead Creative Strategist",
    description: "Explore a realm of opportunities where every idea is valued.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-03/team_member_02.png",
    avatarColor: "bg-primary",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    id: 3,
    name: "Taylor Brown",
    role: "Innovation Specialist",
    description:
      "Embrace the thrill of collaborating to achieve remarkable success.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-03/team_member_03.png",
    avatarColor: "bg-orange-400",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
];

export default function TeamThree() {
  return (
    <section className="min-h-screen bg-background flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="surface"
            size="sm"
            className="mb-6 inline-block"
          >
            We Have The Best Team
          </Badge>
          <Text
            as="h2"
            className="mb-2"
          >
            Our fantastic team of
            innovators!
          </Text>
          <Text className="max-w-xl mx-auto">
            Welcome to our lively community where creativity thrives and
            collaboration flourishes.
          </Text>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.map((member) => (
            <Card
              key={member.id}
              className="p-6 shadow-none hover:shadow-none"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <Avatar
                  className={`w-16 h-16 ${member.avatarColor}`}
                >
                  <Avatar.Image
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                  />
                  <Avatar.Fallback>{member.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <div>
                  <Text as="h4" className="font-medium text-xl">{member.name}</Text>
                  <Text className="text-sm font-medium">
                    {member.role}
                  </Text>
                </div>
              </div>
              <Text className="text-muted-foreground mb-6">
                {member.description}
              </Text>

              {/* Social Icons Bar */}
              <div className="w-full flex gap-4">
                <Button size="sm" className="flex-1 font-sans justify-center">View Profile</Button>
                <Button size="sm" className="flex-1 font-sans justify-center" variant="secondary">Send Message</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}