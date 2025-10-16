"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Search,
  MessageSquare,
  Calendar,
  FileText,
  Star,
  ChevronDown,
} from "lucide-react";

export function SidebarThree() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const [openSubmenu, setOpenSubmenu] = useState<string | null>("projects");

  const toggleSubmenu = (id: string) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white border-r-4 border-black z-40
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "w-24" : "w-80"} 
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-20 px-6 border-b-4 border-black bg-yellow-400">
          {!isCollapsed && (
            <div className="flex items-center">
              <div className="w-10 h-10 bg-black flex items-center justify-center mr-3">
                <div className="w-5 h-5 bg-white"></div>
              </div>
              <span className="font-black text-2xl">BRUTALIST</span>
            </div>
          )}
          {isCollapsed && (
            <div className="w-10 h-10 bg-black flex items-center justify-center mx-auto">
              <div className="w-5 h-5 bg-white"></div>
            </div>
          )}

          <button
            className="hidden md:flex items-center justify-center w-8 h-8 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronRight
              size={16}
              className={`transform ${isCollapsed ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b-4 border-black bg-blue-50">
          <div className="flex items-center">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/team-member-1.png"
                alt="User Avatar"
                className="object-cover"
              />
            </div>
            {!isCollapsed && (
              <div className="ml-3">
                <div className="font-black text-lg">Sarah Johnson</div>
                <div className="inline-block bg-black text-white px-2 py-0.5 text-xs font-bold">
                  ADMIN
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search */}
        {!isCollapsed && (
          <div className="p-4 border-b-4 border-black">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-3 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              />
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav
          className="p-4 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 300px)" }}
        >
          <ul className="space-y-3">
            {/* Dashboard */}
            <li>
              <a
                href="#"
                className={`
                  flex items-center px-4 py-3 border-3 border-black
                  ${activeItem === "dashboard" ? "bg-black text-white" : "bg-white hover:bg-yellow-100"} 
                  transition-colors font-bold relative
                  ${isCollapsed ? "justify-center" : ""}
                  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1
                `}
                onClick={() => setActiveItem("dashboard")}
              >
                <LayoutDashboard size={20} className="flex-shrink-0" />
                {!isCollapsed && <span className="ml-3">Dashboard</span>}
              </a>
            </li>

            {/* Projects with submenu */}
            {!isCollapsed && (
              <li>
                <div className="space-y-2">
                  <button
                    className={`
                      flex items-center justify-between w-full px-4 py-3 border-3 border-black
                      ${activeItem === "projects" ? "bg-black text-white" : "bg-white hover:bg-yellow-100"} 
                      transition-colors font-bold
                      shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1
                    `}
                    onClick={() => toggleSubmenu("projects")}
                  >
                    <div className="flex items-center">
                      <FileText size={20} />
                      <span className="ml-3">Projects</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${openSubmenu === "projects" ? "rotate-180" : ""}`}
                    />
                  </button>

                  {openSubmenu === "projects" && (
                    <div className="pl-4">
                      <ul className="space-y-1 border-l-3 border-black pl-3">
                        <li>
                          <a
                            href="#"
                            className="flex items-center px-3 py-2 hover:bg-gray-100 font-medium"
                          >
                            <div className="w-2 h-2 bg-yellow-400 border border-black mr-2"></div>
                            Website Redesign
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center px-3 py-2 hover:bg-gray-100 font-medium"
                          >
                            <div className="w-2 h-2 bg-blue-400 border border-black mr-2"></div>
                            Mobile App
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center px-3 py-2 hover:bg-gray-100 font-medium"
                          >
                            <div className="w-2 h-2 bg-green-400 border border-black mr-2"></div>
                            Marketing Campaign
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            )}

            {/* Calendar */}
            <li>
              <a
                href="#"
                className={`
                  flex items-center px-4 py-3 border-3 border-black
                  ${activeItem === "calendar" ? "bg-black text-white" : "bg-white hover:bg-yellow-100"} 
                  transition-colors font-bold relative
                  ${isCollapsed ? "justify-center" : ""}
                  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1
                `}
                onClick={() => setActiveItem("calendar")}
              >
                <Calendar size={20} className="flex-shrink-0" />
                {!isCollapsed && <span className="ml-3">Calendar</span>}
              </a>
            </li>

            {/* Team */}
            <li>
              <a
                href="#"
                className={`
                  flex items-center px-4 py-3 border-3 border-black
                  ${activeItem === "team" ? "bg-black text-white" : "bg-white hover:bg-yellow-100"} 
                  transition-colors font-bold relative
                  ${isCollapsed ? "justify-center" : ""}
                  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1
                `}
                onClick={() => setActiveItem("team")}
              >
                <Users size={20} className="flex-shrink-0" />
                {!isCollapsed && <span className="ml-3">Team</span>}
              </a>
            </li>

            {/* Messages */}
            <li>
              <a
                href="#"
                className={`
                  flex items-center px-4 py-3 border-3 border-black
                  ${activeItem === "messages" ? "bg-black text-white" : "bg-white hover:bg-yellow-100"} 
                  transition-colors font-bold relative
                  ${isCollapsed ? "justify-center" : ""}
                  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1
                `}
                onClick={() => setActiveItem("messages")}
              >
                <MessageSquare size={20} className="flex-shrink-0" />
                {!isCollapsed && <span className="ml-3">Messages</span>}

                <span
                  className={`
                  ${isCollapsed ? "absolute -top-1 -right-1" : "absolute right-3 top-1/2 transform -translate-y-1/2"} 
                  bg-pink-500 text-white w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-black
                  ${isCollapsed ? "rounded-full" : ""}
                `}
                >
                  5
                </span>
              </a>
            </li>

            {/* Notifications */}
            <li>
              <a
                href="#"
                className={`
                  flex items-center px-4 py-3 border-3 border-black
                  ${activeItem === "notifications" ? "bg-black text-white" : "bg-white hover:bg-yellow-100"} 
                  transition-colors font-bold relative
                  ${isCollapsed ? "justify-center" : ""}
                  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1
                `}
                onClick={() => setActiveItem("notifications")}
              >
                <Bell size={20} className="flex-shrink-0" />
                {!isCollapsed && <span className="ml-3">Notifications</span>}

                <span
                  className={`
                  ${isCollapsed ? "absolute -top-1 -right-1" : "absolute right-3 top-1/2 transform -translate-y-1/2"} 
                  bg-yellow-400 text-black w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-black
                  ${isCollapsed ? "rounded-full" : ""}
                `}
                >
                  3
                </span>
              </a>
            </li>

            {/* Settings */}
            <li>
              <a
                href="#"
                className={`
                  flex items-center px-4 py-3 border-3 border-black
                  ${activeItem === "settings" ? "bg-black text-white" : "bg-white hover:bg-yellow-100"} 
                  transition-colors font-bold relative
                  ${isCollapsed ? "justify-center" : ""}
                  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1
                `}
                onClick={() => setActiveItem("settings")}
              >
                <Settings size={20} className="flex-shrink-0" />
                {!isCollapsed && <span className="ml-3">Settings</span>}
              </a>
            </li>
          </ul>
        </nav>

        {/* Quick Actions */}
        {!isCollapsed && (
          <div className="p-4 border-t-4 border-black bg-blue-50">
            <h3 className="font-black text-sm uppercase mb-3 flex items-center">
              <Star size={14} className="mr-1" />
              Favorites
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center px-3 py-2 bg-white border-2 border-black hover:bg-yellow-100 transition-colors"
              >
                <div className="w-2 h-2 bg-yellow-400 border border-black mr-2"></div>
                <span className="text-sm font-medium">Design System</span>
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 bg-white border-2 border-black hover:bg-yellow-100 transition-colors"
              >
                <div className="w-2 h-2 bg-blue-400 border border-black mr-2"></div>
                <span className="text-sm font-medium">Marketing Dashboard</span>
              </a>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t-4 border-black">
          <a
            href="#"
            className={`
              flex items-center px-4 py-3 border-3 border-black
              bg-red-100 text-red-600 hover:bg-red-200 transition-colors font-bold
              ${isCollapsed ? "justify-center" : ""}
              shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1
            `}
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
    </>
  );
}
