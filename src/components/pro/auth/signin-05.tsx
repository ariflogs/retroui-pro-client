"use client";

import React, { useState, useCallback } from "react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Text } from "@/components/retroui/Text";
import { ArrowRight } from "lucide-react";

export default function SignUp03() {
  const [email, setEmail] = useState<string>("");

  const handleFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Sign up with email:", email);
    },
    [email]
  );

  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 lg:24 items-center">
        {/* Left Side - Sign Up Form */}
        <div className="flex flex-col justify-center max-w-lg">
          {/* Header */}
          <div className="mb-16">
            <Text as="h1" className="font-sans font-bold mb-4 leading-tight">
              Collaborate with us to unleash your musical creativity.
            </Text>
          </div>

          {/* Sign Up Form */}
          <div>
            <form onSubmit={handleFormSubmit} className="space-y-6 mb-8">
              <Input
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
                className="w-full py-3 rounded-lg text-lg"
                required
                autoComplete="email"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#C4FF83] hover:bg-[#C4FF83] font-sans rounded-lg justify-between"
              >
                Send Magic Link
                <ArrowRight />
              </Button>
            </form>

            {/* Terms */}
            <Text>
              By signing up, you agree to the &nbsp;
              <a href="#" className="text-[#5F4FE6] hover:underline">
                Terms of use
              </a>
              &nbsp; and &nbsp;
              <a href="#" className="text-[#5F4FE6] hover:underline">
                Privacy Policy
              </a>
              .
            </Text>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-2xl">
            <img
              src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/listening_music.png"
              alt="Musical creativity illustration showing person using laptop with Bluetooth and WiFi symbols"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
