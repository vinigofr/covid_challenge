/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import SearchOptions from './SearchOptions';
import Context from '../Context/Context';

function ResultSection({ data }) {
  const { currentDay } = useContext(Context);
  const itemsToRender = data.filter((_item, index) => index < currentDay);

  return (
    <div className="result-section">
      <SearchOptions maxDays={data.length} />
      <h1>Faça uma consulta acima, os resultados aparecerão abaixo:</h1>
      <div>
        {itemsToRender.map(({ date, total_cases: totalCases, new_cases: newCases }) => (
          <div className="case-card">
            <h2>{`Data: ${date}`}</h2>
            <p>{`Total de casos: ${totalCases}`}</p>
            <p>{`Novos casos: ${newCases}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultSection;
