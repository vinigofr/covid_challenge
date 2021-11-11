import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = React.useState([]);
  const [currentDay, setCurrentDay] = React.useState(null);
  const context = {
    data, setData, currentDay, setCurrentDay,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
