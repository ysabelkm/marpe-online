import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { CheckCircle } from "lucide-react";

export default function Pricing() {

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative"
        style={{
          backgroundImage: "url('/pricing.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6" data-testid="text-page-title">
            Transparent Pricing
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4 sm:px-0" data-testid="text-page-subtitle">
            Choose the service level that fits your business needs. No hidden fees, just results.
          </p>
        </div>
      </section>

      {/* Commitment Fee Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-marpe-dark mb-3 sm:mb-4" data-testid="text-commitment-title">
              Commitment Fee Structure
            </h2>
            <p className="text-base sm:text-lg text-marpe-slate max-w-3xl mx-auto px-4 sm:px-0" data-testid="text-commitment-subtitle">
              A one-time commitment fee ensures dedicated service and priority handling for your procurement needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Commercial Products */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-blue-200">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-marpe-dark mb-3 sm:mb-4" data-testid="text-commercial-title">
                Commercial Products
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3 sm:mb-4" data-testid="text-commercial-price">
                ₦20,000
              </div>
              <p className="text-marpe-slate mb-4 sm:mb-6 text-sm sm:text-base" data-testid="text-commercial-description">
                For household items, consumer goods, electronics, clothing, and general merchandise
              </p>
              <ul className="text-left space-y-1 sm:space-y-2 text-xs sm:text-sm text-marpe-slate">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Standard sourcing and quality control
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Regular shipping options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Email and phone support
                </li>
              </ul>
            </div>

            {/* Industrial Equipment */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-orange-200">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-marpe-dark mb-3 sm:mb-4" data-testid="text-industrial-title">
                Industrial Equipment
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-3 sm:mb-4" data-testid="text-industrial-price">
                ₦50,000
              </div>
              <p className="text-marpe-slate mb-4 sm:mb-6 text-sm sm:text-base" data-testid="text-industrial-description">
                For heavy machinery, production equipment, industrial tools, and large-scale manufacturing items
              </p>
              <ul className="text-left space-y-1 sm:space-y-2 text-xs sm:text-sm text-marpe-slate">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Advanced sourcing and factory vetting
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Comprehensive quality inspection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Specialized logistics and handling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-marpe-dark mb-4" data-testid="text-commission-title">
              Sourcing & Procurement Commission
            </h2>
            <p className="text-lg text-marpe-slate max-w-2xl mx-auto" data-testid="text-commission-subtitle">
              Our transparent commission structure ensures you know exactly what you'll pay
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-marpe-blue to-marpe-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-marpe-dark mb-4" data-testid="text-commission-rate">
                10% Commission
              </h3>
              <p className="text-xl text-marpe-slate mb-6" data-testid="text-commission-description">
                Of the total cost of goods
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-marpe-dark mb-4" data-testid="text-example-title">
                  Example Calculation
                </h4>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-marpe-slate">Total cost of goods:</span>
                    <span className="font-semibold">₦100,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-marpe-slate">Our commission (10%):</span>
                    <span className="font-semibold text-marpe-blue">₦10,000</span>
                    </div>
                  <hr className="my-2" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total amount you pay:</span>
                    <span className="text-marpe-dark">₦110,000</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-marpe-slate" data-testid="text-commission-note">
                * Commission is calculated on the total cost of goods before any additional services
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
