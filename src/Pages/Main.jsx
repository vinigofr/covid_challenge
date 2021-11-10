import React from 'react';

// Components \/
import Header from '../Components/Header';
import SearchButton from '../Components/SearchButton';
import DayInput from '../Components/DayInput';
import ResultSection from '../Components/ResultSection';
// Components /\

function Main() {
  return (
    <div>
      <Header />
      <div className="search-section">
        <SearchButton />
        <DayInput />
      </div>
      <ResultSection />
    </div>
  );
}

export default Main;
