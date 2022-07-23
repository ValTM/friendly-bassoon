import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Loopstudio from './pages/Loopstudio/Loopstudio';
import Equalizer from './pages/Equalizer/Equalizer';
import TipsCalculator from './pages/TipsCalculator/TipsCalculator';
import GithubApp from './pages/GithubApp/GithubApp';
import Ecommerce from './pages/Ecommerce/Ecommerce';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loopstudio" element={<Loopstudio />} />
        <Route path="/equalizer" element={<Equalizer />} />
        <Route path="/tips-calculator" element={<TipsCalculator />} />
        <Route path="/github-user-search-app" element={<GithubApp />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
      </Routes>
    </Router>
  );
}

export default App;
