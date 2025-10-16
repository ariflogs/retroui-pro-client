import { ProfileSettings } from "@/components/ProfileSettings";
import { Text } from "@/components/retroui/Text";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen w-full flex justify-center px-4 mt-10">
      <div className="w-full max-w-3xl">
        <div className="mb-6">
          <Text as="h2">Profile Settings</Text>
          <Text className="text-muted-foreground font-medium mt-1">
            Manage your retroui account preferences and personal information
          </Text>
        </div>
        <ProfileSettings />
      </div>
    </div>
  );
}
