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
        <table>
          <tr>
            <th>N. do dia</th>
            <th>Data</th>
            <th>Casos</th>
            <th>Novos</th>
          </tr>
          {itemsToRender
            .map(({ date, total_cases: totalCases, new_cases: newCases }, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{date}</td>
                <td>{totalCases}</td>
                <td>{newCases}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

export default ResultSection;
