import React from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import verifyDay from '../Helpers/VerifyDay';

function SearchOptions() {
  const [day, setDay] = React.useState('');
  const { setCurrentDay } = React.useContext(Context);

  return (
    <div>
      <input
        data-testid="day-input"
        className="input-number"
        type="number"
        min="1"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <button
        type="button"
        className="search-button"
        onClick={() => {
          if (verifyDay(day)) {
            setCurrentDay(day);
          } else {
            alert("Dia inválido! Digite um dia maior que 1");
          }
          setDay('');
        }}
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchOptions;
