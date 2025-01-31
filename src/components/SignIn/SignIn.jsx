import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import img_logo from "../../assets/logo.png";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Login successful with Google");
      window.location.href = '/home';
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setError('Please verify your email before logging in.');
        return;
      }

      alert("Login successful");
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-500">
      <div className="mb-4">
        <img
          src={img_logo}
          alt="Postman Logo"
          className="w-90 h-14"
        />
      </div>

      <div className="bg-white p-6 rounded shadow-lg max-w-xs w-full">
        <h1 className="text-center text-xl font-semibold mb-3">Sign in to sendIM</h1>
      
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        
        <form onSubmit={handleLogin}>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
            Email ID
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 px-2 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-2 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-emerald-400 text-white py-1.5 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Sign In
          </button>

          <div className="text-center my-3 text-sm text-gray-500">or</div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center py-1.5 border border-gray-300 rounded mb-2 hover:bg-gray-50"
          >
            <img
              src="https://www.wappalyzer.com/images/icons/Google.svg"
              alt="Google Logo"
              className="w-4 h-4 mr-2"
            />
            Sign In with Google
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="#" className="text-sm text-emerald-400 hover:underline">
            <Link to="/signup">Create free account</Link>
          </a>
        </div>
      </div>

      <footer className="text-center mt-4 text-xs text-gray-800">
        <p>&copy;2024 sendIM, Inc. All rights reserved.</p>
        <p>
          <a href="#" className="hover:underline">Terms of use</a> ·{' '}
          <a href="#" className="hover:underline">Privacy policy</a>
        </p>
      </footer>
    </div>
  );
}

export default LoginPage;