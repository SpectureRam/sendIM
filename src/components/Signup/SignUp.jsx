import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../../firebase';

import img_logo from "../../assets/logo.png";
function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      
      alert('Signup successful! Please verify your email to complete registration.');
      window.location.href = '/login';
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-500">
      <div className="mb-4">
        <img
          src={img_logo}
          alt="App Logo"
          className="w-90 h-14"
        />
      </div>
      <div className="bg-white p-6 rounded shadow-lg max-w-xs w-full">
        <h1 className="text-center text-xl font-semibold mb-3">Create an Account</h1>
        {error && <div className="text-red-500 text-center mb-3">{error}</div>}
        <form onSubmit={handleSignup}>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
            Email ID
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 px-2 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full mb-4 px-2 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-400 text-white py-1.5 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          <div className="text-center my-3 text-sm text-gray-500">or</div>

          <button
            type="button"
            className="w-full flex items-center justify-center py-1.5 border border-gray-300 rounded mb-2 hover:bg-gray-50"
          >
            <img
              src="https://www.wappalyzer.com/images/icons/Google.svg"
              alt="Google Logo"
              className="w-4 h-4 mr-2"
            />
            Sign Up with Google
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/login" className="text-sm text-emerald-400 hover:underline">
            Already have an account? Log in
          </a>
        </div>
      </div>

      {/* Footer */}
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

export default SignupPage;