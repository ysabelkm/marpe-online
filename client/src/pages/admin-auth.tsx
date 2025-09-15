import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { 
  EnvelopeIcon, 
  LockClosedIcon, 
  ShieldCheckIcon, 
  ArrowLeftIcon 
} from "@heroicons/react/24/outline";

export default function AdminAuth() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Admin Login:", formData);
    // Redirect to admin dashboard
    setLocation("/admin-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
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
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-marpe-dark mb-2">
                Admin Sign In
              </h2>
              <p className="text-marpe-slate">
                Enter your admin credentials to access the dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-marpe-dark">
                  Admin Email
                </Label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 h-12 bg-gray-50/80 border-2 border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition-all duration-300"
                    placeholder="admin@marpe.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-semibold text-marpe-dark">
                  Admin Password
                </Label>
                <div className="relative">
                  <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 h-12 bg-gray-50/80 border-2 border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition-all duration-300"
                    placeholder="Enter admin password"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 text-lg font-bold hover:from-red-700 hover:to-red-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Sign In as Admin
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-marpe-slate">
                Need client access?
                <Link href="/client-auth" className="ml-2 text-marpe-blue hover:text-blue-700 font-semibold transition-colors">
                  Client Portal
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
