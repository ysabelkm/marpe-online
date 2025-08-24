import { ArrowRight, BarChart3, Globe, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FloatingCard from "./floating-card";

export default function Hero() {
  return (
    <section className="relative min-h-screen gradient-bg overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 max-w-xs animate-float">
          <FloatingCard delay={0}>
            <div className="flex items-center mb-4">
              <BarChart3 className="h-8 w-8 mr-3" />
              <div>
                <h4 className="font-semibold" data-testid="text-orders-count">24K+ Orders</h4>
                <p className="text-sm opacity-90" data-testid="text-orders-description">Successfully sourced</p>
              </div>
            </div>
          </FloatingCard>
        </div>
        
        <div className="absolute top-40 right-10 max-w-xs">
          <FloatingCard delay={-2}>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 mr-3" />
              <div>
                <h4 className="font-semibold" data-testid="text-countries-count">50+ Countries</h4>
                <p className="text-sm opacity-90" data-testid="text-countries-description">Global supplier network</p>
              </div>
            </div>
          </FloatingCard>
        </div>

        <div className="absolute bottom-40 left-20">
          <FloatingCard delay={-4} className="p-4">
            <div className="flex items-center">
              <Truck className="h-6 w-6 mr-2" />
              <span className="text-sm font-medium" data-testid="text-fast-delivery">Fast Delivery</span>
            </div>
          </FloatingCard>
        </div>

        <div className="absolute top-60 right-1/4">
          <FloatingCard delay={-1} className="p-4">
            <div className="flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              <span className="text-sm font-medium" data-testid="text-quality-assured">Quality Assured</span>
            </div>
          </FloatingCard>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up" data-testid="text-hero-title">
            Global Procurement
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Simplified
            </span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in" 
            style={{ animationDelay: "0.2s" }}
            data-testid="text-hero-subtitle"
          >
            Africa's #1 sourcing and procurement company connecting businesses with trusted manufacturers worldwide.
          </p>
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" 
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-marpe-orange text-white px-8 py-4 text-lg font-semibold hover:bg-orange-600 hover-scale"
                data-testid="button-start-sourcing"
              >
                Start Sourcing Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-marpe-blue"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-fade-in hidden lg:block" 
        style={{ animationDelay: "0.6s" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
          alt="Global business collaboration" 
          className="rounded-t-3xl shadow-2xl max-w-2xl"
          data-testid="img-hero"
        />
      </div>
    </section>
  );
}
