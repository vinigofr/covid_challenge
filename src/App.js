import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Provider from './Context/Provider';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          {/* O modo de componentização mudou
          https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element */}
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
