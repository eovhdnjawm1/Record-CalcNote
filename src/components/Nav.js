import { useState } from "react";
import styled from "styled-components"
import Clock from "react-live-clock"

const Container = styled.div`
    display: flex;
    flex-direction:row;
    height: 5vh;
    width: 100vw;   
    background-color: #ece7e6;
    justify-content: space-around;
    align-items: center;
    
`

function NavBar() {
    
const [timer, setTimer] = useState('0');

    const currentTimer = () => {
        const date = new Date();
        // const year = String(date.getFullYear()).padStart(2, "0");
        // const month = String(date.getMonth() + 1).padStart(2,"0");
        // const day = String(date.getDay()).padStart(2,"0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
        setTimer( (`${hours}:${minutes}:${seconds}`))
    }
    

    const startTimer = () => {
        setInterval(currentTimer, 1000)
    }

    const Record = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
        console.log( minutes, seconds, hours )
    }
    startTimer()

    return <Container>
        <Clock id="YMD"
        format={'YYYY-MM-DD'}
        ticking={false}
        timezone={"Asia/Seoul"} />
        <div>{timer}</div>
        <button onClick={Record}>기록</button>
    </Container>
}

export default NavBar