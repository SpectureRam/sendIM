import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import supabase from "../../../supabaseClient"

const JoinChatForm = ({ onJoin, userName, setuserName, roomId, setroomId }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error || !user) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    };

    fetchUser();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast.error("You must be logged in to join the chat room. Please navigate to Login Page", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const userNameRegex = /^[a-zA-Z0-9_]+$/;
    if (!userNameRegex.test(userName)) {
      toast.error("User name can only contain alphanumeric characters and underscores.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    if (userName.length < 3 || userName.length > 20) {
      toast.error("User name must be between 3 and 20 characters long.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const roomIdRegex = /^[A-Z0-9]+$/;
    if (!roomIdRegex.test(roomId)) {
      toast.error("Room ID can only contain capital letters (A-Z) and numbers.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (roomId.length < 3 || roomId.length > 15) {
      toast.error("Room ID must be between 3 and 15 characters long.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (userName && roomId) {
      onJoin({
        userName,
        roomId,
      });
      toast.success("You have successfully joined the room!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.error("Please provide both your name and a room ID.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode? 'bg-gradient-to-br from-slate-900 to-blue-700' : 'bg-gradient-to-br from-gray-100 to-gray-200'} flex items-center justify-center p-6`}>
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full translate-x-16 translate-y-16" />

            <div className="relative">
            <h1 className={`${isDarkMode? 'text-4xl font-bold text-white text-center mb-2' : 'text-4xl font-bold text-black text-center mb-2'}`}>
                Chat Room
            </h1>
            <p className={`${isDarkMode? 'text-blue-200' : 'text-gray-800'} text-center mb-8`}>
                Connect with others instantly
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                    className={`${isDarkMode? 'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200' : 'w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-black placeholder-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm transition`}
                    required
                />
                </div>

                <div>
                <input
                    type="text"
                    placeholder="Room ID"
                    value={roomId}
                    onChange={(e) => setroomId(e.target.value.toUpperCase())}
                    className={`${isDarkMode? 'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200' : 'w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-black placeholder-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm transition`}
                    required
                />
                </div>

                <button
                type="submit"
                className={`${isDarkMode? 'w-full py-3 bg-blue-500 hover:bg-blue-600 text-white' : 'w-full py-3 bg-gray-200 hover:bg-gray-300 text-black'} rounded-xl font-medium transition duration-200 transform hover:scale-[1.02]`}
                >
                Join Room
                </button>
            </form>
            </div>
            <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 p-2 bg-white/20 rounded-full text-white shadow-lg"
            >
            {isDarkMode? (
                <FaSun />
            ) : (
                <FaMoon />
            )}
            </button>
        </div>
        <ToastContainer />
        </div>

  );
};

export default JoinChatForm;
