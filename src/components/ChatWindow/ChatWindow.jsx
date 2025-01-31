import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoSend } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';

const ChatWindow = ({ userName, roomId, socket }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState([]);
  const hasJoinedMessageBeenAdded = useRef(false);
  const maxMessageLength = 200;

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
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <FaUser className="text-xl" />
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium text-gray-500">Online Participants:</h2>
          <div className="flex flex-wrap gap-2 mt-2">
          {participants.map((participant, index) => (
              <div
                key={index}
                className="px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-700"
              >
                {participant.userName || "Unknown User"}
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
    <div className="max-w-4xl mx-auto">
        {messages.map((msg) =>
        msg.type === "notif" ? (
            <div key={msg.id} className="text-center text-sm text-gray-500 my-2">
            {msg.text}
            </div>
        ) : (
            <div
            key={msg.id}
            className={`flex ${
                msg.userName === userName ? "justify-end" : "justify-start"
            }`}
            >
            <div
            className={`max-w-[70%] rounded-lg p-3 mb-1 shadow-md ${
                msg.userName === userName ? "bg-blue-600 text-white" : "bg-white text-gray-800"
            }`}
            style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            >

                <div className="flex items-center justify-between">
                <p className="mb-1 mr-1">{msg.text}</p>
                <p
                    className={`text-xs ${
                    msg.userName === userName ? "text-blue-100" : "text-gray-500"
                    }`}
                >
                    {new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    })}
                </p>
                </div>
            </div>
            </div>
        )
        )}
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