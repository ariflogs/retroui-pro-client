import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  { name: 'React', icon: "/logos/react.png", color: 'bg-blue-300', badge: '', description: 'Are you a Developer? Get neo brutalist styled React components.', features: ['100+ ready-to-use UI blocks', '2 complete website templates', 'TypeScript support', 'New Updates Every Week'] },
  { name: 'Webflow', icon: "/logos/webflow.png", color: 'bg-blue-500', badge: '', description: 'Love No Code? Get unique Webflow components without any coding.', features: ['20+ ready-to-use Webflow blocks', 'Copy & paste components', 'No coding required', 'New Updates Every Week'] },
  { name: 'Figma', icon: "/logos/figma.png", color: 'bg-purple-500', badge: 'Coming Soon', description: 'Are you a Designer? Get access to Figma versions of our components.', features: ['100+ ready-to-use Figma blocks', 'All components mobile responsive', 'Easily change colors and styles', 'New Updates Every Week'] }
];

export default function PlatformSupport() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-6xl flex flex-col gap-12 mx-auto">
        <div className="mb-8 flex-1">
          <Text as="h2" className="mb-4">
            Works with your favorite platforms
          </Text>
          <Text className="text-xl text-muted max-w-2xl">
            One library, all platforms. Copy components for React, Webflow and Figma projects.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          {platforms.map((platform) => (
            <div key={platform.name}>
              <div className="border-2 border-black shadow-md shadow-primary hover:shadow-none transition-all hover:translate-y-1 bg-background p-6 rounded-md">
                <div className="flex items-start justify-between mb-6">
                  <img src={platform.icon} alt={platform.name} className="w-20 h-20" />
                  {platform.badge && (
                    <Badge size="sm" className="mt-2 block">
                      {platform.badge}
                    </Badge>
                  )}
                </div>
                <Text as="h3" className="mb-2 text-black">{platform.name}</Text>
                <Text className="font-medium text-muted-foreground">
                  {platform.description}
                </Text>

                <ul className="mt-6 space-y-2">
                  {platform.features.map((feature) => (
                    <li key={feature} className="text-muted-foreground flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 bg-primary rounded-full" />
                      {feature}
                    </li> 
                  ))}
                </ul>
                <Button className="mt-8 w-full">View {platform.name} Blocks</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}