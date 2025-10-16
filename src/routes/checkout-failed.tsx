import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/checkout-failed")({
  component: PaymentFailed,
});

function PaymentFailed() {
  return (
    <div className="max-w-2xl mx-auto py-24 w-full">
      <div className="border-2 border-black bg-white p-12 relative rounded-lg">
        <div className="absolute -top-6 -left-6 bg-red-500 border-2 border-black rounded-full w-16 h-16 flex items-center justify-center transform rotate-12">
          <AlertTriangle className="w-8 h-8 text-white" />
        </div>

        <div className="text-center mb-8">
          <Text as="h2">
            PAYMENT <span className="bg-red-500 text-white px-2">FAILED!</span>
          </Text>
          <p className="text-xl mt-4">
            Oops! Your payment for RetroUI Lifetime Access was unsuccessful.
          </p>
        </div>

        <div className="border-2 rounded-md border-black p-6 mb-8">
          <Text as="h3" className="mb-4">
            Possible reasons:
          </Text>
          <ul className="list-disc list-inside text-lg">
            <li>You cancelled during the checkout</li>
            <li>Insufficient funds / Incorrect card information</li>
            <li>Bank declined the transaction</li>
            <li>Network or connection issues</li>
          </ul>
        </div>

        <div className="text-center flex flex-col items-center space-y-4">
          <Link to="/pricing">
            <Button className="flex items-center">
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
          </Link>

          <div className="space-x-4">
            <div className="text-center ">
              Need help? Contact me at{" "}
              <a href="mailto:arif@retroui.dev" className="font-bold">
                arif@retroui.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
