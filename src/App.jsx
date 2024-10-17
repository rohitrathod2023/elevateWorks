import { useState } from 'react'
import './App.css'
import Navbar from '../public/components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <h1 className="text-3xl font-bold text-brandPrimary">
      Hello world!
    </h1>

    </>
  )
}

export default App
