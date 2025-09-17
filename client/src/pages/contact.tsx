import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative"
        style={{
          backgroundImage: "url('/Contact-us.jpg')",
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
            Get Started Today
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4 sm:px-0" data-testid="text-page-subtitle">
            Ready to simplify your procurement process? Let's discuss your sourcing needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-marpe-dark mb-6 sm:mb-8" data-testid="text-contact-info-title">
                Get in Touch
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-marpe-blue rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-marpe-dark text-sm sm:text-base" data-testid="text-address-label">Address</h4>
                    <p className="text-marpe-slate text-sm sm:text-base" data-testid="text-address">Port Harcourt, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-marpe-teal rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-marpe-dark text-sm sm:text-base" data-testid="text-phone-label">Phone</h4>
                    <p className="text-marpe-slate text-sm sm:text-base" data-testid="text-phone">+234 812 377 1335</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-marpe-orange rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-marpe-dark text-sm sm:text-base" data-testid="text-email-label">Email</h4>
                    <p className="text-marpe-slate break-all text-sm sm:text-base" data-testid="text-email">marpeprocurementservices@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-marpe-dark text-sm sm:text-base" data-testid="text-hours-label">Business Hours</h4>
                    <p className="text-marpe-slate text-sm sm:text-base" data-testid="text-hours">Mon - Fri: 9:00 AM - 6:00 PM WAT</p>
                  </div>
                </div>
              </div>
            </div>

               {/* Contact Form */}
               <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-marpe-blue focus:border-marpe-blue focus:bg-white transition-all duration-200 text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-marpe-blue focus:border-marpe-blue focus:bg-white transition-all duration-200 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-marpe-blue focus:border-marpe-blue focus:bg-white transition-all duration-200"
                  placeholder="+234 123 456 7890"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-marpe-blue focus:border-marpe-blue focus:bg-white transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-marpe-blue focus:border-marpe-blue focus:bg-white resize-none transition-all duration-200"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-marpe-blue to-marpe-teal text-white py-4 text-lg font-semibold hover:from-blue-700 hover:to-teal-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
}
