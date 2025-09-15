import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Check if we're on the home page
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Featured Collections", href: "/collections" },
  ];

  const rightNavigation = [
    { name: "Pricing", href: "/pricing" },
    { name: "Customers", href: "/customers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm border-b border-gray-100" 
        : "bg-transparent border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" data-testid="link-home">
            <img 
              src="/marpe-logo.png" 
              alt="Marpe Logo" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className="flex justify-between items-center">
              {/* Left Navigation */}
              <div className="flex items-center space-x-8">
                {leftNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors",
                      isHomePage
                        ? location === item.href
                          ? "text-marpe-blue"
                          : "text-gray-700 hover:text-marpe-blue"
                        : location === item.href
                          ? "text-marpe-blue"
                          : "text-gray-400 hover:text-marpe-blue"
                    )}
                    data-testid={`link-${item.name.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Right Navigation */}
              <div className="flex items-center space-x-8">
                {rightNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors",
                      isHomePage
                        ? location === item.href
                          ? "text-marpe-blue"
                          : "text-gray-700 hover:text-marpe-blue"
                        : location === item.href
                          ? "text-marpe-blue"
                          : "text-gray-400 hover:text-marpe-blue"
                    )}
                    data-testid={`link-${item.name.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/client-auth">
                  <Button 
                    className="bg-marpe-orange text-white px-4 py-2 hover:bg-orange-600 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg border border-white/20 backdrop-blur-sm"
                    data-testid="button-chat-agent"
                  >
                    Chat with Agent
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-md transition-colors hover:bg-transparent focus:outline-none bg-transparent border-none",
                isHomePage
                  ? "text-gray-700 hover:text-marpe-blue"
                  : "text-white hover:text-blue-200"
              )}
              style={{ backgroundColor: 'transparent' }}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[...leftNavigation, ...rightNavigation].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors",
                    isHomePage
                      ? location === item.href
                        ? "text-marpe-blue bg-blue-50"
                        : "text-gray-700 hover:text-marpe-blue hover:bg-gray-50"
                      : location === item.href
                        ? "text-marpe-blue bg-blue-50"
                        : "text-gray-400 hover:text-marpe-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-link-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
