import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;