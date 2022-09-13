import React, {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";


const Container = styled.div`
.react-calendar { 
 /* width: 400px; */
 /* max-width: 100%; */
 background-color: #e7e7e7;
 color: #716259;
 border-radius: 8px;
 box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
 font-family: Arial, Helvetica, sans-serif;
 line-height: 1.125em;
}
.react-calendar__navigation button {
 color: #716259;
 min-width: 44px;
 background: none;
 font-size: 16px;
 margin-top: 8px;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
 background-color: #f8f8fa;
}
.react-calendar__navigation button[disabled] {
 background-color: #f0f0f0;
}
abbr[title] {
 text-decoration: none;
}
/* .react-calendar__month-view__days__day--weekend {
 color: #d10000;
} */
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
 background: #bea596;
 color: #fff;
 border-radius: 6px;
}
.react-calendar__tile--now {
 background: #bea596;
 border-radius: 6px;
 font-weight: bold;
 color: #fff;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
 background: #efedec;
 border-radius: 6px;
 font-weight: bold;
 color: #716259;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
 background: #f8f8fa;
}
.react-calendar__tile--active {
 background: #bea596;
 border-radius: 6px;
 font-weight: bold;
 color: white;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
 background: #bea596;
 color: white;
}
.react-calendar--selectRange .react-calendar__tile--hover {
 background-color: #f8f8fa;
}
.react-calendar__tile--range {
 /* background: #f8f8fa; */
 background: #f8f8fa;
 color: #6f48eb;
 border-radius: 0;
}
.react-calendar__tile--rangeStart {
 border-top-right-radius: 0;
 border-bottom-right-radius: 0;
 border-top-left-radius: 6px;
 border-bottom-left-radius: 6px;
 background: #bea596;
 color: white;
}
.react-calendar__tile--rangeEnd {
 border-top-left-radius: 0;
 border-bottom-left-radius: 0;
 border-top-right-radius: 6px;
 border-bottom-right-radius: 6px;
 /* background: #bea596; */
 background: #bea596;
 color: white;
}
`

function CalendarCom() {
    const [value, onChange] = useState(new Date());

    return <Container>
        <Calendar onChange={onChange} value={value}></Calendar>
    </Container>
}

export default CalendarCom;