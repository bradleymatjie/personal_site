import { useState } from 'react';
import './App.css';

import { Home } from './components/Home/Home';
import { Nav } from './components/Nav/Nav';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Portfolio } from './components/Portfolio/Portfolio';

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
      { menuToggler && <Nav setComponentFunction={setCurrComponent} /> }
    </div>
  );
}

export default App;
