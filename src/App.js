import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Provider from './Context/Provider';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
