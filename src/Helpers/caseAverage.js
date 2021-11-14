function main(covidCases, MAX_DAYS) {
  const newPrevist = [];
  const copyCases = covidCases;

  console.log(covidCases);
  console.log(MAX_DAYS);

  const getTheAverage = () => {
    // Obtém os últimos 14 dias de casos
    const rangeOfCases = copyCases.slice(copyCases.length - 14);

    // Retorna a média dos casos para a constante casesAvarage
    const casesAvarage = rangeOfCases.reduce((acc, curr) => acc + curr, 0) / rangeOfCases.length;

    // Manda para o array newPrevist a última previsão realizada
    newPrevist.push(casesAvarage);

    // Manda o valor gerado em rangeOfCases para o array copyCases, para calculos futuros
    copyCases.push(casesAvarage);
  };

  for (let i = 0; i < MAX_DAYS; i += 1) {
    const average = getTheAverage();
    newPrevist.push(average);
  }
  return newPrevist;
}
export default main;
