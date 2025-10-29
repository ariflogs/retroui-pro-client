"use client";

import React, { useState, useCallback } from "react";
import { Eye, EyeOff, RefreshCw } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Text } from "@/components/retroui/Text";
import { QRCodeSVG } from "qrcode.react";
import { Checkbox } from "@/components/retroui/Checkbox";

export default function SignInThree() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [qrToken, setQrToken] = useState<string>(
    () => `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
  );

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible((prev) => !prev);
  }, []);

  const regenerateQR = useCallback(() => {
    setQrToken(`${Date.now()}-${Math.random().toString(36).substring(2, 15)}`);
  }, []);

  const handleFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Form submitted");
    },
    []
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-card border-3 overflow-hidden shadow-lg">
        {/* Left Side - Sign In Form */}
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <div className="w-full max-w-md mx-auto space-y-8">
            <div>
              <Text as="h2" className="mb-2">
                Sign In
              </Text>
              <Text>
                Welcome back! Enter your details to access your account.
              </Text>
            </div>

            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    placeholder="••••••••••"
                    required
                    autoComplete="current-password"
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
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
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
                  className="text-sm font-bold text-black hover:underline"
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

            {/* Sign Up Link */}
            <div className="content-stretch flex items-center justify-center relative w-full">
              <Text>Don't have an account?</Text>
              <a
                href="#"
                className="font-medium px-1 hover:underline hover:decoration-primary"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - QR Code Section */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-primary border-l-3 border-black p-8 lg:p-12">
          <div className="text-center space-y-6">
            {/* QR Code */}
            <div className="bg-white p-8 border-3 border-black inline-block relative">
              <QRCodeSVG
                value={`${
                  typeof window !== "undefined" ? window.location.origin : ""
                }/auth/qr-login?token=${qrToken}`}
                size={256}
                level="H"
                includeMargin={false}
                className="w-64 h-64"
              />
              <button
                onClick={regenerateQR}
                className="absolute -top-3 -right-3 bg-black text-white p-3 rounded-full border-black hover:bg-gray-800 transition-colors"
                aria-label="Regenerate QR code"
                title="Regenerate QR code"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            <div>
              <Text as="h2" className="mb-2">
                Log in with QR code
              </Text>
              <Text>Scan this with our App to log in instantly</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
