import React from 'react';

function SearchOptions() {
  const [day, setDay] = React.useState('');
  // set estado global
  return (
    <div>
      <input
        type="number"
        min="1"
        // max={maxDays}
        onChange={() => ''}
        placeholder="Dia(s)"
      />
      <button
        type="button"
        onClick={() => ''}
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchOptions;
