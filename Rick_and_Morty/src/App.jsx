import React from 'react'
import Home from "./components/Home"
import CharacterProfile from './components/CharacterProfile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterProfile />} />
      </Routes>
    </Router>
  );
}
        
    


export default App
