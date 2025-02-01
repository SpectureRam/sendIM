import { Cookie, Shield, Bell, Clock } from "lucide-react";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Footer/Footer";

export default function CookiesPolicy() {
  const cookieTypes = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take such as logging in or filling in forms."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Functionality Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us for website personalization."
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website. All information these cookies collect is aggregated and therefore anonymous."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Targeting Cookies",
      description: "These cookies are not set through our site by our advertising partners. So, they will not be used to build a profile of your interests and show you relevant adverts on other sites."
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-6">
              <Cookie className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600">
              We use cookies to enhance your browsing experience and analyze site traffic.
            </p>
          </div>

          <div className="space-y-6">
            {cookieTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-600 mb-6">
              You can change your cookie preferences at any time by clicking the button below.
              Please note that disabling some cookies may impact your experience on our site.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black cursor-not-allowed bg-primary hover:bg-primary/90 transition-colors duration-300">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}