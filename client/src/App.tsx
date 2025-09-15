import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Collections from "@/pages/collections";
import Pricing from "@/pages/pricing";
import Services from "@/pages/services";
import Customers from "@/pages/customers";
import Contact from "@/pages/contact";
import ClientAuth from "@/pages/client-auth";
import AdminAuth from "@/pages/admin-auth";
import ClientDashboard from "@/pages/client-dashboard";
import AdminDashboard from "@/pages/admin-dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/collections" component={Collections} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/services" component={Services} />
      <Route path="/customers" component={Customers} />
      <Route path="/contact" component={Contact} />
      <Route path="/client-auth" component={ClientAuth} />
      <Route path="/admin-auth" component={AdminAuth} />
      <Route path="/client-dashboard" component={ClientDashboard} />
      <Route path="/admin-dashboard" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
