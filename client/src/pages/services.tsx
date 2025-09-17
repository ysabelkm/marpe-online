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
      title: "Product Sourcing",
      description: "We can help you search China for any products you want. We will find the right suppliers and vet factory standards.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: TagIcon,
      title: "Branding Labelling",
      description: "We will advise on private labelling and help you develop and build a unique brand for your products.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: CreditCardIcon,
      title: "Payment to Suppliers",
      description: "We help you pay suppliers for direct and fast transactions.",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Communication",
      description: "We will help you manage supplier relationships, confirm the specifications of products, request modifications, track orders.",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      icon: CheckCircleIcon,
      title: "Goods Inspection",
      description: "Before shipping your goods, we will monitor production and inspect them to ensure their quality and quantity.",
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-50 to-pink-50"
    },
    {
      icon: BuildingOfficeIcon,
      title: "Warehousing",
      description: "We provide free warehousing for your goods until your complete order can be shipped globally to your country's destination.",
      gradient: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      icon: CubeIcon,
      title: "Repackaging",
      description: "We consolidate your goods from different suppliers and pack them to save space and shipping costs.",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: ClipboardDocumentListIcon,
      title: "Customs Clearing",
      description: "We will help you fulfil country- and certification-specific requirements and regulations.",
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative"
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6" data-testid="text-page-title">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4 sm:px-0" data-testid="text-page-subtitle">
            Comprehensive procurement solutions designed to streamline your supply chain and boost your business growth.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-marpe-dark mb-4 sm:mb-6">
              See Marpe® in Action
            </h2>
            <p className="text-lg sm:text-xl text-marpe-slate max-w-3xl mx-auto px-4 sm:px-0">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100 relative overflow-hidden">
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg"
            >
              <MagnifyingGlassIcon className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Procurement Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Comprehensive procurement solutions for your business needs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
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
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
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
              );
            })}
          </div>
          
        </div>
      </section>

      {/* Currency Services Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-100/20 to-cyan-100/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Currency Exchange Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Seamlessly handle international payments and currency exchanges for your global procurement needs
            </motion.p>
          </div>

          {/* Currency Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className={`bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full border border-white/50 relative overflow-hidden`}>
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
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


