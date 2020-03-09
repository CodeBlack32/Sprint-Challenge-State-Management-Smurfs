import React from "react";
import SmurfForm from "./components/SmurfForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <SmurfForm />
    </div>
  );
}

export default App;
