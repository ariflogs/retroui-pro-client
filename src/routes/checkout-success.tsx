import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Text } from "@/components/retroui/Text";

export const Route = createFileRoute("/checkout-success")({
  component: PaymentSuccess,
});

function PaymentSuccess() {
  return (
    <div className="max-w-2xl mx-auto py-24 w-full">
      <div className="border-2 border-black bg-white p-12 relative transform rounded-lg">
        <div className="absolute -top-6 -left-6 bg-green-400 border-2 border-black rounded-full w-16 h-16 flex items-center justify-center transform -rotate-12">
          <Check className="w-8 h-8 text-black" />
        </div>

        <div className="text-center mb-8">
          <Text as="h2">
            Payment <span className="bg-primary-400 px-2">Successful!</span>
          </Text>

          <p className="text-xl mt-4">
            Thank you for purchasing RetroUI Lifetime Access!
          </p>
        </div>

        <div className="border-2 rounded-md border-black p-6 mb-8">
          <Text as="h3" className="mb-4">
            Next steps:
          </Text>
          <ol className="list-decimal list-inside">
            <li>Check your email for the signup invitation</li>
            <li>Create your RetroUI account</li>
            <li>Access your components and start building!</li>
          </ol>
        </div>

        <div className="text-center">
          Need help? Contact me at{" "}
          <a href="mailto:arif@retroui.dev" className="font-bold">
            arif@retroui.dev
          </a>
        </div>
      </div>
    </div>
  );
}
