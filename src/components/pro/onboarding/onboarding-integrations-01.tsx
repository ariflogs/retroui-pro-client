"use client";

import { useState } from "react";
import {
  Check,
  ChevronRight,
  Github,
  Zap,
  Calendar,
  FileText,
  MessageSquare,
  Mail,
  Database,
  BarChart3,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Card } from "@/components/retroui/Card";

const integrations = [
  {
    id: "github",
    name: "GitHub",
    description: "Connect your repositories and track development progress",
    icon: <Github className="w-8 h-8" />,
    color: "text-gray-700",
    isConnected: true,
  },
  {
    id: "notion",
    name: "Notion",
    description: "Sync your workspace and collaborate on documents",
    icon: <FileText className="w-8 h-8" />,
    color: "text-gray-700",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Get notifications and updates in your team channels",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "text-purple-600",
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Automate workflows between your favorite apps",
    icon: <Zap className="w-8 h-8" />,
    color: "text-orange-500",
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    description: "Schedule meetings and sync your calendar events",
    icon: <Calendar className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    id: "gmail",
    name: "Gmail",
    description: "Send emails and manage your inbox efficiently",
    icon: <Mail className="w-8 h-8" />,
    color: "text-red-500",
  },
  {
    id: "google-drive",
    name: "Google Drive",
    description: "Access and share files from your cloud storage",
    icon: <Database className="w-8 h-8" />,
    color: "text-blue-500",
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Track user behavior and application performance",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "text-green-600",
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Process payments and manage billing seamlessly",
    icon: <CreditCard className="w-8 h-8" />,
    color: "text-purple-600",
  },
];

export default function OnboardingIntegrationsOne() {
  const [connectedIntegrations, setConnectedIntegrations] = useState<string[]>([
    "github",
  ]);
  const [connectingIntegration, setConnectingIntegration] = useState<
    string | null
  >(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleConnect = async (integrationId: string) => {
    setConnectingIntegration(integrationId);
    // Simulate connection process
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setConnectedIntegrations((prev) => [...prev, integrationId]);
    setConnectingIntegration(null);
  };

  const handleComplete = () => {
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>
          <Text as="h2" className="text-2xl font-bold mb-2">
            All Set!
          </Text>
          <Text as="p" className="text-muted-foreground mb-8">
            {connectedIntegrations.length > 1
              ? `You've connected ${connectedIntegrations.length} integrations. You can always add more later.`
              : "You can connect integrations anytime from your dashboard."}
          </Text>
          <Button>Continue to Dashboard</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 px-6 bg-background flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <Text as="h2">Enhance your experience with integrations.</Text>
          <Text
            as="p"
            className="font-medium text-muted-foreground mt-2 max-w-lg mx-auto"
          >
            Connect your favorite tools to streamline your workflow and maximize
            productivity.
          </Text>
        </div>

        {/* Integration Cards */}
        <div className="mt-12 max-h-[600px] overflow-y-auto pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => {
              const isConnected = connectedIntegrations.includes(
                integration.id
              );
              const isConnecting = connectingIntegration === integration.id;

              return (
                <Card key={integration.id} className="shadow-none">
                  <Card.Content className="flex flex-col items-center text-center space-y-4 p-6">
                    <div className={`${integration.color}`}>
                      {integration.icon}
                    </div>

                    <div>
                      <Card.Title className="text-xl">
                        Connect with {integration.name}
                      </Card.Title>
                      <Card.Description className="text-sm">
                        {integration.description}
                      </Card.Description>
                    </div>

                    <div className="w-full pt-2">
                      {isConnected ? (
                        <div className="flex items-center justify-center space-x-2 text-green-600 font-semibold">
                          <Check className="w-4 h-4" />
                          <span>Connected</span>
                        </div>
                      ) : (
                        <Button
                          onClick={() => handleConnect(integration.id)}
                          disabled={isConnecting}
                          variant="secondary"
                          className="w-full justify-center"
                        >
                          {isConnecting ? (
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
                              <span>Connecting...</span>
                            </div>
                          ) : (
                            "Connect"
                          )}
                        </Button>
                      )}
                    </div>
                  </Card.Content>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-8">
          <Button onClick={handleComplete}>
            <span>Complete</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
