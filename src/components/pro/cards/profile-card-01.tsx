import { Avatar } from "@/components/retroui/Avatar";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

const ProfileCardOne = () => {
  return (
    <div className="px-4 py-20 flex justify-center">
      <div className="border-4 border-black bg-background max-w-md">
        {/* Cover Image */}
        <div className="h-32 bg-accent border-b-4 border-black relative">
          <div className="absolute -bottom-8 left-6">
            <Avatar className="h-24 w-24 rounded-none relative border-4">
              <Avatar.Image
                src="https://images.unsplash.com/photo-1673295716958-b1dc96e5b24f?q=80&w=3002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-2 border-black"></div>
            </Avatar>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-10 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <Text as="h3">John Doe</Text>
              <Text className="text-muted-foreground font-medium">
                Senior Developer
              </Text>
            </div>
            <Button size="sm" className="shadow">
              Follow
            </Button>
          </div>

          <Text className="mb-4">
            Building cool stuff with React and TypeScript. Open source
            enthusiast.
          </Text>

          <div className="flex gap-4 mb-6">
            {["React", "TypeScript", "Node.js"].map((skill) => (
              <Badge key={skill} variant="solid">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardOne;
