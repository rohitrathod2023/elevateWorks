import { useState } from "react";
import "./App.css";
import Navbar from "./common/Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Services />
    </>
  );
}

export default App;
