import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Model from "./components/Model";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
