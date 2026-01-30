"use client";

import { useState } from "react";
import { Button } from "@/components/retroui/Button";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Personal Information",
    description: "Provide your basic details",
  },
  {
    id: 2,
    title: "Company Details",
    description: "Tell us about your organization",
  },
  {
    id: 3,
    title: "Project Goals",
    description: "Define what you want to achieve",
  },
  {
    id: 4,
    title: "Review & Submit",
    description: "Confirm your information",
  },
];

export default function OnboardingStepsTwo() {
  const [currentStep, setCurrentStep] = useState(2);
  const [expandedStep, setExpandedStep] = useState<number | null>(2);

  const handleNext = () => {
    if (currentStep < steps.length) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setExpandedStep(nextStep);
    }
  };

  const toggleStep = (stepId: number) => {
    if (expandedStep === stepId) {
      setExpandedStep(null);
    } else {
      setExpandedStep(stepId);
      if (stepId <= currentStep || stepId === currentStep + 1) {
        setCurrentStep(stepId);
      }
    }
  };

  return (
    <div className="w-full py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-start border-4 transition-all duration-300 ease-in-out
                  ${step.id === currentStep ? "bg-yellow-100" : step.id < currentStep ? "bg-green-50" : "bg-gray-50"}
                  ${expandedStep === step.id ? "shadow-lg scale-[1.02]" : "scale-100 hover:shadow "}
                `}
            >
              <div
                className={`z-1 flex-shrink-0 w-12 h-12 rounded-full border-4 flex items-center justify-center text-xl font-bold m-4 transition-all duration-300 ease-in-out
                    ${step.id < currentStep ? "bg-green-400" : step.id === currentStep ? "bg-yellow-300" : "bg-gray-200"}
                  `}
              >
                {step.id < currentStep ? (
                  <CheckIcon className="w-6 h-6" />
                ) : (
                  step.id
                )}
              </div>

              <div className="flex-grow p-4">
                <div
                  className="flex justify-between items-center cursor-pointer transition-transform duration-200 hover:translate-x-1"
                  onClick={() => toggleStep(step.id)}
                >
                  <div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  <div>
                    {expandedStep === step.id ? (
                      <ChevronUpIcon className="w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {expandedStep === step.id && (
                  <div className="animate-slideDown">
                    <div className="my-6 bg-background p-4 border-2 border-dashed h-80">
                      <p className="mb-4">
                        This is placeholder content for step {step.id}. In a
                        real application, this would contain form fields or
                        information relevant to this step.
                      </p>
                    </div>

                    {step.id === currentStep && (
                      <Button
                        onClick={handleNext}
                        disabled={currentStep === steps.length}
                        className="ml-auto transition-all duration-300 hover:scale-105"
                      >
                        {currentStep === steps.length ? "Complete" : "Next"}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
