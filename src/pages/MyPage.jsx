import React from "react";
import { Container, PageContainer } from "../styles/PageLayout";
import styled from "styled-components";
import LogoutIcon from "../images/mypage/logout.svg";
import NextIcon from "../images/mypage/next.svg";

const MyPage = () => {
  return (
    <PageContainer style={{ backgroundColor: "#f5f5f5" }}>
      <Container style={{ padding: "1rem" }}>
        <ProfileBox>
          <ProfileImgBox></ProfileImgBox>
          <ImgEditBox></ImgEditBox>
          <NickNameBox>
            <NickNameEdit></NickNameEdit>
          </NickNameBox>
        </ProfileBox>
        <MyTumbleBox>
          <TitleBox>이번달 나의 텀블</TitleBox>
          <MTInfoBox>
            <InfoWrapper style={{ borderRight: "1px solid #BFCEBD" }}>
              <MTSmallTitle>텀블 사용량</MTSmallTitle>
              <MTDetailBox>
                <MTBoldTxt>20</MTBoldTxt>
                <MTRegularTxt>회</MTRegularTxt>
              </MTDetailBox>
            </InfoWrapper>
            <InfoWrapper style={{ borderRight: "1px solid #BFCEBD" }}>
              <MTSmallTitle>절약한 금액</MTSmallTitle>
              <MTDetailBox>
                <MTBoldTxt>8000</MTBoldTxt>
                <MTRegularTxt>회</MTRegularTxt>
              </MTDetailBox>
            </InfoWrapper>
            <InfoWrapper>
              <MTSmallTitle>절약한 탄소</MTSmallTitle>
              <MTDetailBox>
                <MTBoldTxt>1040</MTBoldTxt>
                <MTRegularTxt>g</MTRegularTxt>
              </MTDetailBox>
            </InfoWrapper>
          </MTInfoBox>
        </MyTumbleBox>
        <LogOutBox>
          <LogOutIconBox>
            <img src={LogoutIcon} alt="logout" />
          </LogOutIconBox>
          <LogOutTxt>로그아웃</LogOutTxt>
          <LogOutArrow>
            <img src={NextIcon} alt="next" />
          </LogOutArrow>
        </LogOutBox>
        <CopyRightBox>이용약관 | 개인정보처리방침</CopyRightBox>
        <CopyRightBox>Copyright ⓒ Tumblog All rights reserved.</CopyRightBox>
      </Container>
    </PageContainer>
  );
};

const ProfileBox = styled.div``;

const ProfileImgBox = styled.div``;

const ImgEditBox = styled.div``;
const NickNameBox = styled.div``;
const NickNameEdit = styled.div``;

const MyTumbleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const TitleBox = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const MTInfoBox = styled.div`
  margin: 10px auto;
  height: 8rem;
  width: 90vw;
  display: flex;
  background-color: white;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 60px;
  padding: 0 3vw;
`;

const MTSmallTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const MTDetailBox = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const MTBoldTxt = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const MTRegularTxt = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-top: auto;
`;

const LogOutBox = styled.div`
  margin: 10px auto;
  height: 5rem;
  width: 90vw;
  display: flex;
  background-color: white;
  border-radius: 12px;
  align-items: center;
`;

const LogOutIconBox = styled.div`
  margin-left: 2rem;
`;

const LogOutTxt = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;

const LogOutArrow = styled.div`
  margin-left: auto;
  padding-right: 2rem;
  display: flex;
  align-items: center;
`;

const CopyRightBox = styled.div``;

export default MyPage;
