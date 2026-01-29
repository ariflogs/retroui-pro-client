import { Text } from "@/components/retroui/Text";
import { Avatar } from "@/components/retroui/Avatar";

export const data = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Creative Director",
    description: "Leading innovative design solutions",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-02/team_member_01.png",
    borderColor: "border-yellow-400",
  },
  {
    id: 2,
    name: "Sam Chen",
    role: "Product Manager",
    description: "Driving product excellence",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-02/team_member_02.png",
    borderColor: "border-yellow-400",
  },
  {
    id: 3,
    name: "Jordan Parker",
    role: "Lead Developer",
    description: "Building amazing experiences",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-02/team_member_03.png",
    borderColor: "border-yellow-400",
  },
  {
    id: 4,
    name: "Taylor Kim",
    role: "UX Designer",
    description: "Crafting beautiful interfaces",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-02/team_member_04.png",
    borderColor: "border-yellow-400",
  },
  {
    id: 5,
    name: "Morgan Lee",
    role: "Tech Lead",
    description: "Engineering the future",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-02/team_member_05.png",
    borderColor: "border-yellow-400",
  },
];

export default function TeamFour() {
  const isEven = (index: number) => index % 2 !== 0;
  return (
    <section className="min-h-screen bg-[#5F4FE6] flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      <div className="container mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-24">
          <Text
            as="h1"
            className="mb-4 text-white"
          >
            Meet the Dream Team
          </Text>
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8">
          {data.map((member, index) => (
            <Avatar
              className={`relative w-52 h-112 border-3 bg-[#C4FF83] transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:border-[#C4FF83] group ${
                isEven(index) ? "mt-20" : "mt-0"
              }`}
            >
              <Avatar.Image
                src={member.image}
                alt={member.name}
                className="object-cover transition-all duration-500 group-hover:brightness-0"
              />
              <Avatar.Fallback>{member.name.charAt(0)}</Avatar.Fallback>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white transition-opacity duration-500 opacity-0 bg-black/40 backdrop-blur-xs group-hover:opacity-100">
                <Text as="h3" className="mb-2 text-white">
                  {member.name}
                </Text>
                <Text className="font-medium mb-2 text-[#FED13B]">
                  {member.role}
                </Text>
                <Text className=" text-white">{member.description}</Text>
              </div>
            </Avatar>
          ))}
        </div>
      </div>
    </section>
  );
}