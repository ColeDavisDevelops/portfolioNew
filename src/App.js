import React from 'react';
import Main from './container/Main';
import Home from './container/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          exact
          path="/"
          render={routeProps => (
            <Home {...routeProps} />
          )}
        />
        <Route exact path="/main">
          <Main/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
