import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  height: 100%;
`;

const MemoCard = styled.input`
  /* width: 50%; */
  height: 100%;
  vertical-align: top;

  &::placeholder {
    vertical-align: top;
    /* text-align: center; */
    line-height: 30px;
  }
`;

const Wrap = styled.div`
  top: 15%;
  left: 10.1%;
  background: #e7e7e7;
  border: 1px solid #c0c0a4;
  box-sizing: border-box;
  width: 100%;

  & select {
    width: 6%;
    height: 30px;
    margin-left: 10px;
    font-size: 16px;
  }
`;

const Header = styled.div`
  width: 100%;
  padding: 15px 0;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background: #bea596;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  height: 400px;
  overflow-x: auto;
  overflow-y: auto;

  textarea {
    width: 100%;
    padding: 15px;
    height: 400px;
    box-sizing: border-box;
    background: none;
    outline: none;
    border: none;
    font-size: 25px;
  }
`;

function Memo() {
  const [memoText, setMemoText] = useState("");
  const wrapRef = useRef(null);
  const headerRef = useRef(null);
  let lastX = 0;
  let lastY = 0;
  let startX = 0;
  let startY = 0;

  const onFocusout = useCallback(
    ({ target }) => {
      setMemoText(target.value);
    },
    [memoText]
  );

  const onMove = useCallback((e) => {
    e.preventDefault();
    lastX = startX - e.clientX;
    lastY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    wrapRef.current.style.top = `${wrapRef.current.offsetTop - lastY}px`;
    wrapRef.current.style.left = `${wrapRef.current.offsetLeft - lastX}px`;
  }, []);

  const removeEvent = useCallback(() => {
    document.removeEventListener("mouseup", removeEvent);
    document.removeEventListener("mousemove", onMove);
  }, []);

  const onMouseDown = useCallback((e) => {
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener("mouseup", removeEvent);
    document.addEventListener("mousemove", onMove);
  }, []);

  const [nowFontSize, setNowFontSize] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setNowFontSize(e.target.value);
  };

  return (
    <Wrap ref={wrapRef}>
      <Header ref={headerRef} onMouseDown={onMouseDown}>
        Memo
      </Header>
      <select value={nowFontSize} onChange={handleChange}>
        <option value="10px">10px</option>
        <option value="12px">12px</option>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
        <option value="28px">28px</option>
        <option value="32px">32px</option>
        <option value="48px">48px</option>
      </select>
      <Content>
        <textarea
          style={{ fontSize: `${nowFontSize}` }}
          placeholder="please your write...
          When the record button is pressed, the time is recorded."
          onBlur={onFocusout}
        ></textarea>
      </Content>
    </Wrap>
  );
}

export default Memo;
