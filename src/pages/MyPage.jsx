import React, { useEffect, useState } from "react";
import { Container, PageContainer } from "../styles/PageLayout";
import styled from "styled-components";
import LogoutIcon from "../images/mypage/logout.svg";
import NextIcon from "../images/mypage/next.svg";
import COLORS from "../styles/colors";
import { Icon } from "@iconify/react";
import axios from "../api/axios";

const MyPage = () => {
  const [userData, setUserData] = useState({
    nickname: "",
    numberOfTumbles: 0,
    savedPrice: 0,
    savedCarbon: 0,
  });
  const [isEdit, setIsEdit] = useState(false);
  const [changeName, setChangeName] = useState();

  useEffect(() => {
    axios.get(`users/mypage/1`).then((res) => {
      setUserData(res.data.result);
    });
  }, [changeName]);

  const hanldeOnChangeName = (e) => {
    setChangeName(e.target.value);
  };

  return (
    <PageContainer style={{ backgroundColor: "#f5f5f5" }}>
      <Container style={{ padding: "1rem", height: "90vh" }}>
        <ProfileBox>
          <ProfileImgBox style={{ backgroundColor: "#FBF198" }}></ProfileImgBox>
          <ImgEditBox>
            <Icon icon="solar:camera-bold" width="24" color="white" />
          </ImgEditBox>
          <NickNameBox>
            {isEdit ? (
              <NickNameInput onChange={hanldeOnChangeName} />
            ) : (
              <NickNameTxt>
                <b>{userData.nickname}</b> 님
              </NickNameTxt>
            )}
            <NickNameEdit
              onClick={() => {
                if (isEdit) {
                  setIsEdit(!isEdit);
                  axios.patch("users/nickname", {
                    userId: 1,
                    nickname: changeName,
                  });
                  window.location.reload();
                } else {
                  setIsEdit(!isEdit);
                }
              }}
            >
              <Icon icon="ic:baseline-edit" color="#7FBB76" />
            </NickNameEdit>
          </NickNameBox>
        </ProfileBox>
        <MyTumbleBox>
          <TitleBox>이번달 나의 텀블</TitleBox>
          <MTInfoBox>
            <InfoWrapper style={{ borderRight: "1px solid #BFCEBD" }}>
              <MTSmallTitle>텀블 사용량</MTSmallTitle>
              <MTDetailBox>
                <MTBoldTxt>{userData.numberOfTumbles}</MTBoldTxt>
                <MTRegularTxt>회</MTRegularTxt>
              </MTDetailBox>
            </InfoWrapper>
            <InfoWrapper style={{ borderRight: "1px solid #BFCEBD" }}>
              <MTSmallTitle>절약한 금액</MTSmallTitle>
              <MTDetailBox>
                <MTBoldTxt>{userData.savedPrice}</MTBoldTxt>
                <MTRegularTxt>원</MTRegularTxt>
              </MTDetailBox>
            </InfoWrapper>
            <InfoWrapper>
              <MTSmallTitle>절약한 탄소</MTSmallTitle>
              <MTDetailBox>
                <MTBoldTxt>{userData.numberOfTumbles * 52} </MTBoldTxt>
                <MTRegularTxt>g</MTRegularTxt>
              </MTDetailBox>
            </InfoWrapper>
          </MTInfoBox>
        </MyTumbleBox>
        <MarginAutoBox>
          <LogOutBox>
            <LogOutIconBox>
              <img src={LogoutIcon} alt="logout" />
            </LogOutIconBox>
            <LogOutTxt>로그아웃</LogOutTxt>
            <LogOutArrow>
              <img src={NextIcon} alt="next" />
            </LogOutArrow>
          </LogOutBox>
          <CopyRightBox style={{ marginTop: "1.5rem" }}>
            이용약관 | 개인정보처리방침
          </CopyRightBox>
          <CopyRightBox style={{ paddingBottom: "10px" }}>
            Copyright ⓒ Tumblog All rights reserved.
          </CopyRightBox>
        </MarginAutoBox>
      </Container>
    </PageContainer>
  );
};

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto 2rem;
`;

const ProfileImgBox = styled.div`
  width: 148px;
  height: 148px;
  border: 4px solid ${COLORS.mainColor};
  border-radius: 50%;
`;

const ImgEditBox = styled.div`
  background-color: ${COLORS.mainColor};
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2.5rem;
  margin-left: auto;
`;
const NickNameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  border-bottom: 1px solid #bfcebd;
  padding-bottom: 5px;
`;

const NickNameTxt = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const NickNameInput = styled.input`
  border: none;
  width: 30vw;
  font-size: 20px;
  background-color: #f5f5f5;

  :focus {
    outline: none;
    border: none;
    background-color: #f5f5f5;
  }
`;

const NickNameEdit = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const MyTumbleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1.5rem auto 0;
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
  margin: auto;
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

const CopyRightBox = styled.div`
  color: var(--gray-400, #9e9e9e);
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const MarginAutoBox = styled.div`
  margin: auto auto 0;
`;

export default MyPage;
