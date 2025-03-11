"use client";

import { useState } from "react";

const Step2 = ({ prevStep, submitForm, formData, setFormData }) => {
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!formData.email || !formData.phone || !formData.address) {
      setError("All fields are required");
      return;
    }
    submitForm();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Step 2: Contact Details
      </h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded-md mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded-md mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded-md mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex gap-4">
        <button
          onClick={prevStep}
          className="w-full bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500 transition"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step2;
