import {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";


function TopNavSeven() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-[600px]">
      <header className="bg-[#F9F5F2]">
        <Ticker />
        <nav className="border-b-3 border-black">
          <div className="container max-w-6xl mx-auto flex items-stretch justify-between px-4 xl:px-0">
            <div className="text-lg md:text-xl xl:text-2xl font-bold p-3 md:p-4 border-x-3 border-black flex items-center">
              Olivia L.
            </div>

            {/* Desktop Navigation */}
            <div className="flex-grow hidden md:flex items-center justify-center space-x-4 md:space-x-6 xl:space-x-8">
              <a href="#projects" className="hover:font-medium hover:underline transition duration-200">
                My work
              </a>
              <a href="#services" className="hover:font-medium hover:underline transition duration-200">
                Services
              </a>
              <a href="#testimonial" className="hover:font-medium hover:underline transition duration-200">
                About
              </a>
              <a href="#contact" className="hover:font-medium hover:underline transition duration-200">
                Contact
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-stretch">
              <a
                href="#"
                className="hidden md:flex p-3 md:p-4 border-l-3 border-black items-center font-semibold hover:bg-gray-200 transition duration-150 text-sm md:text-base">
                Hire Me
              </a>

              <a href="#" className="px-3 md:px-4 border-l-3 md:border-x-3 border-black bg-[#E7F193] flex items-center justify-center hover:opacity-80 transition duration-150">
                <span className="text-xl md:text-2xl xl:text-3xl">☕</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="md:hidden px-3 border-x-3 border-black flex items-center justify-center hover:bg-gray-200 transition duration-150"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col space-y-1">
                  <span
                    className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                      }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""
                      }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                      }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden bg-[#F9F5F2] transition-all duration-300 ease-in-out ${isMenuOpen
                ? "max-h-full opacity-100 border-t-3 border-black"
                : "max-h-0 opacity-0 overflow-hidden"
              }`}
          >
            <div className="flex flex-col">
              <a
                href="#projects"
                className="p-4 border-b border-black hover:bg-gray-200 transition duration-150 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                My work
              </a>
              <a
                href="#services"
                className="p-4 border-b border-black hover:bg-gray-200 transition duration-150 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#testimonial"
                className="p-4 border-b border-black hover:bg-gray-200 transition duration-150 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="p-4 border-b border-black hover:bg-gray-200 transition duration-150 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              {/* Mobile Hire Me button */}
              <a
                href="#"
                className="xl:hidden p-4 hover:bg-gray-200 transition duration-150 text-lg font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>

  );
};


const Ticker = () => {
  const items = useMemo(() => ["💌 Subscribe to my newsletter"], []);
  const [tickerWidth, setTickerWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const lastTimeRef = useRef<number>(0);
  const isAnimatingRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Speed in pixels per second
  const speed = 60;

  // Create enough copies to fill screen width plus buffer
  const getItemCopies = useCallback(() => {
    if (containerWidth === 0)
      return items.concat(items, items, items, items, items);

    // Calculate how many copies we need to fill the screen plus buffer
    const singleItemWidth = 200; // Approximate width per item
    const itemsNeeded = Math.ceil((containerWidth * 2) / singleItemWidth) + 10;

    const copies = [];
    for (let i = 0; i < itemsNeeded; i++) {
      copies.push(...items);
    }
    return copies;
  }, [items, containerWidth]);

  const multipleItems = useMemo(() => getItemCopies(), [getItemCopies]);

  // Calculate and set ticker dimensions
  useEffect(() => {
    const calculateDimensions = () => {
      if (contentRef.current && containerRef.current) {
        // Get container width
        const newContainerWidth = containerRef.current.offsetWidth;
        setContainerWidth(newContainerWidth);

        // Force a layout calculation
        contentRef.current.style.transform = "translateX(0px)";

        // Get width of content
        const contentWidth = contentRef.current.scrollWidth;

        // Calculate width of one complete set
        const itemsInSet = items.length;
        const totalItems = multipleItems.length;
        const singleSetWidth = (contentWidth / totalItems) * itemsInSet;

        setTickerWidth(singleSetWidth);

        // Initialize position if not already done
        if (!isInitialized) {
          setCurrentPosition(0);
          setIsInitialized(true);
        }
      }
    };

    // Use a slight delay to ensure DOM is ready
    const timeoutId = setTimeout(calculateDimensions, 100);

    window.addEventListener("resize", calculateDimensions);
    return () => {
      window.removeEventListener("resize", calculateDimensions);
      clearTimeout(timeoutId);
    };
  }, [items, multipleItems, isInitialized]);

  // Continuous animation function
  const animate = useCallback(
    (timestamp: number) => {
      if (!isAnimatingRef.current) return;

      if (lastTimeRef.current === 0) {
        lastTimeRef.current = timestamp;
      }

      const deltaTime = (timestamp - lastTimeRef.current) / 1000;
      const movement = speed * deltaTime;

      setCurrentPosition((prevPosition) => {
        let newPosition = prevPosition - movement;

        // Reset position when one complete set has passed
        if (tickerWidth > 0 && newPosition <= -tickerWidth) {
          newPosition = newPosition + tickerWidth;
        }

        return newPosition;
      });

      lastTimeRef.current = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    },
    [speed, tickerWidth]
  );

  // Handle animation start/pause based on hover and initialization
  useEffect(() => {
    if (tickerWidth === 0 || !isInitialized) return;

    if (!isHovered) {
      // Start or resume animation
      isAnimatingRef.current = true;
      lastTimeRef.current = 0;
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Pause animation
      isAnimatingRef.current = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, tickerWidth, isInitialized, animate]);

  // Update transform when position changes
  useEffect(() => {
    if (contentRef.current && isInitialized) {
      contentRef.current.style.transform = `translateX(${currentPosition}px)`;
    }
  }, [currentPosition, isInitialized]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isAnimatingRef.current = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Handle item click
  const handleItemClick = useCallback((item: string, index: number) => {
    console.log(`Clicked on: ${item} (index: ${index})`);

    if (item.includes("newsletter")) {
      window.open("https://example.com/newsletter", "_blank");
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#C4A1FF] p-2 overflow-hidden whitespace-nowrap border-b-3 border-black relative"
      aria-label="Newsletter subscription ticker"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: "48px" }} // Prevent blank container
    >
      <div
        ref={contentRef}
        className="flex items-center whitespace-nowrap will-change-transform"
        style={{
          transform: `translateX(${currentPosition}px)`,
          opacity: isInitialized ? 1 : 0, // Hide until initialized
          transition: isInitialized ? "none" : "opacity 0.3s ease-in-out",
        }}
      >
        {multipleItems.map((item, index) => (
          <button
            key={`item-${index}`}
            className="mx-8 text-black text-sm flex-shrink-0 cursor-pointer hover:underline transition-colors duration-200 bg-transparent border-none outline-none focus:outline-none focus:ring-2 focus:ring-retro-purple-darken focus:ring-offset-2 rounded px-2 py-1"
            onClick={() => handleItemClick(item, index)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label={`Click to ${item}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Loading indicator for initial render */}
      {!isInitialized && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-black font-medium">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default TopNavSeven;
