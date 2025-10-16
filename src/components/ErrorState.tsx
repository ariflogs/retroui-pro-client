import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

export const ErrorState = ({ error }: { error: Error }) => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <Text as="h2" className="text-red-500 mb-4">
      Error loading blocks
    </Text>
    <Text>{error.message}</Text>
    <Button onClick={() => window.location.reload()} className="mt-4">
      Try again
    </Button>
  </div>
);
