import MultiStepForm from "../components/MultiStepForm";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-black-800">
        Multi-Step-Form
      </h1>
      <MultiStepForm />
    </div>
  );
}
