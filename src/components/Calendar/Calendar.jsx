import { useState } from "react";
import styled from "styled-components";
import Cells from "./Cells";
import Days from "./Days";
import Header from "./Header";

const Calendar = ({
  currentMonth,
  setCurrentMonth,
  selectedDate,
  setSelectedDate,
}) => {
  const onDateClick = (day) => {
    setSelectedDate(day);
  };
  const [schedule, setSchedule] = useState([]);

  return (
    <Container>
      <WholeBox>
        <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
        <Days />
        <Cells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
          schedule={schedule}
        />
      </WholeBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin: auto;
`;

const WholeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Calendar;
