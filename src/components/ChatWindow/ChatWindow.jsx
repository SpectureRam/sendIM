import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoSend } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';
import logo from "../../assets/2.png";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { DoorOpen, LogOutIcon} from "lucide-react";
import supabase from "../../../supabaseClient"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ChatWindow = ({ userName, roomId, socket, email }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [isParticipantsListOpen, setIsParticipantsListOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const hasJoinedMessageBeenAdded = useRef(false);
  const maxMessageLength = 200;
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
    window.matchMedia('(prefers-color-scheme: dark)')
     .addEventListener('change', e => setIsDarkMode(e.matches));
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!hasJoinedMessageBeenAdded.current) {
      const uuid = uuidv4();
      setMessages((prev) => [
       ...prev,
        {
          id: uuid,
          type: "notif",
          text: `You have joined the room ${roomId}`,
        },
      ]);
      hasJoinedMessageBeenAdded.current = true;
      socket.emit("user_join_room", { userName, roomId, email });
    }
  }, [roomId, userName, socket, email]);

  useEffect(() => {
    const handleUserJoin = (message, participantsList) => {
      const uuid = uuidv4();
      setMessages((prev) => [
       ...prev,
        {
          id: uuid,
          type: "notif",
          text: message,
        },
      ]);
      setParticipants(participantsList);
    };

    const handleParticipantUpdate = (participantsList) => {
      const uniqueParticipants = participantsList.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.userName === value.userName)
      );
      setParticipants(uniqueParticipants);
    };

    socket.on("user_join_room", handleUserJoin);
    socket.on("update_participants", handleParticipantUpdate);

    return () => {
      socket.off("user_join_room", handleUserJoin);
      socket.off("update_participants", handleParticipantUpdate);
    };
  }, [socket]);

  useEffect(() => {
    const handleMessage = ({ userName, text, type, timestamp }) => {
      const uuid = uuidv4();
      
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: uuid,
          userName,
          text,
          type,
          timestamp: timestamp || new Date().toISOString(),
        },
      ]);
    };    

    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage);
    };
  }, [socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (currentMessage.trim().length === 0) {
      toast.error("Message cannot be empty.");
      return;
    }

    if (currentMessage.length > maxMessageLength) {
      toast.error("Message cannot exceed 200 characters.");
      return;
    }

    socket.emit("send_message", {
      userName,
      roomId,
      text: currentMessage,
    });

    setCurrentMessage("");
  };

  const handleLogout = async () => {
    confirmAlert({
      title: 'Confirm Logout',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            toast.success("Logged out successfully!");
            window.location.href = '/chat';
          }
        },
        {
          label: 'No',
          onClick: () => {
            toast.info("Logout cancelled");
          }
        }
      ]
    });
  };

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-blue-600'} text-white p-4 shadow-lg`}>
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-full flex items-center justify-center`}>
              <FaUser className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </div>
            <div>
              <h1 className="text-xl font-bold">Room: {roomId}</h1>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-100'}`}>Welcome, {userName}!</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg focus:outline-none transition-colors"
          >
            {isDarkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>

          <button
            onClick={handleLogout}
            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-800 hover:bg-blue-400'} transition-colors`}
          >
            <LogOutIcon className="text-white" />
          </button>

          <div className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-md ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
            {participants.length} Online
          </div>
        </div>
        </div>
      </header>

      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 shadow-sm`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex-1 flex flex-wrap items-center gap-2">
            <h2 className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Online:</h2>
            <div className="flex flex-wrap gap-2">
              {participants.slice(0, isParticipantsListOpen ? undefined : 5).map((participant, index) => (
                <div
                  key={index}
                  className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} rounded-full text-xs`}
                >
                  {participant.userName || "Unknown User"}
                </div>
              ))}
              {!isParticipantsListOpen && participants.length > 5 && (
                <div className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-700'} rounded-full text-xs`}>
                  +{participants.length - 5} more
                </div>
              )}
            </div>
          </div>
          {participants.length > 5 && (
            <button
              onClick={() => setIsParticipantsListOpen(!isParticipantsListOpen)}
              className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
            >
              {isParticipantsListOpen ? <FaArrowUp /> : <FaArrowDown />}
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        <div className="max-w-4xl mx-auto">
          {messages.map((msg) =>
            msg.type === "notif" ? (
              <div key={msg.id} className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} my-2`}>
                {msg.text}
              </div>
            ) : (
              <div
                key={msg.id}
                className={`flex ${msg.userName === userName ? "justify-end" : "justify-start"} mb-4`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 shadow-md ${
                    msg.userName === userName 
                      ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                      : isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'
                  }`}
                  style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
                >
                  <div className="flex flex-col">
                    <p className="text-xs font-medium mb-1">{msg.userName}</p>
                    <p className="mb-1">{msg.text}</p>
                    <div className="text-xs text-right w-full opacity-75">
                      {new Date(msg.timestamp).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className={`border-t ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 mt-auto`}>
        <form
          onSubmit={handleSendMessage}
          className="max-w-4xl mx-auto flex items-center space-x-4"
        >
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Type your message..."
            maxLength={maxMessageLength}
            className={`flex-1 p-3 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500' 
                : 'bg-white border-gray-300 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 transition-colors`}
          />
          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {`${currentMessage.length}/${maxMessageLength}`}
          </div>
          <button
            type="submit"
            className={`${
              isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
            } text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
          >
            <IoSend className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;