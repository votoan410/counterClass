import React from "react";
import "./Counter.css";

export default class CounterClass extends React.Component {
  state = {
    counter: 0,
  };
  hanldeInc = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };
  hanldeDec = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  };
  render() {
    return (
      <section className="counter__container">
        <header>Counter:{this.state.counter}</header>
        <div className="counter__actions">
          <button onClick={this.hanldeInc}>+</button>
          <button onClick={this.hanldeDec}>-</button>
        </div>
      </section>
    );
  }
}
