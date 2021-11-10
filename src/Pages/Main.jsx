import React from 'react';
import Context from '../Context/Context';

// Components \/
import Header from '../Components/Header';
import SearchButton from '../Components/SearchButton';
import DayInput from '../Components/DayInput';
import ResultSection from '../Components/ResultSection';
// Components /\

function Main() {
  const {
    data,
    setData,
  } = React.useContext(Context);

  const [load, setLoad] = React.useState(true);

  React.useEffect(async () => {
    // Fonte: Our World in Data (OWID - COVID 19 Data)
    await fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
      .then((response) => response.json())
      .then((OwidData) => {
        setData(OwidData.OWID_WRL.data);
        setLoad(false);
      })
      // .then((OwidData) => console.log(OwidData.OWID_WRL.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Header />
      <div className="search-section">
        <SearchButton />
        <DayInput maxDays={data.length} />
      </div>
      { load ? 'Baixando os dados, aguarde...' : <ResultSection /> }
    </div>
  );
}

export default Main;
