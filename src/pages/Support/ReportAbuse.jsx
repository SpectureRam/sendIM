import { AlertTriangle, MessageSquare, User, Flag, Send } from "lucide-react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Home/Navbar";
import { useState } from 'react';

export default function ReportAbuse() {
  const [selectedType, setSelectedType] = useState('');

  const reportTypes = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Inappropriate Content",
      value: "inappropriate"
    },
    {
      icon: <User className="w-5 h-5" />,
      label: "Harassment",
      value: "harassment"
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      label: "Spam",
      value: "spam"
    },
    {
      icon: <Flag className="w-5 h-5" />,
      label: "Other",
      value: "other"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected type:', selectedType);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-6">
            <AlertTriangle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Report Abuse</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us maintain a safe environment by reporting any violations of our community guidelines.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-4 block">
                  What would you like to report?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {reportTypes.map((type, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors duration-200 ${
                        selectedType === type.value 
                          ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="reportType"
                        value={type.value}
                        checked={selectedType === type.value}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="mr-3"
                      />
                      <div className={`p-2 rounded-lg mr-3 ${
                        selectedType === type.value ? 'bg-primary/20' : 'bg-primary/10'
                      }`}>
                        {type.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User and Room ID
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors duration-200"
                  placeholder="Enter User and Room ID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors duration-200 min-h-[120px]"
                  placeholder="Please provide details about the incident..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary hover:bg-primary/90 transition-colors duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Report
              </button>
            </form>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              We take all reports seriously and will investigate them promptly.
              Your report will be kept confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}