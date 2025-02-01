import { Shield, Lock, Eye, UserCheck, Server, RefreshCw } from "lucide-react";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Footer/Footer"
export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information Collection",
      content: "We collect information that you provide directly to us when you register for and use our chat service, including your username, email address, and any optional profile information you choose to share."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your personal information. All data is encrypted in transit and at rest using modern encryption protocols."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Information Usage",
      content: "We never use your information to provide and improve our chat service, personalize your experience, and communicate with you about updates and features."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "User Rights",
      content: "You have the right to access, correct, or delete your personal information. You can also request a copy of your data or opt out of certain data collection practices."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Data Storage",
      content: "Your data is stored securely on servers located in compliance with applicable data protection laws. We retain your information only for as long as necessary to provide our services."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Updates to Policy",
      content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date."
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We value your privacy and are committed to protecting your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>

        <div className="text-center mb-12">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  {section.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions About Our Privacy Policy?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our privacy practices, please don't hesitate to contact us.
          </p>
          <a
            href="mailto:privacy@example.com"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
          >
            Contact Privacy Team
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}