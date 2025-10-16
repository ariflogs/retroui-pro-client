import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Text } from "@/components/retroui/Text";
import React, { useState } from "react";

const NewsletterCTATwo = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-[500px] bg-primary p-8 md:p-12 relative">
      <div className="max-w-5xl mx-auto relative">
        <div
          className="bg-white border-4 border-black p-8 md:p-12 
        shadow-xl grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <Badge
                variant="surface"
                className="transform -rotate-2 mb-10 inline-block"
              >
                NEWSLETTER
              </Badge>
              <Text as="h2" className="mb-4">
                Get Our
                <span
                  className="inline-block bg-black text-primary
                  px-4 py-2 mt-2"
                >
                  Weekly Updates
                </span>
              </Text>
              <Text className="text-muted-foreground font-medium">
                Join 10,000+ subscribers getting fresh content every week!
              </Text>
            </div>

            <ul className="space-y-4">
              {[
                "Exclusive content weekly",
                "Early access to features",
                "Special community perks",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span
                    className="w-6 h-6 bg-primary border-2
                    border-black flex items-center justify-center 
                    rounded-lg transform rotate-3"
                  >
                    ✓
                  </span>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 bg-accent border-4 
              border-black transform translate-x-3 translate-y-3"
            />
            <div
              className="relative bg-white border-4 border-black 
               p-6"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <Button
                  className="w-full"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    "Subscribe Now"
                  )}
                </Button>

                {/* Success/Error Messages */}
                {status === "success" && (
                  <div
                    className="bg-green-100 border-2 border-black 
                    p-4 text-center font-medium"
                  >
                    🎉 You're subscribed! Check your email.
                  </div>
                )}
                {status === "error" && (
                  <div
                    className="bg-red-100 border-2 border-black 
                     p-4 text-center font-bold"
                  >
                    😕 Oops! Something went wrong. Please try again.
                  </div>
                )}

                <p className="text-sm text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCTATwo;
