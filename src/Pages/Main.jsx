import React from 'react';

// Components \/
import Header from '../Components/Header';
import SearchButton from '../Components/SearchButton';
import DayInput from '../Components/DayInput';
// Components /\

function Main() {
  return (
    <div>
      <Header />
      <div className="search-section">
        <SearchButton />
        <DayInput />
      </div>
    </div>
  );
}

export default Main;
