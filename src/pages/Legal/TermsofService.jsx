import { Scale, FileText, Shield, Users, AlertCircle, CheckCircle } from "lucide-react";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Footer/Footer";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "2. User Conduct",
      content: "You agree to use our chat service responsibly and in compliance with all applicable laws and regulations. Harassment, spam, and inappropriate content are strictly prohibited."
    },
    {
      title: "3. Account Security",
      content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
    },
    {
      title: "4. Content Guidelines",
      content: "Users must not post content that is illegal, offensive, or violates the rights of others. We reserve the right to remove any content that violates these terms."
    }
  ];

  const highlights = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "We prioritize the security and privacy of our users"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Guidelines",
      description: "Clear rules for a safe and respectful environment"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Zero Tolerance",
      description: "Strict policy against harassment and abuse"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Fair Usage",
      description: "Reasonable limits to ensure quality service"
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b bg-white ml-4 mr-4">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-6">
            <Scale className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our chat service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
          {sections.map((section, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
              {index < sections.length - 1 && <hr className="my-8 border-gray-200" />}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}