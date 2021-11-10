import React from 'react';

// eslint-disable-next-line react/prop-types
function DayInput({ maxDays }) {
  // Recebendo o tamaho do array via props, é possível limitar o
  // número máximo de dias que o usuário pode selecionar
  return (
    <input type="number" min="1" max={maxDays} />
  );
}

export default DayInput;
