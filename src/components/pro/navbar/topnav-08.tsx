import { Avatar } from "@/components/retroui/Avatar";
import { Bell, LogOut, MessageCircleIcon, Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/retroui/Button";

function TopNavEight() {
    return (
        <div className="min-h-[600px]">
            <nav className="bg-[#F9F5F2] border-y-3">
                <div className="container h-14 max-w-6xl mx-auto flex items-stretch justify-between px-4 xl:px-0">
                    <div className="text-2xl font-head border-x-3 px-4 border-black flex items-center">
                        SING
                    </div>

                    {/* Right Actions */}
                    <div className="flex gap-4">
                        <div className="hidden md:flex items-center gap-2">
                            <div className="relative">
                                <MessageCircleIcon className="h-6 w-6" />
                            </div>
                            <div className="relative">
                                <Bell className="h-6 w-6" />
                                <span className="bg-[#C4A1FF] rounded-full h-[10px] w-[10px] border-2 absolute -top-[1px] right-[1px]"></span>
                            </div>
                        </div>

                        <div className="flex items-stretch border-x-3 border-black">
                            <a
                                href="#"
                                className="flex items-center px-4 gap-2 font-medium bg-[#E7F193]">

                                <Avatar className="h-9 w-9">
                                    <Avatar.Image src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_a.png" />
                                    <Avatar.Fallback>ZS</Avatar.Fallback>
                                </Avatar>
                                <span className="hidden md:inline">Zoe Smith</span>
                            </a>
                            <a
                                href="#"
                                className="hidden md:flex border-l-3 border-black items-center px-4 gap-2 font-medium bg-[#C4A1FF]">
                                <span>Log Out</span>
                                <LogOut className="h-5 w-5" />
                            </a>

                            {/* Mobile Menu */}
                            <div className="md:hidden border-l-3 border-black">
                                <Drawer direction="left">
                                    <DrawerTrigger asChild>
                                        <Button size="icon" className="bg-[#C4FF83] rounded-none h-full px-4 shadow-none border-none">
                                            <Menu className="h-5 w-5" />
                                        </Button>
                                    </DrawerTrigger>
                                    <DrawerContent className="bg-[#F9F5F2] border-l-3 border-black h-full w-80 ml-auto flex flex-col">
                                        <DrawerHeader className="border-b-3 border-black">
                                            <DrawerTitle className="text-2xl font-head">SING</DrawerTitle>
                                        </DrawerHeader>

                                        <div className="flex-1 flex flex-col p-4 space-y-6">
                                            {/* User Profile Section */}
                                            <div className="flex items-center gap-3 p-4 bg-[#E7F193] border-3 border-black rounded-lg">
                                                <Avatar className="h-12 w-12">
                                                    <Avatar.Image src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_a.png" />
                                                    <Avatar.Fallback>ZS</Avatar.Fallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-medium text-lg">Zoe Smith</p>
                                                    <p className="text-sm text-muted-foreground">Welcome back!</p>
                                                </div>
                                            </div>

                                            {/* Notifications */}
                                            <div className="space-y-3">
                                                <h3 className="font-medium text-lg">Notifications</h3>
                                                <div className="flex items-center gap-3 p-3 bg-white border-2 border-black rounded-lg">
                                                    <MessageCircleIcon className="h-5 w-5" />
                                                    <span>Messages</span>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 bg-white border-2 border-black rounded-lg">
                                                    <Bell className="h-5 w-5" />
                                                    <span>Notifications</span>
                                                    <span className="bg-[#C4A1FF] rounded-full h-[10px] w-[10px] ml-auto"></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Logout Button - Sticky at bottom */}
                                        <div className="border-t-3 border-black p-4">
                                            <a href="#" className="flex items-center justify-center gap-2 p-3 bg-[#C4A1FF] border-2 border-black rounded-lg font-medium w-full">
                                                <LogOut className="h-5 w-5" />
                                                <span>Log Out</span>
                                            </a>
                                        </div>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default TopNavEight;
