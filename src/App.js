import React from 'react';
import Navbar from './components/Navbar';
import Home from './container/Home';
import Projects from './container/Projects';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/projects">
          <Projects/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
