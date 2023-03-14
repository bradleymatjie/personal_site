import { useState } from 'react';
import './App.css';

import { Home } from './components/Home/Home';
import { Nav } from './components/Nav/Nav';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  const [menuToggler, setMenuToggler] = useState(false);
  const [currComponent, setCurrComponent] = useState('Welcome');

  return (
    <div className="App">
      <Header
        menuTogglerFunction={setMenuToggler}
        menuTogglerValue={menuToggler}
        currentComponent={currComponent}
      />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      { menuToggler && <Nav setComponentFunction={setCurrComponent} currentComponent={currComponent} /> }
      <Footer 
        menuTogglerFunction={setMenuToggler}
        menuTogglerValue={menuToggler}
      />
    </div>
  );
}

export default App;
