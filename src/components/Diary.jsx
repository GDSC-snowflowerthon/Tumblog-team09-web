import styled from "styled-components";
import COLORS from "../styles/colors";
import { useState } from "react";

const Diary = ({ menu, Tsize, discountPrice }) => {
  const size = ["S", "M", "L"];

  return (
    <DiaryWrapper>
      <Box>
        <InfoTitleBox>메뉴</InfoTitleBox>
        <InfoDetailBox>{menu}</InfoDetailBox>
      </Box>
      <Box>
        <InfoTitleBox>사이즈</InfoTitleBox>
        <SizeBox>
          {size.map((el, idx) => {
            return <SizeBtn state={size[idx] === Tsize}>{el}</SizeBtn>;
          })}
        </SizeBox>
      </Box>
      <Box>
        <InfoTitleBox>할인 금액</InfoTitleBox>
        <InfoMoneyBox>{discountPrice}원</InfoMoneyBox>
      </Box>
    </DiaryWrapper>
  );
};

const DiaryWrapper = styled.div``;

const Box = styled.div`
  display: flex;
  margin-top: 20px;
`;

const InfoTitleBox = styled.div`
  width: 72px;
  font-size: 15px;
  font-weight: 600;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const InfoDetailBox = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const InfoMoneyBox = styled.div`
  color: ${COLORS.mainColor};
  font-size: 15px;
  font-weight: 700;
`;

const SizeBtn = styled.div`
  width: 47px;
  height: 29px;
  border-radius: 20px;
  border: 1px solid ${COLORS.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.state ? "white" : COLORS.mainColor)};
  background-color: ${(props) => (props.state ? COLORS.mainColor : "none")};
  font-size: 15px;
  font-weight: ${(props) => (props.state ? "600" : "500")};
  margin-right: 15px;
`;

const SizeBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Diary;
