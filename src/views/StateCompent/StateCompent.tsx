import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: "jack",
      age: 18,
    },
  };

  setCount = () => {
    this.setState({
      count: this.state.count + 1,
      list: [...this.state.list, (Math.random() * 10).toFixed()],
      person: {
        ...this.state.person,
        name: "rose",
      },
    });
  };

  render() {
    return (
      <>
        <div>{this.state.list}</div>
        <div>{this.state.person.name}</div>
        <div>{this.state.person.age}</div>
        <button onClick={this.setCount}>计数器{this.state.count}</button>
      </>
    );
  }
}
export default Counter;
