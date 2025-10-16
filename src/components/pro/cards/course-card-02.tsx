import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";
import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";

const CourseCardTwo = () => {
  return (
    <div className="px-4 py-20 flex justify-center">
      <Card className="w-[400px] mx-auto border-4 shadow-none">
        {/* Course Image */}
        <div className="relative">
          <div className="h-48 bg-accent border-b-4 border-black flex items-center justify-center">
            <span className="text-4xl">🚀</span>
          </div>
          {/* Level Badge */}
          <Badge size="sm" variant="solid" className="absolute top-4 left-4">
            Intermediate
          </Badge>
          {/* Time Badge */}
          <Badge
            size="sm"
            variant="outline"
            className="absolute top-4 right-4 flex items-center gap-1 bg-white"
          >
            <span>⏱️</span>
            <span>6 weeks</span>
          </Badge>
        </div>

        {/* Course Content */}
        <Card.Content>
          {/* Title & Price */}
          <div className="flex justify-between items-start mb-2 gap-6">
            <Card.Title className="font-sans">
              Advanced React Patterns
            </Card.Title>
            <div>
              <Badge variant="surface" className="font-medium">
                $49.99
              </Badge>
            </div>
          </div>

          {/* Description */}
          <Text className="text-muted-foreground mb-4">
            Master advanced React patterns and build scalable applications with
            best practices.
          </Text>

          {/* Stats */}
          <div className="flex justify-between gap-4 py-4 border-y-2 border-black/10 mb-4">
            <div className="flex items-center gap-1">
              <span>📚</span>
              <span className="font-medium">12 Modules</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span className="font-medium">4.9/5</span>
            </div>
            <div className="flex items-center gap-1">
              <span>👥</span>
              <span className="font-medium">2.1k enrolled</span>
            </div>
          </div>

          {/* Instructor */}
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="h-12 w-12 rounded-none">
              <Avatar.Image
                src="https://images.unsplash.com/photo-1673295716958-b1dc96e5b24f?q=80&w=3002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <div>
              <Text className="font-bold">John Doe</Text>
              <Text className="text-sm text-muted-foreground">
                Senior Developer
              </Text>
            </div>
          </div>

          <Button className="font-sans font-bold w-full bg-black text-white shadow-none shadow-primary duration-200 tracking-wide hover:-translate-y-1 hover:shadow-md hover:bg-black">
            Enroll Now →
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CourseCardTwo;
