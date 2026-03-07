import './App.css'
import Navbar from './components/navbar'
import Homepage from './pages/home'
import Animepage from './pages/animepage'
import Moviepage from './pages/movie'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // basename must match your vite.config.js base
    <BrowserRouter basename="/static_web">
      <Navbar />
      
      <Routes>
        {/* 'path' stays simple, basename handles the prefix */}
        <Route path="/" element={<Homepage />} />
        <Route path='/movie' element={<Moviepage />} />
        <Route path="/drama" element={<div>Drama Page</div>} />
        <Route path="/anime" element={<Animepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App