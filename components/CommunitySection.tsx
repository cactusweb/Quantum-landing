import styled from "styled-components";
import Image from "next/image";

import twitterLogo from "../assets/socials/twitter.svg";
import discordLogo from "../assets/socials/discord.svg";
import communityFade from "../assets/community-fade.svg";

const Column = styled.div`
  background: #55f7ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 0;
  margin-top: 200px;
  position: relative;

  @media (max-width: 900px) {
    margin-top: 100px;
    padding: 35px 0;
  }
`;

const AboveTitle = styled.span`
  font-size: 10px;
  opacity: 0.8;
  margin-bottom: -2px;
  letter-spacing: 3.6px;
  text-align: center;
  color: #010403;

  @media (max-width: 900px) {
    font-size: 8px;
  }
`;

const Title = styled.span`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
  color: #010403;

  @media (max-width: 900px) {
    font-size: 30px;
    margin-bottom: 12px;
  }
`;

const Subtitle = styled.span`
  font-size: 18px;
  line-height: 28px;
  width: 700px;
  max-width: 90vw;
  margin-bottom: 25px;
  text-align: center;
  color: #010403;

  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Button = styled.a`
  height: 50px;
  width: 150px;
  background: #010403;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 900px) {
    margin-right: 15px;
  }
  @media (max-width: 900px) {
    width: 80px;
    height: 40px;
    padding-top: 4px;
  }
`;

const ButtonText = styled.span`
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 900px) {
    display: none;
  }
`;

const ButtonIcon = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

const BackgroundFade = styled.div`
  position: absolute;
  bottom: 50px;
  z-index: -1;
`;

const CommunitySection = () => {
  return (
    <Column id="community">
      <BackgroundFade>
        <Image src={communityFade} width={3000} height={345} layout="fixed" />
      </BackgroundFade>
      <AboveTitle>SOCIAL MEDIA</AboveTitle>
      <Title>Let's connect!</Title>
      <Subtitle>
        Find us on social media. Be sure to be following to stay tuned with the
        latest restock information and new features announcements & special
        Quantum IO events
      </Subtitle>
      <Row>
        <Button href="https://twitter.com/qntm_io">
          <ButtonText>Twitter</ButtonText>
          <ButtonIcon>
            <Image
              src={twitterLogo}
              width={24}
              height={24}
              alt="Twitter logo"
            />
          </ButtonIcon>
        </Button>
        <Button href="https://discord.gg/eBUmPTTwMg">
          <ButtonText>Discord</ButtonText>
          <ButtonIcon>
            <Image
              src={discordLogo}
              width={24}
              height={24}
              alt="Discord logo"
            />
          </ButtonIcon>
        </Button>
      </Row>
    </Column>
  );
};

export default CommunitySection;
