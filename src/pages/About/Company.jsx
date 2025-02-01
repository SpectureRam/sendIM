import React from 'react';
import { 
  Users, 
  Target, 
  Heart, 
  Rocket,
  Globe,
  Zap,
  MessageSquare,
  Award,
  Shield
} from 'lucide-react';
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Footer/Footer";

const CompanyPage = () => {
  const stats = [
    { number: "1M+", label: "Active Users" },
    { number: "150+", label: "Countries" },
    { number: "10M+", label: "Messages Daily" },
    { number: "99.9%", label: "Uptime" }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "User-Focused",
      description: "Every decision we make starts with our users' needs and experience in mind."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Privacy First",
      description: "We believe in uncompromising security and privacy protection for all users."
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Global Community",
      description: "Building bridges across cultures and fostering worldwide connections."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Innovation",
      description: "Continuously pushing boundaries to create better communication tools."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      image: "/api/placeholder/120/120",
      bio: "Former Product Lead at Major Tech with 15+ years experience in communication platforms."
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: "/api/placeholder/120/120",
      bio: "Veteran software architect with expertise in scalable real-time systems."
    },
    {
      name: "Emma Thompson",
      role: "Head of Design",
      image: "/api/placeholder/120/120",
      bio: "Award-winning UX designer passionate about creating inclusive digital spaces."
    },
    {
      name: "David Kim",
      role: "Head of Operations",
      image: "/api/placeholder/120/120",
      bio: "Operations expert specializing in scaling global tech platforms."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Building the Future of Communication
              </h1>
              <p className="text-xl text-gray-600">
                We're on a mission to create meaningful connections and empower communities 
                through seamless, secure, and engaging conversations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white py-4">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600">
                Founded in 2023, we set out to revolutionize how people connect online. 
                What started as a simple idea has grown into a global platform helping 
                millions of people build meaningful relationships and communities every day.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                { year: "2023", event: "Company founded with a vision to transform online communication" },
                { year: "2023", event: "Launch of beta version with core messaging features" },
                { year: "2024", event: "Reached 1 million active users milestone" },
                { year: "2024", event: "Expanded to 150+ countries worldwide" }
              ].map((item, index) => (
                <div key={index} className="flex items-center mb-6">
                  <div className="w-24 font-bold text-primary">{item.year}</div>
                  <div className="w-4 h-4 rounded-full bg-primary mx-4"></div>
                  <div className="flex-1 p-4 bg-gray-50 rounded-lg">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-20 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us in Shaping the Future</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We're always looking for passionate individuals who share our vision 
              and want to make a difference in how the world communicates.
            </p>
            <button className="px-8 py-3 bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors duration-300">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyPage;