import {io} from "socket.io-client"
import JoinChatForm from "../JoinChatForm/JoinChatForm";
import { useEffect, useState } from "react";
import ChatWindow from "../ChatWindow/ChatWindow";
const socket = io("https://puffy-veiled-racer.glitch.me")

const App = () => {
  const [isInRoom,setisInRoom] = useState(false);
  const [userName,setuserName] = useState("");
  const [roomId,setroomId] = useState("");

  useEffect(()=>{
    socket.on("connect",()=>{
      console.log("Socket connected has been established.");
    })
    return()=>{
      socket.off("connect");
    }
  },[])

  const handleJoinRoom = (info) => {
    if (info.userName && info.roomId) {
      socket.emit("user_join_room", info);
      setisInRoom(true);
    } else {
      console.log("User name or room ID is missing");
    }
  };

  return (
    <div>
      {isInRoom ? 
      <ChatWindow 
        userName={userName} 
        roomId={roomId} 
        socket={socket} /> : 
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