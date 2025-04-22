import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
        <BrowserRouter>
          <LanguageProvider>
            <div className='relative z-0 bg-primary'>
              <div className='bg-orange-gradient bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <About />
              <Works />
              <Tech />
              <Experience />
              <div className='relative z-0'>
                {/* <Contact /> */}
                {/* <StarsCanvas /> */}
              </div>
            </div>
        </LanguageProvider>
      </BrowserRouter>   
  );
}

export default App;
