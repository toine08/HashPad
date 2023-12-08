import React from "react";
import "./App.css";
import Hasher from "./components/Hasher";

function App() {
  return (
    <div className="h-screen w-screen justify-center items-center ">
      <div className="dark:bg-black m-0 p-0 h-100 w-100"> 
        <title>Hash password</title> 
        <Hasher />
      </div>
    </div>
  );
}

export default App;