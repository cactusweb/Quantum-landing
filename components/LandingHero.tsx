import styled from "styled-components";
import Image from "next/image";

import landingBackground from "../assets/background-landing.png";
import landingImage from "../assets/landing-image.svg";
import landingImageMobile from "../assets/landing-image-mobile.png";
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

  @media (max-width: 1000px) {
    opacity: 0.75;
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
  height: 460px;
  box-shadow: 0 0 60px rgba(85, 247, 255, 0.3);

  @media (max-width: 1350px) {
    transform: scale(0.9);
    transform-origin: right;
  }

  @media (max-width: 1150px) {
    transform: scale(0.8);
  }

  @media (max-width: 1050px) {
    transform: scale(0.7);
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const MobileLandingImage = styled.div`
  display: none;
  max-width: 90vw;
  box-shadow: 0 0 60px rgba(85, 247, 255, 0.3);
  margin-top: 35px;
  align-self: flex-start;
  height: calc(90vw * 0.574);

  @media (max-width: 1000px) {
    display: block;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 1040px;
  max-width: 90vw;
  margin: 0 auto;
  min-height: 750px;

  @media (max-width: 1350px) {
    width: 90vw;
  }
`;

const AboveTitle = styled.span`
  font-size: 12px;
  opacity: 0.8;
  margin-bottom: -2px;
  letter-spacing: 3.6px;
  margin-top: 75px;

  @media (max-width: 1000px) {
    margin-top: 10px;
    font-size: 10px;
    letter-spacing: 3px;
  }
`;

const Title = styled.span`
  width: 400px;
  max-width: 90vw;
  font-size: 44px;
  font-weight: 500;
  line-height: 54px;
  margin-bottom: 15px;

  @media (max-width: 1000px) {
    font-size: 36px;
    line-height: 46px;
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.span`
  margin-bottom: 32px;
  width: 400px;
  max-width: 90vw;
  font-size: 16px;
  line-height: 28px;

  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 25px;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  margin-bottom: 37px;

  @media (max-width: 1000px) {
    margin-bottom: 30px;
  }
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

  @media (max-width: 1000px) {
    height: 40px;
    width: 140px;
    font-size: 14px;
    margin-right: 15px;
  }
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

  @media (max-width: 1000px) {
    height: 40px;
    width: 140px;
    font-size: 14px;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1000px) {
    margin-bottom: 8px;
  }
`;

const Checkbox = styled.div`
  height: 15px;
  margin-right: 8px;

  @media (max-width: 1000px) {
    transform: scale(0.8);
    margin-right: 5px;
  }
`;

const InfoText = styled.span`
  font-size: 16px;
  margin-top: 2px;

  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;

const LandingHero = () => {
  return (
    <>
      <Background>
        <Image
          placeholder="blur"
          src={landingBackground}
          layout="fill"
          objectFit="cover"
          unoptimized
        />
      </Background>
      <FadeOutRegion />
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
          <ButtonLeft href="https://dashboard.qionft.cloud/waitlist">
            Join Waitlist
          </ButtonLeft>
          <ButtonRight href="#features">Learn More</ButtonRight>
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
        <MobileLandingImage>
          <Image src={landingImageMobile} width={690} height={396} alt="" />
        </MobileLandingImage>
      </Col>
      <LandingImage>
        <Image
          src={landingImage}
          width={800}
          height={460}
          layout="fixed"
          alt=""
        />
      </LandingImage>
    </>
  );
};

export default LandingHero;
