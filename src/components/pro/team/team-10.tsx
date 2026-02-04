import { Text } from "@/components/retroui/Text";

const members = [
  {
    id: 1,
    name: "Sam Taylor",
    role: "Creative Director",
    description: "Crafting bold visuals and leading design strategy with a passion for minimalism.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-10/team-10-1.png",
  },
  {
    id: 2,
    name: "Eleanor Vance",
    role: "Frontend Engineer",
    description: "Building seamless interfaces with clean code and an eye for detail.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-10/team-10-2.png",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "UX Researcher",
    description: "Uncovering user insights to shape intuitive and delightful experiences.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-10/team-10-3.png",
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    role: "Operations Lead",
    description: "Keeping the gears turning smoothly so the team can focus on what matters.",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-10/team-10-4.png",
  },
];

export default function TeamTen() {
  return (
    <section className="min-h-screen bg-background flex items-center py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center mb-12 text-center">
          <Text as="h1" className="uppercase mb-2">
            Our Team
          </Text>
          <Text className="text-lg text-muted-foreground">
            The people behind the product, united by craft and curiosity.
          </Text>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 border-2">
          {members.map((m, i) => {
            const shouldHaveRight = i % 2 === 0;
            const shouldHaveBottom = i % 4 === 0 || i % 4 === 1;

            return <div
              key={m.id}
              className={`flex gap-5 p-6 bg-white max-lg:border-b-2 last:max-lg:border-b-0 ${shouldHaveBottom && "lg:border-b-2"} ${shouldHaveRight && "lg:border-r-2"}`}
            >
              <div className="shrink-0 w-40 lg:w-48 aspect-4/5 border-2 overflow-hidden bg-[#aafc3d]">
                <img
                  src={m.image}
                  alt={m.name}
                  className="size-full object-cover"
                />
              </div>
              <div>
                {m.name.split(" ").map((n, j) => (
                  <Text key={j} as="h2">
                    {n}
                  </Text>
                ))}
                <Text className="text-base font-bold text-[#f0f] mb-4">// {m.role}</Text>
                <Text className="text-base">
                  {m.description}
                </Text>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  );
}

