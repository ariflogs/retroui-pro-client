import { useState } from "react";
import { Bookmark, Sparkles, ExternalLink, Check } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Card } from "@/components/retroui/Card";

const product = {
  id: "1",
  name: "RetroUI Pro",
  logo: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxvZ298ZW58MHx8MHx8fDA%3D",
  category: "Dev Tools",
  description:
    "Upgrade to RetroUI Pro for advanced components, premium templates, and priority support.",
  tags: ["Premium", "Enterprise", "Support"],
  cta: "Upgrade Now",
  ctaUrl: "#",
};

export default function SponsoredProductCardOne() {
  const [isSaved, setIsSaved] = useState(false);
  const { name, logo, category, description, tags } = product;

  return (
    <Card className="relative max-w-md group overflow-hidden border-4 bg-background transition-all duration-300 shadow-none">
      {/* Sponsored Badge */}
      <div className="absolute top-3 right-3 z-10">
        <Badge
          variant="surface"
          size="sm"
          className="flex items-center gap-1 bg-purple-300"
        >
          <Sparkles className="w-3 h-3" />
          <span>Featured</span>
        </Badge>
      </div>

      <Card.Header className="flex flex-row items-center justify-between border-b-4 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden border-2 bg-white">
            <img
              src={logo || "/placeholder.svg"}
              alt={`${name} logo`}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Card.Title className="mb-0">{name}</Card.Title>
            <Text className="text-sm font-semibold text-muted-foreground">
              {category}
            </Text>
          </div>
        </div>
      </Card.Header>

      <Card.Content className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap gap-3 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" size="sm">
              {tag}
            </Badge>
          ))}
        </div>

        <Text className="mb-4 line-clamp-2">{description}</Text>

        <div className="flex gap-3">
          <Button
            variant="secondary"
            size="sm"
            className="w-full justify-center"
            onClick={() => setIsSaved(!isSaved)}
          >
            {isSaved ? (
              <Check className="w-4 h-4 mr-2" />
            ) : (
              <Bookmark className="w-4 h-4 mr-2" />
            )}

            {isSaved ? "Saved" : "Save"}
          </Button>
          <Button size="sm" className="w-full justify-center">
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Now
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
