import React from "react";

class CounterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [0, 0, 0, 0, 0, 0],
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        const updatedCounters = [...prevState.counters];
        updatedCounters[5] = (updatedCounters[5] + 1) % 10; // Incrementar el contador de la sexta carta y volver a cero si llega a 10

        if (updatedCounters[5] === 0) {
          updatedCounters[4] = (updatedCounters[4] + 1) % 6; // Incrementar el contador de la quinta carta si el de la sexta llega a cero
          if (updatedCounters[4] === 0) {
            updatedCounters[3] = (updatedCounters[3] + 1) % 10; // Incrementar el contador de la cuarta carta si el de la quinta llega a cero
            if (updatedCounters[3] === 0) {
              updatedCounters[2] = (updatedCounters[2] + 1) % 6; // Incrementar el contador de la tercera carta si el de la cuarta llega a cero y volver a cero si llega a 6
              if (updatedCounters[2] === 0) {
                updatedCounters[1] = (updatedCounters[1] + 1) % 10; // Incrementar el contador de la segunda carta si el de la tercera llega a cero
                if (updatedCounters[1] === 0) {
                  updatedCounters[0] = (updatedCounters[0] + 1) % 10; // Incrementar el contador de la primera carta si el de la segunda llega a cero
                }
              }
            }
          }
        }

        return { counters: updatedCounters };
      });
    }, 1000); // Intervalo de 100 milisegundos
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const cards = this.state.counters.map((value, index) => (
      <div
        key={index}
        className="card m-2 d-flex justify-content-center align-items-center"
        style={{ width: "3rem", backgroundColor: "black", color: "white" }}
      >
        <div className="card-body">
          <h5 className="card-title">{value}</h5>
        </div>
      </div>
    ));
    cards.unshift(
      <div key="clock" className="card m-2" style={{ width: "3rem",backgroundColor: "black", color: "white" }}>
        <div className="card-body">
          <i className="fas fa-clock"></i>
        </div>
      </div>
    );

    return (
      <div>
        <h2>Contador</h2>
        <div className="d-flex flex-row p-5" style={{ marginLeft: "275px" }}>
          {cards}{" "}
        </div>
      </div>
    );
  }
}

export default CounterCard;
