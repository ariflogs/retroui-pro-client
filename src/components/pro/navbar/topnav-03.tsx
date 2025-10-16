import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";
// using shadcn ui navigation menu. ref: https://ui.shadcn.com/docs/components/navigation-menu
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Bell, Box, ChartPie, ChevronDown, Home, Moon, Settings, ShoppingCart, ScreenShareOff } from "lucide-react";
import { useState } from "react";

const analyticsItems = [
  { name: "Website Traffic", href: "#", icon: ScreenShareOff, description: "Track who visits your website and from where" },
  { name: "Product Analytics", href: "#", icon: Box, description: "Track how your products are performing" },
  { name: "Sales Funnel", href: "#", icon: ShoppingCart, description: "Track the sales funnel of your products" },
  { name: "Revenue Analytics", href: "#", icon: ChartPie, description: "Track all your revenue streams in one place" },
];

const productsItems = [
  { name: "AI Assistant", href: "#", cover: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-abstracts/ai.svg", description: "Create an AI assistant for your website" },
  { name: "Web Analytics", href: "#", cover: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/block-abstracts/stats.svg", description: "Track who visits your website and from where" },
];

function TopNavThree() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAnalyticsOpen, setMobileAnalyticsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <div className="min-h-[600px] p-4">
      {/* Main Navigation */}
      <nav className="bg-white border-2 rounded-lg max-w-5xl mx-auto">
        <div className="px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">

              {/* Mobile menu button */}
              <button
                className="lg:hidden rounded-md hover:-translate-y-1 transition-transform shadow-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="flex w-5 h-5 flex-col justify-center space-y-1">
                  <div className={`w-5 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                  <div className={`w-5 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-5 h-0.5 bg-black transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </div>
              </button>

              {/* Logo */}
              <div className="flex items-center gap-2">
                <img className="w-8 h-8" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/logos/nexus.svg" alt="Nexus Logo" />
                <span className="text-xl font-semibold">NEXUS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {/* Dashboard */}
              <a href="#dashboard" className="flex items-center gap-2 text-sm transition-all duration-200 hover:text-black hover:bg-primary px-3 py-2 rounded-lg">
                <Home className="h-4 w-4" />
                Dashboard
              </a>

              {/* Analytics Dropdown */}
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center gap-2 text-sm transition-all duration-200 hover:text-black hover:bg-primary px-3 py-2 rounded-lg bg-transparent border-0 shadow-none h-auto [&_svg]:h-4 [&_svg]:w-4">
                      <ChartPie className="h-4 w-4" />
                      Analytics
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border-black rounded-lg p-0">
                      <div className="w-[280px]">
                        {analyticsItems.map((item) => (
                          <a href={item.href} key={item.name} className="flex items-start gap-4 p-4 hover:bg-primary">
                            <item.icon className="h-6 w-6" />
                            <div className="flex flex-col">
                              <Text className="font-medium">{item.name}</Text>
                              <Text className="text-sm text-gray-500">{item.description}</Text>
                            </div>
                          </a>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Products Dropdown */}
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center gap-2 text-sm transition-all duration-200 hover:text-black hover:bg-primary px-3 py-2 rounded-lg bg-transparent border-0 shadow-none h-auto [&_svg]:h-4 [&_svg]:w-4">
                      <Box className="h-4 w-4" />
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border-4 border-black rounded-lg shadow-md p-0">
                      <div className="w-[450px] flex gap-4">
                        {productsItems.map((item) => (
                          <a href={item.href} key={item.name} className="flex flex-col gap-4 p-4 hover:bg-primary">
                            <img src={item.cover} alt={item.name} className="w-full border object-contain rounded-lg" />
                            <div className="flex flex-col">
                              <Text className="font-medium">{item.name}</Text>
                              <Text className="text-sm text-gray-500">{item.description}</Text>
                            </div>
                          </a>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Settings */}
              <a href="#" className="flex items-center gap-2 text-sm transition-all duration-200 hover:text-black hover:bg-primary px-3 py-2 rounded-lg">
                <Settings className="h-4 w-4" />
                Settings
              </a>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-4">

              <div className="flex items-center gap-2">
                <button className="relative cursor-pointer">
                  <Moon className="h-5 w-5" />
                </button>
                <button className="relative cursor-pointer">
                  <Bell className="h-5 w-5" />
                  <span className="bg-red-500 rounded-full h-[10px] w-[10px] absolute border border-background -top-[1px] right-[1px]"></span>
                </button>
              </div>

              <Avatar className="h-10 w-10 border-primary">
                <Avatar.Image src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_b.png" />
                <Avatar.Fallback>
                  AH
                </Avatar.Fallback>
              </Avatar>
            </div>
          </div>


        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 border-2 rounded-lg py-4 border-black bg-white animate-in fade-in duration-300">
          <div className="flex flex-col">
            {/* Dashboard */}
            <a href="#dashboard" className="flex px-4 py-2 items-center gap-2 font-medium hover:underline underline-offset-4 decoration-primary decoration-2">
              <Home className="h-5 w-5" />
              Dashboard
            </a>

            {/* Analytics Section */}
            <div className="flex flex-col px-4 py-2">
              <button
                onClick={() => setMobileAnalyticsOpen(!mobileAnalyticsOpen)}
                className="flex items-center justify-between font-medium hover:underline underline-offset-4 decoration-primary decoration-2"
              >
                <div className="flex items-center gap-2">
                  <ChartPie className="h-5 w-5" />
                  Analytics
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileAnalyticsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileAnalyticsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-1 pl-7 pt-2">
                  {analyticsItems.map((item) => (
                    <a key={item.name} href={item.href} className="flex items-center gap-3 py-2 px-2 hover:bg-primary rounded-lg">
                      <item.icon className="h-4 w-4" />
                      <div className="flex flex-col">
                        <Text className="font-medium text-sm">{item.name}</Text>
                        <Text className="text-xs text-gray-500">{item.description}</Text>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="flex flex-col px-4 py-2">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex items-center justify-between gap-2 font-medium hover:underline underline-offset-4 decoration-primary decoration-2"
              >
                <div className="flex items-center gap-2">
                  <Box className="h-5 w-5" />
                  Products
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex gap-1 pl-7 pt-2">
                  {productsItems.map((item) => (
                    <a key={item.name} href={item.href} className="flex flex-col gap-3 py-2 px-2 hover:bg-primary rounded-lg">
                      <img src={item.cover} alt={item.name} className="w-full h-full border object-contain rounded-lg" />
                      <div className="flex flex-col">
                        <Text className="font-medium text-sm">{item.name}</Text>
                        <Text className="text-xs text-gray-500">{item.description}</Text>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Settings */}
            <a href="#" className="flex px-4 py-2 items-center gap-2 font-medium hover:underline underline-offset-4 decoration-primary decoration-2">
              <Settings className="h-5 w-5" />
              Settings
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopNavThree;