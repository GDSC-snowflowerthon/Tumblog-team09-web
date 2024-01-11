import styled from "styled-components";
import { Container, PageContainer } from "../styles/PageLayout";
import FirstIcon from "../images/Ranking/first.svg";
import SecondIcon from "../images/Ranking/second.svg";
import ThirdICon from "../images/Ranking/third.svg";
import COLORS from "../styles/colors";
import GraphImg from "../images/Ranking/graph.svg";

const Ranking = () => {
  return (
    <PageContainer>
      <Container>
        <PercentBox>
          <PercentTxt>
            현재 나의 <b>텀블 지수</b>는
          </PercentTxt>
          <PercentGreen>000위</PercentGreen>
          <PercentBar></PercentBar>
          <PercentNum>(1234/25000)</PercentNum>
        </PercentBox>
        <RankingTitle>
          이 주의 <b>베스트 텀블러</b>
        </RankingTitle>
        <RankingBox>
          <RankerBox>
            <MedalIcon>
              <img src={FirstIcon} alt="first medal" />
            </MedalIcon>
            <ProfileBox></ProfileBox>
            <UserBox>
              <NickName>박텀블</NickName>
              <UserXpNum>3,435</UserXpNum>
            </UserBox>
          </RankerBox>
          <RankerBox>
            <MedalIcon>
              <img src={SecondIcon} alt="second medal" />
            </MedalIcon>
            <ProfileBox></ProfileBox>
            <UserBox>
              <NickName>박텀블</NickName>
              <UserXpNum>3,435</UserXpNum>
            </UserBox>
          </RankerBox>
          <RankerBox>
            <MedalIcon>
              <img src={ThirdICon} alt="third medal" />
            </MedalIcon>
            <ProfileBox></ProfileBox>
            <UserBox>
              <NickName>박텀블</NickName>
              <UserXpNum>3,435</UserXpNum>
            </UserBox>
          </RankerBox>
        </RankingBox>
        <GraphBox>
          <GraphTxt>
            당신은 <b>상위 10%</b> 텀블러 입니다
          </GraphTxt>
          <GraphImgBox>
            <img src={GraphImg} alt="graph" />
          </GraphImgBox>
          <FlexBox>
            <GraphDetailTxt>
              <GraphNickName>2,230</GraphNickName>
              <GraphNickName>김텀블님</GraphNickName>
            </GraphDetailTxt>
            <GraphDetailTxt style={{ marginLeft: "70px" }}>
              <GraphNickName>1,239</GraphNickName>
              <GraphNickName>유저 평균</GraphNickName>
            </GraphDetailTxt>
          </FlexBox>
        </GraphBox>
      </Container>
    </PageContainer>
  );
};

const PercentBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const PercentTxt = styled.div`
  font-size: 25px;
  font-weight: 400;
`;

const PercentGreen = styled.div`
  color: #88d47b;
  font-size: 22px;
  font-weight: 600;
`;

const PercentBar = styled.div`
  height: 6px;
  width: 90vw;
  background-color: #d9d9d9;
  display: flex;
  margin: 25px auto 0;
  justify-content: center;
`;

const PercentNum = styled.div`
  font-size: 10px;
  font-weight: 400;
  margin-left: auto;
`;

const RankingBox = styled.div`
  background: #f2f9f0;
  width: 100vw;
`;

const RankingTitle = styled.div`
  padding-left: 1rem;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const RankerBox = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  height: 72px;
  width: 90vw;
  border-radius: 8px;
  background: var(--gray0, #fff);
  margin: 1rem;
`;

const MedalIcon = styled.div`
  margin-left: 1rem;
`;

const ProfileBox = styled.div`
  width: 44px;
  height: 44px;
  border: 2px solid ${COLORS.mainColor};
  border-radius: 50%;
  margin-left: 0.5rem;
`;

const UserBox = styled.div`
  margin-left: 0.8rem;
`;

const NickName = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const UserXpNum = styled.div`
  color: #848484;
  font-size: 15px;
  font-weight: 500;
`;

const GraphBox = styled.div`
  margin-top: 20px;
  width: calc(100vw);
`;

const GraphTxt = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const GraphImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const GraphDetailTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GraphNickName = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const FlexBox = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  margin-left: 15px;
  padding-bottom: 2rem;
`;

export default Ranking;
