"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Accordion } from "@/components/retroui/Accordion";
import { Select } from "@/components/retroui/Select";
import { Text } from "@/components/retroui/Text";
import { Card } from "@/components/retroui/Card";

export default function CompanyCareerPage2() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  // Sample departments and job listings
  const departments = [
    {
      id: "engineering",
      name: "Engineering",
      color: "bg-purple-200",
      buttonDecoration: "bg-purple-300 hover:bg-purple-400",
      jobs: [
        {
          id: 1,
          title: "Senior Frontend Developer",
          location: "San Francisco, CA",
          type: "Full-time",
          posted: "2 days ago",
        },
        {
          id: 2,
          title: "Backend Engineer",
          location: "Remote",
          type: "Full-time",
          posted: "1 week ago",
        },
        {
          id: 3,
          title: "DevOps Engineer",
          location: "New York, NY",
          type: "Full-time",
          posted: "3 days ago",
        },
      ],
    },
    {
      id: "design",
      name: "Design",
      color: "bg-blue-200",
      buttonDecoration: "bg-blue-300 hover:bg-blue-400",
      jobs: [
        {
          id: 4,
          title: "Product Designer",
          location: "Remote",
          type: "Full-time",
          posted: "1 week ago",
        },
        {
          id: 5,
          title: "UI/UX Designer",
          location: "San Francisco, CA",
          type: "Contract",
          posted: "Just now",
        },
      ],
    },
    {
      id: "marketing",
      name: "Marketing",
      color: "bg-green-200",
      buttonDecoration: "bg-green-300 hover:bg-green-400",
      jobs: [
        {
          id: 6,
          title: "Marketing Specialist",
          location: "Austin, TX",
          type: "Contract",
          posted: "Just now",
        },
        {
          id: 7,
          title: "Content Writer",
          location: "Remote",
          type: "Part-time",
          posted: "3 days ago",
        },
      ],
    },
    {
      id: "customer-support",
      name: "Customer Support",
      color: "bg-yellow-200",
      borderColor: "border-yellow-500",
      jobs: [
        {
          id: 8,
          title: "Customer Success Manager",
          location: "Remote",
          type: "Full-time",
          posted: "5 days ago",
        },
      ],
    },
  ];

  // Filter departments and jobs based on search term and selected department
  const filteredDepartments = departments
    .filter(
      (dept) => selectedDepartment === "all" || dept.id === selectedDepartment
    )
    .map((dept) => ({
      ...dept,
      jobs: dept.jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((dept) => dept.jobs.length > 0);

  // Count total jobs
  const totalJobs = filteredDepartments.reduce(
    (total, dept) => total + dept.jobs.length,
    0
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-200 to-purple-200 border-b-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_0)] bg-[size:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl">
            <Text as="h1" className="text-5xl md:text-7xl font-bold mb-6">
              RetroUI Careers
            </Text>
            <Text as="p" className="text-xl max-w-2xl mb-8">
              Join our team of creative problem-solvers and help us build
              amazing products.
            </Text>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8 h-12">
          <div className="relative flex-grow h-full">
            <Input
              type="text"
              placeholder="Search for jobs..."
              className="pl-10  border-4 border-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <Select
            value={selectedDepartment}
            onValueChange={setSelectedDepartment}
          >
            <Select.Trigger className="border-4 bg-background min-w-[200px] h-full">
              <Select.Value placeholder="Department" />
            </Select.Trigger>
            <Select.Content className="border-4 font-semibold">
              <Select.Item value="all">All Departments</Select.Item>
              {departments.map((dept) => (
                <Select.Item key={dept.id} value={dept.id}>
                  {dept.name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        </div>

        {/* Job Count */}
        <p className="text-lg mb-6 font-bold">
          {totalJobs} {totalJobs === 1 ? "position" : "positions"} available
        </p>

        {/* Department Accordions */}
        {filteredDepartments.length > 0 ? (
          <Accordion
            type="multiple"
            defaultValue={filteredDepartments.map((d) => d.id)}
            className="space-y-6"
          >
            {filteredDepartments.map((dept) => (
              <Accordion.Item
                key={dept.id}
                value={dept.id}
                className={`${dept.color} border-4 shadow-lg`}
              >
                <Accordion.Header className="p-6 hover:no-underline">
                  <div className="flex items-center">
                    <h2 className="text-2xl font-bold">{dept.name}</h2>
                    <span className="ml-3 bg-foreground text-background text-sm px-2 py-1 rounded-full">
                      {dept.jobs.length}
                    </span>
                  </div>
                </Accordion.Header>
                <Accordion.Content className="p-6">
                  <div className="space-y-4">
                    {dept.jobs.map((job) => (
                      <div
                        key={job.id}
                        className="bg-white border-4 border-black p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div>
                          <h3 className="text-xl font-bold mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>Posted {job.posted}</span>
                            </div>
                          </div>
                        </div>

                        <Button className={`${dept.buttonDecoration}`}>
                          Apply Now
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion>
        ) : (
          <div className="text-center py-12 border-4 border-black bg-gray-100">
            <h3 className="text-2xl font-bold mb-2">No positions found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedDepartment("all");
              }}
              className="border-2 border-black"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <Text
          as="h2"
          className="mb-8 inline-block bg-yellow-200 px-4 py-2 border-4"
        >
          Why Work With Us?
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Flexible Work",
              description: "Work from anywhere with flexible hours",
              color: "bg-blue-100",
            },
            {
              title: "Competitive Pay",
              description: "Above-market compensation and equity packages",
              color: "bg-green-100",
            },
            {
              title: "Health Benefits",
              description: "Comprehensive health, dental, and vision coverage",
              color: "bg-purple-100",
            },
            {
              title: "Growth Opportunities",
              description: "Continuous learning and career advancement",
              color: "bg-pink-100",
            },
          ].map((benefit, index) => (
            <Card
              key={index}
              className={`${benefit.color} border-4 duration-200`}
            >
              <Card.Header>
                <Card.Title>{benefit.title}</Card.Title>
                <Card.Description>{benefit.description}</Card.Description>
              </Card.Header>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}

      {/* CTA Section */}
      <div className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <Text as="h2" className="mb-4">
            Don't see the right position?
          </Text>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send
            us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg">Submit Your Resume</Button>
        </div>
      </div>
    </div>
  );
}
