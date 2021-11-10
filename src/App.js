import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Provider from './Context/Provider';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route exact path="/" component={Main} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
