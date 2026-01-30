import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/ui";
import { Play, Figma, Download, Puzzle, Palette, Users } from "lucide-react";

export const Route = createFileRoute("/figma")({
  component: RetroUIForFigma,
});


// const ACCESS_OPTIONS = [
//   {
//     icon: <Figma className="w-8 h-8" />,
//     title: "Figma Community",
//     description:
//       "Access the library directly from Figma Community with all components and updates.",
//     ctaText: "Open in Figma",
//     ctaLink: "#",
//   },
//   {
//     icon: <Download className="w-8 h-8" />,
//     title: "Direct Download",
//     description:
//       "Download the complete package with all source files and documentation.",
//     ctaText: "Download Now",
//     ctaLink: "#",
//   },
// ];

// const FEATURES = [
//   {
//     icon: <Puzzle className="w-8 h-8" />,
//     title: "500+ Components",
//     description:
//       "Pre-designed, production-ready elements to build your product faster.",
//   },
//   {
//     icon: <Palette className="w-8 h-8" />,
//     title: "Fully Customizable",
//     description:
//       "Adapt colors, typography, and spacing to your brand in seconds.",
//   },
//   {
//     icon: <Sparkles className="w-8 h-8" />,
//     title: "Figma Ready",
//     description:
//       "Global styles and variables are built-in for maximum consistency.",
//   },
//   {
//     icon: <Users className="w-8 h-8" />,
//     title: "Built for Designers",
//     description: "Built with performance, variants, and auto-layout in mind.",
//   },
// ];

function RetroUIForFigma() {
  return (
    <div className="pro-theme">
      <section className="relative overflow-clip">
        <div className="container max-w-6xl mx-auto px-4 flex flex-col justify-center text-center items-center py-36">
          <div className="mb-12">
            <Badge variant="surface" className="rounded-full">
              Introducing RetroUI Figma Kit
            </Badge>
          </div>

          <Text
            as="h1"
            className="mb-4"
          >
            The Figma Kit for <br /> <span className="text-outlined italic">Neobrutalism</span> Design
          </Text>

          <Text className="mb-8 leading-relaxed lg:text-lg max-w-2xl mx-auto">
            Ship unique designs faster with RetroUI Figma kit. Comes with 150+ neo brutalist styled components & UI blocks.
          </Text>

          <div className="flex flex-wrap justify-center gap-4 mb-24">
            <Button
              variant="default"
              asChild
            >
              <Link to="/pricing">Access Now</Link>
            </Button>

            <Button
              variant="secondary"
              className="gap-2"
              asChild
            >
              <a href="https://fig.page/neo-pp" target="_blank">
                <svg width="16" height="24" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1002_10076)">
                    <path d="M5.59928e-08 22.4469C6.06337e-08 20.321 1.72336 18.5977 3.84924 18.5977L7.69849 18.5977L7.69849 22.4469C7.69849 24.5728 5.97512 26.2961 3.84924 26.2961C1.72336 26.2961 5.1352e-08 24.5728 5.59928e-08 22.4469Z" fill="#0ACF83" />
                    <path d="M7.69922 14.7477C7.69922 12.6218 9.42259 10.8984 11.5484 10.8984C13.6743 10.8984 15.3977 12.6218 15.3977 14.7477C15.3977 16.8736 13.6743 18.5969 11.5484 18.5969C9.42259 18.5969 7.69922 16.8735 7.69922 14.7477Z" fill="#1ABCFE" />
                    <path d="M7.27989e-08 14.7484C6.8158e-08 16.8743 1.72336 18.5977 3.84924 18.5977L7.69849 18.5977L7.69849 10.8992L3.84924 10.8992C1.72336 10.8992 7.74397e-08 12.6225 7.27989e-08 14.7484Z" fill="#A259FF" />
                    <path d="M7.69922 3.19922L7.69922 10.8977L11.5485 10.8977C13.6743 10.8977 15.3977 9.17434 15.3977 7.04846C15.3977 4.92258 13.6743 3.19922 11.5485 3.19922L7.69922 3.19922Z" fill="#FF7262" />
                    <path d="M7.27989e-08 7.04919C6.8158e-08 9.17507 1.72336 10.8984 3.84924 10.8984L7.69849 10.8984L7.69849 3.19995L3.84924 3.19995C1.72336 3.19995 7.74397e-08 4.92332 7.27989e-08 7.04919Z" fill="#F24E1E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1002_10076">
                      <rect width="15.397" height="29.4977" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Live Preview
              </a>
            </Button>
          </div>

          <video src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/figma-kit/figma-pro-v1-demo.mp4" autoPlay loop muted className="w-full rounded-lg"></video>
        </div>
      </section>
    </div>
  );
}

export default RetroUIForFigma;


// <section className="py-24 bg-linear-to-b from-white to-gray-50 relative">
//   <div
//     className="absolute inset-0 opacity-5"
//     style={{
//       backgroundImage:
//         "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
//       backgroundSize: "40px 40px",
//     }}
//   />

//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//     <div className="text-center max-w-4xl mx-auto mb-20">
//       <Badge
//         variant="surface"
//         size="md"
//         className="inline-flex text-lg mb-4"
//       >
//         Features
//       </Badge>
//       <Text as="h1" className="mb-6 font-sans font-bold">
//         Everything you need to design faster
//       </Text>
//       <Text className="md:text-xl">
//         A complete design system with 500+ components, built for speed and
//         flexibility.
//       </Text>
//     </div>

//     <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//       {FEATURES.map((feature, index) => (
//         <Card
//           key={feature.title}
//           className="bg-white p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
//         >
//           <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0" />

//           <div className="mb-6">
//             <div className="text-black [&>svg]:w-8 [&>svg]:h-8">
//               {feature.icon}
//             </div>
//           </div>

//           <Text as="h3" className="mb-3 font-sans font-bold">
//             {feature.title}
//           </Text>
//           <Text className="leading-relaxed">
//             {feature.description}
//           </Text>

//           <div className="absolute bottom-4 right-4 text-6xl font-bold text-muted group-hover:text-primary/30 transition-colors">
//             {String(index + 1).padStart(2, "0")}
//           </div>
//         </Card>
//       ))}
//     </div>
//   </div>
// </section>
// <section className="py-24 bg-white relative">
//   <div
//     className="absolute inset-0 opacity-5"
//     style={{
//       backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
//       backgroundSize: "20px 20px",
//     }}
//   />

//   <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//     <div className="text-center mb-16">
//       <Badge variant="solid" size="md" className="mb-6 inline-flex text-lg">
//         Video Showcase
//       </Badge>
//       <Text as="h1" className="mb-4 font-sans font-bold leading-tight">
//         See how it works
//       </Text>
//       <Text className="md:text-xl">
//         Watch a quick demonstration of our component system in action
//       </Text>
//     </div>

//     {/* Video container */}
//     <div className="bg-white border-4 rounded-xl border-black shadow-md p-6 hover:shadow-none transition-shadow">
//       <div className="aspect-video rounded-md bg-gray-50 border-2 border-black flex items-center justify-center relative overflow-hidden group">
//         {/* Grid pattern */}
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
//             backgroundSize: "40px 40px",
//           }}
//         />

//         <Button className="relative w-20 h-20 rounded-full bg-primary border-2 flex items-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-none z-10">
//           <Play className="w-10 h-10 text-black ml-1" fill="black" />
//         </Button>
//       </div>
//     </div>
//   </div>
// </section>
// <section className="py-24 bg-linear-to-b from-gray-50 to-white relative">
//   <div
//     className="absolute inset-0 opacity-5"
//     style={{
//       backgroundImage:
//         "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
//       backgroundSize: "40px 40px",
//     }}
//   />

//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//     <div className="text-center max-w-3xl mx-auto mb-16">
//       <Badge
//         variant="surface"
//         size="md"
//         className=" inline-flex text-lg mb-4"
//       >
//         Get Access
//       </Badge>
//       <Text as="h1" className="mb-6 font-sans font-bold">
//         Get started today
//       </Text>
//       <Text className="md:text-xl leading-relaxed">
//         Choose your preferred way to access the library and start designing.
//       </Text>
//     </div>

//     <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//       {ACCESS_OPTIONS.map((option, index) => (
//         <Card
//           key={option.title}
//           className="bg-white p-8 flex flex-col hover:scale-105 transition-all duration-300 group overflow-hidden"
//         >
//           <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0" />

//           <div className="mb-7">
//             <div className="text-black [&>svg]:w-10 [&>svg]:h-10">
//               {option.icon}
//             </div>
//           </div>

//           <Text as="h3" className="mb-3 font-sans font-bold">
//             {option.title}
//           </Text>
//           <Text className="mb-6 grow leading-relaxed">
//             {option.description}
//           </Text>

//           <Button
//             variant="secondary"
//             size="md"
//             className="w-full border-primary justify-center py-3 relative overflow-clip"
//           >
//             <a href={option.ctaLink}>{option.ctaText}</a>
//             <div className="absolute -bottom-3 -right-2 text-6xl font-bold text-gray-100 group-hover:text-primary/20 transition-colors">
//               {String(index + 1).padStart(2, "0")}
//             </div>
//           </Button>
//         </Card>
//       ))}
//     </div>
//   </div>
// </section>