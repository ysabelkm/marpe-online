import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "5%",
      description: "Commission on order value",
      features: [
        "Basic sourcing service",
        "Quality inspection",
        "Standard shipping",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "8%",
      description: "Commission on order value",
      features: [
        "Advanced sourcing service",
        "Comprehensive quality control",
        "Express shipping options",
        "Priority phone support",
        "Dedicated account manager"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions",
      features: [
        "White-label sourcing",
        "Custom quality standards",
        "Bulk shipping discounts",
        "24/7 dedicated support",
        "API integration"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-marpe-blue to-marpe-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-testid="text-page-title">
            Transparent Pricing
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-page-subtitle">
            Choose the service level that fits your business needs. No hidden fees, just results.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 hover-scale relative ${
                  plan.popular 
                    ? "bg-gradient-to-br from-marpe-blue to-marpe-teal text-white" 
                    : "bg-slate-50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-marpe-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4" data-testid={`text-plan-name-${index}`}>
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold mb-2" data-testid={`text-plan-price-${index}`}>
                      {plan.price}
                    </div>
                    <p className={plan.popular ? "opacity-90" : "text-marpe-slate"} data-testid={`text-plan-description-${index}`}>
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className={`h-5 w-5 mr-3 ${plan.popular ? "text-white" : "text-green-500"}`} />
                        <span data-testid={`text-plan-feature-${index}-${featureIndex}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-3 font-semibold ${
                      plan.popular 
                        ? "bg-white text-marpe-blue hover:bg-gray-100" 
                        : "bg-marpe-blue text-white hover:bg-blue-700"
                    }`}
                    data-testid={`button-plan-${index}`}
                  >
                    {plan.buttonText}
                  </Button>
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
