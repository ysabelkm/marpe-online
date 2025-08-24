import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { BarChart3, Star, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-marpe-blue to-marpe-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-testid="text-page-title">
            About Marpe
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-page-subtitle">
            Your trusted partner in global procurement and sourcing
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-marpe-dark mb-8" data-testid="text-main-title">
                Making Global Procurement <span className="text-marpe-blue">Simple</span>
              </h2>
              <div className="space-y-6 text-lg text-marpe-slate leading-relaxed">
                <p data-testid="text-intro">
                  At Marpe, we make global procurement simple. As Africa's #1 sourcing and procurement company, we connect businesses with trusted manufacturers and suppliers across the world including China, Germany, Italy, United States.
                </p>
                <p data-testid="text-process">
                  All you need to do is tell us what product you want and in what quantity. We take care of the rest—sourcing only the best quality goods, negotiating directly with manufacturers, and ensuring smooth delivery right to your doorstep.
                </p>
                <p data-testid="text-mission">
                  From everyday household tools to large-scale industrial equipment, our mission is to give African businesses easy access to global markets without the hassle. With us, you can focus on growing your business while we handle the sourcing, quality checks, and logistics.
                </p>
                <p data-testid="text-commitment">
                  We pride ourselves on reliability, transparency, and unmatched efficiency—helping businesses of all sizes thrive by giving them exactly what they need, when they need it.
                </p>
                <p className="text-marpe-blue font-semibold text-xl" data-testid="text-tagline">
                  Your business. Our sourcing. Worldwide.
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Global procurement business meeting" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-gallery-1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Modern manufacturing facility" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-gallery-2"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="International business handshake" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-gallery-3"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Modern office team collaboration" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-gallery-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Global business analytics dashboard" 
                className="rounded-2xl shadow-2xl"
                data-testid="img-analytics"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-marpe-dark mb-6" data-testid="text-track-record-title">
                Proven Track Record
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-marpe-blue rounded-xl flex items-center justify-center mr-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg" data-testid="text-orders-stat">24,000+ Orders Completed</h4>
                    <p className="text-marpe-slate" data-testid="text-orders-description">Successfully sourced and delivered to African businesses</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-marpe-teal rounded-xl flex items-center justify-center mr-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg" data-testid="text-satisfaction-stat">98% Customer Satisfaction</h4>
                    <p className="text-marpe-slate" data-testid="text-satisfaction-description">Consistently rated as the top procurement service</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-marpe-orange rounded-xl flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg" data-testid="text-countries-stat">50+ Countries Served</h4>
                    <p className="text-marpe-slate" data-testid="text-countries-description">Expanding across Africa and beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
