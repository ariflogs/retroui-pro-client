import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { MapPin, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const collectionsItems = [
  { name: "Egyptian", href: "#", description: "40+ ancient artifacts from Egypt", cover: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/egypt_qeen.png" },
  { name: "Greek", href: "#", description: "30+ contemporary artworks", cover: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/greek_pot.png" },
  { name: "Babylonian", href: "#", description: "20+ outdoor sculptures", cover: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/babylon.png" },
  { name: "Browse All", href: "#", description: "100+ artifacts and artworks", cover: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/up_arrow_bg_gray.png" },
];


function TopNavFour() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);

  return (
    <div className="min-h-[600px]">
      {/* Top contact bar */}
      <div className="bg-[#F07200] border-b-3 border-[#FDEAD9] text-[#FDEAD9]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-sm font-medium">
          <a href="#" className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span className="hidden md:inline">Georgia Aquarium, Atlanta</span>
          </a>

          <a href="#" className="flex items-center gap-2">
            Learn More
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b-3 border-[#F07200] bg-black text-white">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="h-10 md:h-14" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/logos/atlanta_museum.png" alt="Atlanta Museum" />
            <span className="text-base md:text-lg font-head leading-tight">ATLANTA<br />MUSEUM</span>
          </div>

          <div className="hidden md:flex items-center gap-6 font-medium">
            {/* About */}
            <a href="#" className="hover:text-[#F07200] transition-all duration-200">
              About
            </a>

            {/* Collections Dropdown */}
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-0 bg-transparent data-[state=open]:hover:bg-[transparent] data-[state=open]:focus:bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:disabled:bg-transparent data-[state=open]:text-[#F07200] focus:text-[#F07200] text-base border-0 shadow-none h-auto text-white hover:text-[#F07200]">
                    Collections
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="-left-40 data-[state=open]:top-12 rounded-lg p-0 text-white border-none data-[state=open]:shadow-none">
                    <div className="w-[680px] overflow-y-auto p-2 grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-3">
                        {collectionsItems.slice(0, 2).map((item) => (
                          <a href={item.href} key={item.name} className="flex bg-background items-start gap-4 p-4 hover:bg-[#FDEAD9] text-foreground bg-background shadow border-2 transition-colors rounded-lg">
                            <div className="w-2/3 flex flex-col font-normal">
                              <Text className="text-lg mb-1">{item.name}</Text>
                              <Text className="text-sm text-muted-foreground">{item.description}</Text>
                            </div>
                            <div className="w-1/3">
                              <img className="w-full object-contain" src={item.cover} alt={item.name} />
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {collectionsItems.slice(2, 4).map((item) => (
                          <a href={item.href} key={item.name} className="flex flex-col bg-background items-start gap-4 p-4 hover:bg-[#F9F5F2] text-foreground bg-background shadow border-2 transition-colors rounded-lg">
                            <img className="w-full object-contain" src={item.cover} alt={item.name} />
                           
                            <div className="flex flex-col">
                              <Text className="text-lg mb-1">{item.name}</Text>
                              <Text className="text-sm text-muted-foreground">{item.description}</Text>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

           
            <a href="#" className="hover:text-[#F07200] transition-all duration-200">
              Catalog
            </a>

            <a href="#" className="hover:text-[#F07200] transition-all duration-200">
              Events
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-block bg-white text-black font-sans font-bold rounded-lg shadow-[#F07200] hover:bg-[#FDEAD9]">
              Book a Visit
            </Button>

            {/* Mobile menu button */}
            <Button
              className="md:hidden rounded-lg bg-white shadow-[#F07200] p-2 hover:text-[#F07200] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <div className={`w-5 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t-3 border-[#F07200] bg-black animate-in fade-in duration-300">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
              {/* About */}
              <a href="#" className="text-white hover:text-[#F07200] font-medium transition-colors">
                About
              </a>

              {/* Collections Section */}
              <div className="flex flex-col">
                <button
                  onClick={() => setMobileCollectionsOpen(!mobileCollectionsOpen)}
                  className="flex items-center justify-between text-white hover:text-[#F07200] font-medium transition-colors"
                >
                  <span>Collections</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileCollectionsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileCollectionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-2 pl-4 pt-2">
                    {collectionsItems.map((item) => (
                      <a key={item.name} href={item.href} className="flex items-center gap-3 py-2 px-2 text-white hover:bg-[#F07200] hover:text-black rounded-lg transition-colors">
                        <img src={item.cover} alt={item.name} className="w-12 h-12 object-contain rounded" />
                        <div className="flex flex-col">
                          <Text className="font-medium text-sm text-current">{item.name}</Text>
                          <Text className="text-xs text-current opacity-70">{item.description}</Text>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Catalog */}
              <a href="#" className="text-white hover:text-[#F07200] font-medium transition-colors">
                Catalog
              </a>

              {/* Events */}
              <a href="#" className="text-white hover:text-[#F07200] font-medium transition-colors">
                Events
              </a>

              {/* Mobile Book Button */}
              <div className="pt-4 border-t-2 border-[#F07200]">
                <Button className="w-full justify-center bg-white text-black font-sans font-bold rounded-lg shadow-[#F07200] hover:bg-[#FDEAD9]">
                  Book a Visit
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default TopNavFour;