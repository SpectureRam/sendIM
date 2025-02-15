import { HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Footer/Footer";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get started with the chat service?",
      answer: "Getting started is easy! Simply create an account using your email address, verify your account, and you can start chatting immediately. We recommend completing your profile and reviewing our community guidelines for the best experience."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take security seriously. All data is encrypted, and we never share your personal information with third parties. We use industry-standard security measures to protect your data."
    },
    {
      question: "Can I delete my account?",
      answer: "Yes, you can delete your account at any time by contacting us via contact us form. This will permanently remove all your data from our servers."
    },
    {
      question: "What are the chat room rules?",
      answer: "Our chat rooms follow strict guidelines to ensure a safe environment. Key rules include no harassment, no spam, no inappropriate content, and being respectful to all users."
    },
    {
      question: "How do I report inappropriate behavior?",
      answer: "You can got to report abuse page to report inappropriate behavior in any chat room. All reports are handled confidentially."
    },
    {
      question: "Are there any premium features?",
      answer: "Yes, we offer premium features including ad-free experience, custom themes, and priority support without any pricing."
    }
  ];

  return (
    <>
    <Navbar/>
    
    <div className="min-h-screen bg-gradient-to-br bg-white ">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-6">
            <HelpCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our chat service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you with any questions you may have.
          </p>
          <a
            href="mailto:support@example.com"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}