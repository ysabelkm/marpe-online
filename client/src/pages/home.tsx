import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import industrialMachineryImage from "../../../attached_assets/industrial-machinery.webp";
import kitchenCookwareImage from "../../../attached_assets/cooking materials.jpg";
import goodsinspectionImage from "../../../attached_assets/goodsinspection.png";
import warehousingImage from "../../../attached_assets/warehousing.jpg";
import happysiteworkersImage from "../../../attached_assets/happysiteworkers.webp";
import globalshippingImage from "../../../attached_assets/globalshipping.jpg";
import industrialPrinterImage from "../../../attached_assets/industrial-printer.jpg";
import agriculturalMachineryImage from "../../../attached_assets/Agricultural-Machinery-supply.jpg";
import thumbsUpImage from "../../../attached_assets/thumbsup.png";
import { 
  Shield, 
  Clock, 
  Handshake, 
  DollarSign, 
  BarChart3,
  Star,
  Globe,
  ArrowRight,
  CheckCircle,
  Search,
  Package,
  Truck as TruckIcon,
  Building2
} from "lucide-react";
import { AnimatePresence, usePresenceData, motion } from "motion/react";

// Slide component for testimonials
function TestimonialSlide({ testimonial, index, isActive }: { testimonial: any, index: number, isActive: boolean }) {
  return (
    <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <Card className="bg-white rounded-2xl p-8 h-full shadow-lg border border-gray-100">
        {/* Company Logo Section */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md px-3">
            <span className="text-white font-bold text-sm">{testimonial.company}</span>
          </div>
        </div>
        
        {/* Star Rating */}
        <div className="flex justify-center mb-6">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
        </div>
        
        {/* Testimonial Text */}
        <p className="text-gray-700 mb-8 text-lg leading-relaxed text-center font-medium">
          "{testimonial.content}"
        </p>
        
        {/* Author Information */}
        <div className="flex items-center justify-center mt-auto">
          <img 
            src={testimonial.image} 
            alt={`${testimonial.name} testimonial`} 
            className="w-12 h-12 rounded-full mr-4 border-2 border-gray-200"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="text-center">
            <h4 className="font-bold text-gray-900 text-lg">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-600 font-medium">
              {testimonial.position}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Custom styles for enhanced animations
const cardStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .collection-card {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .collection-card:hover {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.98);
  }
`;

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const collections = [
    {
      title: "Industrial Equipment",
      description: "Heavy machinery, production equipment, and industrial automation systems",
      productCount: "300+ Products",
      image: industrialMachineryImage
    },
    {
      title: "Agricultural Machinery",
      description: "Agricultural machinery, smart farming equipment, and precision agriculture technology",
      productCount: "250+ Products",
      image: agriculturalMachineryImage
    },
    {
      title: "Household Cooking Materials",
      description: "Kitchen appliances, cookware, utensils, and professional cooking equipment",
      productCount: "400+ Products",
      image: kitchenCookwareImage
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      position: "CEO, TechFlow",
      company: "TechFlow",
      content: "Marpe transformed our supply chain completely. Their expertise in Chinese manufacturing and quality control saved us months of trial and error. Highly recommended!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Sarah Mbeki",
      position: "Operations Director, AfriMed",
      company: "AfriMed",
      content: "The transparency and communication throughout the process was outstanding. We always knew exactly where our order stood. Marpe's reliability has made them our trusted procurement partner.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Michael Adebayo",
      position: "Founder, GreenTech Solutions",
      company: "GreenTech",
      content: "Cost savings were immediate and significant. Marpe's negotiation skills with suppliers are unmatched. They've helped us scale our operations efficiently while maintaining quality standards.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <style dangerouslySetInnerHTML={{ __html: cardStyles }} />
      <Navigation />
      <Hero />

      {/* Our Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements - hidden on mobile for better performance */}
        <div className="hidden sm:block absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-on-scroll">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg"
            >
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="text-services-title"
            >
              Procurement Services
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              data-testid="text-services-subtitle"
            >
              Our main procurement solutions to make China work for you
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Product Sourcing & Branding",
                description: "Connect with trusted manufacturers in China and beyond. Factory vetting to ensure quality standards. Private labelling and brand development support.",
                icon: Search,
                gradient: "from-blue-500 to-indigo-600",
                bgGradient: "from-blue-50 to-indigo-50"
              },
              {
                title: "Supplier & Order Management",
                description: "Secure payments to suppliers. Communication, order tracking, and modification requests. Consolidation and repackaging to save shipping costs.",
                icon: Package,
                gradient: "from-green-500 to-emerald-600",
                bgGradient: "from-green-50 to-emerald-50"
              },
              {
                title: "Quality Control & Warehousing",
                description: "Pre-shipment goods inspection and production monitoring. Free warehousing until orders are ready to ship. Assurance of correct quantity and quality.",
                icon: Building2,
                gradient: "from-purple-500 to-violet-600",
                bgGradient: "from-purple-50 to-violet-50"
              },
              {
                title: "Shipping & Logistics Solutions",
                description: "Customs clearance and certification support. Multiple delivery options: Express, Air Freight, Ocean Freight. Door-to-door logistics for smooth delivery.",
                icon: TruckIcon,
                gradient: "from-orange-500 to-red-600",
                bgGradient: "from-orange-50 to-red-50"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1 sm:group-hover:-translate-y-2 h-full border border-white/50 relative overflow-hidden`}>
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors" data-testid={`text-service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors" data-testid={`text-service-description-${index}`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-sm sm:text-base" data-testid="button-view-all-services">
                View All Services
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Currency Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Background Elements - hidden on mobile for better performance */}
        <div className="hidden sm:block absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-100/20 to-cyan-100/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-on-scroll">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Currency Exchange Services
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Seamlessly handle international payments and currency exchanges for your global procurement needs
            </motion.p>
          </div>

          {/* Currency Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Currency Exchange",
                description: "Buy and sell large amounts of currencies at competitive rates with our global network of financial partners.",
                gradient: "from-emerald-500 to-teal-600",
                bgGradient: "from-emerald-50 to-teal-50"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: "Supplier Payments",
                description: "Pay your suppliers worldwide in any currency with our secure and fast payment processing system.",
                gradient: "from-cyan-500 to-blue-600",
                bgGradient: "from-cyan-50 to-blue-50"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Risk Management",
                description: "Protect your business from currency fluctuations with our hedging strategies and risk management tools.",
                gradient: "from-teal-500 to-emerald-600",
                bgGradient: "from-teal-50 to-emerald-50"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1 sm:group-hover:-translate-y-2 h-full border border-white/50 relative overflow-hidden`}>
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Simplify Your Global Payments?
              </h3>
              <p className="text-gray-600 mb-6">
                Get competitive rates and secure payment processing for all your international transactions.
              </p>
              <a 
                href="https://wa.me/2348123771335?text=Hello%20Marpe%20Team,%20I%20would%20like%20to%20learn%20more%20about%20your%20currency%20services%20and%20global%20payment%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Get Currency Quote
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-marpe-dark mb-8" data-testid="text-about-title">
                About <span className="text-marpe-blue">Marpe®</span>
              </h2>
              <div className="space-y-6 text-lg text-marpe-slate leading-relaxed">
                <p data-testid="text-about-intro">
                  At Marpe, we make global procurement simple. As Africa's #1 sourcing company, we connect you with trusted manufacturers worldwide — from China to the U.S.
                </p>
                <p data-testid="text-about-process">
                  Just tell us what you need and in what quantity. We'll handle the rest: sourcing quality goods, negotiating with manufacturers, and delivering straight to your doorstep.
                </p>
                <p data-testid="text-about-mission">
                  From household tools to industrial equipment, our mission is to give African businesses easy access to global markets—so you can focus on growth while we take care of sourcing, quality checks, and logistics.
                </p>
                <p className="text-marpe-blue font-semibold text-xl" data-testid="text-about-tagline">
                  Your business. Our sourcing. Worldwide.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={globalshippingImage}
                  alt="Global shipping and logistics" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-about-1"
                />
                <img 
                  src={warehousingImage}
                  alt="Modern warehousing facility" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-about-2"
                />
                <img 
                  src={happysiteworkersImage}
                  alt="Happy site workers collaboration" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-about-3"
                />
                <img 
                  src={goodsinspectionImage}
                  alt="Quality goods inspection process" 
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
              <Card 
                key={index} 
                className={`group collection-card rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border-0`}
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-56 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    data-testid={`img-collection-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardContent className="p-8 relative">
                  <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-marpe-blue transition-colors duration-300" data-testid={`text-collection-title-${index}`}>
                    {collection.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-base" data-testid={`text-collection-description-${index}`}>
                    {collection.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-marpe-blue bg-blue-50 px-3 py-1 rounded-full" data-testid={`text-collection-count-${index}`}>
                      {collection.productCount}
                    </span>
                    <button 
                      className="group inline-flex items-center gap-2 text-marpe-orange font-semibold text-sm hover:text-orange-600 transition-colors duration-300"
                      data-testid={`button-explore-${index}`}
                    >
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Link href="/collections">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl" data-testid="button-view-all-collections">
                View All Collections
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Marpe */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16 animate-on-scroll relative z-30">
            <h2 className="text-4xl md:text-5xl font-bold text-marpe-dark mb-6" data-testid="text-why-title">
              Why Choose Us
            </h2>
            <p className="text-xl text-marpe-slate max-w-3xl" data-testid="text-why-subtitle">
              Experience the difference with our comprehensive procurement solutions designed for African businesses
            </p>
          </div>

          {/* Thumbs Up Image - Positioned at extreme right */}
          <motion.div 
            className="absolute right-0 top-[30%] transform -translate-y-1/2 z-0"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <img 
              src={thumbsUpImage}
              alt="Thumbs up showing approval" 
              className="w-[500px] h-[500px] object-contain mix-blend-multiply"
            />
          </motion.div>

          {/* Content area with right margin to avoid overlap */}
          <div className="relative z-30 mr-32">
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Quality Guaranteed",
                  description: "Rigorous quality control processes ensure you receive only the best products from verified suppliers."
                },
                {
                  number: "02",
                  title: "Fast Turnaround",
                  description: "Average sourcing time of 48 hours with express options for urgent requirements."
                },
                {
                  number: "03",
                  title: "Trusted Network",
                  description: "Access to over 10,000 verified manufacturers and suppliers across 50+ countries."
                },
                {
                  number: "04",
                  title: "Cost Effective",
                  description: "Save up to 40% on procurement costs through our bulk purchasing power and negotiation expertise."
                }
              ].map((feature, index) => (
                <div key={index} className="text-left">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-lg">{feature.number}</span>
                    </div>
                    <div className="animate-on-scroll">
                      <h3 className="text-xl font-semibold mb-3 text-marpe-dark">
                        {feature.title}
                      </h3>
                      <p className="text-marpe-slate leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-marpe-dark mb-6 pt-8" data-testid="text-testimonials-title">
              What Our Customers Say
            </h2>
            <p className="text-xl text-marpe-slate max-w-3xl mx-auto" data-testid="text-testimonials-subtitle">
              Don't just take our word for it. Here's what businesses across Africa are saying about Marpe.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto mb-12 px-20">
            {/* Navigation Arrow - Left */}
            <motion.button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Navigation Arrow - Right */}
            <motion.button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            <div className="relative h-96">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  <TestimonialSlide
                    key={index}
                    testimonial={testimonial}
                    index={index}
                    isActive={index === currentTestimonial}
                  />
                ))}
              </AnimatePresence>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-marpe-blue' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center animate-on-scroll">
            <Link href="/customers">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl" data-testid="button-view-all-testimonials">
                View All Testimonials
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
