import { useState } from "react";
import "./App.css";
import Navbar from "./common/Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./common/Components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About/>
    </>
  );
}

export default App;
