"use client";

import { useState } from "react";
import {
  Home,
  LayoutDashboard,
  Users,
  Settings,
  HelpCircle,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronRight,
  User,
} from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Badge } from "@/components/retroui/Badge";
import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";

const navItems = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Team",
    icon: Users,
    href: "/team",
  },
  {
    label: "Notifications",
    icon: Bell,
    href: "/notifications",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "Help",
    icon: HelpCircle,
    href: "/help",
  },
];

export default function SidebarOne() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="relative py-12 px-4 min-h-screen">
      {/* Mobile Menu Button */}
      {/* Note: Change absolute class to fixed if you want the sidebar to be fixed */}
      <Button
        className="absolute top-4 left-4 z-1 md:hidden bg-background p-2 border-2"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`
          absolute top-0 left-0 h-full bg-background border-r-2 z-1
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "w-16" : "w-64"} 
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b-2 border-black">
          {!isCollapsed && (
            <div className="flex items-center">
              <span className="font-bold text-lg">Retro UI</span>
            </div>
          )}
          {isCollapsed && <div className="w-8 h-8 bg-black mx-auto"></div>}

          <Button
            variant="outline"
            className="hidden md:block p-1 shadow-none hover:bg-accent"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronRight
              size={20}
              className={`transform ${isCollapsed ? "rotate-180" : ""}`}
            />
          </Button>
        </div>

        {/* User Profile */}
        <div className={`p-4 border-b-2 ${isCollapsed ? "px-3" : ""}`}>
          <div className="flex items-center">
            <Avatar className={`${isCollapsed ? "w-8 h-8" : "w-12 h-12"}`}>
              <Avatar.Image
                src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/person_a.png"
                alt="User Avatar"
              />
              <Avatar.Fallback>
                <User size={20} />
              </Avatar.Fallback>
            </Avatar>
            {!isCollapsed && (
              <div className="ml-3">
                <Text className="font-medium">Sarah Johnson</Text>
                <Badge size="sm" variant="solid">
                  Admin
                </Badge>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center px-3 py-2 hover:bg-accent rounded-md font-medium"
                >
                  <item.icon size={20} className="flex-shrink-0" />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 border-t-2 ${isCollapsed ? "px-3" : ""}`}
        >
          <a
            href="#"
            className="flex items-center px-3 py-2 hover:bg-red-100 rounded-md text-red-600 font-medium"
          >
            <LogOut size={20} className="flex-shrink-0" />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </a>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}
    </div>
  );
}
