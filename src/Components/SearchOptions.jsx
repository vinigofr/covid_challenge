import React from 'react';
import Context from '../Context/Context';

// eslint-disable-next-line react/prop-types
function SearchOptions({ maxDays }) {
  const [day, setDay] = React.useState('');
  const { setCurrentDay } = React.useContext(Context);

  return (
    <div>
      <input
        type="number"
        min="1"
        max={maxDays}
        onChange={(e) => setDay(e.target.value)}
        placeholder="Dia(s)"
      />
      <button
        type="button"
        onClick={() => setCurrentDay(Number(day))}
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchOptions;
