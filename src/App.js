import React from "react";
import "./App.css";
import Nasa from "./components/Nasa.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Nasa />

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="rocket">🚀!</span>
      </p>
      <Footer/>
    </div>

  );
}

export default App;
