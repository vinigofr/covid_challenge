import React from 'react';

const URL = 'https://ourworldindata.org/coronavirus';
const SITE_NAME = 'Our World in Data';

function Header() {
  return (
    <header>
      <div>
        <h1 className="title-header">Como estarão os casos de COVID-19 no mundo? </h1>
        <h3 className="subtitle-header">Desafio D3 Company</h3>
      </div>
      <div>
        <p>
          Esta aplicação é alimentada por:
          <a href={URL} target="_blank" rel="noreferrer">{` ${SITE_NAME}`}</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
