import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Shield, Clock, Handshake, DollarSign, BarChart3, Star, Globe } from "lucide-react";

export default function WhyMarpe() {
  const benefits = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Rigorous quality control processes ensure you receive only the best products from verified suppliers.",
      gradient: "from-marpe-blue to-marpe-teal"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Average sourcing time of 48 hours with express options for urgent requirements.",
      gradient: "from-marpe-orange to-yellow-500"
    },
    {
      icon: Handshake,
      title: "Trusted Network",
      description: "Access to over 10,000 verified manufacturers and suppliers across 50+ countries.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Save up to 40% on procurement costs through our bulk purchasing power and negotiation expertise.",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-marpe-blue to-marpe-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-testid="text-page-title">
            Why Choose Marpe
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-page-subtitle">
            We're not just another procurement company. Here's what makes us different.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center hover-scale">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4" data-testid={`text-benefit-title-${index}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-marpe-slate" data-testid={`text-benefit-description-${index}`}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
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
