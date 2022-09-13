import styled from "styled-components";

const Item = styled.span`
  background-color: "#fff";
  border-radius: 10px;
  width: 60%;
  text-align: center;
  padding: 3px 5px;
  align-self: center;
  justify-self: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

function RecordItem({ id, text }) {
  return (
    <>
      <Item style={{ backgroundColor: "#fff" }}> {text}</Item>
    </>
  );
}

export default RecordItem;
