import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as getData from "./getData.js";

function App() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  useEffect(() => {
    getData.getDataFromMain(setData1);
    getData.getDataFromContact(setData2);
    getData.getDataFromAbout(setData3);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data1 ? "Loading..." : data1}</p>
        <p>{!data2 ? "Loading..." : data2}</p>
        <p>{!data3 ? "Loading..." : data3}</p>
      </header>
    </div>
  );
}

export default App;
