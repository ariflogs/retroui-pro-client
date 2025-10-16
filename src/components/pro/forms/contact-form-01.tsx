import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Text } from "@/components/retroui/Text";
import { Textarea } from "@/components/retroui/Textarea";

const ContactFormOne = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="solid" className="inline-block mb-8">
            Get in Touch
          </Badge>
          <Text as="h2" className="lg:text-5xl mb-4">
            Let's{" "}
            <span className="bg-primary px-2 border-4 border-black -rotate-1 inline-block">
              Connect
            </span>
          </Text>

          <Text className="text-lg  max-w-2xl mx-auto text-muted-foreground">
            Have a question or want to work together? Drop us a message below.
          </Text>
        </div>

        {/* Form Container */}
        <div className="border-4 border-black">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <Label htmlFor="name" className="font-medium">
                Name
              </Label>
              <Input type="text" placeholder="John Doe" name="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-medium">
                Email
              </Label>
              <Input
                type="email"
                placeholder="john@example.com"
                name="email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-medium">
                Message
              </Label>
              <Textarea
                type="text"
                placeholder="john@example.com"
                name="message"
                required
              />
            </div>

            {/* Submit Button */}
            <Button type="submit">Send Message →</Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "📍",
              title: "Address",
              detail: "123 Street, City, Country",
            },
            {
              icon: "📞",
              title: "Phone",
              detail: "+1 234 567 890",
            },
            {
              icon: "📧",
              title: "Email",
              detail: "hello@example.com",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border-4 border-black p-4 text-center hover:-translate-y-1 hover:shadow-md shadow-primary transition-all duration-200"
            >
              <Text className="text-2xl mb-2">{item.icon}</Text>
              <Text className="font-bold">{item.title}</Text>
              <Text className="text-sm">{item.detail}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactFormOne;
