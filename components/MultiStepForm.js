"use client";

import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = async () => {
    try {
      const res = await fetch("http://localhost:4000/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Error: ${errorData.message}`);
        return;
      }

      const data = await res.json();
      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Failed to submit form:", err);
      alert("Failed to connect to server. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {step === 1 && (
        <Step1
          nextStep={nextStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 2 && (
        <Step2
          prevStep={prevStep}
          submitForm={submitForm}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
