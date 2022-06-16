import React from "react";

const HelloFn = () => {
  const clickHandler = (e: React.MouseEvent) => {
    console.log("函数式组件触发", e);
    e.preventDefault();
  };
  return (
    <a href="http://www.baidu.com/" onClick={clickHandler}>
      click me!
    </a>
  );
};

export default HelloFn;
