import React from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import verifyDay from '../Helpers/VerifyDay';

function SearchOptions({ maxDays }) {
  const [day, setDay] = React.useState('');
  const { setCurrentDay } = React.useContext(Context);

  return (
    <div>
      <input
        type="number"
        min="1"
        value={day}
        max={maxDays}
        onChange={(e) => setDay(e.target.value)}
        placeholder={`Max de dias: ${maxDays}`}
      />
      <button
        type="button"
        onClick={() => {
          if (verifyDay(day, maxDays)) {
            setCurrentDay(day);
          } else {
            alert(`Dia invalido! Digite dias entre 1 e ${maxDays}`);
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

SearchOptions.propTypes = {
  maxDays: PropTypes.number.isRequired,
};
