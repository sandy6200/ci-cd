import { useState } from "react";
import { sum } from "./sum";

function App() {
  const [formData, setFormData] = useState({
    num1: "",
    num2: "",
  });

  const [result, setResult] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.num1 === "" || formData.num2 === "") {
      return;
    }

    setResult(sum(Number(formData.num1), Number(formData.num2)));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Simple Calculator (addition , subtraction)
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Number
            </label>
            <input
              type="number"
              name="num1"
              value={formData.num1}
              onChange={handleChange}
              placeholder="Enter first number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Second Number
            </label>
            <input
              type="number"
              name="num2"
              value={formData.num2}
              onChange={handleChange}
              placeholder="Enter second number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Calculate Sum
          </button>
        </form>

        {result !== null && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-sm text-gray-600">Result</p>
            <p className="text-3xl font-bold text-blue-600">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
