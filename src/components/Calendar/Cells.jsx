import {
  endOfMonth,
  endOfWeek,
  isSameDay,
  startOfMonth,
  startOfWeek,
  format,
  addDays,
} from "date-fns";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import COLORS from "../../styles/colors";

const Cells = ({ currentMonth, selectedDate, onDateClick, schedule }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const [data, setData] = useState([]);
  const [selectday, setSelectday] = useState(new Date());
  const [state, setState] = useState(false);
  const statedayRef = useRef("");

  const rows = [];
  let days = [];
  let day = startDate;
  let formatDate = "";

  useEffect(() => {
    schedule.map((el) => {
      setData((prev) => [el.day, ...prev]);
    });
  }, [schedule]);

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formatDate = format(day, "d");
      const cloneDay = day;
      statedayRef.current = day.toDateString();
      const string = cloneDay.toDateString();
      days.push(
        <Container>
          <CellBox
            className={`
                    ${
                      !isSameDay(day, selectedDate)
                        ? "none"
                        : isSameDay(day, selectedDate)
                        ? "select"
                        : format(currentMonth, "M") !== format(day, "M")
                        ? "not-valid"
                        : "valid"
                    }`}
            onClick={() => {
              onDateClick(cloneDay);
            }}
          >
            <Square>
              <ColorSquare
                className={`${
                  format(currentMonth, "M") !== format(day, "M")
                    ? "text not-valid"
                    : ""
                }`}
                use={true}
              />
            </Square>
            <span
              className={`${
                format(currentMonth, "M") !== format(day, "M")
                  ? "text not-valid"
                  : !isSameDay(day, selectedDate)
                  ? "none"
                  : isSameDay(day, selectedDate)
                  ? "textselect"
                  : ""
              }`}
            >
              {formatDate}
            </span>
          </CellBox>
        </Container>
      );
      day = addDays(day, 1);
    }
    rows.push(<RowBox>{days}</RowBox>);
    days = [];
  }
  return <Body className="body">{rows}</Body>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;

  .not-valid {
    color: white;
    display: none;
  }
  .none {
    // 오늘이 아닌 날짜
  }
  .select {
    // 오늘
    font-weight: 700;
  }
  .textselect {
    color: white;
    background-color: blue;
    border-radius: 5px;
  }
  span {
    width: 25px;
    margin: auto;
    padding: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CellBox = styled.div`
  width: 12vw;
  display: flex;
  flex-direction: column;
`;

const RowBox = styled.div`
  display: flex;
  height: 10.5vw;
  margin-bottom: 5px;
`;

const Square = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2px auto;
`;

const Body = styled.div`
  font-size: 12px;
`;

const ColorSquare = styled.div`
  background-color: ${(props) => (props.use ? COLORS.mainColor : COLORS.gray)};
  width: 5vw;
  height: 5vw;
  border-radius: 5px;
`;

export default Cells;
