import React from 'react';
import Navbar from './componentes/navbar';

function App() { 
  
  return (
    <div className="App">
      <Navbar>
         <span className="navbar-brand mb-0 h1">Texto</span>
         <h1>ola</h1>
      </Navbar>
      <Navbar>
        <span className="navbar-brand mb-0 h1">prueba</span>
        <h2>ola</h2>
      </Navbar>
    </div>
  );
}

export default App;
