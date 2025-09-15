import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { 
  EnvelopeIcon, 
  LockClosedIcon, 
  UserIcon, 
  PhoneIcon, 
  BuildingOfficeIcon, 
  ArrowLeftIcon 
} from "@heroicons/react/24/outline";

export default function ClientAuth() {
  const [, setLocation] = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login - redirect to client dashboard
      console.log("Login:", { email: formData.email, password: formData.password });
      setLocation("/client-dashboard");
    } else {
      // Handle registration - redirect to client dashboard
      console.log("Register:", formData);
      setLocation("/client-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Back to Home Button */}
      <div className="absolute top-6 right-6 z-10">
        <Link href="/">
          <Button
            variant="outline"
            className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-white hover:text-gray-900 transition-all duration-200"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Auth Form */}
      <section className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 shadow-2xl border-0 bg-white/90 backdrop-blur-md rounded-3xl">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-marpe-blue to-marpe-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserIcon className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-marpe-dark mb-2">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>
              <p className="text-marpe-slate">
                {isLogin ? "Sign in to your client dashboard" : "Chat with Marpe Agent now."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-marpe-dark">
                      Full Name
                    </Label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 h-12 bg-gray-50/80 border-2 border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-marpe-blue/20 focus:border-marpe-blue focus:bg-white transition-all duration-300"
                        placeholder="Your full name"
                        required={!isLogin}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-marpe-dark">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 h-12 bg-gray-50/80 border-2 border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-marpe-blue/20 focus:border-marpe-blue focus:bg-white transition-all duration-300"
                        placeholder="+234 123 456 7890"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                </div>
              )}

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-semibold text-marpe-dark">
                    Company
                  </Label>
                  <div className="relative">
                    <BuildingOfficeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="pl-10 h-12 bg-gray-50/80 border-2 border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-marpe-blue/20 focus:border-marpe-blue focus:bg-white transition-all duration-300"
                      placeholder="Your company name"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-marpe-dark">
                  Email Address
                </Label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 h-12 bg-gray-50/80 border-2 border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-marpe-blue/20 focus:border-marpe-blue focus:bg-white transition-all duration-300"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-semibold text-marpe-dark">
                  Password
                </Label>
                <div className="relative">
                  <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 h-12 bg-gray-50/80 border-2 border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-marpe-blue/20 focus:border-marpe-blue focus:bg-white transition-all duration-300"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-semibold text-marpe-dark">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pl-10 h-12 bg-gray-50/80 border-2 border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-marpe-blue/20 focus:border-marpe-blue focus:bg-white transition-all duration-300"
                      placeholder="Confirm your password"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-marpe-blue to-marpe-teal text-white py-4 text-lg font-bold hover:from-blue-700 hover:to-teal-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-marpe-slate">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-marpe-blue hover:text-blue-700 font-semibold transition-colors"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
