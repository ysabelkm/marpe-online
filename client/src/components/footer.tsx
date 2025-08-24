import { Globe, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-marpe-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center text-2xl font-bold mb-6">
              <Globe className="h-8 w-8 mr-2" />
              Marpe
            </div>
            <p className="text-gray-300 mb-6">
              Africa's #1 sourcing and procurement company connecting businesses with trusted manufacturers worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-marpe-blue rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-marpe-teal rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-marpe-orange rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
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
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
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
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center" data-testid="text-address">
                <MapPin className="h-4 w-4 mr-2" />
                123 Victoria Island, Lagos, Nigeria
              </p>
              <p className="flex items-center" data-testid="text-phone">
                <Phone className="h-4 w-4 mr-2" />
                +234 (0) 123 456 7890
              </p>
              <p className="flex items-center" data-testid="text-email">
                <Mail className="h-4 w-4 mr-2" />
                hello@marpe.com
              </p>
              <p className="flex items-center" data-testid="text-hours">
                <Clock className="h-4 w-4 mr-2" />
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0" data-testid="text-copyright">
              &copy; 2024 Marpe. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-300">
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
