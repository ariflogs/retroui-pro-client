import { Avatar } from "@/components/retroui/Avatar";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Switch } from "@/components/retroui/Switch";
import { Text } from "@/components/retroui/Text";

const ProfilePageOne = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Profile Header */}
        <div className="border-4 border-black p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="w-32 h-32 rounded-none border-4 border-black">
                <Avatar.Image src="https://plus.unsplash.com/premium_photo-1739178656495-8109a8bc4f53?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-black text-white flex items-center justify-center">
                ✏️
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <Text as="h2">John Doe</Text>
              <Text className="text-muted-foreground font-medium mb-4">
                Senior Developer at TechCorp
              </Text>

              <div className="flex gap-4">
                <Button>Edit Profile</Button>
                <Button variant="outline">Share Profile</Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8">
              {[
                { label: "Projects", value: "23" },
                { label: "Teams", value: "5" },
                { label: "Commits", value: "2.3k" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center border-l-2 border-black pl-8 first:border-l-0 first:pl-0"
                >
                  <div className="text-3xl font-black">{stat.value}</div>
                  <div className="font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gird-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Left Sidebar */}
          <div className="space-y-8">
            {/* About Section */}
            <div className="border-4 border-black p-6">
              <Text as="h3" className="mb-4">
                About
              </Text>
              <p className="text-muted-foreground mb-4">
                Full-stack developer with 5+ years of experience in building
                scalable web applications. Passionate about clean code and user
                experience.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span>🌍</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💼</span>
                  <span>TechCorp</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🎓</span>
                  <span>Computer Science, MIT</span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="border-4 border-black p-6">
              <h2 className="text-xl font-black mb-4">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "Python",
                  "AWS",
                  "Docker",
                ].map((skill) => (
                  <Badge key={skill} variant="surface">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-8">
            {/* Activity Feed */}
            <div className="border-4 border-black">
              <div className="border-b-4 border-black p-4 bg-primary font-bold">
                Recent Activity
              </div>
              <div className="p-6 space-y-6">
                {[
                  {
                    type: "commit",
                    title: "Updated user authentication flow",
                    time: "2 hours ago",
                  },
                  {
                    type: "project",
                    title: "Created new project: E-commerce Platform",
                    time: "1 day ago",
                  },
                  {
                    type: "team",
                    title: "Joined Backend Team",
                    time: "3 days ago",
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 border-b-2 border-black/10 last:border-b-0 pb-6 last:pb-0"
                  >
                    <div className="w-10 h-10 border-2 border-black bg-accent flex items-center justify-center font-bold shrink-0">
                      {activity.type === "commit" && "💻"}
                      {activity.type === "project" && "📁"}
                      {activity.type === "team" && "👥"}
                    </div>
                    <div>
                      <div className="font-bold">{activity.title}</div>
                      <div className="text-sm text-gray-600">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Settings Sections */}
            <div className="border-4 border-black">
              <div className="border-b-4 border-black p-4 bg-primary font-bold">
                Settings
              </div>
              <div className="p-6 space-y-6">
                {[
                  {
                    title: "Email Notifications",
                    description: "Receive email updates about your activity",
                  },
                  {
                    title: "Two-Factor Authentication",
                    description: "Add an extra layer of security",
                  },
                  {
                    title: "Profile Visibility",
                    description: "Control who can see your profile",
                  },
                ].map((setting, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b-2 border-black/10 last:border-b-0 pb-6 last:pb-0"
                  >
                    <div>
                      <div className="font-bold">{setting.title}</div>
                      <div className="text-sm text-gray-600">
                        {setting.description}
                      </div>
                    </div>
                    <Switch />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="mt-8 border-4 border-black p-4 flex flex-col md:flex-row gap-4 justify-between items-center bg-accent">
          <Text className="font-bold">Need help? Contact support</Text>
          <Button className="bg-black shadow-none text-white hover:bg-black/80">
            Get Support →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageOne;
