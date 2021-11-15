import manageDate from './manageDate';

function newPredictions(covidCases, MAX_DAYS) {
  const newPrevist = [];
  const copyCases = [...covidCases];

  const getTheAverage = () => {
    // Obtém os últimos 14 dias de casos
    const rangeOfCases = copyCases.slice(copyCases.length - 14);

    // Retorna a média dos casos para a constante casesAverage
    const casesAverage = Math.floor(rangeOfCases
      .reduce((acc, curr) => acc + curr.new_cases, 0) / rangeOfCases.length);

    // Manda o valor gerado em rangeOfCases para o array copyCases, para calculos futuros
    const lastItemOfCases = rangeOfCases[rangeOfCases.length - 1];

    // Gera um objeto semelhante com o que é retornado na API
    const lastItemGeneratedOfPrevist = {
      new_cases: casesAverage,
      total_cases: lastItemOfCases.total_cases + casesAverage,
      date: manageDate(lastItemOfCases.date),
    };

    // Manda
    copyCases.push(lastItemGeneratedOfPrevist);
    newPrevist.push(lastItemGeneratedOfPrevist);
  };

  for (let i = 0; i < MAX_DAYS; i += 1) getTheAverage();

  return newPrevist;
}
export default newPredictions;
