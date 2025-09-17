import { Globe, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-marpe-dark text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/marpe-logo.png" 
                alt="Marpe Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Africa's #1 sourcing and procurement company connecting businesses with trusted manufacturers worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/marpeprocurementservices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center hover:bg-[#166FE5] transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://x.com/marpeservices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                data-testid="link-twitter"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/marpe-online-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center hover:bg-[#005885] transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/marpeprocurement"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-lg flex items-center justify-center hover:from-[#E5741F] hover:via-[#C9226B] hover:to-[#722D9A] transition-all duration-300"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="link-product-sourcing">
                  Product Sourcing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="link-quality-control">
                  Quality Control
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="link-logistics">
                  Logistics Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="link-supplier-verification">
                  Supplier Verification
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="link-custom-manufacturing">
                  Custom Manufacturing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li>
                <Link href="/about" className="hover:text-white transition-colors" data-testid="link-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/customers" className="hover:text-white transition-colors" data-testid="link-testimonials">
                  Testimonials
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="link-careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="link-news">
                  News & Media
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors" data-testid="link-contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <p className="flex items-center" data-testid="text-address">
                <MapPin className="h-4 w-4 mr-2" />
                Port Harcourt, Nigeria
              </p>
              <p className="flex items-center" data-testid="text-phone">
                <Phone className="h-4 w-4 mr-2" />
                +234 812 377 1335
              </p>
              <p className="flex items-center" data-testid="text-email">
                <Mail className="h-4 w-4 mr-2" />
                marpeprocurementservices@gmail.com
              </p>
              <p className="flex items-center" data-testid="text-hours">
                <Clock className="h-4 w-4 mr-2" />
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left" data-testid="text-copyright">
              &copy; 2024 Marpe®. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-gray-300 text-sm sm:text-base">
              <a href="#" className="hover:text-white transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-cookies">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
