import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import React from "react";

function NewsletterFormTwo() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
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
            <div className="space-y-2">
              <Label htmlFor="email" className="block font-medium">
                Email Address
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <Button className="w-full" type="submit">
              Subscribe Now
            </Button>

            <p className="text-sm text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsletterFormTwo;
