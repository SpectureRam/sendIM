import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import supabase from '../../../supabaseClient';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleLogin = async () => {
    try {
      const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
  
      if (error) {
        toast.error(`Error logging in with Google: ${error.message}`);
      } else {
        toast.success('Logged in with Google!');
        setTimeout(() => {
          navigate("/");
        }, 1500);
        navigate('/');
      }
    } catch (error) {
      toast.error('Error logging in with Google');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      toast.error("Please fill in both email and password fields.");
      return;
    }

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        toast.error(`Error logging in: ${error.message}`);
      } else {
        toast.success('User logged in successfully!');
        setTimeout(() => {
          navigate("/");
        }, 1500);
        console.log('User logged in:', user);
        navigate("/");
      }
    } catch (error) {
      toast.error("Unexpected error occurred during login.");
      console.error('Unexpected error:');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-500 flex items-center">
          <span className="mr-2">SendIM</span>
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </h1>
      </div>

      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="email"
              placeholder="Phone number / email address"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-700 text-black placeholder-gray-400 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={credentials.email}
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-700 text-black placeholder-gray-400 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={credentials.password}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-500 focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-black">
              I confirm that I have read, consent and agree to SendIM&apos;s{' '}
              <a href="/terms-of-service" className="text-blue-500 hover:underline">Terms of Use</a>
              {' '}and{' '}
              <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Log in
          </button>
        </form>

        <div className="mt-4 flex justify-between text-sm">
          <a href="#" className="text-blue-500 hover:underline cursor-not-allowed">Forgot password?</a>
          <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </div>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="px-4 text-sm text-black">OR</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg border border-gray-700 hover:bg-white hover:text-black transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
            <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
          </svg>
          Log in with Google
        </button>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        &copy; 2025 SendIM · <a href="/contact-us" className="hover:underline">Contact us</a>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;