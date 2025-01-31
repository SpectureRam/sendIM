import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JoinChatForm = ({ onJoin, userName, setuserName, roomId, setroomId }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User:', userName, 'Room ID:', roomId);

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
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-200 to-blue-100">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Join a Room to Chat</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-4">
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 transition duration-300"
                    required
                />
                <input
                    type="text"
                    placeholder="Enter a room ID"
                    value={roomId}
                    onChange={(e) => setroomId(e.target.value.toUpperCase())}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 transition duration-300"
                    required
                />
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300"
                >
                    Join Room Now
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default JoinChatForm;