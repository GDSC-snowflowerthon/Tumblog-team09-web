import styled from "styled-components";
import { Container, PageContainer } from "../styles/PageLayout";

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
        <RankingTitle></RankingTitle>
        <RankingBox>
          <RankerBox>
            <MedalIcon></MedalIcon>
            <ProfileBox></ProfileBox>
            <UserBox>
              <NickName>박텀블</NickName>
              <UserXpNum>3,435</UserXpNum>
            </UserBox>
          </RankerBox>
          <RankerBox>
            <MedalIcon></MedalIcon>
            <ProfileBox></ProfileBox>
            <UserBox>
              <NickName>박텀블</NickName>
              <UserXpNum>3,435</UserXpNum>
            </UserBox>
          </RankerBox>
          <RankerBox>
            <MedalIcon></MedalIcon>
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
        </GraphBox>
      </Container>
    </PageContainer>
  );
};

const PercentBox = styled.div``;

const PercentTxt = styled.div``;

const PercentGreen = styled.div``;

const PercentBar = styled.div``;

const PercentNum = styled.div``;

const RankingBox = styled.div``;

const RankingTitle = styled.div``;

const RankerBox = styled.div``;

const MedalIcon = styled.div``;

const ProfileBox = styled.div``;

const UserBox = styled.div``;

const NickName = styled.div``;

const UserXpNum = styled.div``;

const GraphBox = styled.div``;

const GraphTxt = styled.div``;

const GrapshNickName = styled.div``;

export default Ranking;
