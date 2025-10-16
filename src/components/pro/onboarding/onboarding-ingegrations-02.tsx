"use client";

import type React from "react";

import { useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Zap,
  Mail,
  Calendar,
  FileText,
  MessageSquare,
  Database,
  BarChart3,
  CreditCard,
  Settings,
  ExternalLink,
  Plus,
  X,
} from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Checkbox } from "@/components/retroui/Checkbox";

type Integration = {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  isPopular?: boolean;
  isConnected?: boolean;
  requiresAuth?: boolean;
};

type IntegrationsData = {
  selectedIntegrations: string[];
  connectedIntegrations: string[];
  skipIntegrations: boolean;
};

const integrations: Integration[] = [
  // Email & Communication
  {
    id: "gmail",
    name: "Gmail",
    description: "Connect your Gmail account",
    category: "email",
    icon: <Mail className="w-6 h-6" />,
    color: "bg-red-100",
    isPopular: true,
  },
  {
    id: "outlook",
    name: "Outlook",
    description: "Microsoft Outlook integration",
    category: "email",
    icon: <Mail className="w-6 h-6" />,
    color: "bg-blue-100",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Team communication",
    category: "communication",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-purple-100",
    isPopular: true,
  },
  {
    id: "discord",
    name: "Discord",
    description: "Community chat platform",
    category: "communication",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-indigo-100",
  },

  // Productivity
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace",
    category: "productivity",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-gray-100",
    isPopular: true,
  },
  {
    id: "google-docs",
    name: "Google Docs",
    description: "Document collaboration",
    category: "productivity",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-blue-100",
  },
  {
    id: "trello",
    name: "Trello",
    description: "Project management boards",
    category: "productivity",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-blue-100",
  },
  {
    id: "asana",
    name: "Asana",
    description: "Team project management",
    category: "productivity",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-orange-100",
  },

  // Calendar
  {
    id: "google-calendar",
    name: "Google Calendar",
    description: "Schedule management",
    category: "calendar",
    icon: <Calendar className="w-6 h-6" />,
    color: "bg-green-100",
    isPopular: true,
  },
  {
    id: "outlook-calendar",
    name: "Outlook Calendar",
    description: "Microsoft calendar",
    category: "calendar",
    icon: <Calendar className="w-6 h-6" />,
    color: "bg-blue-100",
  },
  {
    id: "calendly",
    name: "Calendly",
    description: "Meeting scheduling",
    category: "calendar",
    icon: <Calendar className="w-6 h-6" />,
    color: "bg-blue-100",
  },

  // Automation
  {
    id: "zapier",
    name: "Zapier",
    description: "Workflow automation",
    category: "automation",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-orange-100",
    isPopular: true,
  },
  {
    id: "ifttt",
    name: "IFTTT",
    description: "Simple automation",
    category: "automation",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-blue-100",
  },
  {
    id: "make",
    name: "Make",
    description: "Advanced automation",
    category: "automation",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-purple-100",
  },

  // Storage & Files
  {
    id: "google-drive",
    name: "Google Drive",
    description: "Cloud file storage",
    category: "storage",
    icon: <Database className="w-6 h-6" />,
    color: "bg-yellow-100",
  },
  {
    id: "dropbox",
    name: "Dropbox",
    description: "File synchronization",
    category: "storage",
    icon: <Database className="w-6 h-6" />,
    color: "bg-blue-100",
  },
  {
    id: "onedrive",
    name: "OneDrive",
    description: "Microsoft cloud storage",
    category: "storage",
    icon: <Database className="w-6 h-6" />,
    color: "bg-blue-100",
  },

  // Analytics & Tracking
  {
    id: "google-analytics",
    name: "Google Analytics",
    description: "Website analytics",
    category: "analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-orange-100",
  },
  {
    id: "mixpanel",
    name: "Mixpanel",
    description: "Product analytics",
    category: "analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-purple-100",
  },

  // Payment
  {
    id: "stripe",
    name: "Stripe",
    description: "Payment processing",
    category: "payment",
    icon: <CreditCard className="w-6 h-6" />,
    color: "bg-purple-100",
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Online payments",
    category: "payment",
    icon: <CreditCard className="w-6 h-6" />,
    color: "bg-blue-100",
  },
];

const categories = [
  {
    id: "popular",
    name: "Popular",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-yellow-100",
  },
  {
    id: "email",
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    color: "bg-red-100",
  },
  {
    id: "communication",
    name: "Communication",
    icon: <MessageSquare className="w-5 h-5" />,
    color: "bg-purple-100",
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: <FileText className="w-5 h-5" />,
    color: "bg-gray-100",
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: <Calendar className="w-5 h-5" />,
    color: "bg-green-100",
  },
  {
    id: "automation",
    name: "Automation",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-orange-100",
  },
  {
    id: "storage",
    name: "Storage",
    icon: <Database className="w-5 h-5" />,
    color: "bg-blue-100",
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "bg-orange-100",
  },
  {
    id: "payment",
    name: "Payment",
    icon: <CreditCard className="w-5 h-5" />,
    color: "bg-purple-100",
  },
];

export default function OnboardingIntegrationsOne() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("popular");
  const [formData, setFormData] = useState<IntegrationsData>({
    selectedIntegrations: [],
    connectedIntegrations: [],
    skipIntegrations: false,
  });
  const [isComplete, setIsComplete] = useState(false);
  const [connectingIntegration, setConnectingIntegration] = useState<
    string | null
  >(null);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSkip = () => {
    setFormData((prev) => ({ ...prev, skipIntegrations: true }));
    setIsComplete(true);
  };

  const toggleIntegration = (integrationId: string) => {
    setFormData((prev) => {
      const isSelected = prev.selectedIntegrations.includes(integrationId);
      return {
        ...prev,
        selectedIntegrations: isSelected
          ? prev.selectedIntegrations.filter((id) => id !== integrationId)
          : [...prev.selectedIntegrations, integrationId],
      };
    });
  };

  const connectIntegration = async (integrationId: string) => {
    setConnectingIntegration(integrationId);

    // Simulate connection process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFormData((prev) => ({
      ...prev,
      connectedIntegrations: [...prev.connectedIntegrations, integrationId],
    }));
    setConnectingIntegration(null);
  };

  const disconnectIntegration = (integrationId: string) => {
    setFormData((prev) => ({
      ...prev,
      connectedIntegrations: prev.connectedIntegrations.filter(
        (id) => id !== integrationId
      ),
      selectedIntegrations: prev.selectedIntegrations.filter(
        (id) => id !== integrationId
      ),
    }));
  };

  const getFilteredIntegrations = () => {
    if (selectedCategory === "popular") {
      return integrations.filter((integration) => integration.isPopular);
    }
    return integrations.filter(
      (integration) => integration.category === selectedCategory
    );
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return true; // Category selection is always valid
      case 2:
        return (
          formData.selectedIntegrations.length > 0 || formData.skipIntegrations
        );
      case 3:
        return true; // Review step is always valid
      default:
        return false;
    }
  };

  if (isComplete) {
    return (
      <div className="border-4 border-black rounded-xl bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Integrations Setup Complete!
          </h2>
          <p className="text-gray-600 mb-6">
            {formData.skipIntegrations
              ? "You can set up integrations later from your dashboard."
              : `Successfully connected ${formData.connectedIntegrations.length} integration${formData.connectedIntegrations.length !== 1 ? "s" : ""}.`}
          </p>

          {!formData.skipIntegrations &&
            formData.connectedIntegrations.length > 0 && (
              <div className="max-w-md mx-auto bg-blue-100 border-2 border-black p-4 rounded-lg rotate-1 mb-6">
                <h3 className="font-bold text-lg mb-2">
                  Connected Integrations
                </h3>
                <div className="space-y-2">
                  {formData.connectedIntegrations.map((integrationId) => {
                    const integration = integrations.find(
                      (i) => i.id === integrationId
                    );
                    return integration ? (
                      <div
                        key={integration.id}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div className={`p-1 rounded ${integration.color}`}>
                          {integration.icon}
                        </div>
                        <span>{integration.name}</span>
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

          <Button className="bg-black hover:bg-gray-800 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Settings className="mr-2 h-4 w-4" />
            Go to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-4 border-black rounded-xl bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Header */}
      <div className="border-b-4 border-black p-4 bg-gradient-to-r from-blue-100 to-purple-100">
        <h2 className="text-2xl font-bold">Connect Your Tools</h2>
        <p className="text-gray-600">
          Set up integrations to streamline your workflow
        </p>
      </div>

      {/* Progress bar */}
      <div className="px-4 pt-4">
        <div className="w-full bg-gray-200 h-4 rounded-full border-2 border-black overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs mt-1">
          <span>Start</span>
          <span>
            Step {step} of {totalSteps}
          </span>
          <span>Complete</span>
        </div>
      </div>

      {/* Form steps */}
      <div className="p-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              Choose Integration Categories
            </h3>
            <p className="text-gray-600 mb-6">
              Select the types of tools you'd like to connect
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 border-2 border-black rounded-lg transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 ${
                    selectedCategory === category.id
                      ? `${category.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1`
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    <span className="font-medium text-sm">{category.name}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-3 bg-yellow-100 border-2 border-black rounded-lg mt-6 -rotate-1">
              <p className="text-sm">
                💡 <strong>Tip:</strong> Start with "Popular" to see the most
                commonly used integrations, then explore specific categories.
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">
                {selectedCategory === "popular"
                  ? "Popular Integrations"
                  : `${categories.find((c) => c.id === selectedCategory)?.name} Tools`}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setStep(1)}
                className="border-2 border-black hover:bg-gray-100"
              >
                Change Category
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getFilteredIntegrations().map((integration) => {
                const isSelected = formData.selectedIntegrations.includes(
                  integration.id
                );
                return (
                  <div
                    key={integration.id}
                    className={`p-4 border-2 border-black rounded-lg transition-all cursor-pointer hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 ${
                      isSelected
                        ? `${integration.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1`
                        : "bg-white hover:bg-gray-50"
                    }`}
                    onClick={() => toggleIntegration(integration.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`p-2 rounded-lg ${integration.color} border border-black`}
                      >
                        {integration.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold">{integration.name}</h4>
                          {integration.isPopular && (
                            <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded border border-black">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {integration.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <Checkbox
                          checked={isSelected}
                          onChange={() => toggleIntegration(integration.id)}
                          className="border-2 border-black data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {formData.selectedIntegrations.length > 0 && (
              <div className="p-4 bg-green-100 border-2 border-black rounded-lg mt-6 rotate-1">
                <p className="text-sm">
                  ✅{" "}
                  <strong>
                    {formData.selectedIntegrations.length} integration
                    {formData.selectedIntegrations.length !== 1 ? "s" : ""}{" "}
                    selected
                  </strong>{" "}
                  - You can connect them in the next step.
                </p>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              Connect Your Integrations
            </h3>
            <p className="text-gray-600 mb-6">
              Click "Connect" to authorize each integration
            </p>

            {formData.selectedIntegrations.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
                  <Plus className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500">No integrations selected</p>
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="mt-4 border-2 border-black hover:bg-gray-100"
                >
                  Go Back to Select Integrations
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {formData.selectedIntegrations.map((integrationId) => {
                  const integration = integrations.find(
                    (i) => i.id === integrationId
                  );
                  if (!integration) return null;

                  const isConnected =
                    formData.connectedIntegrations.includes(integrationId);
                  const isConnecting = connectingIntegration === integrationId;

                  return (
                    <div
                      key={integration.id}
                      className={`p-4 border-2 border-black rounded-lg ${isConnected ? "bg-green-100" : "bg-white"}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg ${integration.color} border border-black`}
                          >
                            {integration.icon}
                          </div>
                          <div>
                            <h4 className="font-bold">{integration.name}</h4>
                            <p className="text-sm text-gray-600">
                              {integration.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {isConnected ? (
                            <>
                              <span className="text-green-600 text-sm font-medium">
                                Connected
                              </span>
                              <Check className="w-5 h-5 text-green-600" />
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  disconnectIntegration(integrationId)
                                }
                                className="border-2 border-black hover:bg-gray-100"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </>
                          ) : (
                            <Button
                              onClick={() => connectIntegration(integrationId)}
                              disabled={isConnecting}
                              className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                            >
                              {isConnecting ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                  Connecting...
                                </>
                              ) : (
                                <>
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Connect
                                </>
                              )}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="p-4 bg-blue-100 border-2 border-black rounded-lg mt-6 -rotate-1">
              <p className="text-sm">
                🔒 <strong>Secure Connection:</strong> All integrations use
                OAuth 2.0 for secure authentication. We never store your
                passwords.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="border-t-4 border-black p-4 flex justify-between bg-gray-50">
        <div>
          {step > 1 ? (
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="border-2 border-black hover:bg-gray-100"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={handleSkip}
              className="border-2 border-black hover:bg-gray-100"
            >
              Skip Integrations
            </Button>
          )}
        </div>
        <Button
          onClick={handleNext}
          disabled={!isStepValid()}
          className={`bg-black hover:bg-gray-800 text-white border-2 border-black ${
            isStepValid()
              ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              : "opacity-50"
          }`}
        >
          {step === totalSteps ? "Complete Setup" : "Continue"}
          {step !== totalSteps && <ChevronRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
