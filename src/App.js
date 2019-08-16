import React from "react";
import 'semantic-ui-css/semantic.min.css';
import "./App.css";
import Nasa from "./components/Nasa.js";
import PageHeader from "./components/header.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Nasa />

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="rocket">🚀</span>!
      </p>
      <Footer/>
    </div>

  );
}

export default App;
