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
};

export default function ProductCardTwo() {
  const [isSaved, setIsSaved] = useState(false);
  const { name, logo, category, description, tags } = product;

  return (
    <Card className="max-w-md group overflow-hidden border-4 bg-background transition-all duration-300 shadow-none hover:-translate-y-1 hover:shadow-lg">
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
        <Button
          size="icon"
          onClick={() => setIsSaved(!isSaved)}
          className="p-1 shadow-none"
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

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </Card.Content>
    </Card>
  );
}
