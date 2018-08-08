import React from 'react';
import '../assets/css/app.css';
import Logo from '../assets/images/logo.svg';

const App = () => (
  <div>
    <div className="app">
      <img src={Logo} alt="react logo" className="logo rotate" />
      <h1>
        {'Welcome to React'}
      </h1>
    </div>
  </div>
);

export default App;
