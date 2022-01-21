import styled from "styled-components";
import Image from "next/image";
import notchIcon from "../assets/roadmap-notch.svg";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboveTitle = styled.span`
  font-size: 10px;
  opacity: 0.8;
  margin-bottom: -2px;
  letter-spacing: 3.6px;
  text-align: center;
`;

const Title = styled.span`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 35px;
  text-align: center;
`;

const Row = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;

  @media (max-width: 1100px) {
    width: 170px;
  }

  @media (max-width: 900px) {
    width: 90vw;
  }
`;

const StageHeading = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
`;

const StageTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  width: 150px;
  max-width: 100%;
  line-height: 24px;
  letter-spacing: 0.89px;
  margin-bottom: 18px;
`;

const StageText = styled.span`
  font-size: 14px;
  width: 190px;
  line-height: 20px;
  margin-bottom: 11px;

  @media (max-width: 1100px) {
    width: 150px;
  }
`;

const SeparatorLine = styled.div`
  margin-bottom: 18px;
  height: 1px;
  background: #55f7ff;
  position: relative;
`;

const Notch = styled.div`
  position: absolute;
  left: -1px;
  height: 8px;
  bottom: 1px;
  transform: translateY(-55%);
`;

const RoadmapSection = () => {
  return (
    <Column id="roadmap">
      <AboveTitle>ROADMAP</AboveTitle>
      <Title>Quantum IO Project</Title>
      <Row>
        <Col>
          <StageHeading>Stage #1</StageHeading>
          <StageTitle>Quantum Startup</StageTitle>
          <SeparatorLine>
            <Notch>
              <Image src={notchIcon} width={8} height={8} />
            </Notch>
          </SeparatorLine>
          <StageText>Socials: Website, Twitter, Discord</StageText>
          <StageText>Community Building</StageText>
          <StageText>Closed Beta Testing</StageText>
        </Col>
        <Col>
          <StageHeading>Stage #2</StageHeading>
          <StageTitle>Quantum Release</StageTitle>
          <SeparatorLine>
            <Notch>
              <Image src={notchIcon} width={8} height={8} />
            </Notch>
          </SeparatorLine>
          <StageText>x1 Renewal Giveaway</StageText>
          <StageText>x1 Renewal NFT Auction</StageText>
          <StageText>Pre-sale via Google Docs</StageText>
          <StageText>Quantum IO Release Day</StageText>
        </Col>
        <Col>
          <StageHeading>Stage #3</StageHeading>
          <StageTitle>Quantum Evolution</StageTitle>
          <SeparatorLine>
            <Notch>
              <Image src={notchIcon} width={8} height={8} />
            </Notch>
          </SeparatorLine>
          <StageText>Renewals Limited Restock</StageText>
          <StageText>New Platforms Launch: SOL/ETH & NFT Sniper</StageText>
          <StageText>Listing on Secondary Markets</StageText>
        </Col>
        <Col>
          <StageHeading>Stage #4</StageHeading>
          <StageTitle>Quantum Members</StageTitle>
          <SeparatorLine>
            <Notch>
              <Image src={notchIcon} width={8} height={8} />
            </Notch>
          </SeparatorLine>
          <StageText>Lifetime Giveaway</StageText>
          <StageText>Lifetime NFT Auction</StageText>
          <StageText>Quantum Merch</StageText>
          <StageText>NFT Mystery Boxes</StageText>
        </Col>
        <Col>
          <StageHeading>Stage #5</StageHeading>
          <StageTitle>Quantum Future</StageTitle>
          <SeparatorLine>
            <Notch>
              <Image src={notchIcon} width={8} height={8} />
            </Notch>
          </SeparatorLine>
          <StageText>New Era Roadmap</StageText>
        </Col>
      </Row>
    </Column>
  );
};

export default RoadmapSection;
