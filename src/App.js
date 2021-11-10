import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Provider from './Context/Provider';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
