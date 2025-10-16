"use client";

import type React from "react";

import { useState } from "react";
import { Mail, AlertCircle, User, Users, Shield, Clock } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Label } from "@/components/retroui/Label";
import { Input } from "@/components/retroui/Input";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Avatar } from "@/components/retroui/Avatar";
// Types for team members and invitations
type Role = "admin" | "editor" | "viewer";

type TeamMember = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  joinedAt: Date;
};

type Invitation = {
  id: string;
  email: string;
  sentAt: Date;
  status: "pending" | "accepted" | "expired";
};

export default function InviteMembersBlockOne() {
  // State for the invite form
  const [email, setEmail] = useState("");
  // const [role, setRole] = useState<Role>("editor");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // State for team members and invitations
  const [teamMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex@example.com",
      avatarUrl:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/person_c.png",
      joinedAt: new Date(2023, 0, 15),
    },
    {
      id: "2",
      name: "Sam Wilson",
      email: "sam@example.com",
      avatarUrl:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/person_b.png",
      joinedAt: new Date(2023, 2, 10),
    },
  ]);

  const [invitations, setInvitations] = useState<Invitation[]>([
    {
      id: "1",
      email: "taylor@example.com",
      sentAt: new Date(2023, 3, 20),
      status: "pending",
    },
    {
      id: "2",
      email: "jordan@example.com",
      sentAt: new Date(2023, 3, 18),
      status: "accepted",
    },
    {
      id: "3",
      email: "casey@example.com",
      sentAt: new Date(2023, 3, 5),
      status: "expired",
    },
  ]);

  // Handle form submission
  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      setShowError(true);
      setErrorMessage("Please enter an email address");
      return;
    }

    if (!email.includes("@")) {
      setShowError(true);
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Check if already invited or a member
    const alreadyInvited = invitations.some(
      (inv) => inv.email === email && inv.status === "pending"
    );
    const alreadyMember = teamMembers.some((member) => member.email === email);

    if (alreadyInvited) {
      setShowError(true);
      setErrorMessage("This email has already been invited");
      return;
    }

    if (alreadyMember) {
      setShowError(true);
      setErrorMessage("This email is already a team member");
      return;
    }

    // Add new invitation
    const newInvitation: Invitation = {
      id: Date.now().toString(),
      email,
      sentAt: new Date(),
      status: "pending",
    };

    setInvitations([newInvitation, ...invitations]);
    setEmail("");
    setShowError(false);
  };

  // Handle resending invitation
  const handleResend = (id: string) => {
    setInvitations(
      invitations.map((inv) =>
        inv.id === id ? { ...inv, sentAt: new Date(), status: "pending" } : inv
      )
    );
  };

  // Handle canceling invitation
  const handleCancel = (id: string) => {
    setInvitations(invitations.filter((inv) => inv.id !== id));
  };

  // Get role badge color
  const getRoleBadgeColor = (role: Role) => {
    switch (role) {
      case "admin":
        return "bg-red-400";
      case "editor":
        return "bg-blue-400";
      case "viewer":
        return "bg-green-400";
      default:
        return "bg-gray-400";
    }
  };

  // Get role icon
  const getRoleIcon = (role: Role) => {
    switch (role) {
      case "admin":
        return <Shield className="h-4 w-4" />;
      case "editor":
        return <Users className="h-4 w-4" />;
      case "viewer":
        return <User className="h-4 w-4" />;
      default:
        return null;
    }
  };

  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="bg-white py-24">
      <div className="border-2 max-w-2xl mx-auto bg-background">
        {/* Header */}
        <div className="border-b-2 border-black p-6 bg-accent">
          <Text as="h3">Invite Team Members</Text>
          <Text className="mt-1">
            Add people to collaborate on your project
          </Text>
        </div>

        {/* Invite Form */}
        <div className="p-6 border-b-4 border-black">
          <form onSubmit={handleInvite} className="space-y-4">
            <div className="flex space-x-4 items-end">
              <div className="w-full space-y-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setShowError(false);
                  }}
                  className="w-full transition-all focus:translate-y-1"
                  placeholder="colleague@company.com"
                />
              </div>

              <Button type="submit" className="w-64 flex py-2 justify-center">
                Send Invitation
              </Button>
            </div>

            {showError && (
              <div className="bg-destructive/10 border-2 border-destructive p-2 text-sm flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <Text className="text-destructive">{errorMessage}</Text>
              </div>
            )}
          </form>
        </div>

        {/* Pending Invitations */}
        <div className="p-6 border-b-2 border-black">
          <Text as="h3" className="mb-4">
            Pending Invitations
          </Text>

          {invitations.filter((inv) => inv.status === "pending").length ===
          0 ? (
            <div className="border-2 border-black p-4 bg-gray-100">
              <Text className="font-mono text-center">
                No pending invitations
              </Text>
            </div>
          ) : (
            <div className="space-y-4">
              {invitations
                .filter((inv) => inv.status === "pending")
                .map((invitation) => (
                  <div
                    key={invitation.id}
                    className="border-2 p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-muted/30 border-2 p-2 rounded-full">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <Text className="font-semibold">
                          {invitation.email}
                        </Text>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Sent {formatDate(invitation.sentAt)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleResend(invitation.id)}
                        className="font-sans"
                        // className="bg-blue-400 text-black border-2 border-black font-mono py-1 px-3 hover:bg-blue-500 transition-colors text-sm flex-1 md:flex-none"
                      >
                        RESEND
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCancel(invitation.id)}
                        className="font-sans"
                        // className="bg-white text-black border-2 border-black font-mono py-1 px-3 hover:bg-gray-100 transition-colors text-sm flex-1 md:flex-none"
                      >
                        CANCEL
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Team Members */}
        <div className="p-6">
          <Text as="h3" className="mb-4">
            Team Members
          </Text>

          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="border-2 p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <Avatar.Image
                      src={member.avatarUrl || "/placeholder.svg"}
                      alt={member.name}
                    />
                    <Avatar.Fallback>
                      <User className="h-5 w-5 text-muted-foreground" />
                    </Avatar.Fallback>
                  </Avatar>
                  <div>
                    <Text className="font-semibold">{member.name}</Text>
                    <span className="text-sm">{member.email}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground font-medium flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Joined {formatDate(member.joinedAt)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
