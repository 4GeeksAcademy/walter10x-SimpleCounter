//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import SecondCounter from "./component/SecondCounter.jsx";


setInterval(secondsCount, 1000);
let contador = 0;

function secondsCount() {
  contador = contador + 1;
  console.log(contador);
  ReactDOM.render(
    <SecondCounter seconds={contador} />,
    document.querySelector("#app")
  );
}
