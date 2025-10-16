"use client";

import { useState } from "react";
import { Rocket } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { RadioGroup } from "@/components/retroui/Radio";
import { Textarea } from "@/components/retroui/Textarea";
import { Checkbox } from "@/components/retroui/Checkbox";
import { Text } from "@/components/retroui/Text";

type UserProfileData = {
  name: string;
  role: string;
  experience: string;
  interests: string[];
  goals: string;
  notifications: boolean;
  avatar: string;
};

export default function UserProfileOnboardingOne() {
  const [formData, setFormData] = useState<UserProfileData>({
    name: "",
    role: "",
    experience: "",
    interests: [],
    goals: "",
    notifications: true,
    avatar: "avatar-1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const updateFormData = (field: keyof UserProfileData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => {
      const interests = [...prev.interests];
      if (interests.includes(interest)) {
        return { ...prev, interests: interests.filter((i) => i !== interest) };
      } else {
        return { ...prev, interests: [...interests, interest] };
      }
    });
  };

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
        <div className="p-8">
          <Text as="h2">Set Up Your Profile</Text>
          <Text className="text-muted-foreground font-medium">
            Tell us a bit about yourself to get started
          </Text>

          <form onSubmit={handleSubmit} className="mt-12 space-y-8">
            <div>
              <Label
                htmlFor="name"
                className="text-base font-medium block mb-2"
              >
                What should we call you?
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                required
              />
            </div>

            <div>
              <Label className="text-base font-medium block mb-2">
                What's your role?
              </Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) => updateFormData("role", value)}
                className="flex flex-row flex-wrap text-sm gap-2"
              >
                {[
                  ["designer", "Designer"],
                  ["developer", "Developer"],
                  ["product-manager", "Product Manager"],
                  ["other", "Other"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className={`flex items-center space-x-2 border-2 px-3 py-2 transition-all duration-300 ${
                      formData.role === value
                        ? "bg-blue-100 shadow"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <RadioGroup.Item
                      value={value}
                      id={`role-${value}`}
                      required
                      size="sm"
                    />
                    <Label
                      htmlFor={`role-${value}`}
                      className="cursor-pointer w-full"
                    >
                      {label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-base font-medium block mb-2">
                Experience level
              </Label>
              <RadioGroup
                value={formData.experience}
                onValueChange={(value) => updateFormData("experience", value)}
                className="flex flex-row flex-wrap gap-2"
              >
                {[
                  ["beginner", "Beginner"],
                  ["intermediate", "Intermediate"],
                  ["advanced", "Advanced"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className={`flex items-center space-x-2 border-2 px-3 py-2 transition-all duration-300 ${
                      formData.experience === value
                        ? "bg-blue-100 shadow"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <RadioGroup.Item
                      value={value}
                      id={`exp-${value}`}
                      required
                      size="sm"
                    />
                    <Label
                      htmlFor={`exp-${value}`}
                      className="cursor-pointer w-full"
                    >
                      {label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-base font-medium block mb-2">
                Your Interests (select at least one)
              </Label>

              <div className="flex flex-row flex-wrap gap-2">
                {[
                  ["ui-design", "UI Design"],
                  ["ux-research", "UX Research"],
                  ["frontend", "Frontend"],
                  ["backend", "Backend"],
                  ["mobile", "Mobile"],
                  ["ai", "AI"],
                  ["accessibility", "Accessibility"],
                  ["devops", "DevOps"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className={`border-2 border-black px-3 text-sm py-2 cursor-pointer ${
                      formData.interests.includes(value)
                        ? "bg-blue-100 shadow"
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <label className="flex items-center text-sm w-full cursor-pointer">
                      <Checkbox
                        checked={formData.interests.includes(value)}
                        className="mr-2"
                        onCheckedChange={() => toggleInterest(value)}
                        size="sm"
                      />
                      <span>{label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-medium block mb-2">
                What are your goals with our platform?
              </Label>
              <Textarea
                id="goals"
                placeholder="I want to..."
                value={formData.goals}
                onChange={(e: { target: { value: any } }) =>
                  updateFormData("goals", e.target.value)
                }
                required
              />
            </div>

            <Button type="submit">
              <Rocket className="mr-2 h-4 w-4" />
              Complete Profile Setup
            </Button>
          </form>
        </div>

        <div className="hidden h-full lg:block">
          <img
            src="https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?q=80&w=3039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
