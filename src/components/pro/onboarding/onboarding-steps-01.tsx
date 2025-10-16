"use client";

import { useState } from "react";
import { Button } from "@/components/retroui/Button";
import { CheckIcon } from "lucide-react";
import { Text } from "@/components/retroui/Text";

const steps = [
  {
    id: 1,
    title: "Account Setup",
    description: "Create your account",
  },
  {
    id: 2,
    title: "Business Details",
    description: "Tell us about your business",
  },
  {
    id: 3,
    title: "Team Members",
    description: "Invite your team",
  },
  {
    id: 4,
    title: "Confirmation",
    description: "Review and complete setup",
  },
];

export default function OnboardingStepsOne() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId: number) => {
    // Only allow clicking on completed steps or the next available step
    if (stepId <= currentStep || stepId === currentStep + 1) {
      setCurrentStep(stepId);
    }
  };

  return (
    <div className="w-full bg-background py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex justify-center items-center"
            >
              <div
                className={` flex flex-col items-center ${index > 0 ? "md:ml-4" : ""} ${index < steps.length - 1 ? "mb-4 md:mb-0" : ""}`}
                onClick={() => handleStepClick(step.id)}
              >
                <div
                  className={`w-12 h-12 z-1 rounded-full border-2 flex items-center justify-center text-xl font-bold
                    ${step.id < currentStep ? "bg-green-400" : step.id === currentStep ? "bg-primary" : "bg-gray-200"}
                    cursor-pointer transition-all hover:scale-105
                  `}
                >
                  {step.id < currentStep ? (
                    <CheckIcon className="w-6 h-6" />
                  ) : (
                    step.id
                  )}
                </div>

                <div className="text-center mt-2">
                  <div className="font-bold">{step.title}</div>
                  <div className="text-sm hidden md:block">
                    {step.description}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[calc(50%+1rem)] top-6 w-[100%] h-1">
                  <div
                    className={`w-full h-full ${step.id < currentStep ? "bg-green-400" : "bg-gray-200"}`}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="min-h-[400px] border-2 p-4 mb-6 bg-gray-50">
          <Text as="h4" className="mb-4">
            Step {currentStep}: {steps[currentStep - 1].title}
          </Text>
          <Text className="text-muted-foreground">
            This is placeholder content for step {currentStep}. In a real
            application, this would contain form fields or information relevant
            to this step.
          </Text>
        </div>

        <div className="flex justify-between">
          {currentStep > 1 && (
            <Button onClick={handlePrevious} variant="outline">
              {"< "}Previous
            </Button>
          )}
          <Button onClick={handleNext} className="ml-auto">
            {currentStep === steps.length ? "Complete" : "Next >"}
          </Button>
        </div>
      </div>
    </div>
  );
}
