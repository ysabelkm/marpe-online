import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChatBubbleLeftRightIcon, 
  TruckIcon, 
  CreditCardIcon, 
  UserIcon, 
  PaperAirplaneIcon, 
  PaperClipIcon,
  CheckCircleIcon,
  ClockIcon,
  TruckIcon as TruckIcon2,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

export default function ClientDashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("chat");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleLogout = () => {
    // Clear any stored auth data
    console.log("Logging out...");
    setLocation("/");
  };

  const mockConversations = [
    {
      id: 1,
      orderId: "ORD-001",
      orderTitle: "Heavy Machinery Sourcing",
      message: "Hello! I need help with sourcing industrial equipment for my construction company.",
      sender: "client",
      timestamp: "2:30 PM",
      status: "read"
    },
    {
      id: 2,
      orderId: "ORD-001",
      orderTitle: "Heavy Machinery Sourcing",
      message: "Hello! I'd be happy to help with industrial equipment sourcing. What specific equipment do you need?",
      sender: "admin",
      timestamp: "2:32 PM",
      status: "read"
    },
    {
      id: 3,
      orderId: "ORD-001",
      orderTitle: "Heavy Machinery Sourcing",
      message: "I need heavy machinery for construction. What are your rates?",
      sender: "client",
      timestamp: "2:35 PM",
      status: "read"
    },
    {
      id: 4,
      orderId: "ORD-001",
      orderTitle: "Heavy Machinery Sourcing",
      message: "Perfect! 10% commission with 50k commitment fee. Timeline: 2-3 weeks.",
      sender: "admin",
      timestamp: "2:37 PM",
      status: "unread"
    }
  ];

  const mockOrders = [
    {
      id: "ORD-001",
      product: "Heavy Machinery",
      status: "In Transit",
      progress: 75,
      estimatedDelivery: "Dec 15, 2024"
    },
    {
      id: "ORD-002", 
      product: "Construction Tools",
      status: "Processing",
      progress: 30,
      estimatedDelivery: "Dec 20, 2024"
    }
  ];

  const mockPayments = [
    {
      id: "PAY-001",
      amount: "₦50,000",
      type: "Commitment Fee",
      status: "Completed",
      date: "Nov 15, 2024"
    },
    {
      id: "PAY-002",
      amount: "₦250,000",
      type: "Product Payment",
      status: "Pending",
      date: "Dec 1, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Dashboard Header */}
      <section className="pt-8 pb-8 bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Client Dashboard</h1>
              <p className="text-slate-600 mt-2">Welcome back! Manage your procurement journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-slate-500">Logged in as</p>
                <p className="font-semibold text-slate-800">John Doe</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="text-slate-600 hover:text-slate-800 border-slate-300 hover:border-slate-400"
                >
                  Logout
                </Button>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <UserIcon className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                Chat with Agent
              </TabsTrigger>
              <TabsTrigger value="tracking" className="flex items-center gap-2">
                <TruckIcon className="h-4 w-4" />
                Track Goods
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <CreditCardIcon className="h-4 w-4" />
                Payments
              </TabsTrigger>
            </TabsList>

            {/* Chat Tab */}
            <TabsContent value="chat" className="space-y-6">
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-slate-200 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-800">Live Chat with Marpe Agent</h3>
                  <div className="flex items-center space-x-2">
                    <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-700 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="ORD-001">ORD-001: Heavy Machinery Sourcing</option>
                      <option value="ORD-002">ORD-002: Electronics Components</option>
                      <option value="ORD-003">ORD-003: Custom Manufacturing Parts</option>
                    </select>
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                      New Chat
                    </Button>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="bg-slate-50/80 rounded-lg p-4 h-96 overflow-y-auto space-y-4 mb-4">
                  {mockConversations.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          msg.sender === 'client'
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                            : 'bg-white text-slate-700 border border-slate-200 shadow-sm'
                        }`}
                      >
                        {msg.sender === 'admin' && (
                          <div className="text-xs text-slate-500 mb-1">
                            Order: {msg.orderId} - {msg.orderTitle}
                          </div>
                        )}
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${
                          msg.sender === 'client' ? 'text-blue-100' : 'text-slate-500'
                        }`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 h-12 bg-white/80 border border-slate-300 text-slate-700 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md"
                  >
                    <PaperAirplaneIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-600 px-4 py-2 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <PaperClipIcon className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </TabsContent>

            {/* Tracking Tab */}
            <TabsContent value="tracking" className="space-y-6">
              <div className="grid gap-6">
                {mockOrders.map((order) => (
                  <Card key={order.id} className="p-6 bg-white/70 backdrop-blur-sm border-slate-200 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">{order.product}</h3>
                        <p className="text-sm text-slate-600">Order ID: {order.id}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {order.status === 'In Transit' && <TruckIcon2 className="h-5 w-5 text-blue-500" />}
                        {order.status === 'Processing' && <ClockIcon className="h-5 w-5 text-yellow-500" />}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === 'In Transit' 
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Progress</span>
                        <span className="font-medium text-slate-700">{order.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${order.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <ClockIcon className="h-4 w-4" />
                        <span>Est. Delivery: {order.estimatedDelivery}</span>
                      </div>
                      <Button variant="outline" size="sm" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                        View Details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Payments Tab */}
            <TabsContent value="payments" className="space-y-6">
              <div className="grid gap-4">
                {mockPayments.map((payment) => (
                  <Card key={payment.id} className="p-6 bg-white/70 backdrop-blur-sm border-slate-200 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          payment.status === 'Completed' 
                            ? 'bg-emerald-100' 
                            : 'bg-amber-100'
                        }`}>
                          {payment.status === 'Completed' ? (
                            <CheckCircleIcon className="h-6 w-6 text-emerald-600" />
                          ) : (
                            <ExclamationTriangleIcon className="h-6 w-6 text-amber-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">{payment.type}</h3>
                          <p className="text-sm text-slate-600">Payment ID: {payment.id}</p>
                          <p className="text-sm text-slate-600">Date: {payment.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-slate-800">{payment.amount}</p>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          payment.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <Card className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl">
                <h3 className="text-lg font-semibold mb-2">Make a Payment</h3>
                <p className="text-blue-100 mb-4">Pay for your orders securely through our platform</p>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 shadow-md">
                  Pay Now
                </Button>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
