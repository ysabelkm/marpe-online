import { ArrowRight, BarChart3, Globe, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FloatingCard from "./floating-card";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Blue Gradient Design Elements */}
      <div className="absolute inset-0">
        {/* Large gradient circle - top right */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-marpe-blue/20 to-marpe-teal/10 rounded-full blur-3xl"></div>
        {/* Medium gradient circle - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-marpe-teal/15 to-marpe-blue/10 rounded-full blur-2xl"></div>
        {/* Small gradient accent - top left */}
        <div className="absolute top-40 left-20 w-48 h-48 bg-gradient-to-br from-marpe-orange/20 to-marpe-blue/15 rounded-full blur-xl"></div>
        {/* Floating gradient shapes */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-marpe-blue/10 to-transparent rounded-full blur-lg"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 max-w-xs animate-float">
          <div className="bg-gradient-to-br from-marpe-blue to-marpe-teal text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-8 w-8 mr-3" />
              <div>
                <h4 className="font-semibold" data-testid="text-orders-count">24K+ Orders</h4>
                <p className="text-sm opacity-90" data-testid="text-orders-description">Successfully sourced</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-40 right-10 max-w-xs">
          <div className="bg-gradient-to-br from-marpe-teal to-marpe-blue text-white rounded-2xl p-6 shadow-lg animate-float" style={{ animationDelay: "-2s" }}>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 mr-3" />
              <div>
                <h4 className="font-semibold" data-testid="text-countries-count">50+ Countries</h4>
                <p className="text-sm opacity-90" data-testid="text-countries-description">Global supplier network</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-40 left-20">
          <div className="bg-gradient-to-r from-marpe-orange to-orange-500 text-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: "-4s" }}>
            <div className="flex items-center">
              <Truck className="h-6 w-6 mr-2" />
              <span className="text-sm font-medium" data-testid="text-fast-delivery">Fast Delivery</span>
            </div>
          </div>
        </div>

        <div className="absolute top-60 right-1/4">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: "-1s" }}>
            <div className="flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              <span className="text-sm font-medium" data-testid="text-quality-assured">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-marpe-dark mb-6 animate-slide-up" data-testid="text-hero-title">
            Global Procurement
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-marpe-blue to-marpe-teal">
              Simplified
            </span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-marpe-slate mb-12 max-w-3xl mx-auto animate-fade-in" 
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
                className="bg-marpe-orange text-white px-8 py-4 text-lg font-semibold hover:bg-orange-600 hover-scale shadow-lg"
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
                className="border-2 border-marpe-blue text-marpe-blue px-8 py-4 text-lg font-semibold hover:bg-marpe-blue hover:text-white shadow-lg"
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
