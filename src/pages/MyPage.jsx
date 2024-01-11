import React from "react";
import { Container, PageContainer } from "../styles/PageLayout";
import styled from "styled-components";

const MyPage = () => {
  return (
    <PageContainer style={{ backgroundColor: "#f5f5f5" }}>
      <Container style={{ padding: "2rem" }}>
        <ProfileBox>
          <ProfileImgBox></ProfileImgBox>
          <ImgEditBox></ImgEditBox>
          <NickNameBox>
            <NickNameEdit></NickNameEdit>
          </NickNameBox>
        </ProfileBox>
        <MyTumbleBox>
          <TitleBox></TitleBox>
          <MTInfoBox>
            <InfoWrapper>
              <MTSmallTitle>텀블 사용량</MTSmallTitle>
              <MTDetailBox>
                <MTBoldTxt>20</MTBoldTxt>
                <MTRegularTxt>회</MTRegularTxt>
              </MTDetailBox>
            </InfoWrapper>
            <InfoWrapper>
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
          <LogOutIconBox></LogOutIconBox>
          <LogOutTxt>로그아웃</LogOutTxt>
          <LogOutArrow></LogOutArrow>
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

const MyTumbleBox = styled.div``;

const TitleBox = styled.div``;

const MTInfoBox = styled.div``;

const InfoWrapper = styled.div``;

const MTSmallTitle = styled.div``;

const MTDetailBox = styled.div``;

const MTBoldTxt = styled.div``;

const MTRegularTxt = styled.div``;

const LogOutBox = styled.div``;

const LogOutIconBox = styled.div``;

const LogOutTxt = styled.div``;

const LogOutArrow = styled.div``;

const CopyRightBox = styled.div``;

export default MyPage;
