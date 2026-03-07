import './App.css'
import Navbar from './components/navbar'
import Homepage from './pages/home'
import Animepage from './pages/animepage'
import Moviepage from './pages/movie'
import Dramapage from './pages/drama'
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // basename must match your vite.config.js base
    <HashRouter>
      <Navbar />
      
      <Routes>
        {/* 'path' stays simple, basename handles the prefix */}
        <Route path="/" element={<Homepage />} />
        <Route path='/movie' element={<Moviepage />} />
        <Route path="/drama" element={<Dramapage />} />
        <Route path="/anime" element={<Animepage />} />
      </Routes>
    </HashRouter>
  )
}

export default App