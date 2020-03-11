import React from "react";
import SmurfForm from "./components/SmurfForm";
import "./App.css";
import Smurfs from "./components/Smurfs";

function App() {
  return (
    <div className="App">
      <h1>SMURFS!</h1>
      <SmurfForm />
      <Smurfs />
    </div>
  );
}

export default App;
