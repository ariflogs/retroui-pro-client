import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@/state/auth";

const verifySchema = z.object({
  token: z.string(),
});

export const Route = createFileRoute("/auth-verify")({
  validateSearch: (search) => verifySchema.parse(search),
  component: VerifyPage,
});

function VerifyPage() {
  const navigate = useNavigate();
  const { checkAuth } = useAuth();

  const authToken = useSearch({
    from: "/auth-verify",
    select: (search) => search.token,
  });

  const verifyMutation = useMutation({
    mutationFn: async () => {
      return fetch("https://workers.retroui.dev/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }).then((res) => res.json());
    },
    onSuccess: async (data) => {
      console.log(data, "data");
      localStorage.setItem("auth_token", data.token);
      toast("Email verified! 🚀");
      await checkAuth();
      navigate({
        to: "/",
      });
    },
    onError: () => {
      toast("Verification failed!");

      navigate({
        to: "/sign-in",
      });
    },
  });
  const hasMutated = useRef(false);

  useEffect(() => {
    if (!hasMutated.current) {
      verifyMutation.mutateAsync();
      hasMutated.current = true;
    }
  }, []);

  return <div>Verifying...</div>;
}

export default VerifyPage;
