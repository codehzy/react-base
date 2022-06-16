import React from "react";

class HellC extends React.Component {
  clickHandler = () => {
    console.log("事件被触发了");
  };

  render() {
    return <button onClick={this.clickHandler}>我是第一个类的组件</button>;
  }
}

export default HellC;
