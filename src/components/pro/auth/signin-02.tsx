"use client";
import React, { useState, useCallback } from "react";
import { Github, Eye, EyeOff, Mail } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Checkbox } from "@/components/retroui/Checkbox";
import { Text } from "@/components/retroui/Text";

export default function SignInTwo() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible((prev) => !prev);
  }, []);

  const handleFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log("Form submitted");
    },
    []
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-6xl mx-auto relative grid md:grid-cols-2 bg-card border-3 overflow-hidden shadow-lg">
          <div className="w-full p-8 lg:p-12 flex flex-col space-y-6">
            <div>
              <Text as="h2">SIGN IN</Text>
              <Text className="text-lg">
                Enter your credentials below
              </Text>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="justify-center gap-2"
                aria-label="Sign in with Google"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Google
              </Button>
              <Button
                variant="outline"
                className="justify-center gap-2"
                aria-label="Sign in with Github"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
                Github
              </Button>
            </div>

            <div className="flex items-center">
              <div className="grow border-t border-muted-foreground"></div>
              <Text
                className="mx-4 text-muted-foreground font-bold text-sm"
              >
                OR
              </Text>
              <div className="grow border-t border-muted-foreground"></div>
            </div>

            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Enter your email" />
              </div>

              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    placeholder="••••••••••"
                  />
                  <Button
                    type="button"
                    variant="link"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-4 hover:none"
                    aria-label={
                      passwordVisible ? "Hide password" : "Show password"
                    }
                  >
                    {passwordVisible ? (
                      <EyeOff className="h-6 w-6" />
                    ) : (
                      <Eye className="h-6 w-6" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember" name="remember" />
                  <Label
                    htmlFor="remember"
                    className="ml-3 text-sm text-secondary"
                  >
                    Remember me
                  </Label>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-black hover:underline hover:decoration-primary"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full justify-center"
              >
                Sign In
              </Button>
            </form>
            <div className="content-stretch flex items-center justify-center relative w-full text-base">
              <Text>Don't have an account?</Text>
              <a
                href="#"
                className="font-medium px-1 hover:underline hover:decoration-primary"
              >
                Sign up
              </a>
            </div>
        </div>

        {/* --- Image Section --- */}
        <div className="hidden md:block md:border-l-3 md:border-black relative">
          <img
            src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/illuminati_2.png"
            alt="Sign in illustration"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
