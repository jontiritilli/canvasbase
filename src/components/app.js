import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Results from './Results';
import Wallpaper from './Wallpaper';
import userAccount from './userAccount';

import '../assets/css/app.css';

const App = () => {
  return (
    <div className='app'>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route path='/results' component={Results} />
      <Route path='/results/:id' component={Wallpaper} />
      <Route path='/account/:id' component={userAccount} />
    </div>
  )
};

export default App;
