import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoSend } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';
import logo from "../../assets/2.png"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ChatWindow = ({ userName, roomId, socket }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [isParticipantsListOpen, setIsParticipantsListOpen] = useState(false);
  const hasJoinedMessageBeenAdded = useRef(false);
  const maxMessageLength = 200;
  const messagesEndRef = useRef(null);

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

      // Notify server of the user joining
      socket.emit("join_room", { userName, roomId });
    }
  }, [roomId, userName, socket]);

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
      setParticipants(participantsList);
    };

    socket.on("user_join_room", handleUserJoin);
    socket.on("update_participants", handleParticipantUpdate);

    return () => {
      socket.off("user_join_room", handleUserJoin);
      socket.off("update_participants", handleParticipantUpdate);
    };
  }, [socket]);

  useEffect(() => {
    const handleMessage = ({ userName, text, type }) => {
      const uuid = uuidv4();
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: uuid,
          userName,
          text,
          type,
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

    // if (!currentMessage.trim()) return;

    // const uuid = uuidv4();

    // setMessages((prevMessages) => [
    //   ...prevMessages,
    //   {
    //     id: uuid,
    //     userName,
    //     text: currentMessage,
    //   },
    // ]);

    socket.emit("send_message", {
      userName,
      roomId,
      text: currentMessage,
    });

    setCurrentMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FaUser  className="text-xl" />
              <img src={logo}/>
            </div>
            <div>
              <h1 className="text-xl font-bold">Room: {roomId}</h1>
              <p className="text-sm text-blue-100">Welcome, {userName}!</p>
            </div>
          </div>
          <div className="text-sm bg-blue-500 px-3 py-1 rounded-full">
            {participants.length} participant{participants.length !== 1 && "s"} online
          </div>
        </div>
      </header>

      {/* Participants List */}
      <div className="bg-white p-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex-1 flex flex-wrap items-center">
            <h2 className="text-sm font-medium text-gray-500">Online Participants:</h2>
            {participants.length <= 5? (
              <div className="flex flex-wrap gap-2 ml-2">
                {participants.map((participant, index) => (
                  <div
                    key={index}
                    className="px-3 py-0 bg-gray-200 rounded-full text-xs text-gray-700"
                  >
                    {participant.userName || "Unknown User"}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 ml-2 pt-2">
                {participants.slice(0, 5).map((participant, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-700"
                  >
                    {participant.userName || "Unknown User"}
                  </div>
                ))}
                {isParticipantsListOpen? (
                  <div className="flex flex-wrap gap-2">
                    {participants.slice(5).map((participant, index) => (
                      <div
                        key={index + 5}
                        className="px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-700"
                      >
                        {participant.userName || "Unknown User"}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-700">
                    + {participants.length - 5} more
                  </div>
                )}
              </div>
            )}
          </div>
          {participants.length > 5 && (
            <button
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setIsParticipantsListOpen(!isParticipantsListOpen)}
            >
              {isParticipantsListOpen? (
                <FaArrowUp/>
              ) : (
                <FaArrowDown/>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
 {/* Messages */}
<div className="flex-1 overflow-y-auto p-4 space-y-4 h-screen">
  <div className="max-w-4xl mx-auto flex-1">
    {messages.map((msg) =>
      msg.type === "notif"? (
        <div key={msg.id} className="text-center text-sm text-gray-500 my-2">
          {msg.text}
        </div>
      ) : (
        <div
          key={msg.id}
          className={`flex ${
            msg.userName === userName? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[70%] rounded-lg p-3 mb-1 shadow-md ${
              msg.userName === userName? "bg-blue-600 text-white" : "bg-white text-gray-800"
            }`}
            style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            <div className="flex flex-col">
              <p className="text-xs font-medium mb-1">
                {msg.userName}
              </p>
              <p className="mb-1">{msg.text}</p>
              <div className="text-xs text-right w-full">
                {new Date().toLocaleTimeString("en-US", {
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





      {/* Input */}
      <div className="border-t bg-white p-4">
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
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-sm text-gray-500">{`${currentMessage.length}/${maxMessageLength}`}</div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            <IoSend className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;