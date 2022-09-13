import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* width: inherit; */
  background-color: #fcfcfc;
  box-sizing: border-box;
  background-color: #ddd8d8;

  div:first-child {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 50%;
    min-width: 230px;
  }
`;

const ButtonWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  /* width: 40%; */
  max-width: 500px;
  height: 30%;
`;

const Card = styled.button`
  background-color: #f2f3f5;
  color: black;
  border: none;
  font-size: 1.3rem;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 3px 3px 3px lightgray;

  &:active {
    margin-left: 2px;
    margin-top: 2px;
    box-shadow: none;
  }
`;

const CalCard = styled(Card)`
  font-size: 2rem;
  color: white;
  background-color: #bea596;
`;

const ZeroCard = styled(Card)`
  grid-column: 1/3;
`;

const InputCard = styled.input`
  width: 100%;
  /* max-width: 450px; */
  height: 65px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 30px;
  border: 2px solid #bea596;
  text-align: right;
  /* padding-right: 20px; */

  &:focus {
    outline: none;
  }
`;

function Calc() {
  const [calc, setCalc] = useState("");
  const [operCheck, setOperCheck] = useState(true);
  const [pointCheck, setPointCheck] = useState(true);

  const getNum = (e) => {
    setCalc((prev) => prev + e.target.value);
    setOperCheck(true);
  };

  const getOper = (e) => {
    if (operCheck) {
      setCalc((prev) => prev + e.target.value);
      setOperCheck(false);
    }
  };

  const getPoint = (e) => {
    if (calc.length === 0) {
      return;
    }
    if (pointCheck) {
      setCalc((prev) => prev + e.target.value);
      setPointCheck(false);
    }
  };

  const getResult = () => {
    let replace_str = calc.replace(/x/gi, "*").replace(/÷/gi, "/");

    if (isNaN(eval(replace_str))) {
      setCalc("");
    } else if (eval(replace_str) == Infinity) {
      alert("0으로 나눌수 없습니다.");
      setCalc("");
      return false;
    } else {
      setCalc((prev) => eval(replace_str));
    }
  };

  const delCalc = () => {
    setPointCheck(true);
    setOperCheck(true);
    let str = String(calc).slice(0, -1);
    setCalc((prev) => str);
  };

  const allClear = () => {
    setPointCheck(true);
    setCalc((prev) => "");
  };
  const handleKeyPress = (e) => {
    const value = e.target.value;
    console.log(e.target.value);
    switch (value) {
      case "0":
        console.log("하이");
        break;
      default:
        return;
    }
  };

  return (
    <Container>
      <div>
        <InputCard readOnly value={calc} onKeyDown={handleKeyPress} />
        <ButtonWrap>
          <Card onClick={allClear}>AC</Card>
          <Card onClick={delCalc}>DEL</Card>
          <CalCard onClick={getOper} value="%">
            %
          </CalCard>
          <CalCard onClick={getOper} value="÷">
            ÷
          </CalCard>
          <Card onClick={getNum} value={7}>
            7
          </Card>
          <Card onClick={getNum} value={8}>
            8
          </Card>
          <Card onClick={getNum} value={9}>
            9
          </Card>
          <CalCard onClick={getOper} value="x">
            x
          </CalCard>
          <Card onClick={getNum} value={4}>
            4
          </Card>
          <Card onClick={getNum} value={5}>
            5
          </Card>
          <Card onClick={getNum} value={6}>
            6
          </Card>
          <CalCard onClick={getOper} value="-">
            -
          </CalCard>
          <Card onClick={getNum} value={1}>
            1
          </Card>
          <Card onClick={getNum} value={2}>
            2
          </Card>
          <Card onClick={getNum} value={3}>
            3
          </Card>
          <CalCard onClick={getOper} value="+">
            +
          </CalCard>
          <ZeroCard onClick={getNum} value={0}>
            0
          </ZeroCard>
          <Card onClick={getPoint} value=".">
            .
          </Card>
          <CalCard onClick={getResult}>=</CalCard>
        </ButtonWrap>
      </div>
    </Container>
  );
}

export default Calc;
