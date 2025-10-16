"use client";

import type React from "react";
import { useState } from "react";
import { Building2, Upload } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Textarea } from "@/components/retroui/Textarea";
import { Text } from "@/components/retroui/Text";

type BusinessData = {
  businessName: string;
  businessWebsite: string;
  businessDescription: string;
  logo?: File | null;
};

export default function BusinessOnboardingSurveyOne() {
  const [formData, setFormData] = useState<BusinessData>({
    businessName: "",
    businessWebsite: "",
    businessDescription: "",
    logo: null,
  });
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const updateFormData = (field: keyof BusinessData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      updateFormData("logo", file);

      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
        <div className="p-8">
          <Text as="h2">Set Up Your Business</Text>
          <Text className="text-muted-foreground font-medium mt-1">
            Tell us about your business to get started
          </Text>

          <form onSubmit={handleSubmit} className="mt-12 space-y-8">
            <div>
              <Label
                htmlFor="logo"
                className="text-base font-medium block mb-2"
              >
                Business Logo
              </Label>
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 border-2 border-black flex items-center justify-center bg-gray-50">
                  {logoPreview ? (
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Building2 className="w-10 h-10 text-gray-400" />
                  )}
                </div>
                <div>
                  <Input
                    id="logo"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="hidden"
                  />
                  <Label
                    htmlFor="logo"
                    className="cursor-pointer inline-flex items-center px-4 py-2 border-2 border-black bg-gray-100 hover:bg-gray-200"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Logo
                  </Label>
                  <p className="text-xs text-gray-500 mt-1">
                    Recommended: 512x512px, PNG or JPG
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Label
                htmlFor="businessName"
                className="text-base font-medium block mb-2"
              >
                Business Name
              </Label>
              <Input
                id="businessName"
                placeholder="Enter your business name"
                value={formData.businessName}
                onChange={(e) => updateFormData("businessName", e.target.value)}
                required
              />
            </div>

            <div>
              <Label
                htmlFor="businessWebsite"
                className="text-base font-medium block mb-2"
              >
                Business Website
              </Label>
              <Input
                id="businessWebsite"
                placeholder="https://www.example.com"
                value={formData.businessWebsite}
                onChange={(e) =>
                  updateFormData("businessWebsite", e.target.value)
                }
              />
            </div>

            <div>
              <Label
                htmlFor="businessDescription"
                className="text-base font-medium block mb-2"
              >
                Business Description
              </Label>
              <Textarea
                id="businessDescription"
                placeholder="What does your business do?"
                value={formData.businessDescription}
                onChange={(e: { target: { value: string } }) =>
                  updateFormData("businessDescription", e.target.value)
                }
              />
            </div>

            <Button type="submit">
              <Building2 className="mr-2 h-4 w-4" />
              Create Business
            </Button>
          </form>
        </div>

        <div className="hidden h-full lg:block">
          <img
            src="https://images.unsplash.com/photo-1710678832170-f2dc47db0dd1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGJyaWdodCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
