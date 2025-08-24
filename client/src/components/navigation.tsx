import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collections", href: "/collections" },
    { name: "Pricing", href: "/pricing" },
    { name: "Why Marpe", href: "/why-marpe" },
    { name: "Customers", href: "/customers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" data-testid="link-home">
            <Globe className="h-8 w-8 text-marpe-blue mr-2" />
            <span className="text-2xl font-bold text-marpe-blue">Marpe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    location === item.href
                      ? "text-marpe-blue"
                      : "text-gray-700 hover:text-marpe-blue"
                  )}
                  data-testid={`link-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact">
                <Button 
                  className="bg-marpe-orange text-white px-6 py-2 hover:bg-orange-600"
                  data-testid="button-get-started"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-marpe-blue"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors",
                    location === item.href
                      ? "text-marpe-blue bg-blue-50"
                      : "text-gray-700 hover:text-marpe-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-link-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="bg-marpe-orange text-white w-full mt-2 hover:bg-orange-600"
                  data-testid="mobile-button-get-started"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
