import { useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Card } from "@/components/retroui/Card";

const product = {
  id: "1",
  name: "RetroUI",
  logo: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxvZ298ZW58MHx8MHx8fDA%3D",
  category: "Dev Tools",
  description:
    "RetroUI is a modern and clean UI kit that is designed to be used in any project.",
  tags: ["UI Kit", "React", "Tailwind CSS"],
  features: [
    "Unique Design",
    "Highly Customizable",
    "Easy to Use",
    "Mobile Responsive",
  ],
};

export default function ProductCardThree() {
  const [isSaved, setIsSaved] = useState(false);
  const { name, logo, category, description, tags, features } = product;

  return (
    <Card className="rounded-xl max-w-md group overflow-hidden border-4 bg-background transition-all duration-300 shadow-none hover:-translate-y-1 hover:shadow-lg">
      <Card.Header className="flex flex-row items-center justify-between border-b-4 p-4">
        <div className="flex items-center gap-3">
          <div className="flex rounded-full h-12 w-12 items-center justify-center overflow-hidden border-2 bg-white">
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
        <Button
          size="icon"
          onClick={() => setIsSaved(!isSaved)}
          className="p-1 rounded-md shadow-none"
          variant={isSaved ? "default" : "outline"}
          aria-label={isSaved ? "Remove from saved" : "Save for later"}
        >
          {isSaved ? (
            <BookmarkCheck className="h-5 w-5" />
          ) : (
            <Bookmark className="h-5 w-5" />
          )}
        </Button>
      </Card.Header>

      <Card.Content className="flex flex-1 flex-col p-4">
        <Text className="mb-4 line-clamp-2">{description}</Text>
        {features.length > 0 && (
          <div className="mb-4 border-2 rounded-lg border-dashed border-primary bg-primary/10 p-3 text-muted-foreground">
            <Text className="mb-2 text-xs font-bold uppercase">
              Top Features
            </Text>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center text-xs">
                  <span className="mr-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-foreground">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="solid" size="sm" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
      </Card.Content>
    </Card>
  );
}
