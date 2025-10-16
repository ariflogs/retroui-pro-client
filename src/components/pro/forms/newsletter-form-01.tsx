import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";
import { Checkbox } from "@/components/retroui/Checkbox";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Text } from "@/components/retroui/Text";

const NewsletterFormOne = () => {
  const handleSubmit = () => {
    // Handle newsletter subscription
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      {/* Newsletter Card */}
      <div className="border-4 border-black bg-white shadow-lg">
        {/* Header */}
        <div className="border-b-4 border-black bg-primary p-4">
          <div className="flex items-center gap-3">
            <Text as="h3">Join Our Newsletter</Text>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <Text className="font-medium mb-6">
            Get the latest updates and resources delivered to your inbox weekly.
            No spam, unsubscribe anytime.
          </Text>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 md:h-14">
              <Input
                type="email"
                placeholder="your@email.com"
                name="email"
                required
                className="shadow-none hover:shadow-md"
              />

              <Button
                type="submit"
                className="bg-black text-white shadow-none shadow-primary hover:shadow-md hover:bg-black md:w-72"
              >
                Subscribe →
              </Button>
            </div>

            {/* Optional Checkbox */}
            <Label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <Checkbox />
              </div>
              <span className="text-sm">
                I agree to receive email updates. Read our{" "}
                <a
                  href="#"
                  className="font-bold border-b-2 border-black hover:bg-accent"
                >
                  Privacy Policy
                </a>
              </span>
            </Label>
          </form>

          {/* Social Proof */}
          <div className="mt-6 pt-6 border-t-2 border-black/10">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  {
                    name: "P 1",
                    avatar:
                      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
                  },
                  {
                    name: "P 1",
                    avatar:
                      "https://images.unsplash.com/photo-1688591890757-bf3df70a72cc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0cm8lMjBwcm9maWxlfGVufDB8fDB8fHww",
                  },
                  {
                    name: "P 1",
                    avatar:
                      "https://plus.unsplash.com/premium_photo-1739178656495-8109a8bc4f53?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    name: "P 1",
                    avatar:
                      "https://plus.unsplash.com/premium_photo-1739786996022-5ed5b56834e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGF2YXRhciUyMHJldHJvfGVufDB8fDB8fHww",
                  },
                ].map(({ avatar, name }) => (
                  <Avatar className="h-8 w-8">
                    <Avatar.Image src={avatar} />
                    <Avatar.Fallback>{name}</Avatar.Fallback>
                  </Avatar>
                ))}
              </div>

              <p className="text-sm font-medium">
                Join <span className="font-bold">2,000+</span> subscribers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterFormOne;
