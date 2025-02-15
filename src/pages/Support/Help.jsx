import React, { useState } from 'react';
import { 
  MessageSquare, 
  Settings, 
  Shield, 
  HelpCircle, 
  ChevronDown, 
  Search,
  Users,
  Bell,
  Key
} from 'lucide-react';
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Footer/Footer";

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const helpCategories = [
    {
      id: 'getting-started',
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Getting Started',
      questions: [
        {
          q: "How do I create an account?",
          a: "To create an account, click the 'Sign Up' button on the homepage. Fill in your details including username, email, and password. Verify your email address through the link we send you."
        },
        {
          q: "How do I join a chat room?",
          a: "You can join a chat room by clicking on the 'Join Room' button and entering the room ID, or by accepting an invitation link from another user."
        },
        {
          q: "Can I create my own chat room?",
          a: "Yes! Click the 'Create Room' button on the dashboard. You can set a room name, privacy settings, and invite participants."
        }
      ]
    },
    {
      id: 'account-settings',
      icon: <Settings className="w-6 h-6" />,
      title: 'Account Settings',
      questions: [
        {
          q: "How do I change my password?",
          a: "Go to Settings > Security > Change Password. Enter your current password and your new password twice to confirm."
        },
        {
          q: "How do I update my profile picture?",
          a: "Visit your profile page and click on the profile picture. Select 'Upload New Picture' and choose an image from your device."
        },
        {
          q: "Can I change my username?",
          a: "Yes, you can change your username once every 30 days. Go to Settings > Profile > Edit Username."
        }
      ]
    },
    {
      id: 'privacy-security',
      icon: <Shield className="w-6 h-6" />,
      title: 'Privacy & Security',
      questions: [
        {
          q: "How secure are my messages?",
          a: "All messages are encrypted end-to-end. Only participants in the chat room can read the messages."
        },
        {
          q: "Who can see my online status?",
          a: "You can control who sees your online status in Settings > Privacy. Choose between Everyone, Friends Only, or Nobody."
        },
        {
          q: "How do I block someone?",
          a: "Click on the user's profile, select 'More Options', and choose 'Block User'. They won't be able to message you or see your profile."
        }
      ]
    },
    {
      id: 'notifications',
      icon: <Bell className="w-6 h-6" />,
      title: 'Notifications',
      questions: [
        {
          q: "How do I manage notification settings?",
          a: "Go to Settings > Notifications to customize your notification preferences for messages, mentions, and room invites."
        },
        {
          q: "Can I mute specific chat rooms?",
          a: "Yes, open the chat room settings and select 'Mute Notifications'. You can choose to mute for 1 hour, 8 hours, 24 hours, or indefinitely."
        }
      ]
    }
  ];

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-20 py-8">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-6">
              <HelpCircle className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help?</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Find answers to common questions and learn how to make the most of your chat experience.
            </p>
            
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Key className="w-6 h-6" />,
                title: "Reset Password",
                description: "Quickly reset your account password"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Join a Room",
                description: "Learn how to join chat rooms"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Privacy Guide",
                description: "Understand your privacy settings"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {category.icon}
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">{category.title}</h2>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      expandedCategory === category.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedCategory === category.id && (
                  <div className="px-6 py-2 pb-4">
                    <div className="space-y-4">
                      {category.questions.map((item, index) => (
                        <div key={index} className="pt-4 border-t first:border-t-0 first:pt-0">
                          <h3 className="font-medium text-gray-900 mb-2">{item.q}</h3>
                          <p className="text-gray-600">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still need help?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpPage;