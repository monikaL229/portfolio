import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../components/Button';

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
<>
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
  
          <Button  type="submit">
            Save Changes
          </Button>
        </form>
      </div>
     </>
     )
}

export default Userprofile
