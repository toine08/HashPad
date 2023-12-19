import React, { useState, useEffect } from "react";
import View from "./View";
import { MD5 } from "crypto-js";
import Base64 from 'crypto-js/enc-base64';

import { BiShow, BiHide } from "react-icons/bi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Hasher() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  useEffect(() => {
    const storedOutput = JSON.parse(localStorage.getItem("password"));
    if (storedOutput) {
      setOutput(storedOutput);
    }
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleHash = () => {
    const hashedValue = Base64.stringify(MD5(input));
    const hashedValueCorrect = hashedValue.replace(/=/g,'')
    navigator.clipboard.writeText(hashedValueCorrect);

    const existingData = JSON.parse(localStorage.getItem("password")) || [];
  
    const newPassword = {
      value: hashedValueCorrect,
      date: Date.now()
    };
  
    existingData.push(newPassword);
  
    localStorage.setItem("password", JSON.stringify(existingData));
    /*const data = []
    data.push({ value: hashedValueCorrect, date: Date.now() });
    localStorage.setItem('password', JSON.stringify(data));*/
    setOutput(hashedValueCorrect);
    toast.success("Hash value copied to clipboard!", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  return (
    <div className="max-w-lg mx-auto h-screen pt-8 bg-white rounded-lg shadow-lg p-6 dark:bg-black dark:text-white">
      <ToastContainer />
      <div>
        <h1 className="text-2xl font-bold">HashPad</h1>
        <label className="mb-10 pb-10">MD5 hash for create a password</label>
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
      </div>
      <div className="flex place-content-between">
        <button
          onClick={handleHash}
          className="bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-900"
        >
          Hash
        </button>
        <button
          className="text-3xl"
          onClick={toggle}
        >
          {isOpen ? (
            <BiHide />
          ) : (
            <BiShow />
          )}
        </button>
      </div>
      <div className="pt-10">
        {isOpen && <View />}
      </div>
    </div>
  );
}

export default Hasher;
