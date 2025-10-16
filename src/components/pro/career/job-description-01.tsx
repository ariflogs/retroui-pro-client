"use client";

import { Button } from "@/components/retroui/Button";
import { Badge } from "@/components/retroui/Badge";
import {
  MapPin,
  Calendar,
  DollarSign,
  Briefcase,
  Clock,
  Building,
  Share2,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";

const details = {
  title: "Senior Product Designer",
  company: "Logging Studio",
  location: "Remote",
  type: "Full-time",
  salary: "$120,000 - $150,000",
  description:
    "We are seeking a talented and highly motivated UI/UX Designer to join our growing team. The ideal candidate will have a strong portfolio of design work and a passion for creating intuitive and visually appealing user experiences.",
  postedDate: "22th May, 2025",
  closingDate: "24th June, 2025",
  responsibilities: [
    "Collaborate with product management and engineering to define and implement innovative design solutions for the product direction, visuals and experience",
    "Conduct user research and testing to gather insights and validate design decisions",
    "Continuously iterate and improve upon the design of our products",
    "Thinking holistically about complex systems, empathize with users, and understand goals to create compelling user experiences",
    "Collaboratively improving our design systems to ensure consistency and high quality experiences across all of our products",
    "Stay up-to-date with the latest design trends and techniques",
  ],
  requirements: [
    "6+ years of industry experience as a Product, Interaction or UX Designer",
    "A portfolio that reflects your strengths in both UX and visual design skills, including multiple shipped projects on which you were the primary designer",
    "A product mindset with the ability to understand product goals, identify opportunities, and make strategic design decisions",
    "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
    "Strong communication skills and ability to articulate design decisions",
  ],
  benefits: [
    {
      title: "Competitive Salary",
      description: "Industry-leading compensation package",
    },
    {
      title: "Remote Work",
      description: "Work from anywhere in the world",
    },
    {
      title: "Health Insurance",
      description: "Comprehensive medical, dental, and vision",
    },
    {
      title: "Unlimited PTO",
      description: "Take time off when you need it",
    },
  ],
  companyDetails: {
    name: "TechDreams",
    location: "San Francisco, California (Remote)",
    size: "50-200 employees",
    description:
      "TechDreams is a leading technology company specializing in creating innovative solutions that help businesses transform their digital presence.",
  },
  similarJobs: [
    {
      title: "Senior UX Designer",
      company: "DesignCraft",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      company: "InnovateTech",
      location: "San Francisco",
      type: "Full-time",
    },
    {
      title: "UI/UX Lead",
      company: "CreativeMinds",
      location: "New York",
      type: "Full-time",
    },
  ],
};

export default function JobDescriptionOne() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Job Header */}
          <div className="border-4 bg-background p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <Avatar>
                <Avatar.Image
                  src="https://images.unsplash.com/photo-1741335661527-39595b58807f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJpZ2h0JTIwY29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D"
                  alt="Company Logo"
                />
                <Avatar.Fallback>CN</Avatar.Fallback>
              </Avatar>
              <div>
                <Text as="h2" className="mb-1">
                  Senior Product Designer
                </Text>
                <Text as="p" className="text-lg font-medium mb-3">
                  Logging Studio
                </Text>
                <div className="flex flex-wrap gap-4">
                  <Badge className="bg-green-300" variant="surface" size="sm">
                    UI/UX Designer
                  </Badge>
                  <Badge className="bg-blue-300" variant="surface" size="sm">
                    <MapPin className="h-4 w-4 mr-1 inline" /> Remote
                  </Badge>
                  <Badge className="bg-yellow-300" variant="surface" size="sm">
                    <Clock className="h-4 w-4 mr-1 inline" /> Full-time
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="border-4 bg-background p-6 shadow-lg">
            <Text as="h3" className="mb-4 pb-2 border-b-2">
              Job Description:
            </Text>
            <Text as="p" className="mb-6">
              We are seeking a talented and highly motivated UI/UX Designer to
              join our growing team. The ideal candidate will have a strong
              portfolio of design work and a passion for creating intuitive and
              visually appealing user experiences.
            </Text>

            <Text as="h3" className="mb-4 pb-2 border-b-2">
              Key Responsibilities:
            </Text>
            <ul className="list-none space-y-3 mb-6">
              {details.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-1" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>

            <Text as="h3" className="mb-4 pb-2 border-b-2">
              Requirements:
            </Text>
            <ul className="list-none space-y-3">
              {details.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF5A5F] flex-shrink-0 mt-0.5" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="border-4 border-black bg-background p-6 shadow-lg">
            <Text as="h3" className="mb-4 pb-2 border-b-2">
              Benefits & Perks:
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.benefits.map((benefit, index) => (
                <div key={index} className="border-2 p-3 bg-accent">
                  <Text className="text-xl font-bold">{benefit.title}</Text>
                  <Text as="p" className="text-sm">
                    {benefit.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Job posting Details */}
          <div className="border-4 bg-background p-6 shadow-lg">
            <Text as="h3" className="mb-4 pb-2 border-b-2">
              Job Details
            </Text>
            <div className="space-y-4">
              <div>
                <Text className="font-bold text-sm text-muted-foreground">
                  Date Posted
                </Text>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{details.postedDate}</span>
                </div>
              </div>
              <div>
                <Text className="font-bold text-sm text-muted-foreground">
                  Deadline
                </Text>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{details.closingDate}</span>
                </div>
              </div>
              <div>
                <Text className="font-bold text-sm text-muted-foreground">
                  Offered Salary
                </Text>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>{details.salary}</span>
                </div>
              </div>
              <div>
                <Text className="font-bold text-sm text-muted-foreground">
                  Employment Type
                </Text>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>{details.type}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <Button className="w-full justify-center">
                Apply Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary" className="w-full justify-center">
                Refer a Friend
                <Share2 className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* About Company */}
          <div className="border-4 bg-background p-6 shadow-lg">
            <Text as="h3" className="mb-4 pb-2 border-b-2">
              About Company
            </Text>
            <div className="space-y-4">
              <div>
                <Text className="font-bold text-sm text-muted-foreground">
                  Company Name
                </Text>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>{details.companyDetails.name}</span>
                </div>
              </div>
              <div>
                <Text className="font-bold text-sm text-muted-foreground">
                  Location
                </Text>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{details.companyDetails.location}</span>
                </div>
              </div>
              <div>
                <Text className="font-bold text-sm text-gray-600">
                  Company Size
                </Text>
                <div className="flex items-center gap-2">
                  <span>{details.companyDetails.size}</span>
                </div>
              </div>
              <div className="pt-2">
                <Text as="p" className="text-sm">
                  {details.companyDetails.description}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
