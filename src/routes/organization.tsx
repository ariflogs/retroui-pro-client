import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react';
import { Text } from "@/components/retroui/Text";
import { OrganizationSettingsForm } from '@/components/OrganizationSettings';
import { OrganizationMembers } from '@/components/OrganizationMembers';
import { useAuth } from '@/state/auth';
import { useOrganization } from '@/state/organization';

export const Route = createFileRoute('/organization')({
  component: OrganizationSettings,
})

function OrganizationSettings() {
  const { token } = useAuth();
  const { 
    organization, 
    fetchUserOrganizations, 
    isLoading, 
    error 
  } = useOrganization();

  useEffect(() => {
    // Only fetch if we don't have organization data yet
    if (token && !organization && !isLoading) {
      fetchUserOrganizations(token);
    }
  }, [token, organization, isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Text>Loading organization...</Text>
      </div>
    );
  }

  if (error || !organization) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Text>Unable to load organization</Text>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex justify-center px-4 mt-10">
      <div className="w-full max-w-3xl">
        <div className="mb-6">
          <Text as="h2">Organization Settings</Text>
          <Text className="text-muted-foreground font-medium mt-1">
            Manage your team and organization settings
          </Text>
        </div>
        
        <div className="space-y-6">
          {
            organization && (
              <OrganizationSettingsForm 
                organizationId={organization.id}
                organization={organization}
              />
            )
          }
          {
            organization?.id && (
              <OrganizationMembers 
                organizationId={organization.id}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}