import React from "react";
import { useState } from "react";
import { MD5 } from "crypto-js";
import "./App.css";
import Hasher from "./components/Hasher";

function App() {
  return (
    <div className="Content">
      <Hasher />
    </div>
  );
}

export default App;
