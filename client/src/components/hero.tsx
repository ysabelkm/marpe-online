import { Trophy, Users, TrendingUp, Brain, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FloatingCard from "./floating-card";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  
  const words = ["Easy.", "Efficient.", "Secure.", "Fast."];
  const currentWord = words[currentWordIndex];
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const deleteSpeed = 25;
    const pauseTime = 2000;
    
    const typeWriter = () => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setTimeout(() => {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          }, typeSpeed);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setTimeout(() => {
            setCurrentText(currentWord.slice(0, currentText.length - 1));
          }, deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };
    
    const timer = setTimeout(typeWriter, 50);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWord, currentWordIndex, words.length]);



  return (
    <>
    <section className="relative min-h-[80vh] sm:min-h-[70vh] bg-gradient-to-br from-blue-50 to-white overflow-hidden" role="banner" aria-label="Hero section">

      
      {/* Floating geometric shapes - hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="hidden sm:block absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-tr from-blue-100/30 to-cyan-100/30 rounded-full blur-2xl" aria-hidden="true"></div>
      
      {/* Additional geometric shapes for depth - hidden on mobile */}
      <div className="hidden lg:block absolute top-40 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-lg blur-2xl transform rotate-12" aria-hidden="true"></div>
      <div className="hidden lg:block absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-tr from-cyan-100/25 to-blue-100/25 rounded-full blur-xl" aria-hidden="true"></div>
      <div className="hidden lg:block absolute top-1/2 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-100/15 to-blue-100/15 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-start min-h-[60vh] sm:min-h-[50vh] pt-4 lg:pt-0">
          {/* Left Content */}
          <div className="animate-slide-up pt-8 sm:pt-12 lg:pt-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" data-testid="text-hero-title">
              <span className="text-marpe-orange drop-shadow-lg">China Procurement</span>
              <span className="block text-gray-900">
                Made <span className="typewriter-text text-marpe-orange transition-all duration-200 ease-in-out">{currentText}</span>
              </span>
            </h1>
            <p 
              className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-lg leading-relaxed" 
              data-testid="text-hero-subtitle"
            >
              Africa's #1 global sourcing company specializing in <strong>China procurement</strong>, <strong>industrial equipment sourcing</strong>, and <strong>supply chain management</strong>. Connect with trusted manufacturers worldwide and streamline your procurement process.
            </p>
            
            {/* Email Input and CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 sm:py-4 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button 
                size="lg"
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-blue-700 rounded-lg shadow-lg transition-colors w-full sm:w-auto"
                data-testid="button-start-sourcing"
              >
                Get Started
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              30 day free trial, no credit card required
            </p>
          </div>

          {/* Right Content - Modern UI Elements */}
          <div className="relative animate-fade-in lg:min-h-[600px] pt-4 sm:pt-8" style={{ animationDelay: "0.3s" }}>
            {/* Main Smartphone Mockup */}
            <div className="relative lg:absolute lg:top-0 lg:right-0 w-full max-w-xs sm:max-w-sm lg:w-80 mx-auto lg:mx-0 bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl z-20 border border-gray-100">
              <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 h-[400px] sm:h-[500px] lg:h-[500px]">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <span className="ml-2 text-white font-semibold">Marpe® Agent</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-blue-600 text-white p-2 sm:p-3 rounded-lg max-w-[85%] sm:max-w-xs">
                    <p className="text-xs sm:text-sm">Hi, welcome to Marpe. How can I help?</p>
                  </div>
                  <div className="bg-gray-700 text-white p-2 sm:p-3 rounded-lg max-w-[85%] sm:max-w-xs ml-auto">
                    <p className="text-xs sm:text-sm">I need industrial printers for my company</p>
                  </div>
                  <div className="bg-gray-700 text-white p-2 sm:p-3 rounded-lg max-w-[85%] sm:max-w-xs ml-auto">
                    <div className="flex flex-col space-y-1 sm:space-y-2">
                      <p className="text-xs sm:text-sm">Here's what I'm looking for:</p>
                      <div className="bg-gray-600 rounded-lg p-1 sm:p-2">
                        <img 
                          src="/industrial-printer.jpg" 
                          alt="Industrial printer" 
                          className="w-full h-16 sm:h-20 object-cover rounded"
                          onError={(e) => {
                            console.error('Image failed to load:', e);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-600 text-white p-2 sm:p-3 rounded-lg max-w-[85%] sm:max-w-xs">
                    <p className="text-xs sm:text-sm">Perfect! I can help you source industrial printers. What specifications do you need?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="hidden lg:block absolute top-4 left-0 bg-white rounded-2xl p-4 shadow-lg z-10 border border-gray-100">
              <div className="flex items-center">
                <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Africa's #1 Procurement<br/>Platform</p>
                  <p className="text-xs text-gray-500">Highly Efficient and Time-Bound</p>
                </div>
              </div>
            </div>

            {/* Performance Card */}
            <div className="hidden lg:block absolute top-32 left-8 bg-white rounded-2xl p-4 shadow-lg z-10 border border-gray-100">
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-blue-500 mr-2" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Fast Shipping</p>
                  <p className="text-lg font-bold text-blue-600">10x</p>
                  <p className="text-xs text-gray-500">Faster sourcing</p>
                </div>
              </div>
            </div>

            {/* Users Card */}
            <div className="hidden lg:block absolute top-60 left-0 bg-white rounded-2xl p-4 shadow-lg z-10 border border-gray-100">
              <div className="flex items-center">
                <Users className="h-6 w-6 text-green-500 mr-3" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">500K+</p>
                  <p className="text-xs text-gray-500">SATISFIED CUSTOMERS</p>
                </div>
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-5">
              <line x1="20%" y1="15%" x2="60%" y2="25%" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5,5"/>
              <line x1="25%" y1="35%" x2="65%" y2="45%" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5,5"/>
              <line x1="30%" y1="55%" x2="70%" y2="65%" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5,5"/>
            </svg>
          </div>
        </div>
      </div>

    </section>
    </>
  );
}
