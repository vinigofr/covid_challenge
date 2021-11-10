/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import SearchOptions from './SearchOptions';
import Context from '../Context/Context';

function ResultSection({ data }) {
  const { currentDay } = useContext(Context);

  return (
    <div className="result-section">
      <SearchOptions maxDays={data.length} />
      <h1>Faça uma consulta acima, os resultados aparecerão abaixo:</h1>
      {console.log(data.filter((item, index) => index < currentDay))}
    </div>
  );
}

export default ResultSection;
