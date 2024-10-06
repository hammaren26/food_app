import { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    //  this.increment = this.increment.bind(this);
  }

  //   increment() {
  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //   }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    let { test } = this.props;
    return (
      <div>
        <div className="text-2xl font-bold underline">
          class component and this props: {test}
        </div>
        <p className="text-lg font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
          asperiores! Voluptatum labore, est nesciunt eaque quae, corrupti,
          impedit dolor at odit dolorum veritatis. Laudantium, eum cumque dicta
          beatae mollitia facere.
          <br />
          <br />
          <br />
          <br />
          <br />
          this state is: {this.state.counter}
          <br />
          <br />
          <button
            // onClick={() => {
            //   this.increment();
            // }}
            onClick={this.increment}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment
          </button>
          <button
            onClick={() => {
              this.decrement();
            }}
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Decrement
          </button>
        </p>
      </div>
    );
  }
}
