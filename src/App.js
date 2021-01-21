import "./App.css";
import Navbar from "./Components/layout/navbar";
import LandingPage from "./Components/layout/landingPage";
import Legislators from "./Components/Legislators/getLegislators";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Legislators />
    </div>
  );
}

export default App;
