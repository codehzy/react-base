import HellC from "./views/ComponentCompare/classComp";
import HelloFn from "./views/ComponentCompare/functionComp";
import InputComponent from "./views/controlFormCompont/controlFormCompont";
import JsxBase from "./views/JsxBase/JsxBase";
import Counter from "./views/StateCompent/StateCompent";

function App() {
  return (
    <div className="App">
      <JsxBase />
      <HellC />
      <HelloFn />
      <Counter />
      <InputComponent />
    </div>
  );
}

export default App;
