import React from "react";
import DigitCard from "./DigitCard";

const SecondCounter = (props) => {
  const numero = props.seconds;

  const unidades = numero % 10;
  const decenas = Math.floor(numero / 10) % 10;
  const centenas = Math.floor(numero / 100) % 10;
  const unidadesDeMil = Math.floor(numero / 1000) % 10;
  const decenasDeMil = Math.floor(numero / 10000) % 10;
  const centenasDeMil = Math.floor(numero / 100000) % 10;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <DigitCard icon="fas fa-clock" />
        <DigitCard value={centenasDeMil} />
        <DigitCard value={decenasDeMil} />
        <DigitCard value={unidadesDeMil} />
        <DigitCard value={centenas} />
        <DigitCard value={decenas} />
        <DigitCard value={unidades} />
      </div>
    </div>
  );
};

export default SecondCounter;
