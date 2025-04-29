import React from "react";

const InputWithIcon = ({ icon, type = "text", placeholder, value, onChange }) => (
  <div className="relative">
    <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-400">
      {icon}
    </span>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-orange-400"
    />
  </div>
);

export default InputWithIcon;
