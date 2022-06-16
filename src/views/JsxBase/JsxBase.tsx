import "./index.scss";

// 来个列表
const songs = [
  { id: 1, name: "痴心绝对" },
  { id: 2, name: "像我这样的人" },
  { id: 3, name: "南山南" },
];

const styleObj = {
  color: "skyblue",
};

const flag = true;

const renderJsx = () => {
  return (
    <ul>
      {/* map渲染 */}
      {songs.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
      {/* 条件渲染 */}
      {flag ? "react有趣" : "vue有趣"}
      {/* jsx样式处理 */}
      <div style={{ color: "red" }}>this is a div</div>
      {/* 行内样式 */}
      <div style={styleObj}>this is a nice</div>
      {/* 动态类名控制 */}
      <div className={flag ? "title" : ""}>this is div</div>
    </ul>
  );
};

export default renderJsx;
