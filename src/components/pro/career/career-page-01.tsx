"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, Clock, Filter } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Select } from "@/components/retroui/Select";
import { Text } from "@/components/retroui/Text";
import { Card } from "@/components/retroui/Card";

export default function CompanyCareerPageOne() {
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("all");
  const [location, setLocation] = useState("all");

  // Sample job listings data
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Austin, TX",
      type: "Contract",
      posted: "Just now",
    },
    {
      id: 5,
      title: "Customer Success Manager",
      department: "Customer Support",
      location: "Remote",
      type: "Full-time",
      posted: "5 days ago",
    },
    {
      id: 6,
      title: "Backend Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "1 week ago",
    },
  ];

  // Filter jobs based on search term and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDepartment =
      department === "all" || job.department === department;
    const matchesLocation = location === "all" || job.location === location;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="py-12 px-4">
      {/* Hero Section */}
      <div className="bg-accent border-b-8">
        <div className="container mx-auto px-4 py-16">
          <Text as="h1" className="mb-6">
            Join Our Team
          </Text>
          <Text className="text-lg text-muted-foreground max-w-2xl mb-8">
            We're looking for passionate people to help us build the future of
            technology. Check out our open positions below.
          </Text>
          <div className="relative max-w-xl">
            <Input
              type="text"
              placeholder="Search for jobs..."
              className="pl-12 py-4 text-lg bg-background border-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <span className="font-semibold">Filter by:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
            <Select value={department} onValueChange={setDepartment}>
              <Select.Trigger className="bg-background">
                <Select.Value placeholder="Department" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="all">All Departments</Select.Item>
                <Select.Item value="Engineering">Engineering</Select.Item>
                <Select.Item value="Design">Design</Select.Item>
                <Select.Item value="Marketing">Marketing</Select.Item>
                <Select.Item value="Customer Support">
                  Customer Support
                </Select.Item>
              </Select.Content>
            </Select>

            <Select value={location} onValueChange={setLocation}>
              <Select.Trigger className="bg-background">
                <Select.Value placeholder="Location" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="all">All Locations</Select.Item>
                <Select.Item value="San Francisco, CA">
                  San Francisco, CA
                </Select.Item>
                <Select.Item value="New York, NY">New York, NY</Select.Item>
                <Select.Item value="Austin, TX">Austin, TX</Select.Item>
                <Select.Item value="Remote">Remote</Select.Item>
              </Select.Content>
            </Select>
          </div>
        </div>

        {/* Job Count */}
        <p className="text-lg mb-6">
          Showing <span className="font-bold">{filteredJobs.length}</span> open
          positions
        </p>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="bg-card shadow-none">
              <Card.Header>
                <Card.Title>{job.title}</Card.Title>
              </Card.Header>
              <Card.Content className="pt-0">
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                </div>

                <Button className="w-full justify-center" variant="secondary">
                  View Position
                </Button>
              </Card.Content>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-2">No positions found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setDepartment("all");
                setLocation("all");
              }}
              className="border-2 border-black"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>

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
