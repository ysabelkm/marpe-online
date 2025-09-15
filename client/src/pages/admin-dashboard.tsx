import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChatBubbleLeftRightIcon, 
  UsersIcon, 
  EnvelopeIcon, 
  PaperAirplaneIcon, 
  PaperClipIcon,
  EyeIcon,
  ArrowUturnLeftIcon,
  ArchiveBoxIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("conversations");
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending admin message:", message);
      setMessage("");
    }
  };

  const handleLogout = () => {
    // Clear any stored auth data
    console.log("Admin logging out...");
    setLocation("/");
  };

  const mockConversations = [
    {
      id: 1,
      clientName: "John Doe",
      clientCompany: "ABC Construction",
      orderId: "ORD-001",
      orderTitle: "Heavy Machinery Sourcing",
      orderStatus: "In Progress",
      lastMessage: "I need heavy machinery for construction. What are your rates?",
      timestamp: "2:35 PM",
      status: "unread",
      messages: [
        {
          id: 1,
          message: "Hello! I need help with sourcing industrial equipment for my construction company.",
          sender: "client",
          timestamp: "2:30 PM"
        },
        {
          id: 2,
          message: "Hello! I'd be happy to help with industrial equipment sourcing. What specific equipment do you need?",
          sender: "admin",
          timestamp: "2:32 PM"
        },
        {
          id: 3,
          message: "I need heavy machinery for construction. What are your rates?",
          sender: "client",
          timestamp: "2:35 PM"
        }
      ]
    },
    {
      id: 2,
      clientName: "Sarah Johnson",
      clientCompany: "Tech Solutions Ltd",
      orderId: "ORD-002",
      orderTitle: "Electronics Components",
      orderStatus: "Sourcing",
      lastMessage: "Thank you for the quick response!",
      timestamp: "1:20 PM",
      status: "read",
      messages: [
        {
          id: 1,
          message: "Hi, I need electronic components for our new product line. Can you help?",
          sender: "client",
          timestamp: "1:15 PM"
        },
        {
          id: 2,
          message: "Absolutely! What specific components do you need?",
          sender: "admin",
          timestamp: "1:18 PM"
        },
        {
          id: 3,
          message: "Thank you for the quick response!",
          sender: "client",
          timestamp: "1:20 PM"
        }
      ]
    },
    {
      id: 3,
      clientName: "Mike Chen",
      clientCompany: "Global Industries",
      orderId: "ORD-003",
      orderTitle: "Custom Manufacturing Parts",
      orderStatus: "New Inquiry",
      lastMessage: "Can you help with custom manufacturing parts?",
      timestamp: "12:45 PM",
      status: "unread",
      messages: [
        {
          id: 1,
          message: "Can you help with custom manufacturing parts?",
          sender: "client",
          timestamp: "12:45 PM"
        }
      ]
    },
    {
      id: 4,
      clientName: "Lisa Brown",
      clientCompany: "Manufacturing Corp",
      orderId: "ORD-004",
      orderTitle: "Industrial Tools",
      orderStatus: "Completed",
      lastMessage: "The tools arrived perfectly! Thank you.",
      timestamp: "11:30 AM",
      status: "read",
      messages: [
        {
          id: 1,
          message: "I need industrial tools for our factory.",
          sender: "client",
          timestamp: "10:00 AM"
        },
        {
          id: 2,
          message: "I can help with that. What specific tools do you need?",
          sender: "admin",
          timestamp: "10:05 AM"
        },
        {
          id: 3,
          message: "The tools arrived perfectly! Thank you.",
          sender: "client",
          timestamp: "11:30 AM"
        }
      ]
    }
  ];

  const mockContactInquiries = [
    {
      id: 1,
      name: "David Wilson",
      email: "david@company.com",
      company: "Wilson Corp",
      subject: "Industrial Equipment Inquiry",
      message: "I'm interested in sourcing heavy machinery for our new factory. Can you provide a quote?",
      timestamp: "Dec 15, 2024",
      status: "new"
    },
    {
      id: 2,
      name: "Lisa Brown",
      email: "lisa@tech.com",
      company: "Tech Innovations",
      subject: "Electronics Sourcing",
      message: "We need to source electronic components for our new product line. What are your capabilities?",
      timestamp: "Dec 14, 2024",
      status: "in_progress"
    },
    {
      id: 3,
      name: "Robert Taylor",
      email: "robert@manufacturing.com",
      company: "Taylor Manufacturing",
      subject: "Custom Manufacturing",
      message: "Looking for a partner to help with custom manufacturing of automotive parts.",
      timestamp: "Dec 13, 2024",
      status: "completed"
    }
  ];

  const selectedConv = mockConversations.find(conv => conv.id === selectedConversation);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Dashboard Header */}
      <section className="pt-8 pb-8 bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
              <p className="text-slate-600 mt-2">Manage client conversations and system operations</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-slate-500">Admin</p>
                <p className="font-semibold text-slate-800">Marpe Admin</p>
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
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md">
                  <UsersIcon className="h-5 w-5 text-white" />
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
            <TabsList className="grid w-full grid-cols-2 lg:w-auto">
              <TabsTrigger value="conversations" className="flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                Chat with Clients
              </TabsTrigger>
              <TabsTrigger value="inquiries" className="flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4" />
                Contact Inquiries
              </TabsTrigger>
            </TabsList>

            {/* Conversations Tab */}
            <TabsContent value="conversations" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Conversation List */}
                <div className="lg:col-span-1">
                  <Card className="p-4 bg-white/70 backdrop-blur-sm border-slate-200 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-slate-800">Order-Based Chats</h3>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="border-slate-300 text-slate-600 hover:bg-slate-50">
                          <FunnelIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-300 text-slate-600 hover:bg-slate-50">
                          <MagnifyingGlassIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {mockConversations.map((conv) => (
                        <div
                          key={conv.id}
                          onClick={() => setSelectedConversation(conv.id)}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedConversation === conv.id
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                              : 'bg-slate-50 hover:bg-slate-100'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{conv.clientName}</h4>
                            {conv.status === 'unread' && (
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-sm opacity-75 mb-2">{conv.clientCompany}</p>
                          
                          {/* Order Information */}
                          <div className="mb-2 p-2 bg-white/20 rounded-md">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-medium">Order: {conv.orderId}</span>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                conv.orderStatus === 'Completed' 
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : conv.orderStatus === 'In Progress'
                                  ? 'bg-blue-100 text-blue-800'
                                  : conv.orderStatus === 'Sourcing'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-slate-100 text-slate-800'
                              }`}>
                                {conv.orderStatus}
                              </span>
                            </div>
                            <p className="text-xs opacity-90">{conv.orderTitle}</p>
                          </div>
                          
                          <p className={`text-xs mt-1 ${
                            selectedConversation === conv.id ? 'text-blue-100' : 'text-slate-500'
                          }`}>
                            {conv.lastMessage}
                          </p>
                          <p className={`text-xs mt-1 ${
                            selectedConversation === conv.id ? 'text-blue-200' : 'text-slate-400'
                          }`}>
                            {conv.timestamp}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Chat Interface */}
                <div className="lg:col-span-2">
                  <Card className="p-6 bg-white/70 backdrop-blur-sm border-slate-200 shadow-lg">
                    {selectedConv ? (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-800">
                              {selectedConv.clientName}
                            </h3>
                            <p className="text-sm text-slate-600">{selectedConv.clientCompany}</p>
                            <div className="mt-2 p-2 bg-slate-100 rounded-md">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-700">
                                  Order: {selectedConv.orderId}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  selectedConv.orderStatus === 'Completed' 
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : selectedConv.orderStatus === 'In Progress'
                                    ? 'bg-blue-100 text-blue-800'
                                    : selectedConv.orderStatus === 'Sourcing'
                                    ? 'bg-amber-100 text-amber-800'
                                    : 'bg-slate-100 text-slate-800'
                                }`}>
                                  {selectedConv.orderStatus}
                                </span>
                              </div>
                              <p className="text-sm text-slate-600 mt-1">{selectedConv.orderTitle}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" className="border-slate-300 text-slate-600 hover:bg-slate-50">
                              <EyeIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="border-slate-300 text-slate-600 hover:bg-slate-50">
                              <ArchiveBoxIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Messages */}
                        <div className="bg-slate-50/80 rounded-lg p-4 h-96 overflow-y-auto space-y-4 mb-4">
                          {selectedConv.messages.map((msg) => (
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
                            placeholder="Type your response..."
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
                      </>
                    ) : (
                      <div className="text-center py-12">
                        <ChatBubbleLeftRightIcon className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-500">Select a conversation to start chatting</p>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Contact Inquiries Tab */}
            <TabsContent value="inquiries" className="space-y-6">
              <div className="grid gap-4">
                {mockContactInquiries.map((inquiry) => (
                  <Card key={inquiry.id} className="p-6 bg-white/70 backdrop-blur-sm border-slate-200 shadow-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-slate-800">{inquiry.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            inquiry.status === 'new' 
                              ? 'bg-blue-100 text-blue-800'
                              : inquiry.status === 'in_progress'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {inquiry.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mb-1">{inquiry.company} • {inquiry.email}</p>
                        <p className="text-sm text-slate-600 mb-2">Subject: {inquiry.subject}</p>
                        <p className="text-slate-700 mb-3">{inquiry.message}</p>
                        <p className="text-xs text-slate-500">Received: {inquiry.timestamp}</p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Button variant="outline" size="sm" className="border-slate-300 text-slate-600 hover:bg-slate-50">
                          <ArrowUturnLeftIcon className="h-4 w-4 mr-1" />
                          Reply
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-300 text-slate-600 hover:bg-slate-50">
                          <EyeIcon className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-300 text-slate-600 hover:bg-slate-50">
                          <ArchiveBoxIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
