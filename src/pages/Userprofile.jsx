import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import frontImg from '../assets/frontImg.jpg';
import Button from '../components/Button';

const Userprofile = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved:', form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Visual Side */}
        <div className="relative hidden md:block">
          <img
            src={frontImg}
            alt="User Visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-orange-400 bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-6">
            <h2 className="text-2xl font-bold">Manage Your Profile</h2>
            <p className="mt-2">Keep your information up to date</p>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="w-full p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-center text-orange-500 mb-6">
            User Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-400 text-lg" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full pl-10 border-b-2 border-gray-300 focus:border-orange-400 outline-none h-12 text-sm"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-400 text-lg" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pl-10 border-b-2 border-gray-300 focus:border-orange-400 outline-none h-12 text-sm"
              />
            </div>

            <div className="relative">
              <FaPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-400 text-lg" />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 border-b-2 border-gray-300 focus:border-orange-400 outline-none h-12 text-sm"
              />
            </div>

            <div className="relative">
              <FaMapMarkerAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-400 text-lg" />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full pl-10 border-b-2 border-gray-300 focus:border-orange-400 outline-none h-12 text-sm"
              />
            </div>

            <Button type="submit" className="w-full">
              Save Changes
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
