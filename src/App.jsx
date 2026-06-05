import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={</>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
