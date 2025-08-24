import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Collections() {
  const collections = [
    {
      title: "Electronics & Technology",
      description: "Smartphones, laptops, IoT devices, and cutting-edge technology solutions",
      productCount: "500+ Products",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Industrial Equipment",
      description: "Heavy machinery, production equipment, and industrial automation systems",
      productCount: "300+ Products",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Home & Lifestyle",
      description: "Furniture, appliances, decor, and everyday household essentials",
      productCount: "800+ Products",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Fashion & Apparel",
      description: "Clothing, accessories, footwear, and textile manufacturing",
      productCount: "1200+ Products",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Medical & Health",
      description: "Medical devices, healthcare equipment, and pharmaceutical supplies",
      productCount: "400+ Products",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Automotive",
      description: "Auto parts, accessories, tools, and automotive manufacturing equipment",
      productCount: "600+ Products",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-marpe-blue to-marpe-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <Card key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-scale">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-48 object-cover"
                  data-testid={`img-collection-${index}`}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-collection-title-${index}`}>
                    {collection.title}
                  </h3>
                  <p className="text-marpe-slate mb-4" data-testid={`text-collection-description-${index}`}>
                    {collection.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-marpe-blue" data-testid={`text-collection-count-${index}`}>
                      {collection.productCount}
                    </span>
                    <Button 
                      variant="ghost" 
                      className="text-marpe-orange font-semibold hover:text-orange-600 p-0"
                      data-testid={`button-explore-${index}`}
                    >
                      Explore <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
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
