"use client";

import { useState } from "react";

const Step1 = ({ nextStep, formData, setFormData }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.name || !formData.age || !formData.gender) {
      setError("All fields are required");
      return;
    }
    nextStep();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Step 1: Personal Details
      </h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded-md mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded-md mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded-md mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleNext}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
