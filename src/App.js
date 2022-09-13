import styled from "styled-components";
import Calc from "./components/calculator";
import Memo from "./components/memo";
import NavBar from "./components/Nav";
import "./App.css";
import CalendarCom from "./components/calendar";
import RecordCom from "./components/record";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #e7e7e7;
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
  return (
    <>
      <Container className="App">
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
      </Container>
    </>
  );
}

export default App;
