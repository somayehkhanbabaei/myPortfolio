
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CopyWrite from './components/CopyRight';
import About from './components/About';

import './index.css';

function App() {
  return (
      <div className="App">
        <Header />
        <Hero/>
        <About/>
        <Projects/>
        <Footer/>
        <CopyWrite />
      </div>
  );
}

export default App;
