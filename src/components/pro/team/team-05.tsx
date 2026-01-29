"use client";

import { useState } from "react";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";

export const data = [
  {
    id: 1,
    name: "Mark Baba",
    role: "Innovation Specialist",
    profileImage: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-05/member_1.png",
    decorImage: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-05/member_1_dec.svg",
    decorPattern: "brown-vector",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Creative Director",
    profileImage: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-05/member_2.png",
    decorImage: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-05/member_2_dec.svg",
    decorPattern: "pink-vector",
  },
  {
    id: 3,
    name: "Alex Turner",
    role: "Lead Developer",
    profileImage: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-05/member_3.png",
    decorImage: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/teams/team-05/member_3_dec.svg",
    decorPattern: "blue-vector",
  },
];

export default function TeamFive() {
  const [selectedMember, setSelectedMember] = useState<number>(1);

  return (
    <section className="min-h-screen bg-[#599D77] flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <Badge variant="surface" className="inline-flex mb-6 rounded-sm">The Ultimate Team</Badge>
          <Text as="h1" className="mb-4 text-white">Introducing Our Incredible Crew!</Text>
          <Text className="text-base lg:text-md text-gray-100 font-medium max-w-2xl mx-auto">
            At our company, we champion innovation and creativity. Come along on this thrilling adventure!
          </Text>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {data.map((member) => (
            <Card
              role="button"
              key={member.id} 
              onClick={() => setSelectedMember(member.id)}
              className={`relative h-[500px] shadow-lg hover:shadow-lg border-3 ${selectedMember === member.id ? 'w-[500px]' : 'w-[280px]'} overflow-hidden duration-500 cursor-pointer group rounded-2xl`}
            >
              <img
                src={member.decorImage}
                alt="decorative pattern"
                className={`absolute -top-10 -right-10 w-44 h-44 object-cover z-0 transition-all duration-500 ${selectedMember === member.id ? 'top-auto -bottom-10  right-auto -left-10 w-56 h-56' : ''}`}
              />
              <img src={member.profileImage} alt={member.name} className={`h-2/3 object-cover absolute right-0 bottom-0 z-10 transition-all duration-500 ${selectedMember === member.id ? 'h-[400px] -right-15' : ''}`} />
              <div className={`flex flex-col justify-start items-start p-6 lg:p-8 transition-opacity duration-300 opacity-0 pointer-events-none z-1 ${selectedMember === member.id ? 'delay-300 opacity-100' : ''}`}>
                <Text as="h4" className="font-normal text-4xl lg:text-5xl mb-4">{member.name}</Text>
                <Badge variant="solid" className="bg-[#599D77] text-white font-bold px-4 rounded-full">
                  {member.role}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}