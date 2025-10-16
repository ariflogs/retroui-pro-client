import { createFileRoute, Link } from "@tanstack/react-router";
import { Tabs } from "radix-ui";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { LockIcon } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { componentRegistry } from "@/config/components";
import { useQuery } from "@tanstack/react-query";
import { LoadingState } from "@/components/Loader";
import { ErrorState } from "@/components/ErrorState";
import { useAuth } from "@/state/auth";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/$slug")({
  component: BlockPage,
});

function BlockPage() {
  const [selectedTab, setSelectedTab] = useState<"preview" | "code">("preview");
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const { user, token, isLoading: authLoading } = useAuth();
  const { slug } = Route.useParams();
  const {
    data: blockItems,
    isLoading,
    error,
  } = useQuery({
    enabled: !authLoading,
    queryKey: [`block-items-${slug}`],
    queryFn: () =>
      fetch(`https://workers.retroui.dev/blocks/categories/${slug}`).then((res) =>
        res.json(),
      ),
  });

  useEffect(() => {
    if (blockItems) {
      window.scrollTo(0, 0);
    }
  }, [blockItems]);

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error as Error} />;
  if (!blockItems) return null;

  const handleCopyCode = (blockSlug: string, code: string) => {
    navigator.clipboard.writeText(code || "");
    setCopiedStates(prev => ({ ...prev, [blockSlug]: true }));
    
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [blockSlug]: false }));
    }, 3000);
  };

  return (
    <div className="container max-w-7xl mx-auto px-6 py-12">
      <div className="space-y-20">
        {blockItems.map(({ slug, name, code } : any) => {
          const { preview: Preview } = componentRegistry[slug];

          return (
            <div key={slug}>
              <Tabs.Root
                defaultValue={selectedTab}
                onValueChange={(value) =>
                  setSelectedTab(value as "preview" | "code")
                }
              >
                <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-6 mb-6">
                  <Text as="h2">{name}</Text>

                  <div className="flex items-center gap-4">
                    {user ? (
                      <Tabs.List className="flex space-x-2 rounded-md text-lg font-medium border-2 border-black p-2 bg-white">
                        <Tabs.Trigger
                          value="preview"
                          className="px-4 py-1 rounded-md data-[state=active]:bg-primary data-[state=active]:border-2 data-[state=active]:border-black"
                        >
                          Preview
                        </Tabs.Trigger>
                        <Tabs.Trigger
                          value="code"
                          className="px-4 py-1 rounded-md data-[state=active]:bg-primary data-[state=active]:border-2 data-[state=active]:border-black"
                        >
                          Code
                        </Tabs.Trigger>
                      </Tabs.List>
                    ) : (
                      <Link to="/pricing">
                        <Button className="flex items-center gap-2 rounded-md">
                          <LockIcon className="w-5 h-5" />
                          Get Code
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>

                {user ? (
                  <>
                    <Tabs.Content
                      value="preview"
                      className="mb-4 border-2 border-black bg-white rounded-lg overflow-hidden relative"
                    >
                      <Preview />
                    </Tabs.Content>
                    <Tabs.Content value="code" className="relative">
                      <Button 
                        onClick={() => handleCopyCode(slug, code || "")} 
                        className="mb-4 absolute top-4 right-4" 
                        size="sm"
                      >
                        {copiedStates[slug] ? "Copied" : "Copy Code"}
                      </Button>
                      <SyntaxHighlighter language="javascript" style={dracula}>
                        {code || "No code available"}
                      </SyntaxHighlighter>
                    </Tabs.Content>
                  </>
                ) : (
                  <div className="mb-4 border-2 border-black bg-white rounded-lg overflow-hidden">
                    <Preview />
                  </div>
                )}
              </Tabs.Root>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlockPage;
