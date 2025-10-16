"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
  X,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CompanyCareerPageThree() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Sample job listings data
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "2 days ago",
      tags: ["React", "TypeScript", "UI/UX"],
      featured: true,
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      posted: "1 week ago",
      tags: ["Figma", "UI/UX", "Prototyping"],
      featured: false,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      posted: "3 days ago",
      tags: ["AWS", "Kubernetes", "CI/CD"],
      featured: true,
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Austin, TX",
      type: "Contract",
      posted: "Just now",
      tags: ["Social Media", "Content", "Analytics"],
      featured: false,
    },
    {
      id: 5,
      title: "Customer Success Manager",
      department: "Customer Support",
      location: "Remote",
      type: "Full-time",
      posted: "5 days ago",
      tags: ["Client Relations", "Onboarding", "Support"],
      featured: false,
    },
    {
      id: 6,
      title: "Backend Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "1 week ago",
      tags: ["Node.js", "Python", "Databases"],
      featured: false,
    },
    {
      id: 7,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      posted: "3 days ago",
      tags: ["Figma", "UI/UX", "User Research"],
      featured: false,
    },
    {
      id: 8,
      title: "Data Scientist",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      posted: "1 week ago",
      tags: ["Python", "Machine Learning", "SQL"],
      featured: true,
    },
  ];

  // Get all unique tags and locations
  const allTags = Array.from(new Set(jobs.flatMap((job) => job.tags)));
  const allLocations = Array.from(new Set(jobs.map((job) => job.location)));

  // Filter jobs based on search term, tags, and location
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => job.tags.includes(tag));
    const matchesLocation =
      !selectedLocation || job.location === selectedLocation;
    return matchesSearch && matchesTags && matchesLocation;
  });

  // Group jobs by department
  const departments = Array.from(new Set(jobs.map((job) => job.department)));

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTags([]);
    setSelectedLocation(null);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#FF5252] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl">
            <div className="inline-block -rotate-2 mb-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-white px-4 py-2 border-8 border-black transform translate-x-2 translate-y-2">
                CAREERS
              </h1>
              <div className="h-full w-full bg-black absolute top-0 left-0 -z-10"></div>
            </div>
            <p className="text-2xl max-w-2xl mb-8 bg-white p-4 border-8 border-black rotate-1 inline-block">
              Join our team of creative rebels and disruptors.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6 mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for jobs..."
              className="pl-10 py-6 text-lg border-8 border-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filter by skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className={`cursor-pointer text-base py-2 px-3 border-4 border-black ${
                      selectedTags.includes(tag)
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Location
              </h3>
              <div className="flex flex-wrap gap-2">
                {allLocations.map((location) => (
                  <Badge
                    key={location}
                    variant={
                      selectedLocation === location ? "default" : "outline"
                    }
                    className={`cursor-pointer text-base py-2 px-3 border-4 border-black ${
                      selectedLocation === location
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                    onClick={() =>
                      setSelectedLocation(
                        selectedLocation === location ? null : location
                      )
                    }
                  >
                    {location}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Active filters */}
          {(selectedTags.length > 0 || selectedLocation || searchTerm) && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold">Active filters:</span>
              {selectedTags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-black text-white border-2 border-black flex items-center gap-1"
                >
                  {tag}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  />
                </Badge>
              ))}
              {selectedLocation && (
                <Badge className="bg-black text-white border-2 border-black flex items-center gap-1">
                  {selectedLocation}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setSelectedLocation(null)}
                  />
                </Badge>
              )}
              {searchTerm && (
                <Badge className="bg-black text-white border-2 border-black flex items-center gap-1">
                  "{searchTerm}"
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setSearchTerm("")}
                  />
                </Badge>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="border-2 border-black ml-2"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Job Count */}
        <p className="text-lg mb-6 font-bold">
          {filteredJobs.length}{" "}
          {filteredJobs.length === 1 ? "position" : "positions"} available
        </p>

        {/* Job Listings by Department */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8 border-4 border-black p-1 bg-white">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-black data-[state=active]:text-white"
            >
              All Jobs
            </TabsTrigger>
            {departments.map((dept) => (
              <TabsTrigger
                key={dept}
                value={dept}
                className="data-[state=active]:bg-black data-[state=active]:text-white"
              >
                {dept}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </TabsContent>

          {departments.map((dept) => (
            <TabsContent key={dept} value={dept} className="mt-0">
              <div className="space-y-6">
                {filteredJobs
                  .filter((job) => job.department === dept)
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12 border-8 border-black bg-yellow-100">
            <h3 className="text-2xl font-bold mb-2">No positions found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters
            </p>
            <Button
              onClick={clearFilters}
              className="bg-black text-white hover:bg-gray-800 border-4 border-black"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>

      {/* Values Section */}
      <div className="bg-[#00D1FF] py-16 border-y-8 border-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 inline-block bg-white px-4 py-2 border-8 border-black -rotate-2">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Be Bold",
                description:
                  "We take risks, challenge the status quo, and find new ways to grow.",
                color: "bg-[#FF9900]",
              },
              {
                title: "Stay Curious",
                description:
                  "We're lifelong learners, constantly seeking new knowledge and perspectives.",
                color: "bg-[#FF5252]",
              },
              {
                title: "Build Together",
                description:
                  "We collaborate openly, communicate honestly, and help each other succeed.",
                color: "bg-[#47CF73]",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`${value.color} border-8 border-black p-6 transform rotate-${index % 2 === 0 ? "1" : "-1"}`}
              >
                <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                <p className="text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-[#FF5252] p-8 border-8 border-black transform -rotate-1 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold mb-4">
              Don't see the right position?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 h-auto border-4 border-black transform rotate-1">
              Send us your resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Job Card Component
function JobCard({ job }: { job: any }) {
  const departmentColors: Record<string, string> = {
    Engineering: "bg-[#47CF73]",
    Design: "bg-[#00D1FF]",
    Marketing: "bg-[#FF9900]",
    "Customer Support": "bg-[#FF5252]",
  };

  return (
    <div
      className={`border-8 border-black p-6 ${
        job.featured ? "bg-yellow-100" : "bg-white"
      } hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
    >
      {job.featured && (
        <Badge className="bg-black text-white mb-2 border-2 border-black">
          Featured
        </Badge>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold mb-1">{job.title}</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
            <div className="flex items-center gap-1">
              <Badge
                className={`${departmentColors[job.department]} text-black border-2 border-black`}
              >
                {job.department}
              </Badge>
            </div>
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

          <div className="flex flex-wrap gap-2 mb-4">
            {job.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-white border-2 border-black"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Button className="bg-black text-white hover:bg-gray-800 border-4 border-black flex items-center gap-2 min-w-[140px]">
          Apply Now
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
