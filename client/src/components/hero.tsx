import { ArrowRight, BarChart3, Globe, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FloatingCard from "./floating-card";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-marpe-blue/5 to-marpe-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-tr from-marpe-orange/5 to-marpe-blue/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-marpe-blue/10 text-marpe-blue text-sm font-semibold rounded-full">
                PROCUREMENT PLATFORM 2024
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-marpe-dark mb-6 leading-tight" data-testid="text-hero-title">
              Explore, source,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-marpe-blue to-marpe-teal">
                repeat again.
              </span>
            </h1>
            <p 
              className="text-xl text-marpe-slate mb-8 max-w-lg leading-relaxed" 
              data-testid="text-hero-subtitle"
            >
              Marpe is a strong force behind the dreams of emerging businesses, a trusted partner for industry leaders.
            </p>
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-marpe-dark text-white px-8 py-4 text-lg font-semibold hover:bg-marpe-dark/90 rounded-full shadow-lg"
                data-testid="button-start-sourcing"
              >
                Start free trial
              </Button>
            </Link>
          </div>

          {/* Right Content - Organized UI Elements */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Main Product Card */}
            <div className="absolute top-0 right-0 w-64 bg-green-100 rounded-2xl p-6 shadow-lg z-20">
              <div className="w-full h-32 bg-green-200 rounded-xl mb-4 flex items-center justify-center">
                <Globe className="h-16 w-16 text-marpe-teal" />
              </div>
              <h3 className="font-semibold text-marpe-dark mb-1" data-testid="text-product-name">Nike Zoom Pegasus</h3>
              <p className="text-2xl font-bold text-marpe-dark" data-testid="text-product-price">$48.00</p>
              <div className="mt-3">
                <Button size="sm" className="bg-marpe-dark text-white text-xs px-4 py-2 rounded-full">
                  Order
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute top-20 left-0 bg-white rounded-2xl p-6 shadow-lg z-10">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 text-marpe-blue mr-3" />
                <div>
                  <h4 className="font-semibold text-marpe-dark" data-testid="text-orders-count">24K+</h4>
                  <p className="text-sm text-marpe-slate" data-testid="text-orders-description">Orders completed</p>
                </div>
              </div>
            </div>

            {/* Success Metric */}
            <div className="absolute top-40 right-20 bg-marpe-teal rounded-2xl p-8 text-white shadow-lg">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-2" data-testid="text-success-metric">50x</h2>
                <p className="text-sm opacity-90" data-testid="text-success-description">More customers every month</p>
              </div>
            </div>

            {/* Person Image */}
            <div className="absolute bottom-0 left-10 w-48 h-56 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=350" 
                alt="Professional woman working" 
                className="w-full h-full object-cover"
                data-testid="img-professional"
              />
            </div>

            {/* Quality Badge */}
            <div className="absolute bottom-10 right-4 bg-white rounded-xl p-4 shadow-lg flex items-center">
              <Shield className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-sm font-medium text-marpe-dark" data-testid="text-quality-badge">Quality Assured</span>
            </div>

            {/* Delivery Badge */}
            <div className="absolute top-60 left-20 bg-marpe-orange rounded-xl p-3 text-white shadow-lg flex items-center">
              <Truck className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium" data-testid="text-delivery-badge">Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
