import React from 'react';
import { Users, MessageCircle, Shield, Globe } from 'lucide-react';
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Footer/Footer"
const AboutUs = () => {
  const features = [
    {
      icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
      title: "Real-Time Communication",
      description: "Experience seamless conversations with instant message delivery and real-time updates."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Secure Messaging",
      description: "Your privacy matters. We use end-to-end encryption to keep your conversations secure."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Group Chats",
      description: "Create and join group conversations with friends, family, or colleagues."
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: "Global Connection",
      description: "Connect with people from around the world in our vibrant community."
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b bg-white ">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">ChatRoom</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where meaningful conversations happen. Connect, share, and build relationships 
            in a safe and engaging environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in the power of communication to bring people together. Our mission
              is to provide a platform where every conversation matters, where ideas flow freely,
              and where connections are born. We're committed to creating a space that's both
              innovative and inclusive, where technology meets human connection.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            The Person Behind ChatRoom
          </h2>
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <img
                src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci82NGUxNDc5MDYxZDdjMGZiM2E5NTcxMjhlMDA0OWFmZj9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.eOeMwGQQOWU5h16KYArESMkmfFVxlqYifR_qHTyGCBQ"
                alt={"Sairam N"}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
              Sairam N
              </h3>
              <p className="text-gray-600">Founder & Admin</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;