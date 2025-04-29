import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import InputWithIcon from "../components/ui/InputWithIcon";
import frontImg from "../assets/frontImg.jpg";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-gray-100 p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden max-h-screen">
        {/* Left Side: Image and Text */}
        <div className="relative hidden md:block">
          <img
            src={frontImg}
            alt="Auth Visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-orange-400 bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-6">
            <h2 className="text-2xl font-bold">
              {isSignup ? "Start your journey" : "Innovate. Build. Scale."}
            </h2>
            <p className="mt-2">
              {isSignup
                ? "Join NinjaTech today"
                : "Empowering businesses worldwide"}
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-orange-500 mb-6 text-center">
            {isSignup ? "Create Account" : "Login"}
          </h2>

         
          <form className="space-y-5">
            {isSignup && <InputWithIcon icon={<FaUser />} placeholder="Your Name" />}
            <InputWithIcon icon={<FaEnvelope />} placeholder="Email" type="email" />
            <InputWithIcon icon={<FaLock />} placeholder="Password" type="password" />

            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded-md hover:bg-orange-500 transition"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-orange-400 font-medium hover:underline"
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
