import styled from "styled-components";
import Image from "next/image";

import landingBackground from "../assets/background-landing.svg";
import landingImage from "../assets/landing-image.svg";
import checkboxGreen from "../assets/checkbox.svg";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 900px;
  z-index: -1;

  * {
    height: 900px !important;
  }
`;

const FadeOutRegion = styled.div`
  position: absolute;
  top: 700px;
  height: 200px;
  width: 100vw;
  background: linear-gradient(
    to bottom,
    rgba(1, 4, 3, 0) 0%,
    rgba(1, 4, 3, 1) 100%
  );
`;

const LandingImage = styled.div`
  position: absolute;
  top: 150px;
  right: -50px;
  box-shadow: 0 0 60px rgba(85, 247, 255, 0.3);
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 1040px;
  max-width: 90vw;
  margin: 0 auto;
  min-height: 750px;
`;

const AboveTitle = styled.span`
  font-size: 12px;
  opacity: 0.8;
  margin-bottom: -2px;
  letter-spacing: 3.6px;
  margin-top: 75px;
`;

const Title = styled.span`
  width: 400px;
  max-width: 90vw;
  font-size: 44px;
  font-weight: 500;
  line-height: 54px;
  margin-bottom: 15px;
`;

const Subtitle = styled.span`
  margin-bottom: 32px;
  width: 400px;
  max-width: 90vw;
  font-size: 16px;
  line-height: 28px;
`;

const ButtonsRow = styled.div`
  display: flex;
  margin-bottom: 37px;
`;

const ButtonLeft = styled.a`
  height: 50px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #55f7ff;
  color: #050f0f;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  margin-right: 20px;
`;

const ButtonRight = styled.a`
  height: 50px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(20px);
  border: 1px solid #55f7ff;
  color: white;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Checkbox = styled.div`
  height: 15px;
  margin-right: 8px;
`;

const InfoText = styled.span`
  font-size: 16px;
  margin-top: 2px;
`;

const LandingHero = () => {
  return (
    <>
      <Background>
        <Image src={landingBackground} layout="fill" objectFit="cover" />
      </Background>
      <FadeOutRegion />
      <LandingImage>
        <Image
          src={landingImage}
          width={800}
          height={460}
          layout="fixed"
          alt=""
        />
      </LandingImage>
      <Col>
        <AboveTitle>VEVE PLATFORM | SOL & ETH SOON</AboveTitle>
        <Title>
          <span style={{ color: "#55F7FF" }}>QUANTUM IO</span>
          <br /> NFT Automation Cloud Software
        </Title>
        <Subtitle>
          Hands-Free Software with Drop & Restock Automation Connect account &
          leave the rest to Quantum IO
        </Subtitle>
        <ButtonsRow>
          <ButtonLeft href="https://dashboard.thetradingblock.org/products/thetradingblock/1948?waitlist=waitlist">
            Join Waitlist
          </ButtonLeft>
          <ButtonRight href="#about">Learn More</ButtonRight>
        </ButtonsRow>
        <InfoRow>
          <Checkbox>
            <Image src={checkboxGreen} alt="Checkbox" width={15} height={15} />
          </Checkbox>
          <InfoText>No more need to setup bot due to cloud technology</InfoText>
        </InfoRow>
        <InfoRow>
          <Checkbox>
            <Image src={checkboxGreen} alt="Checkbox" width={15} height={15} />
          </Checkbox>
          <InfoText>No more need to purchase proxies and servers</InfoText>
        </InfoRow>
      </Col>
    </>
  );
};

export default LandingHero;
