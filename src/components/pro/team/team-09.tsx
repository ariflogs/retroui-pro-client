import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";

const data = [
    {
        id: 1,
        name: "Arif Hossain",
        role: "Creative Director",
        description:
            "Obsessed with pixels, brutalism, and breaking grid systems. Making things pop since 2015.",
        image:
            "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-09/team_member_01.svg",
        bgColor: "bg-[#C4A1FF]",
    },
    {
        id: 2,
        name: "Marcus Thorne",
        role: "Lead Developer",
        description:
            "Turns caffeine into clean code. Full-stack wizardry with a preference for dark mode.",
        image:
            "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-09/team_member_02.svg",
        bgColor: "bg-[#E7F193]",
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Product Manager",
        description:
            "Herding cats and defining roadmaps. Ensures we actually ship what we promised.",
        image:
            "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-09/team_member_03.svg",
        bgColor: "bg-[#FE91E9]",
    },
];

export default function TeamNine() {
    return (
        <section className="min-h-fit bg-background flex items-center px-4 border-y-3 my-20">
            <div className="max-w-5xl mx-auto w-full border-x-3">
                {/* Header */}
                <div className="flex flex-col items-center py-10 lg:py-12 text-center border-b-3">
                    <Text
                        as="h1"
                        className="uppercase tracking-tight mb-2"
                    >
                        The Squad
                    </Text>
                    <Text className="text-lg lg:text-xl">
                        Designers, developers, and creators.
                    </Text>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {data.map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col max-lg:border-b-3 lg:border-r-3 last:border-0"
                        >
                            <div
                                className={`${member.bgColor} border-b-3 h-64 overflow-hidden`}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-4 p-6 lg:p-8 bg-[#f9f5f2]">
                                <Text as="h3" className="uppercase">
                                    {member.name}
                                </Text>
                                <Badge variant="outline" className="w-fit rounded-full text-xs uppercase tracking-widest bg-white">
                                    {member.role}
                                </Badge>
                                <Text className="text-sm font-medium leading-relaxed">
                                    {member.description}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
