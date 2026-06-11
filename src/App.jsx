import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer';
import EarlyLife from './Components/EarlyLife/EarlyLife';
import Career from './Components/Career/Career';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EarlyLife" element={<EarlyLife/>} />
        <Route path='/Career' element={<Career/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
