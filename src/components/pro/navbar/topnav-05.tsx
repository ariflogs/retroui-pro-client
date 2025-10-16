import { History, ShoppingCart, Phone, Mail, User, Search, Menu } from "lucide-react";
import { Input } from "@/components/retroui/Input";
import { Button } from "@/components/retroui/Button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

const navItems = [
  { name: "About", href: "#" },
  { name: "Catalog", href: "#" },
  { name: "Collections", href: "#" },
  { name: "Events", href: "#" },
];

function TopNavFive() {
  return (
    <div className="min-h-[600px]">
      {/* Top social bar */}
      {/* Top contact bar */}
      <div className="bg-[#F07200] border-b-3 border-[#FDEAD9]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-sm font-medium text-white">
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-medium hidden md:inline">+(406) 555-0120</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="font-medium hidden md:inline">ckctm12@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium text-[10px] bg-black rounded-full h-[12px] w-[12px] flex items-center justify-center absolute -top-1 -right-1">3</span>
            </a>
            <a href="#">
              <User className="h-5 w-5" />
            </a>
            <a href="#">
              <History className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>


      {/* Main navigation */}
      <nav className="border-b-3 border-[#F07200] bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="h-12 md:h-14" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/logos/atlanta_museum.png" alt="Atlanta Museum" />
            <span className="text-lg font-head leading-tight">UNITED<br />MARTS</span>
          </div>



          <div className="flex-1 flex justify-end items-center gap-8">
            <div className="hidden md:flex items-center gap-8 font-medium">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-[#F07200] transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex relative items-center max-w-[250px]">
              <Input placeholder="Search Products" className="w-full bg-white rounded-lg border-3 text-muted-foreground text-sm shadow-[#F07200]" />
              <span className="absolute right-4 text-muted-foreground">
                <Search className="h-4 w-4" />
              </span>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <Button size="icon" className="bg-white shadow-[#F07200] rounded-lg">
                <Search className="h-5 w-5" />
              </Button>
              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button size="icon" className="bg-white shadow-[#F07200] rounded-lg">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-black text-white border-l-3 border-[#F07200] h-full w-80 ml-auto flex flex-col">
                  <DrawerHeader className="border-b-2 border-[#F07200]">
                    <DrawerTitle className="text-white text-center">UNITED MARTS</DrawerTitle>
                  </DrawerHeader>
                  <div className="flex-1 flex flex-col overflow-y-auto px-4 py-6 space-y-4">
                    {/* Navigation Items */}
                    {navItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block py-3 text-lg font-medium text-white hover:text-[#F07200] transition-colors border-b border-gray-800 last:border-b-0"
                      >
                        {item.name}
                      </a>
                    ))}

                    {/* Search Bar for Mobile */}
                    <div className="pt-4 border-t-2 border-[#F07200]">
                      <div className="relative">
                        <Input
                          placeholder="Search Products"
                          className="w-full bg-white rounded-lg border-3 text-black text-sm shadow-[#F07200]"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <Search className="h-4 w-4" />
                        </span>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-4 border-t-2 border-[#F07200] space-y-3 mt-auto">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-[#F07200]" />
                        <span>+(406) 555-0120</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-[#F07200]" />
                        <span>ckctm12@gmail.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions - Sticky at bottom */}
                  <div className="border-t-2 border-[#F07200] p-4 bg-black">
                    <div className="grid grid-cols-3 gap-4">
                      <a href="#" className="flex flex-col items-center gap-2 p-2">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="text-sm">Cart</span>
                      </a>
                      <a href="#" className="flex flex-col items-center gap-2 p-2">
                        <User className="h-5 w-5" />
                        <span className="text-sm">Account</span>
                      </a>
                      <a href="#" className="flex flex-col items-center gap-2 p-2">
                        <History className="h-5 w-5" />
                        <span className="text-sm">History</span>
                      </a>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopNavFive;