import { Link } from "@tanstack/react-router";
import { Text, Badge, Button } from "./ui";
import { useAuth } from "@/state/auth";
import { useState } from "react";
import { Building, MenuIcon, User, X } from "lucide-react";
import Avatar, { genConfig } from "react-nice-avatar";
import { Menu } from "./retroui/Menu";

export default function TopNav() {
  const { user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-black bg-white sticky top-0 border-b-2 z-10">
      <div className="container max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
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
              to="/figma"
              className="hover:underline decoration-primary-500"
            >
              Figma
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
  );
}
