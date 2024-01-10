import styled from "styled-components";
import COLORS from "../styles/colors";

const Button = ({ text }) => {
  return <Box>{text}</Box>;
};

const Box = styled.div`
  width: 80vw;
  height: 35px;
  color: white;
  background-color: ${COLORS.mainColor};
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export default Button;
