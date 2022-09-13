import React, { useState } from "react";
import styled from "styled-components";
import Clock from "react-live-clock";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { categoryState, recordSelector, recordState } from "../atoms";
import { useForm } from "react-hook-form";
import RecordItem from "./recordItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: #ddd8d8;
  justify-content: space-around;
  align-items: center;
  color: #716259;
  row-gap: 25px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: #ddd8d8;
  justify-content: space-around;
  align-items: center;
  color: #716259;
  border-radius: 8px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  padding: 15px 0;

  .YMD {
    font-size: 24px;
  }

  .timer {
    margin: 20px 0;
    font-size: 20px;
  }

  .timerText {
    font-size: 20px;
  }

  form .recordButton,
  .clearRecord {
    width: 30%;
    padding: 15px;
    margin: 15px 0;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border: none;
    cursor: pointer;

    &:active {
      box-shadow: inset 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  }

  form .recordButton {
    width: 100%;
  }

  .recordBoard {
  }

  form {
    width: 30%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }

  .buttonSet {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

const RecordList = styled(SubContainer)`
  height: 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

function RecordCom() {
  const [timer, setTimer] = useState("0");

  const { register, handleSubmit, setValue } = useForm();

  const setRecord = useSetRecoilState(recordState);
  const records = useRecoilValue(recordSelector);

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  const Record = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setRecord((oldRecord) => [
      {
        id: Date.now(),
        text: `${hours}:${minutes}:${seconds}`,
      },
      ...oldRecord,
    ]);
  };

  const RecordClear = () => {
    setRecord((oldRecord) => {
      return [...(oldRecord = [])];
    });
  };
  startTimer();

  return (
    <Container>
      <SubContainer>
        <Clock
          id="YMD"
          className="YMD"
          format={"YYYY-MM-DD"}
          ticking={false}
          timezone={"Asia/Seoul"}
        />
        <div className="timer">{timer}</div>
        <div className="timerText">Timer Record </div>
        <div className="buttonSet">
          <form onSubmit={handleSubmit(Record)}>
            <button className="recordButton">Record</button>
          </form>
          <button onClick={RecordClear} className="clearRecord">
            Clear
          </button>
        </div>
      </SubContainer>
      <RecordList>
        {records?.map((record, i) => (
          <RecordItem key={record.id} {...record} />
        ))}
      </RecordList>
    </Container>
  );
}

export default RecordCom;
