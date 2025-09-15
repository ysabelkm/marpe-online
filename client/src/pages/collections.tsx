import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import industrialMachineryImage from "../../../attached_assets/industrial-machinery.webp";
import kitchenCookwareImage from "../../../attached_assets/cooking materials.jpg";
import agriculturalMachineryImage from "../../../attached_assets/Agricultural-Machinery-supply.jpg";

// Custom styles for enhanced animations
const cardStyles = `
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

export default function Collections() {
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

  return (
    <div className="min-h-screen bg-slate-50">
      <style dangerouslySetInnerHTML={{ __html: cardStyles }} />
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 relative"
        style={{
          backgroundImage: "url('/feature-collections.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-testid="text-page-title">
            Featured Collections
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-page-subtitle">
            Discover our most popular product categories sourced from trusted manufacturers worldwide
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card 
                key={index} 
                className="group collection-card rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border-0"
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
