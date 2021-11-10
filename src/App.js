import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Provider from './Context/Provider';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
