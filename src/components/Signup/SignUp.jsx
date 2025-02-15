import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 
import supabase from '../../../supabaseClient';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    verificationCode: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendCode = () => {
    console.log('Sending verification code to:', formData.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
  
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }
  
    if (!isTermsChecked) {
      toast.error("You must agree to the Terms of Use and Privacy Policy.");
      return;
    }
  
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
  
      console.log("Supabase Response:", data, error);
  
      if (error) {
        toast.error(`Error signing up: ${error.message}`);
        return;
      }
  
      if (data.user) {
        const isEmailVerified = data.user?.user_metadata?.email_verified || false;
  
        if (isEmailVerified) {
          toast.error("An account with this email already exists. Please log in.");
          return;
        } else {
          toast.success("Account created! Please check your email to verify.");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      }
    } catch (error) {
      toast.error("Unexpected error occurred during signup.");
      console.error("Signup error:", error);
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

      <div className="w-full max-w-md text-center mb-6">
        <p className="text-black mb-2">
          One SendIM account is all you need to access to all SendIM services.
        </p>
      </div>

      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-700 text-black placeholder-gray-400 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-700 text-black placeholder-gray-400 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.password}
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

          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-700 text-black placeholder-gray-400 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
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

          <div className="flex gap-2">
            <input
              type="text"
              name="verificationCode"
              placeholder="Code"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-100 border border-gray-700 text-black placeholder-gray-400 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.verificationCode}
            />
            <button
              type="button"
              onClick={handleSendCode}
              className="px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 hover:bg-white hover:text-black transition-colors"
            >
              Send code
            </button>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-500 focus:ring-blue-500"
              onChange={() => setIsTermsChecked(!isTermsChecked)}
            />
            <label className="ml-2 text-sm text-black">
              I confirm that I have read, consent and agree to SendIM&apos;s{' '}
              <Link to="/terms-of-service" className="text-blue-500 hover:underline">Terms of Use</Link>
              {' '}and{' '}
              <Link to="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Sign up
          </button>
        </form>

        <div className="mt-4 flex justify-between text-sm">
          <Link to="#" className="text-blue-500 hover:underline cursor-not-allowed">Forgot password?</Link>
          <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        &copy; 2025 SendIM · <Link to="/contact-us" className="hover:underline">Contact us</Link>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignupPage;