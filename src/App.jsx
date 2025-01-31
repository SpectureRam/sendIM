import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/Signup/SignUp"
import Home from "./components/Home/Home"
import Sample from './components/Sample/Sample';
import Error from './components/ErrorPage/Error';
import ChatApp from "./components/Application/ChatApp"
import Navbar from './components/Home/Navbar';
function App() {
  return (
    // <>
    // <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/chat" element={<ChatApp/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    // </>
  );
}

export default App;