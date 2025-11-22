import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { useAuth } from "@/state/auth";
import { useQuery } from "@tanstack/react-query";
import { LoadingState } from "@/components/Loader";
import { ErrorState } from "@/components/ErrorState";
export const Route = createFileRoute("/templates")({
  component: RouteComponent,
});

const colorMap = {
  "React": "bg-blue-300",
  "Next.js": "bg-gray-300",
  "Tailwind CSS": "bg-green-300",
  "Motion": "bg-yellow-300",
};

function RouteComponent() {
  const { user } = useAuth();
  const { data, isLoading, error } = useQuery({
    queryKey: ["templates"],
    queryFn: () => fetch("https://workers.retroui.dev/products?category=TEMPLATE").then((res) => res.json()),
  });

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error as Error} />;

  return (
    <div className="container mx-auto max-w-6xl max-lg:px-4">
      <div className="space-y-12 mt-24">
        {data?.map((template: any) => (
          <div
            key={template.id}
            className="bg-white rounded-xl overflow-hidden w-full border-4 shadow-lg px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <div>
                <Text as="h2" className="mb-2">{template.name}</Text>
                <Text>{template.description}</Text>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Text className="font-medium text-sm text-muted-foreground">
                  Built With:
                </Text>
                <div className="flex gap-3">
                  {template.tag.split(", ").map((tech: any) => (
                    <Badge
                      key={tech}
                      size="sm"
                      className={`${colorMap[tech as keyof typeof colorMap]} rounded-sm border`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Text className="font-medium text-sm text-muted-foreground">
                  Features:
                </Text>
                <ul className="flex flex-col gap-2">
                  {template.metadata?.features?.map((feature: any) => (
                    <li
                      key={feature}
                      className="flex text-sm items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-black bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 mt-8">
                {user && user.isPro ? (
                  <a
                    href={template.metadata?.download_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Download Template</Button>
                  </a>
                ) : (
                  <div>
                    {/* <Button onClick={() => checkoutMutation.mutate(template.stripePriceId ?? "")}>Get Template</Button> */}
                    <Link to="/pricing">
                      <Button>Get Template</Button>
                    </Link>

                    {/* <Link to="/pricing" className="text-sm mt-4 text-muted-foreground font-medium flex items-center gap-1 hover:font-semibold transition-all">Or, Get Pro Bundle <ArrowUpRight className="w-4 h-4" /></Link> */}
                  </div>
                )}
                <a
                  href={template.metadata?.preview_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" className="flex items-center gap-2">Live Preview <ArrowUpRight className="w-4 h-4" /></Button>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <video
                autoPlay
                muted
                loop
                src={template.coverImage}
                className="w-full h-68 object-cover rounded-lg border-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
