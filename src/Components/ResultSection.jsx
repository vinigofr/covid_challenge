import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SearchOptions from './SearchOptions';
import Context from '../Context/Context';
import newPredictions from '../Helpers/caseAverage';

function ResultSection({ data }) {
  const { currentDay } = useContext(Context);
  const [itemsToRender, setItemsToRender] = React.useState([]);

  React.useEffect(() => {
    setItemsToRender(newPredictions(data, currentDay));
  }, [currentDay]);

  return (
    <div className="result-section">
      <SearchOptions />
      <h1>Faça uma consulta acima, os resultados aparecerão abaixo:</h1>
      <table>
        <thead>
          <tr>
            <th>N. do dia</th>
            <th>Data</th>
            <th>Casos totais</th>
            <th>Novos casos</th>
          </tr>
          {itemsToRender
            .map(({ date, total_cases: totalCases, new_cases: newCases }, index) => (
              <tr data-testid="covid-daily-data" key={`${date} - ${totalCases}`}>
                <td>{index + 1}</td>
                <td>{date}</td>
                <td>{totalCases}</td>
                <td>{newCases}</td>
              </tr>
            ))}
        </thead>
      </table>
    </div>
  );
}

export default ResultSection;

ResultSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
