import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import ExperienceTitle from './components/ExperienceTitle'; // Importa el componente de título
import WorksTitle from './components/WorksTitle'; // Importa el componente de título
import WorksAI from './components/WorksAI';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div className='relative <-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
          <Routes>
            <Route path="/about" exact element={<About/>} />
            <Route path="/experience" component={<ExperienceTitle />} />
            <Route path="/works" component={Works} />
            <Route path="/contact" exact element={<Contact/>} />
          </Routes>
        <About/>
        <ExperienceTitle />
        <Experience />
        <Tech />
        <WorksTitle />
        <WorksAI />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  )
}

export default App;
