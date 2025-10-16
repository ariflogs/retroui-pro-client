import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { useAuth } from '@/state/auth';
import { useOrganization } from '@/state/organization';

interface Organization {
    id: number | null;
    name: string | null;
    websiteUrl?: string | null;
}

export function OrganizationSettingsForm({ organizationId, organization }: { 
    organizationId: number | null;
    organization: Organization;
}) {
    const { fetchUserOrganizations } = useOrganization();
    const { token } = useAuth();
    const [formData, setFormData] = useState({
        name: organization.name || "",
        website: organization.websiteUrl || "",
    });

    useEffect(() => {
        setFormData({
            name: organization.name || "",
            website: organization.websiteUrl || "",
        });
    }, [organization]);

    const mutation = useMutation({
        mutationFn: async () => {
            if (!organizationId) throw new Error("No organization ID");
            if (!token) throw new Error("Unauthorized!");

            await fetch("https://workers.retroui.dev/organization/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ organizationId, name: formData.name, websiteUrl: formData.website || null }),
            }).then((res) => res.json());

            fetchUserOrganizations(token);
        },
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await mutation.mutateAsync();
            toast.success("Organization updated");
        } catch {
            toast.error("Failed to update organization");
        }
    };

    return <Card className="w-full bg-white shadow-none p-2">
        <form onSubmit={handleSubmit}>
            <Card.Content className="space-y-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="block">Organization Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Your name"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="website" className="block">Website</Label>
                        <Input
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={(e) =>
                                setFormData({ ...formData, website: e.target.value })
                            }
                            placeholder="https://company.com"
                        />
                    </div>
                </div>


                <div className="flex flex-row gap-4">
                    <Button type="submit" disabled={mutation.isPending}>
                        {mutation.isPending ? "Saving..." : "Update"}
                    </Button>
                </div>
            </Card.Content>
        </form>
    </Card>
}