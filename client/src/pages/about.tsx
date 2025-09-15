import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { BarChart3, Star, Globe, MessageCircle, CreditCard, Search, CheckCircle, Users, Truck, Shield, Package, Star as StarIcon } from "lucide-react";
import goodsinspectionImage from "../../../attached_assets/goodsinspection.png";
import warehousingImage from "../../../attached_assets/warehousing.jpg";
import happysiteworkersImage from "../../../attached_assets/happysiteworkers.webp";
import globalshippingImage from "../../../attached_assets/globalshipping.jpg";
import industrialPrinterImage from "../../../attached_assets/industrial-printer.jpg";
import cookingMaterialsImage from "../../../attached_assets/cooking materials.jpg";
import industrialMachineryImage from "../../../attached_assets/industrial-machinery.webp";
import thumbsUpImage from "../../../attached_assets/thumbsup.png";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
                  src={globalshippingImage}
                  alt="Global shipping and logistics" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-gallery-1"
                />
                <img 
                  src={warehousingImage}
                  alt="Modern warehousing facility" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-gallery-2"
                />
                <img 
                  src={happysiteworkersImage}
                  alt="Happy site workers collaboration" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-gallery-3"
                />
                <img 
                  src={goodsinspectionImage}
                  alt="Quality goods inspection process" 
                  className="rounded-2xl shadow-lg hover-scale"
                  data-testid="img-gallery-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Shipping Process Works - Professional Timeline */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-marpe-blue rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-marpe-teal rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-marpe-orange rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-marpe-blue/10 rounded-full text-marpe-blue font-semibold text-sm mb-6">
              Global Procurement Process
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-marpe-dark mb-6" data-testid="text-shipping-title">
              From Manufacturer to Your Door
            </h2>
            <p className="text-xl text-marpe-slate max-w-4xl mx-auto leading-relaxed" data-testid="text-shipping-subtitle">
              <span className="font-semibold text-marpe-blue">Simplified Procurement in 9 Easy Steps.</span> 
              <br className="hidden sm:block" />
              We make global procurement simple, transparent, and reliable. Here's how we ensure your products are shipped successfully from manufacturers abroad to your doorstep in Africa.
            </p>
          </div>

          {/* Process Phases */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                Steps 1-3: Sourcing
              </div>
              <div className="flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Steps 4-6: Procurement & Shipping
              </div>
              <div className="flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                Steps 7-9: Delivery & Review
              </div>
            </div>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: 1,
                icon: MessageCircle,
                title: "Contact Marpe",
                description: "Chat with an agent or reach out to us with a description of your desired product. Please include details such as:",
                details: ["Product name", "Size and specifications", "Images (if available)", "Quantity required", "Preferred price range"],
                gradient: "from-blue-500/20 to-blue-600/20",
                borderColor: "border-blue-500/30",
                phase: "sourcing",
                emoji: "📞"
              },
              {
                step: 2,
                icon: CreditCard,
                title: "Commitment Fee",
                description: "If you're new to Marpe, a small commitment fee secures your request and allows us to begin sourcing the best options for you.",
                highlight: "₦20,000 – ₦50,000",
                gradient: "from-blue-500/20 to-blue-600/20",
                borderColor: "border-blue-500/30",
                phase: "sourcing",
                emoji: "💳"
              },
              {
                step: 3,
                icon: Search,
                title: "Supplier Options",
                description: "Your agent will prepare a comprehensive spreadsheet with multiple manufacturers offering the product. You'll be able to compare:",
                details: ["Prices", "Quality standards", "Manufacturer reliability"],
                gradient: "from-blue-500/20 to-blue-600/20",
                borderColor: "border-blue-500/30",
                phase: "sourcing",
                emoji: "📊"
              },
              {
                step: 4,
                icon: CheckCircle,
                title: "Choose Your Supplier",
                description: "Select your preferred manufacturer, confirm quantities, and provide any additional order details.",
                gradient: "from-green-500/20 to-green-600/20",
                borderColor: "border-green-500/30",
                phase: "procurement",
                emoji: "✅"
              },
              {
                step: 5,
                icon: Users,
                title: "Procurement Meeting",
                description: "We schedule an official meeting with your Marpe agent to finalize the procurement procedures. At this stage, you'll decide whether your goods will be shipped via air freight or sea freight.",
                highlight: "Air Freight or Sea Freight",
                gradient: "from-green-500/20 to-green-600/20",
                borderColor: "border-green-500/30",
                phase: "procurement",
                emoji: "🤝"
              },
              {
                step: 6,
                icon: CreditCard,
                title: "Final Payment & Shipping Timeline",
                description: "Complete the necessary payments and receive your estimated shipping timeline.",
                gradient: "from-green-500/20 to-green-600/20",
                borderColor: "border-green-500/30",
                phase: "procurement",
                emoji: "💰"
              },
              {
                step: 7,
                icon: Truck,
                title: "Customs & Logistics",
                description: "Marpe handles all in-country customs clearance and logistics, ensuring your products move smoothly through every stage.",
                highlight: "In-country Customs Clearance and Logistics",
                gradient: "from-orange-500/20 to-orange-600/20",
                borderColor: "border-orange-500/30",
                phase: "delivery",
                emoji: "🚢"
              },
              {
                step: 8,
                icon: Shield,
                title: "Goods Inspection",
                description: "We carefully inspect your goods before release to guarantee quality and accuracy.",
                gradient: "from-orange-500/20 to-orange-600/20",
                borderColor: "border-orange-500/30",
                phase: "delivery",
                emoji: "🔍"
              },
              {
                step: 9,
                icon: Package,
                title: "Delivery & Review",
                description: "Receive your products, confirm your satisfaction, and share your feedback with us.",
                gradient: "from-orange-500/20 to-orange-600/20",
                borderColor: "border-orange-500/30",
                phase: "delivery",
                emoji: "📦"
              }
            ].map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="group relative">
                  {/* Glass Card */}
                  <div className={`bg-gradient-to-br ${step.gradient} backdrop-blur-lg rounded-2xl p-6 text-marpe-dark shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 h-full relative border ${step.borderColor}`}>
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-marpe-dark font-black text-lg shadow-lg border border-white/50">
                      {String(step.step).padStart(2, '0')}
                    </div>
                    
                    {/* Phase Badge */}
                    <div className="flex justify-center mb-4">
                      <div className="inline-flex items-center px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-xs font-semibold text-marpe-dark/80 uppercase tracking-wide border border-white/40">
                        {step.phase}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/40">
                        <Icon className="h-6 w-6 text-marpe-dark" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-3 text-marpe-dark" data-testid={`text-step-${step.step}-title`}>
                        {step.title}
                      </h3>
                      <p className="text-marpe-slate text-sm leading-relaxed mb-3" data-testid={`text-step-${step.step}-description`}>
                        {step.description}
                      </p>
                      
                      {/* Highlighted text */}
                      {step.highlight && (
                        <div className="bg-white/40 backdrop-blur-sm rounded-lg px-3 py-2 mb-3 border border-white/30">
                          <p className="text-marpe-dark font-semibold text-sm">
                            {step.highlight}
                          </p>
                        </div>
                      )}
                      
                      {/* Bullet points */}
                      {step.details && (
                        <ul className="space-y-1 text-left">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-xs text-marpe-slate">
                              <div className="w-1.5 h-1.5 bg-marpe-blue rounded-full mr-2 flex-shrink-0"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    
                    {/* Connecting Arrow (for visual flow) */}
                    {index < 8 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                        <div className="w-6 h-6 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                          <div className="w-0 h-0 border-l-2 border-l-marpe-dark border-t-1 border-t-transparent border-b-1 border-b-transparent"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action Section */}
          <div className="text-center mt-24">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-5xl mx-auto relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-marpe-blue rounded-full transform translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-marpe-teal rounded-full transform -translate-x-24 translate-y-24"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <StarIcon className="h-10 w-10 text-yellow-500 mr-3" />
                  <h3 className="text-3xl font-bold text-marpe-dark">Ready to Start Your Procurement Journey?</h3>
                </div>
                <p className="text-xl text-marpe-slate mb-8 max-w-3xl mx-auto" data-testid="text-cta-message">
                  Join thousands of African businesses who trust Marpe for their global procurement needs. 
                  <span className="font-semibold text-marpe-blue"> Start your procurement process today</span> and experience the difference.
                </p>
                <div className="flex justify-center">
                  <Link href="/client-auth">
                    <button className="bg-marpe-orange text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg border border-white/20 backdrop-blur-sm">
                      Contact Our Agent
                    </button>
                  </Link>
                </div>
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
                src="/trackrecord.jpg"
                alt="Proven track record and business success" 
                className="rounded-2xl shadow-2xl"
                data-testid="img-analytics"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-marpe-dark mb-8" data-testid="text-track-record-title">
                Proven Track Record
              </h3>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-marpe-dark mb-2" data-testid="text-orders-stat">24,000+ Orders Completed</h4>
                    <p className="text-lg text-marpe-slate font-medium" data-testid="text-orders-description">Successfully sourced and delivered to African businesses</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-marpe-dark mb-2" data-testid="text-satisfaction-stat">98% Customer Satisfaction</h4>
                    <p className="text-lg text-marpe-slate font-medium" data-testid="text-satisfaction-description">Consistently rated as the top procurement service</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-marpe-dark mb-2" data-testid="text-countries-stat">50+ Countries Served</h4>
                    <p className="text-lg text-marpe-slate font-medium" data-testid="text-countries-description">Expanding across Africa and beyond</p>
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
