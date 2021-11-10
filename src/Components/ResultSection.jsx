/* eslint-disable react/prop-types */
import React from 'react';
import SearchOptions from './SearchOptions';

function ResultSection({ data }) {
  return (
    <div className="result-section">
      <SearchOptions />
      <h1>Faça uma consulta acima, os resultados aparecerão abaixo:</h1>
      {console.log(data.filter((item, index) => index < 1))}
    </div>
  );
}

export default ResultSection;
