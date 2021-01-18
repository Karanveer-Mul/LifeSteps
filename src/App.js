import "./App.css";
import Navbar from "./Components/layout/navbar";
import LandingPage from "./Components/layout/landingPage";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
