import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Text } from "./ui/text";
import { useAuth } from "@/state/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "@tanstack/react-router";

export function ProfileSettings() {
  const { user, token, isLoading, logout, checkAuth } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const mutation = useMutation({
    mutationFn: async () => {
      await fetch("https://workers.retroui.dev/auth/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: user?.email ?? "",
          newEmail: user?.email !== formData.email ? formData.email : undefined,
        }),
      }).then((res) => res.json());

      await checkAuth();
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutate();
      toast.success("Profile updated");
    } catch {
      toast.error("Failed to update profile");
    }
  };

  useEffect(() => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
    });
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card className="w-full bg-white shadow-none">
        <form onSubmit={handleSubmit}>
          <Card.Content className="space-y-4 p-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
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
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Your email"
              />
              <p className="text-sm text-muted-foreground">
                This email is used for notifications and login.
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? "Saving..." : "Update Profile"}
              </Button>
            </div>
          </Card.Content>
        </form>
      </Card>

      <Card className="w-full bg-white mt-12 shadow-none">
        <Card.Content className="space-y-4 p-6">
          <Text className="text-lg font-medium">Want to switch accounts?</Text>

          <Button
            variant="secondary"
            onClick={() => {
              logout();
              toast.success("Logged out");
              router.navigate({ to: "/" });
            }}
          >
            Logout
          </Button>
        </Card.Content>
      </Card>
    </>
  );
}
