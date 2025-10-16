import { Button } from "@/components/retroui/Button";
import { Checkbox } from "@/components/retroui/Checkbox";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Text } from "@/components/retroui/Text";
import { Check, Eye, EyeOff, Github, Mail, X } from "lucide-react";
import { useState } from "react";

const SignUpOne = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative px-4 py-20">
      <div className="mx-auto w-full max-w-lg overflow-hidden rounded-none border-4 border-black bg-white">
        <div className="bg-accent p-6">
          <Text as="h3">Create New Account</Text>
          <Text className="font-medium text-muted-foreground">
            Join us today! Enter your details to create your account.
          </Text>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </button>
              </div>

              <div className="mt-4 space-y-1 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-green-500" />
                  <span>At least 8 characters</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-green-500" />
                  <span>At least one number</span>
                </div>
                <div className="flex items-center gap-1">
                  <X className="h-3 w-3 text-red-500" />
                  <span>At least one special character</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <a href="#" className="underline underline-offset-4">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline underline-offset-4">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
          <div className="mt-8 space-y-6">
            <Button className="w-full">CREATE ACCOUNT</Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="flex items-center justify-center"
              >
                <Github className="mr-2 h-5 w-5" />
                Github
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Google
              </Button>
            </div>
          </div>
          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <a href="#" className="font-bold underline underline-offset-4">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpOne;
