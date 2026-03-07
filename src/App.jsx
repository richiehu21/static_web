import './App.css'
import Navbar from './components/navbar'
import Animepage from './pages/animepage' // Import your page
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      {/* This section tells React what to show below the Navbar */}
      <Routes>
        <Route path="/" element={<div>Movie Home Page</div>} />
        <Route path="/drama" element={<div>Drama Page</div>} />
        <Route path="/anime" element={<Animepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App