"use client";

import { useState, useCallback } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Checkbox } from "@/components/retroui/Checkbox";
import { Text } from "@/components/retroui/Text";

export default function SignInFour() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible((prev) => !prev);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F5F2] p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Illustration */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            <img
              src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/reading.png"
              alt="Sign In Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-8">
            <Text as="h1" className="font-sans mb-2">
              Login
            </Text>
            <Text>Welcome back! Please enter your details.</Text>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="arif@retroui.dev"
                className="w-full rounded-lg bg-white"
                required
                autoComplete="email"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="w-full rounded-lg bg-white"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-muted-foreground"
                  aria-label={
                    passwordVisible ? "Hide password" : "Show password"
                  }
                >
                  {passwordVisible ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" name="remember" className="rounded-md" />
                <Label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground font-medium"
                >
                  Remember information
                </Label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full py-2 font-sans font-bold justify-center rounded-lg"
            >
              Login
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="grow border-t-2"></div>
            <Text as="p" className="mx-4 font-bold">
              OR
            </Text>
            <div className="grow border-t-2"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <Button
              variant="outline"
              className="bg-orange-400 text-black border-black relative w-full py-2 font-sans justify-center gap-3 rounded-lg"
              aria-label="Login with Google"
            >
              <div className="absolute left-4 border-r-2 border-black pr-3">
                <FaGoogle className="h-4 w-4" />
              </div>
              Login with Google
            </Button>

            <Button
              variant="outline"
              className="bg-black text-white border-white relative w-full py-2 font-sans justify-center gap-3 rounded-lg"
              aria-label="Login with Facebook"
            >
              <div className="absolute left-4 border-r-2 border-white pr-3">
                <FaApple className="h-4 w-4" />
              </div>
              Login with Apple
            </Button>
          </div>

          {/* Divider Line */}
          <div className="border-t-2 my-6"></div>

          {/* Sign Up Link */}
          <div className="text-center">
            <Text as="p" className="text-sm text-muted-foreground">
              First time here?&nbsp;
              <a href="#" className="font-bold hover:underline">
                Sign up for free
              </a>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
