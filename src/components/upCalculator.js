import { useState } from "react";
import styled from "styled-components";

const CalcForm = styled.form`
  width: 100%;
  height: 100%;
  background-color: grey;

  input {
    height: 100%;
    width: 100%;
  }
`;

function UpCalc() {
  let [all, setAll] = useState("");
  let [display, setDisplay] = useState("");

  const addFunc = (num) => {
    all = all + num;
    setDisplay(all);
  };

  const sum = () => {
    setDisplay(eval(all));
  };

  const clearDisplay = () => {
    setDisplay("0");
  };

  const tan = (all) => {
    setAll(Math.tan((all.value * 3.141592) / 180));
  };
  const sin = (all) => {
    setAll(Math.sin((all.value * 3.141592) / 180));
  };
  const cos = (all) => {
    setAll(Math.cos((all.value * 3.141592) / 180));
  };
  const abs = (all) => {
    setAll(Math.abs(all.value));
  };

  const pow = (all) => {
    setAll(Math.pow(all.value, 2));
  };

  return (
    <CalcForm>
      <table style={{ border: 1 }}>
        <tr>
          <td colSpan="5">
            <input type="text" size={50} value={display} />
            <input type="text" className="dataBase" size={50} />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <input
              type="button"
              value={"Clear"}
              onClick={clearDisplay}
              style={{ height: "100%", width: "100%" }}
            />
          </td>
          <td colSpan="3">
            <input
              type="button"
              value={"Enter"}
              onClick={() => sum()}
              style={{ height: "100%", width: "100%" }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value={"1"} onClick={() => addFunc("1")} />
          </td>
          <td>
            <input type="button" value={"2"} onClick={() => addFunc("2")} />
          </td>
          <td>
            <input type="button" value={"3"} onClick={() => addFunc("3")} />
          </td>
          <td>
            <input type="button" value={"+"} onClick={() => addFunc("+")} />
          </td>
          <td>
            <input
              type="button"
              value={"tan"}
              onClick={() => tan(this.form.display)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value={"4"} />
          </td>
          <td>
            <input type="button" value={"5"} />
          </td>
          <td>
            <input type="button" value={"6"} />
          </td>
          <td>
            <input type="button" value={"-"} />
          </td>
          <td>
            <input type="button" value={"sin"} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value={"7"} />
          </td>
          <td>
            <input type="button" value={"8"} />
          </td>
          <td>
            <input type="button" value={"9"} />
          </td>
          <td>
            <input type="button" value={"*"} />
          </td>
          <td>
            <input type="button" value={"cos"} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value={"0"} onClick={() => addFunc("0")} />
          </td>
          <td>
            <input
              type="button"
              value={"+/-"}
              onClick={() => abs(this.form.display)}
            />
          </td>
          <td>
            <input type="button" value={"."} onClick={() => addFunc(".")} />
          </td>
          <td>
            <input type="button" value={"/"} onClick={() => addFunc("/")} />
          </td>
          <td>
            <input
              type="button"
              value={"x^y"}
              onClick={() => pow(this.form.display)}
            />
          </td>
        </tr>
      </table>
    </CalcForm>
  );
}

export default UpCalc;
