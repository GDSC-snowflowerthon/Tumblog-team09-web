import React from "react";
import styled from "styled-components";
import HomeIcon from "../../images/nav/home.svg";
import MypageIcon from "../../images/nav/mypage.svg";
import RankingIcon from "../../images/nav/ranking.svg";
import COLORS from "../../styles/colors";
import { useNavigate } from "react-router-dom";

const Navigator = () => {
  const navigate = useNavigate();
  return (
    <FixedBox>
      <Container>
        <MenuBox onClick={() => navigate("/ranking")}>
          <img alt="rank" src={RankingIcon} />
        </MenuBox>
        <MenuBox onClick={() => navigate("/")}>
          <img alt="home" src={HomeIcon} />
        </MenuBox>
        <MenuBox onClick={() => navigate("/mypage")}>
          <img alt="mypage" src={MypageIcon} />
        </MenuBox>
      </Container>
    </FixedBox>
  );
};

const FixedBox = styled.div`
  position: fixed;
  bottom: 0px;
  z-index: 5;
  min-width: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 72px;
  border-top: 1px solid ${COLORS.gray};
  background-color: white;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
`;

export default Navigator;
