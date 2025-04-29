import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Userprofile = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
      });
    
      const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
      };
      
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved:', form);
    // Save logic here
  };
  return (
    <div className="min-h-screen flex items-start justify-center pt-10">
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 animate-fadeIn">
      <h1 className="text-3xl font-semibold text-center text-orange-500 mb-6">User Profile</h1>
  
      <div className="space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <FaUser className="absolute top-1/2 left-2 transform -translate-y-1/2 text-orange-400 text-lg" />
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
            <FaEnvelope className="absolute top-1/2 left-2 transform -translate-y-1/2 text-orange-400 text-lg" />
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
            <FaPhone className="absolute top-1/2 left-2 transform -translate-y-1/2 text-orange-400 text-lg" />
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
            <FaMapMarkerAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-orange-400 text-lg" />
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
  
          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  </div>
  

  
)
}

export default Userprofile
