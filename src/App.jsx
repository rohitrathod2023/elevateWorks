import { useState } from "react";
import "./App.css";
import Navbar from "./common/Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import FooterComponent from "./common/Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <FooterComponent />
    </>
  );
}

export default App;
