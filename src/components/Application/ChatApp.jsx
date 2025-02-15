import {io} from "socket.io-client"
import JoinChatForm from "../JoinChatForm/JoinChatForm";
import { useEffect, useState } from "react";
import ChatWindow from "../ChatWindow/ChatWindow";
const socket = io("https://sendim.onrender.com")

const App = () => {
  const [isInRoom, setisInRoom] = useState(false);
  const [userName, setuserName] = useState("");
  const [roomId, setroomId] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connected has been established.");
    })
    return () => {
      socket.off("connect");
    }
  }, [])

  const handleJoinRoom = (info) => {
    if (info.userName && info.roomId) {
      const authData = localStorage.getItem('sb-ssocitubfwtlezxetccn-auth-token');
      let email = '';
      
      try {
        const parsedData = JSON.parse(authData);
        email = parsedData.user.email;
      } catch (error) {
        console.error("Error parsing auth data:", error);
      }
  
      console.log('Email being sent:', email);
  
      socket.emit("user_join_room", {
     ...info,
        email
      });
      
      setisInRoom(true);
    } else {
      console.log("User name or room ID is missing");
    }
  };  

  return (
    <div>
      {isInRoom? 
      <ChatWindow 
        email={email} 
        userName={userName} 
        roomId={roomId} 
        socket={socket} />
      : 
      <JoinChatForm 
        onJoin={handleJoinRoom} 
        setuserName={setuserName} 
        setroomId={setroomId} 
        userName={userName} 
        roomId={roomId} />}
    </div>
  )
}

export default App;