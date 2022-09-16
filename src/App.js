import styled from "styled-components";
import Calc from "./components/calculator";
import Memo from "./components/memo";
import NavBar from "./components/Nav";
import "./App.css";
import CalendarCom from "./components/calendar";
import RecordCom from "./components/record";
import { useEffect } from "react";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  /* background-color: #e7e7e7; */
`;
const SubContainer = styled.div`
  width: 80%;
  min-width: 1050px;
  background-color: #ddd8d8;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  & article {
    /* width: inherit; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & article:nth-child(1) {
    width: 100%;
    grid-column: 1/2;
    grid-row: 1/4;
  }
  & article:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  & article:nth-child(3) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  & article:nth-child(4) {
    grid-column: 2/3;
    grid-row: 3/4;
  }
`;
function App() {
  useEffect(() => {
    let ins = document.createElement("ins");
    let scr = document.createElement("script");
    ins.className = "kakao_ad_area";
    ins.style = "display:none; width:100%;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute("data-ad-width", "160");
    ins.setAttribute("data-ad-height", "600");
    ins.setAttribute("data-ad-unit", "DAN-vWrAWfZEQNvsqnSC");
    document.querySelector(".adfit").appendChild(ins);
    document.querySelector(".adfit").appendChild(scr);

    let ins2 = document.createElement("ins");
    let scr2 = document.createElement("script");
    ins2.className = "kakao_ad_area";
    ins2.style = "display:none; width:100%;";
    scr2.async = "true";
    scr2.type = "text/javascript";
    scr2.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins2.setAttribute("data-ad-width", "160");
    ins2.setAttribute("data-ad-height", "600");
    ins2.setAttribute("data-ad-unit", "DAN-2tAVtd1caBEelCEU");
    document.querySelector(".adfit2").appendChild(ins2);
    document.querySelector(".adfit2").appendChild(scr2);
  }, []);
  return (
    <>
      <Container className="App">
        <div className="adfit2"></div>
        <SubContainer>
          <article>
            <Memo />
          </article>
          <article>
            <Calc />
          </article>
          <article>
            <RecordCom />
          </article>
          <article>
            <CalendarCom />
          </article>
        </SubContainer>
        <div className="adfit"></div>
      </Container>
    </>
  );
}

export default App;
