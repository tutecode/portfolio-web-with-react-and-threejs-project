import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import ExperienceTitle from './components/ExperienceTitle'; // Importa el componente de título
import WorksTitle from './components/WorksTitle'; // Importa el componente de título



const App = () => {
  return (
    <BrowserRouter>
      <div className='relative <-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <ExperienceTitle />
        <Experience />
        <Tech />
        <WorksTitle />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App