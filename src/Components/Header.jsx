import React from 'react';

const URL = 'https://ourworldindata.org/coronavirus';
const SITE_NAME = 'Our World in Data';

function Header() {
  return (
    <header>
      <div>
        <h1 className="title-header">Como estarão os casos de COVID-19 no mundo? </h1>
        <h3 className="subtitle-header">Desafio Covid Challenge</h3>
      </div>
      <div>
        <a
          className="info-source"
          href={URL}
          target="_blank"
          rel="noreferrer"
        >
          {`Esta aplicação é alimentada por ${SITE_NAME}`}
        </a>
      </div>
    </header>
  );
}

export default Header;
