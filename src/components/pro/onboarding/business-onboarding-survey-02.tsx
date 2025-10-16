"use client";

import type React from "react";
import { useState } from "react";
import { Building2 } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { RadioGroup } from "@/components/retroui/Radio";
import { Select } from "@/components/retroui/Select";
import { Checkbox } from "@/components/retroui/Checkbox";
import { Text } from "@/components/retroui/Text";

type BusinessData = {
  employeeCount: string;
  industry: string;
  goals: string[];
  logo?: File | null;
};

export default function BusinessOnboardingSurveyTwo() {
  const [formData, setFormData] = useState<BusinessData>({
    employeeCount: "",
    industry: "",
    goals: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const updateFormData = (field: keyof BusinessData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => {
      const currentGoals = [...prev.goals];
      if (currentGoals.includes(goal)) {
        return { ...prev, goals: currentGoals.filter((g) => g !== goal) };
      } else {
        return { ...prev, goals: [...currentGoals, goal] };
      }
    });
  };

  return (
    <div className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
        <div className="p-8">
          <Text as="h2">Complete Business Setup</Text>
          <Text className="text-muted-foreground font-medium mt-1">
            Select your business details to help us get to know you better.
          </Text>

          <form onSubmit={handleSubmit} className="mt-12 space-y-8">
            <div>
              <Label
                htmlFor="industry"
                className="text-base font-medium block mb-2"
              >
                Industry
              </Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => updateFormData("industry", value)}
              >
                <Select.Trigger className="border-2 border-black w-60">
                  <Select.Value placeholder="Select your industry" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value="technology">Technology</Select.Item>
                  <Select.Item value="finance">Finance & Banking</Select.Item>
                  <Select.Item value="healthcare">Healthcare</Select.Item>
                  <Select.Item value="education">Education</Select.Item>
                  <Select.Item value="retail">Retail & E-commerce</Select.Item>
                  <Select.Item value="manufacturing">Manufacturing</Select.Item>
                  <Select.Item value="professional-services">
                    Professional Services
                  </Select.Item>
                  <Select.Item value="hospitality">
                    Hospitality & Tourism
                  </Select.Item>
                  <Select.Item value="real-estate">Real Estate</Select.Item>
                  <Select.Item value="media">Media & Entertainment</Select.Item>
                  <Select.Item value="nonprofit">Nonprofit</Select.Item>
                  <Select.Item value="other">Other</Select.Item>
                </Select.Content>
              </Select>
            </div>

            <div>
              <Label className="text-base font-medium block mb-2">
                Number of Employees
              </Label>
              <RadioGroup
                value={formData.employeeCount}
                onValueChange={(value) =>
                  updateFormData("employeeCount", value)
                }
                className="flex flex-row flex-wrap text-sm gap-2"
              >
                {[
                  ["1-10", "1-10 employees"],
                  ["11-50", "11-50 employees"],
                  ["51-200", "51-200 employees"],
                  ["201-500", "201-500 employees"],
                  ["501+", "501+ employees"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className={`flex items-center space-x-2 border-2 border-black px-3 py-2 ${
                      formData.employeeCount === value
                        ? "bg-blue-100 shadow"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <RadioGroup.Item value={value} id={`employees-${value}`} />
                    <Label
                      htmlFor={`employees-${value}`}
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
                Business Goals
              </Label>
              <div className="flex flex-row flex-wrap gap-2">
                {[
                  [
                    "growth",
                    "Business Growth",
                    "Increase revenue and expand customer base",
                  ],
                  [
                    "efficiency",
                    "Operational Efficiency",
                    "Streamline processes and reduce costs",
                  ],
                  [
                    "digital",
                    "Digital Transformation",
                    "Modernize and digitize business operations",
                  ],
                  [
                    "customer",
                    "Customer Experience",
                    "Improve customer satisfaction and loyalty",
                  ],
                  [
                    "innovation",
                    "Innovation",
                    "Develop new products or services",
                  ],
                ].map(([value, label, description]) => (
                  <div
                    key={value}
                    className={`border-2 border-black px-3 py-2 ${
                      formData.goals.includes(value)
                        ? "bg-blue-100 shadow"
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <label className="flex items-center text-sm w-full cursor-pointer">
                      <Checkbox
                        checked={formData.goals.includes(value)}
                        onCheckedChange={() => handleGoalToggle(value)}
                        className="mr-2"
                      />
                      <span>{label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button type="submit">
              <Building2 className="mr-2 h-4 w-4" />
              Complete Business Setup
            </Button>
          </form>
        </div>

        <div className="hidden h-full lg:block">
          <img
            src="https://images.unsplash.com/photo-1560253740-f0e82b766d72?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
