import React from 'react';
import { Router, Link } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const App = () => (
  <div>
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
);

export default App;
