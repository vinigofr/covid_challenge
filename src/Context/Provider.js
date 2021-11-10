import React from 'react';
import Context from './Context';

function Provider({ children }) {
  const [tasks, setTasks] = React.useState();

  const context = {
    tasks, setTasks,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
