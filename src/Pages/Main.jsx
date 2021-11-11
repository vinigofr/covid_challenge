import React from 'react';
import Context from '../Context/Context';
import '../generalStyles.css';

// Components \/
import Header from '../Components/Header';
import ResultSection from '../Components/ResultSection';
// Components /\

function Main() {
  const { data, setData } = React.useContext(Context);
  const [load, setLoad] = React.useState(true);

  React.useEffect(async () => {
    // Fonte: Our World in Data (OWID - COVID 19 Data)
    await fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
      .then((response) => response.json())
      .then((OwidData) => {
        setData(OwidData.OWID_WRL.data);
        setLoad(false);
      })
      .catch(() => alert('Erro ao carregar dados'));
  }, []);

  return (
    <div>
      <Header />
      { load ? 'Baixando os dados, aguarde...' : <ResultSection data={data} /> }
    </div>
  );
}

export default Main;
