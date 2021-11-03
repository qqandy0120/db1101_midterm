import react from "react";
import Form from "./Form";
import logo from "./logo.svg";
import "./App.css";
import Environment from "./Environment";
import Eco from "./Eco";
import Safety from "./Safety";
import Map from "./Map";

function App() {
  // determine the show block
  let checkEnvironment = true;
  let checkEco = true;
  let checkSafety = true;
  let createNewWhole = false;
  if (checkEco === checkSafety) {
    createNewWhole = true;
  }

  return (
    <div className="App">
      <Form />
      {checkEnvironment ? <Environment /> : null}

      {checkEco ? (
        checkSafety ? (
          <div className="twoSide">
            <div className="left">
              <Eco />
            </div>
            <div className="right">
              <Safety />
            </div>
          </div>
        ) : (
          <div className="twoSide">
            <div className="left">
              <Map />
            </div>
            <div className="right">
              <Eco />
            </div>
          </div>
        )
      ) : checkSafety ? (
        <div className="twoSide">
          <div className="left">
            <Map />
          </div>
          <div className="right">
            <Safety />
          </div>
        </div>
      ) : null}
      {createNewWhole ? (
        <div className="whole">
          <Map />
        </div>
      ) : null}
    </div>
  );
}

export default App;
