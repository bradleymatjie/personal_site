import { useState } from 'react';
import './App.css';

import { Home } from './components/Home/Home';
import { Nav } from './components/Nav/Nav';
import { Header } from './components/Header/Header';

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
      { menuToggler && <Nav setComponentFunction={setCurrComponent} /> }
    </div>
  );
}

export default App;
