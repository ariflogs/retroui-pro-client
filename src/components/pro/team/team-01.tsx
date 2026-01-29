import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Twitter, Linkedin, MailIcon } from "lucide-react";

export default function TeamOne() {
  return (
    <section className="min-h-screen bg-background flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="surface" className="mb-8">
            Say hello to our awesome crew!
          </Badge>
          <Text as="h2" className="text-4xl lg:text-5xl mb-4">
            Get to know our fantastic team members!
          </Text>
          <Text className="md:text-lg text-muted-foreground max-w-3xl">
            We dive into the nitty gritty of everything we do, all to help
            businesses worldwide focus on what truly matters!
          </Text>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((member) => (
            <div
              key={member.id}
              className={`overflow-hidden group relative min-h-[600px] border-3 shadow-lg hover:shadow-lg bg-[url(${member.image})] bg-cover bg-center`}
              style={{
                backgroundImage: `url(${member.image})`,
              }}
            >
              {/* Info Section */}
              <Card className="shadow-primary shadow-md group-hover:shadow-xs transition-shadow absolute bottom-6 left-6 right-6">
                <Card.Header>
                  <Card.Title className="mb-1">{member.name}</Card.Title>
                  <Text className="font-medium mb-2">{member.role}</Text>
                  <Card.Description className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </Card.Description>
                </Card.Header>

                <Card.Content className="pt-0">
                  <div className="flex gap-3">
                    <a
                      href={member.social.linkedin}
                      className="w-9 h-9 bg-background border-2 flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label="Facebook"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-9 h-9 bg-background border-2 flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.email}
                      className="w-9 h-9 bg-background border-2 flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <MailIcon className="w-4 h-4" />
                    </a>
                  </div>
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const data = [
  {
    id: 1,
    name: "Avery Collins",
    role: "Creative Solutions Director",
    bio: "A passionate strategist and innovative programmer.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-01/team_member_01.png",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "#",
    },
  },
  {
    id: 2,
    name: "Jamie Parker",
    role: "Digital Synergy Lead",
    bio:
      "An eager learner and creative developer building real-time apps.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-01/team_member_02.png",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "#",
    },
  },
  {
    id: 3,
    name: "Taylor Reed",
    role: "Technology Vice President",
    bio:
      "A curious thinker and skilled coder creating innovative solutions.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-01/team_member_03.png",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "#",
    },
  },
  {
    id: 4,
    name: "Jordan Blake",
    role: "Chief Technology Advocate",
    bio: "A dedicated leader and visionary excellence engineering.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-01/team_member_04.png",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "#",
    },
  },
  {
    id: 5,
    name: "Sam Johnson",
    role: "Senior Product Developer",
    bio:
      "A creative mind and skilled coder turning ideas into reality.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-01/team_member_05.png",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "#",
    },
  },
  {
    id: 6,
    name: "Alex Morgan",
    role: "Lead Software Engineer",
    bio: "An inventive thinker and passionate coder crafting.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-01/team_member_06.png",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "#",
    },
  },
];