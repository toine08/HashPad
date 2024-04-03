import React from "react";
import "./App.css";
import Hasher from "./components/Hasher";

function App() {
  return (
    <div className="h-screen w-screen justify-center items-center bg-gray-50 dark:bg-black ">
      <div className="m-0 p-10">
        <title>HashPad</title>
        <Hasher />
      </div>
    </div>
  );
}

export default App;
