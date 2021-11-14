// Esse número é originado do que vem da API OWID_WRLD
const covidCases = [
  1, 2, 5, 10, 15, 14, 50, 76, 110, 100,
  273, 373, 473, 411, 673, 773, 873, 973, 1730,
  1173, 1273, 1373, 1473, 1411, 1673, 1773, 1873, 1973, 50,
];

const newPrevist = [];

const getTheAverage = () => {
  // Obtém os últimos 14 dias de casos
  const rangeOfCases = covidCases.slice(covidCases.length - 14);

  // Retorna a média dos casos para a constante casesAvarage
  const casesAvarage = rangeOfCases.reduce((acc, curr) => acc + curr, 0) / rangeOfCases.length;

  // Manda para o array newPrevist a última previsão realizada
  newPrevist.push(casesAvarage);

  // Manda o valor gerado em rangeOfCases para o array covidCases, para calculos futuros
  covidCases.push(casesAvarage);
};

function getExponentialAverage(MAX_DAYS) {
  for (let i = 0; i < MAX_DAYS; i++) {
    getTheAverage();
  }
}
getExponentialAverage(1000);
console.log(newPrevist);
