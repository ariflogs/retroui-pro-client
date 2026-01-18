import { Link } from "@tanstack/react-router";
import { Text, Badge, Button } from "./ui";
import { useAuth } from "@/state/auth";
import { useState, useEffect } from "react";
import { Building, Check, Copy, MenuIcon, User, X } from "lucide-react";
import Avatar, { genConfig } from "react-nice-avatar";
import { Menu } from "./retroui/Menu";
import PPPBanner from "./PPPBanner";

export default function TopNav() {
  const { user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-12-01T00:00:00-00:00'); // Dec 1, PST

    console.log(targetDate);
    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft('');
        return;
      }


      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const copyCoupon = () => {
    navigator.clipboard.writeText('BFRIDAY');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <>
      {timeLeft && !user && (
        <div className="bg-black text-white text-center py-2 px-4 font-medium flex justify-between items-center">
          <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-between items-center">
            <Text className="text-white text-sm lg:text-base flex flex-wrap gap-2">
              🎁 Black Friday Sale: Use coupon <span className="font-bold bg-white rounded-sm px-2 py-.5 text-black flex gap-2">BFRIDAY<button className="cursor-pointer" onClick={copyCoupon}>{isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}</button></span> during checkout to get 50% discount
            </Text>

            <Text className="font-medium text-sm lg:text-base hidden md:inline-block">{timeLeft} left</Text>
          </div>
        </div>
      )}
      {!user && <PPPBanner />}
      <nav className="border-black bg-white sticky top-0 border-b-2 z-10">
        <div className="container max-w-6xl mx-auto max-lg:px-4 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full border-2 border-black flex items-center justify-center">
              <div className="h-2 w-1 bg-black transform rotate-45"></div>
            </div>
            <Text className="text-xl font-bold">
              RetroUI
            </Text>
            <Badge size="sm" variant="solid">
              Pro
            </Badge>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden flex items-center justify-center h-8 w-8 border-2 border-black rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`lg:flex lg:items-center lg:space-x-4 ${isMenuOpen ? "block" : "hidden"
              } absolute lg:static top-full left-0 w-full lg:w-auto bg-white border-t-2 border-black lg:border-none`}
          >
            <div className="flex text-sm flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 px-6 py-4 lg:p-0">
              <Link
                to="/blocks"
                className="hover:underline decoration-primary-500"
              >
                Blocks
              </Link>
              <Link
                to="/templates"
                className="hover:underline decoration-primary-500"
              >
                Templates
              </Link>
              <Link
                to={user && user.isPro ? "/figma-access" : "/figma"}
                className="hover:underline decoration-primary-500"
              >
                Figma
              </Link>
              <Link
                to={user && user.isPro ? "/admin-access" : "/admin"}
                className="hover:underline decoration-primary-500"
              >
                Admin
              </Link>
              {!user && (
                <Link
                  to="/pricing"
                  className="hover:underline decoration-primary-500"
                >
                  Pricing
                </Link>
              )}
            </div>
          </div>

          {/* User Actions */}
          {user ?
            <Menu>
              <Menu.Trigger asChild>
                <button>
                  <Avatar className="w-10 h-10" {...genConfig(user?.email || 'User')} />
                </button>
              </Menu.Trigger>
              <Menu.Content className="min-w-60 p-4 rounded-md -right-10 z-50">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-12 h-12" {...genConfig(user?.email || 'User')} />
                  <div>
                    <Text className="font-medium mb-1">
                      {user.name || 'User'}
                    </Text>
                    <Badge size="sm" variant="solid">{user.isPro ? "Pro" : "Essential"} Plan</Badge>
                  </div>
                </div>
                <hr className="my-4" />
                {user.isOrg && (
                  <Link to="/organization">
                    <Menu.Item className="py-2 rounded-md">
                      <Building className="w-4 h-4 mr-2" /> Organization
                    </Menu.Item>
                  </Link>
                )}
                <Link to="/account">
                  <Menu.Item className="py-2 rounded-md">
                    <User className="w-4 h-4 mr-2" /> Account
                  </Menu.Item>
                </Link>
              </Menu.Content>
            </Menu>
            : (
              <div className="hidden lg:flex items-center space-x-4">
                <Link to="/sign-in">
                  <Button variant="outline" size="sm">
                    Sign in
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="sm">Access Now</Button>
                </Link>
              </div>
            )}
        </div>

        {/* Mobile User Actions */}
        {!user && isMenuOpen && (
          <div className="flex flex-col items-center space-y-4 px-6 py-4 border-t-2 border-black lg:hidden">
            <Link to="/sign-in">
              <Button variant="outline" size="sm">
                Sign in
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="sm">Access Now</Button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
