import { Input, Label, Button, Text } from "@/components/ui";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate({ from: "/sign-in" });
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const signInMutation = useMutation({
    mutationFn: async () => {
      if (!email) {
        setError("Enter a valid email!");
      }

      return fetch("https://workers.retroui.dev/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }).then((res) => res.json());


    },
    onSuccess: async (data) => {
      if (data) {
        navigate({ to: "/magic-link-sent" });
      }
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const onSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInMutation.mutate();
  };

  return (
    <div className="container max-w-md w-full mx-auto py-24">
      <div className="border-2 rounded-lg border-black bg-white p-8 relative">
        <div className="absolute -top-6 -left-6 bg-primary border-2 border-black rounded-full w-16 h-16 flex items-center justify-center transform -rotate-12">
          <Mail className="w-7 h-7 text-black" />
        </div>

        <div className="text-center mb-8">
          <Text as="h2" className="text-center">
            SIGN IN
          </Text>

          <Text>
            Enter your email to receive a magic link for instant access.
          </Text>
        </div>

        <form onSubmit={(e) => onSignIn(e)}>
          {error && (
            <div className="border border-destructive py-2 px-4 text-sm font-medium bg-red-100 mb-4">
              {error}
            </div>
          )}
          <Label htmlFor="email" className="block font-bold mb-2">
            Email
          </Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <Button
            type="submit"
            className="w-full mt-6"
            disabled={signInMutation.isPending}
          >
            {signInMutation.isPending ? "Loading..." : "Send Magic Link"}
          </Button>
        </form>

        <div className="mt-10 text-center">
          Don't have an account?
          <Link to="/" className="font-bold underline ml-2">
            Get Access
          </Link>
        </div>
      </div>
    </div>
  );
}
