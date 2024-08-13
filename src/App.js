import React, { useEffect } from 'react';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Helmet>
              <meta name="description" content="Dipanwita Das" />
              <meta name="author" content="Dipanwita Das" />
              <title>Dipanwita Das</title>
            </Helmet>
            <div id="wrapper">
              <Navbar />
              <Home />
              <Education />
              <Skills />
              <Portfolio />
              <Contact />
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;
