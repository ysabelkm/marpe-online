import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Customers() {
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
    },
    {
      name: "Fatima Al-Rashid",
      position: "Procurement Manager, BuildCorp",
      content: "Their quality control process caught issues before they became problems. That attention to detail is why we keep coming back.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "David Kamau",
      position: "Supply Chain Lead, EastAfrica Retail",
      content: "From small orders to bulk procurement, Marpe handles everything with the same level of professionalism and efficiency.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Amara Diallo",
      position: "Managing Director, Sahel Industries",
      content: "The peace of mind knowing experts are handling our international sourcing allows us to focus on what we do best - growing our business.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-marpe-blue to-marpe-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-testid="text-page-title">
            What Our Customers Say
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-page-subtitle">
            Don't just take our word for it. Here's what businesses across Africa are saying about Marpe.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white rounded-2xl p-8 hover-scale">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
