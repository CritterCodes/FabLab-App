import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
  // Landing
import LandingPage from './pages/landing/landing.page';
  // Dashboard
    // Settings
  // Auth
    // login
    // post auth
    //

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
