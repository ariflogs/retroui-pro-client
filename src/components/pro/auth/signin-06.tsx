import React from "react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Text } from "@/components/retroui/Text";

export default function SignInSix() {

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Sign up with email");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#599D77] p-4">
            <div className="w-full max-w-xl shadow-lg border-3 border-black bg-[#F9F5F2] p-8 relative">
                {/* Left Side - Sign Up Form */}
                {/* Header */}
                <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/feature_10_2.png" alt="star icon" className="w-28 absolute top-0 right-0" />
                <div className="mb-16">
                    <Text as="h1" className="font-sans lg:text-4xl mb-2 leading-tight">
                        Sign In
                    </Text>
                    <Text>
                        Enter your credentials to access your account.
                    </Text>
                </div>

                {/* Sign Up Form */}
                <div>
                    <form onSubmit={handleFormSubmit} className="space-y-6 mb-8">
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="email" className="font-semibold">Email <span className="text-red-500">*</span></Label>
                            <Input type="email" id="email" placeholder="email@example.com" className="bg-white" />
                        </div>

                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="password" className="font-semibold">Password <span className="text-red-500">*</span></Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="••••••••••"
                                className="bg-white"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full font-sans font-semibold py-2 justify-center"
                        >
                            Submit
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
            </div>
        </div>
    );
}
