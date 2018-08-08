import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Search from './Search/Search';
import Results from './Results/Results';
import Wallpaper from './Wallpaper/Wallpaper';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/results" component={Results} />
        <Route path="/results/:id" component={Wallpaper} />
      </Switch>
    </main>
  );
}
