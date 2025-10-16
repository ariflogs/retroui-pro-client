import { Text } from "@/components/retroui/Text";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/magic-link-sent")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-md mx-auto py-24">
      {/* Notification Card */}
      <div className="border-2 border-black bg-white shadow-lg">
        {/* Header */}
        <div className="bg-primary border-b-2 border-black p-4">
          <Text as="h3">Verification Sent</Text>
        </div>


        <p className="p-4 py-8">
          A verification link has been sent to your email. Please check your
          inbox and click the link to proceed.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Didn’t receive the email? Check your spam folder or{" "}
          <a
            href="x.com/ariflogs"
            className="font-bold border-b-2 border-black hover:bg-primary"
          >
            contact support
          </a>
          .
        </p>
      </div>
    </div>
  );
}
