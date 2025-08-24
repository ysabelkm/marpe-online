import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Handshake, 
  DollarSign, 
  BarChart3,
  Star,
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const collections = [
    {
      title: "Electronics & Technology",
      description: "Smartphones, laptops, IoT devices, and cutting-edge technology solutions",
      productCount: "500+ Products",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Industrial Equipment",
      description: "Heavy machinery, production equipment, and industrial automation systems",
      productCount: "300+ Products",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Home & Lifestyle",
      description: "Furniture, appliances, decor, and everyday household essentials",
      productCount: "800+ Products",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  const testimonials = [
    {
      name: "James Okoye",
      position: "CEO, TechFlow Lagos",
      content: "Marpe transformed our procurement process. What used to take weeks now happens in days, and the quality is consistently excellent.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Sarah Mbeki",
      position: "Operations Director, AfriMed",
      content: "The transparency and communication throughout the process was outstanding. We always knew exactly where our order stood.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Michael Adebayo",
      position: "Founder, GreenTech Solutions",
      content: "Cost savings were immediate and significant. Marpe's negotiation skills with suppliers are unmatched.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-marpe-dark mb-8" data-testid="text-about-title">
                About <span className="text-marpe-blue">Marpe</span>
              </h2>
              <div className="space-y-6 text-lg text-marpe-slate leading-relaxed">
                <p data-testid="text-about-intro">
                  At Marpe, we make global procurement simple. As Africa's #1 sourcing and procurement company, we connect businesses with trusted manufacturers and suppliers across the world including China, Germany, Italy, United States.
                </p>
                <p data-testid="text-about-process">
                  All you need to do is tell us what product you want and in what quantity. We take care of the rest—sourcing only the best quality goods, negotiating directly with manufacturers, and ensuring smooth delivery right to your doorstep.
                </p>
                <p data-testid="text-about-mission">
                  From everyday household tools to large-scale industrial equipment, our mission is to give African businesses easy access to global markets without the hassle. With us, you can focus on growing your business while we handle the sourcing, quality checks, and logistics.
                </p>
                <p className="text-marpe-blue font-semibold text-xl" data-testid="text-about-tagline">
                  Your business. Our sourcing. Worldwide.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Global procurement business meeting" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-about-1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Modern manufacturing facility" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-about-2"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="International business handshake" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-about-3"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Modern office team collaboration" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-about-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-marpe-dark mb-6" data-testid="text-collections-title">
              Featured Collections
            </h2>
            <p className="text-xl text-marpe-slate max-w-3xl mx-auto" data-testid="text-collections-subtitle">
              Discover our most popular product categories sourced from trusted manufacturers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {collections.map((collection, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-scale animate-on-scroll">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-48 object-cover"
                  data-testid={`img-collection-${index}`}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-collection-title-${index}`}>
                    {collection.title}
                  </h3>
                  <p className="text-marpe-slate mb-4" data-testid={`text-collection-description-${index}`}>
                    {collection.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-marpe-blue" data-testid={`text-collection-count-${index}`}>
                      {collection.productCount}
                    </span>
                    <Button 
                      variant="ghost" 
                      className="text-marpe-orange font-semibold hover:text-orange-600 p-0"
                      data-testid={`button-explore-${index}`}
                    >
                      Explore <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Link href="/collections">
              <Button 
                size="lg"
                className="bg-marpe-blue text-white hover:bg-blue-700"
                data-testid="button-view-all-collections"
              >
                View All Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Marpe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-marpe-dark mb-6" data-testid="text-why-title">
              Why Choose Marpe
            </h2>
            <p className="text-xl text-marpe-slate max-w-3xl mx-auto" data-testid="text-why-subtitle">
              We're not just another procurement company. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center animate-on-scroll hover-scale">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-marpe-slate" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-marpe-dark mb-6" data-testid="text-testimonials-title">
              What Our Customers Say
            </h2>
            <p className="text-xl text-marpe-slate max-w-3xl mx-auto" data-testid="text-testimonials-subtitle">
              Don't just take our word for it. Here's what businesses across Africa are saying about Marpe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-50 rounded-2xl p-8 hover-scale animate-on-scroll">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-marpe-dark mb-6 italic" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} testimonial`} 
                    className="w-12 h-12 rounded-full mr-4"
                    data-testid={`img-testimonial-${index}`}
                  />
                  <div>
                    <h4 className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-marpe-slate" data-testid={`text-testimonial-position-${index}`}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Link href="/customers">
              <Button 
                size="lg"
                className="bg-marpe-blue text-white hover:bg-blue-700"
                data-testid="button-view-all-testimonials"
              >
                View All Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
