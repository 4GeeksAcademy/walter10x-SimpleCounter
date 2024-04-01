import React from "react";

const SecondCounter = (props) => {
  // Obtener los valores de unidades, decenas, centenas, unidades de mil, decenas de mil y centenas de mil
  const unidades = props.seconds % 10;
  const decenas = Math.floor((props.seconds % 100) / 10);
  const centenas = Math.floor((props.seconds % 1000) / 100);
  const unidadesDeMil = Math.floor((props.seconds % 10000) / 1000);
  const decenasDeMil = Math.floor((props.seconds % 100000) / 10000);
  const centenasDeMil = Math.floor((props.seconds % 1000000) / 100000);

  // Lógica para ajustar los valores de las decenas de mil y unidades de mil
  let ajusteDecenasDeMil = decenasDeMil;
  let ajusteCentenasDeMil = centenasDeMil;
  let ajusteUnidadesDeMil = unidadesDeMil;
  if (decenasDeMil > 9) {
    ajusteDecenasDeMil = 1;
    ajusteCentenasDeMil = 0;
    ajusteUnidadesDeMil = 0;
  } else if (centenasDeMil > 9) {
    ajusteCentenasDeMil = 1;
    ajusteUnidadesDeMil = 0;
  }

  return (
    <div className="container">
      <div className="row">
        <h2>{props.seconds}</h2>
        <div className="col">
          <h1>{ajusteCentenasDeMil}</h1>
        </div>
        <div className="col">
          <h1>{ajusteDecenasDeMil}</h1>
        </div>
        <div className="col">
          <h1>{ajusteUnidadesDeMil}</h1>
        </div>
        <div className="col">
          <h1>{centenas}</h1>
        </div>
        <div className="col">
          <h1>{decenas}</h1>
        </div>
        <div className="col">
          <h1>{unidades}</h1>
        </div>
      </div>
    </div>
  );
};

export default SecondCounter;
