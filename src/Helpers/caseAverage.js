function main(covidCases, MAX_DAYS) {
  const newPrevist = [];
  const copyCases = [...covidCases];

  const getTheAverage = () => {
    // Obtém os últimos 14 dias de casos
    const rangeOfCases = copyCases.slice(copyCases.length - 14);

    // Retorna a média dos casos para a constante casesAverage
    const casesAverage = Math.flo(rangeOfCases
      .reduce((acc, curr) => acc + curr.new_cases, 0) / rangeOfCases.length);
    
    // Manda o valor gerado em rangeOfCases para o array copyCases, para calculos futuros
    copyCases.push({ new_cases: casesAverage });
    return casesAverage;
  };

  for (let i = 0; i < MAX_DAYS; i += 1) {
    const average = getTheAverage();
    newPrevist.push(average);
    
  }
  console.log(copyCases);
  return newPrevist;
}
export default main;
