import React, { useState } from "react";
import  {MD5}  from "crypto-js";
import Base64 from 'crypto-js/enc-base64';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Hasher() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleHash = () => {
    const hashedValue = Base64.stringify(MD5(input));
    navigator.clipboard.writeText(output);
    setOutput(hashedValue);
    toast.success("Hash value copied to clipboard!", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  return (
    <div className="max-w-lg mx-auto h-screen pt-8 bg-white rounded-lg shadow-lg p-6 dark:bg-black dark:text-white">
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
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500 dark:bg-black dark:text-white"
        />
      </div>
      <button
        onClick={handleHash}
        className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
      >
        Hash
      </button>
    </div>
  );
}

export default Hasher;
