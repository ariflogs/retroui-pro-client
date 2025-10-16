import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";
import { Book, Users, Trophy } from "lucide-react";

const CourseCardOne = () => {
  return (
    <div className="px-4 py-20 flex justify-center">
      <Card className="max-w-xl mx-auto shadow-lg bg-background relative">
        <div className="relative">
          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1544531585-9847b68c8c86"
            alt="Artist working"
            className="w-full h-64 object-cover border-b-2 border-black"
          />

          <Badge
            variant="surface"
            className="font-bold text-xl absolute right-0 bottom-1"
          >
            $ 36.00
          </Badge>
        </div>

        {/* Content */}
        <Card.Content className="p-6">
          <Badge
            variant="outline"
            size="sm"
            className="mb-2 inline-block font-bold"
          >
            Graphics Design
          </Badge>

          {/* Title */}

          <Card.Title className="mb-6">
            Motion Graphics: Create a Nice Typography Animation
          </Card.Title>

          <div className="flex justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-accent border-2 border-black">
                <Book className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold">Lesson: </span>12
              </div>
            </div>

            {/* Stats */}

            <div className="flex items-center gap-2">
              <div className="p-2 bg-accent border-2 border-black">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold">Student: </span>198
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-accent border-2 border-black">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold">Level: </span>Beginner
              </div>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CourseCardOne;
