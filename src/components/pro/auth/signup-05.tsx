"use client";

import { Apple, Eye, EyeOff, Facebook, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Text } from "@/components/retroui/Text";
import { Checkbox } from "@/components/retroui/Checkbox";
import { Card } from "@/components/retroui/Card";
// import SocialIcon from "@/components/SocialIcons";


export default function SignUpFive() {
    const handleFormSubmit = () => {
        console.log("Form submitted");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-8">
            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-stretch">
                {/* Left Side - Sign Up Form */}
                <div className="flex flex-col justify-between max-w-xl mx-auto w-full">
                    {/* Logo */}
                    <div className="mb-8">
                        <img
                            src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/logos/atlanta_museum.png"
                            alt="Athena Museum Logo"
                            className="h-16 w-auto object-contain mb-8"
                        />

                        <Text as="h1">
                            Create an Account
                        </Text>
                    </div>

                    {/* Sign Up Form */}
                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                        <div className="flex space-x-6 w-full">
                            <div className="flex-1 flex flex-col space-y-2">
                                <Label htmlFor="firstName" className="text-lg font-medium">
                                    First Name
                                </Label>
                                <Input
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    className="w-full py-3 rounded-lg"
                                    required
                                    autoComplete="given-name"
                                />
                            </div>
                            <div className="flex-1 flex flex-col space-y-2">
                                <Label htmlFor="lastName" className="text-lg font-medium">
                                    Last Name
                                </Label>
                                <Input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    className="w-full py-3 rounded-lg"
                                    required
                                    autoComplete="family-name"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="email" className="text-lg font-medium">
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="meherab788@gamil.com"
                                className="w-full py-3 rounded-lg"
                                required
                                autoComplete="email"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="password" className="text-lg font-medium">
                                Password
                            </Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full py-3 rounded-lg"
                                required
                                autoComplete="new-password"
                                minLength={8}
                            />
                        </div>

                        {/* Sign Up Button */}
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-[#FF7900] hover:bg-[#F07200] text-white rounded-lg font-sans justify-center"
                        >
                            Sign Up
                        </Button>
                    </form>

                    {/* Social Login Buttons */}
                    <div className="mt-6 grid grid-cols-4 gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            className="p-4 border-3 rounded-lg items-center justify-center"
                            aria-label="Sign up with Facebook"
                        >
                            <Facebook className="h-6 w-6" />
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            className="p-4 border-3 border-black rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center"
                            aria-label="Sign up with Apple"
                        >
                            <Apple className="h-6 w-6" />
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            className="p-4 border-3 border-black rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center"
                            aria-label="Sign up with Google"
                        >
                            <Mail className="h-6 w-6" />
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            className="p-4 border-3 border-black rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center"
                            aria-label="Sign up with Twitter"
                        >
                            <Twitter className="h-6 w-6" />
                        </Button>
                    </div>

                    {/* Sign In Link */}
                    <div className="mt-8 text-center">
                        <Text as="p" className="text-sm text-gray-700">
                            Already have an account?&nbsp;
                            <a href="#" className="font-bold text-orange-500 hover:underline">
                                Sign in!
                            </a>
                        </Text>
                    </div>
                </div>

                {/* Right Side - Image with Info Card */}
                <div className="hidden lg:flex relative rounded-xl overflow-hidden border-2 border-black shadow-lg">
                    <img
                        src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-images/pilar.png"
                        alt="Ancient Greek temple ruins at the Acropolis in Athens"
                        className="w-full h-fit object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-100"></div>

                    {/* Info Card Overlay */}
                    <div className="absolute bottom-8 left-8 right-8">
                        <Card className="shadow-orange-500 max-w-md rounded-xl shadow-lg">
                            <Card.Header>
                                <Card.Title>Ruins at the acropolis</Card.Title>
                                <Card.Description>
                                    The striking ruins featured in the image are the remains of
                                    the Temple of Olympian Zeus, also known as the Olympieion,
                                    located in the center of Athens, Greece.
                                </Card.Description>
                            </Card.Header>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
