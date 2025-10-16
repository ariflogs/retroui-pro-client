import { useState } from "react";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

const timelineData = [
  [
    {
      year: "2024",
      content: (
        <Text>
          Started consulting for startups and scale-ups while mentoring aspiring designers. Helping companies build strong design foundations and design teams that drive business growth.
        </Text>
      )
    },
    {
      year: "2023",
      content: (
        <Text>
          Transitioned to leading product design initiatives, focusing on user experience optimization and design system development. <br /> Led a team of designers to create cohesive and user-centered design solutions.
        </Text>
      )
    },
    {
      year: "2022",
      content: (
        <>
          <Text>
            I started working as a Sr. Product Designer at{" "}
            <a href="#" className="underline font-medium">
              Sweatcoin
            </a>
            , a mobile app that rewards users for walking. <br /> I was in the Growth Team, where my main focus was design with the goal of user acquisition. My marketing background was particularly useful here. During my time there we gained 80M+ new users.
          </Text>
        </>
      )
    },
  ],
  [
    {
      year: "2021",
      content: (
        <>
          <Text>
            I started working as a Sr. Product Designer at{" "}
            <a href="#" className="underline font-medium">
              Sweatcoin
            </a>
            , a mobile app that rewards users for walking. <br /> I was in the Growth Team, where my main focus was design with the goal of user acquisition. My marketing background was particularly useful here. During my time there we gained 80M+ new users.
          </Text>
        </>
      )
    },
    {
      year: "2019",
      content: (
        <>
          <Text>
            I quit my job, and became a self-taught freelance designer.
          </Text>
          <Text>
            I spent around 3 years freelancing, mostly designing & building{" "}
            <a href="#" className="underline font-medium">
              Webflow
            </a>{" "}
            websites & Shopify online stores. <br /> The thing I liked about freelancing was the opportunity to help small businesses.
          </Text>
        </>
      )
    },
  ],

]

export default function AboutUsThree() {
  const [activePageIndex, setActivePageIndex] = useState(0)

  return (
    <div className="bg-white py-20">
      <div className="w-full border-y-2 bg-[#F9F5F2] py-12 xl:py-16">
        <div className="max-w-6xl container px-4 mx-auto w-full flex flex-col md:flex-row gap-12 xl:gap-28 justify-between">
          <div className="flex flex-col gap-6 md:gap-10 xl:gap-20 w-full md:w-2/5">
            <img
              src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/oliver_two.png"
              alt="Olivia's professional portrait - UI/UX Designer in a creative workspace with design elements"
              className="w-full h-auto object-contain px-4 md:px-0"
            />
          </div>

          <div className="flex flex-col items-start md:w-3/5">
            <div className="mb-8 md:mb-12 xl:mb-16">
              <Text as="h2" className="lg:text-6xl font-sans mb-4 md:mb-6">About Me</Text>

              <div className="space-y-2">
                <Text>
                  I am a UI/UX Designer with a passion for creating beautiful experiences.
                </Text>
                <Text>
                  Passionate about crafting performant,
                  scalable, and user-friendly interfaces. Always looking for
                  new challenges and opportunities to grow my skills.
                </Text>
              </div>

            </div>

            <div className="flex flex-col xl:flex-row items-start gap-12">
              <div className="space-y-8">
                {timelineData[activePageIndex].map((item, index) => (
                  <div key={index} className="flex flex-col xl:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-[#C4A1FF] text-primary-foreground px-3 py-1.5 font-medium shadow-md border-2">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full xl:w-auto">
                <div className="flex-shrink-0 flex justify-center xl:justify-start items-start xl:flex-col gap-3 pt-1">
                  {timelineData.map((_, pageIndex) => (
                    <Button
                      key={pageIndex}
                      size="icon"
                      variant="outline"
                      onClick={() => setActivePageIndex(pageIndex)}
                      className={`shadow-none hover:translate-none p-1.5 ${activePageIndex === pageIndex ? "bg-[#C4A1FF]" : ""}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
