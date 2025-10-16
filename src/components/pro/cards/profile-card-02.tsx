import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";
import { Mail, Calendar, Goal } from "lucide-react";

const ProfileCardTwo = () => {
  return (
    <div className="px-4 py-20 flex justify-center">
      <div className="w-[420px] mx-auto bg-black rounded-xl shadow-lg shadow-green-500 p-6 text-white">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-4 items-center">
            <Avatar className="h-20 w-20 rounded-lg relative">
              <Avatar.Image
                src="https://images.unsplash.com/photo-1673295716958-b1dc96e5b24f?q=80&w=3002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <div>
              <Text as="h3">Jenny Wilson</Text>
              <Text className="text-muted font-medium">Web developer</Text>
            </div>
          </div>
          <button className="rounded-lg shadow border border-green-500 shadow-green-500 p-3 cursor-pointer transition duration-200 hover:shadow-none bg-black">
            <Mail className="w-4 h-4" />
          </button>
        </div>

        <Text className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
          cididunt.
        </Text>
        {/* Main Content */}
        <div className="text-muted space-y-2 font-medium">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>September 23, 2021</span>
          </div>
          <div className="flex items-center gap-2">
            <Goal className="w-5 h-5" />
            <div className="flex flex-wrap gap-3">
              {["react js", "JavaScript", "Angular"].map((skill) => (
                <Text>#{skill}</Text>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardTwo;
