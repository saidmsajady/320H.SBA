import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Navbar from './components/NavBar';
import './App.css'

const App = () => {
  // const [count, setCount] = useState(0)

  // useEffect(() => {

  // }, []);

  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info/:country' element={<Info />} />
        </Routes>
      </Navbar>
    </>
  )
}

export default App
