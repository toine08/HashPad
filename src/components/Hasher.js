import React, { useState } from "react";
import { MD5 } from "crypto-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Hasher() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleHash = () => {
    const hashedValue = MD5(input).toString();
    setOutput(hashedValue);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success("Hash value copied to clipboard!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">MD5 Hash Generator</h2>
      <div className="mb-4">
        <label htmlFor="input" className="block font-medium mb-2">
          Enter text to hash:
        </label>
        <input
          type="password"
          id="input"
          value={input}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button
        onClick={handleHash}
        className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
      >
        Hash
      </button>
      {output && (
        <div className="mt-4">
          <label htmlFor="output" className="block font-medium mb-2">
            Hashed value:
          </label>
          <div className="flex items-center">
            <input
              type="password"
              id="output"
              value={output}
              readOnly
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleCopy}
              className="ml-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hasher;
