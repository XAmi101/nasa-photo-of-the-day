import React from "react";
import "./App.css";
import Nasa from "./components/Nasa.js";

function App() {
  return (
    <div className="App">
      <Nasa />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="rocket">🚀!</span>
      </p>
    </div>
  );
}

export default App;
