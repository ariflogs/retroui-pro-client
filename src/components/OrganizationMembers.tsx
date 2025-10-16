
import { Card } from './ui/card';
import { Text } from './ui/text';
import Avatar, { genConfig } from "react-nice-avatar";
import { Badge, Button } from './ui';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog } from './retroui/Dialog';
import { useState, useEffect } from 'react';
import { useAuth } from '@/state/auth';
import { useOrganization } from '@/state/organization';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export function OrganizationMembers({ organizationId }: { organizationId: number }) {
    const { token } = useAuth();
    const { members, invitedMembers, isMembersLoading, fetchOrganizationMembers } = useOrganization();
    const [inviteEmail, setInviteEmail] = useState('');
    const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);

    useEffect(() => {
        // Always attempt to fetch (the cache logic handles whether to actually fetch)
        if (token && organizationId && members.length === 0) {
            fetchOrganizationMembers(token, organizationId);
        }
    }, [token, organizationId]);

    const inviteMutation = useMutation({
        mutationFn: async (email: string) => {
            if (!token) throw new Error("Not authenticated");
            return await fetch("https://workers.retroui.dev/organization/invite", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ organizationId, email }),
            }).then((res) => res.json());
        },
        onSuccess: () => {
            toast.success("Invitation sent successfully!");
            setInviteEmail('');
            setIsInviteDialogOpen(false);
            if (token) {
                fetchOrganizationMembers(token, organizationId);
            }
        },
        onError: (error: any) => {
            const message = error?.message || "Failed to send invitation";
            toast.error(message);
        }
    });

    const handleInvite = () => {
        if (!inviteEmail.trim()) return;
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inviteEmail)) {
            toast.error("Please enter a valid email address");
            return;
        }

        inviteMutation.mutate(inviteEmail.trim());
    };

    if (isMembersLoading) {
        return (
            <Card className="w-full bg-white shadow-none hover:shadow-none p-2">
                <Card.Content className="p-6 text-center">
                    <Text>Loading members...</Text>
                </Card.Content>
            </Card>
        );
    }

    return <Card className="w-full bg-white shadow-none hover:shadow-none p-2">
        <Card.Header className="flex flex-row items-center justify-between">
            <Card.Title>Team Members</Card.Title>
            <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
                <Dialog.Trigger asChild>
                    <Button size="sm">Add Member</Button>
                </Dialog.Trigger>
                <Dialog.Content size="md" className="border-black bg-white rounded-lg">
                    <Dialog.Header>
                        <Text as="h4">Invite Team Member</Text>
                    </Dialog.Header>
                    <form onSubmit={(e) => { e.preventDefault(); handleInvite(); }}>
                        <div className="px-4 py-12 flex items-end gap-4">
                            <div className="space-y-2 flex-1">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="colleague@company.com"
                                    value={inviteEmail}
                                    onChange={(e) => setInviteEmail(e.target.value)}
                                    disabled={inviteMutation.isPending}
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-38"
                                disabled={!inviteEmail.trim() || inviteMutation.isPending}
                            >
                                {inviteMutation.isPending ? "Sending..." : "Send Invite"}
                            </Button>
                        </div>
                    </form>
                </Dialog.Content>
            </Dialog>
        </Card.Header>
        <Card.Content className="space-y-4">
            <div className="space-y-6">
                {members.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 border-2 rounded-lg">
                        <div className="flex items-center space-x-4">
                            <Avatar className="w-12 h-12 border-2" {...genConfig(member.email || 'User')} />
                            <div>
                                <Text as="h5" className="font-normal text-lg">{member.name || ''}</Text>
                                <Text className="text-muted-foreground font-medium">{member.email || 'No email'}</Text>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Badge variant="solid">
                                {member.role}
                            </Badge>
                            {/* {member.role !== 'owner' && (
                                <button
                                    className="w-12 h-12 bg-red-400 border-4 border-black flex items-center justify-center hover:bg-red-500 transition-colors"
                                >
                                    <X className="h-6 w-6 text-black" />
                                </button>
                            )} */}
                        </div>
                    </div>
                ))}

                {invitedMembers.map((invitation) => (
                    <div key={invitation.id} className="flex items-center justify-between p-4 border-2 rounded-lg">
                        <div className="flex items-center space-x-4">
                            <Avatar className="w-12 h-12 border-2" {...genConfig(invitation.email || 'User')} />
                            <div>
                                <Text as="h5" className="font-normal text-lg">{invitation.email || ''}</Text>
                            </div>
                        </div>


                        <div className="flex items-center space-x-4">
                            <Badge variant="solid">
                                {invitation.role}
                            </Badge>

                            <Badge variant="solid" className="bg-red-300">
                                Pending
                            </Badge>
                        </div>
                    </div>
                ))}
            </div>
        </Card.Content>
    </Card>
}