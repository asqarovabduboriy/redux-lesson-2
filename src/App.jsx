import "./App.css";
import BtnPlus from "./components/BtnPlus/BtnPlus";
import Btn from "./components/Btnminus/Btn";
import Count from "./components/Count/Count";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Rest from "./components/Rest/Rest";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <BtnPlus />
        <Count />
        <Btn />
      </div>
      <Rest/>
    </>
  );
}

export default App;
