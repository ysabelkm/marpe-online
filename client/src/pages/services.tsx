import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { 
  MagnifyingGlassIcon, 
  TagIcon, 
  CreditCardIcon, 
  ChatBubbleLeftRightIcon, 
  CheckCircleIcon, 
  BuildingOfficeIcon, 
  CubeIcon, 
  ClipboardDocumentListIcon
} from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      icon: MagnifyingGlassIcon,
      company: "Marpe",
      title: "Product Sourcing",
      description: "We can help you search China for any products you want. We will find the right suppliers and vet factory standards.",
      color: "bg-blue-500"
    },
    {
      icon: TagIcon,
      company: "Marpe",
      title: "Branding Labelling",
      description: "We will advise on private labelling and help you develop and build a unique brand for your products.",
      color: "bg-orange-500"
    },
    {
      icon: CreditCardIcon,
      company: "Marpe",
      title: "Payment to Suppliers",
      description: "We help you pay suppliers for direct and fast transactions.",
      color: "bg-green-500"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      company: "Marpe",
      title: "Communication",
      description: "We will help you manage supplier relationships, confirm the specifications of products, request modifications, track orders.",
      color: "bg-purple-500"
    },
    {
      icon: CheckCircleIcon,
      company: "Marpe",
      title: "Goods Inspection",
      description: "Before shipping your goods, we will monitor production and inspect them to ensure their quality and quantity.",
      color: "bg-red-500"
    },
    {
      icon: BuildingOfficeIcon,
      company: "Marpe",
      title: "Warehousing",
      description: "We provide free warehousing for your goods until your complete order can be shipped globally to your country's destination.",
      color: "bg-indigo-500"
    },
    {
      icon: CubeIcon,
      company: "Marpe",
      title: "Repackaging",
      description: "We consolidate your goods from different suppliers and pack them to save space and shipping costs.",
      color: "bg-yellow-500"
    },
    {
      icon: ClipboardDocumentListIcon,
      company: "Marpe",
      title: "Customs Clearing",
      description: "We will help you fulfil country- and certification-specific requirements and regulations.",
      color: "bg-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 relative"
        style={{
          backgroundImage: "url('/handshake.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-testid="text-page-title">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-page-subtitle">
            Comprehensive procurement solutions designed to streamline your supply chain and boost your business growth.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-marpe-dark mb-6">
              See Marpe in Action
            </h2>
            <p className="text-xl text-marpe-slate max-w-3xl mx-auto">
              Discover how we transform global procurement for African businesses
            </p>
          </div>
          
          {/* Video Container */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
              <div className="aspect-video w-full">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                  muted
                >
                  <source src="/marpe_services.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Video Overlay for better UX */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-marpe-blue rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-marpe-orange rounded-full opacity-20"></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-marpe-teal rounded-full opacity-30"></div>
            <div className="absolute top-1/4 -right-8 w-4 h-4 bg-marpe-blue rounded-full opacity-25"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive procurement solutions for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Modern Update Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full border border-gray-100">
                    {/* Icon Container */}
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center text-white mr-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="text-sm font-medium text-gray-600 mb-1">
                      {service.company}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3" data-testid={`text-service-title-${index}`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed" data-testid={`text-service-description-${index}`}>
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-marpe-dark to-marpe-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">500+</div>
              <div className="text-lg text-white/90">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">50+</div>
              <div className="text-lg text-white/90">Countries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">10K+</div>
              <div className="text-lg text-white/90">Products Sourced</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">99%</div>
              <div className="text-lg text-white/90">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-marpe-dark mb-6">
              How We <span className="text-marpe-blue">Work</span>
            </h2>
            <p className="text-xl text-marpe-slate max-w-3xl mx-auto">
              Our streamlined process ensures your procurement needs are met efficiently and effectively
            </p>
          </div>
          
          {/* Progress Animation Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <motion.div 
                className="h-full bg-gradient-to-r from-marpe-blue via-marpe-orange to-marpe-teal rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center group">
                <motion.div 
                  className="w-16 h-16 bg-marpe-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl font-bold text-white">1</span>
                </motion.div>
                <h3 className="text-xl font-bold text-marpe-dark mb-4">Sourcing</h3>
                <p className="text-marpe-slate">We find and vet the best suppliers for your specific needs</p>
              </div>
              
              <div className="text-center group">
                <motion.div 
                  className="w-16 h-16 bg-marpe-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl font-bold text-white">2</span>
                </motion.div>
                <h3 className="text-xl font-bold text-marpe-dark mb-4">Shipping</h3>
                <p className="text-marpe-slate">We handle all logistics and coordinate the shipping process</p>
              </div>
              
              <div className="text-center group">
                <motion.div 
                  className="w-16 h-16 bg-marpe-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl font-bold text-white">3</span>
                </motion.div>
                <h3 className="text-xl font-bold text-marpe-dark mb-4">Delivery</h3>
                <p className="text-marpe-slate">We ensure timely delivery to your doorstep with quality assurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

