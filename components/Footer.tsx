import styled from "styled-components";
import Image from "next/image";

import footerLogo from "../assets/footer-logo.svg";
import twitterIcon from "../assets/socials/twitter.svg";
import discordIcon from "../assets/socials/discord.svg";
import openseaIcon from "../assets/socials/opensea.svg";

const Container = styled.div`
  display: flex;
  padding-top: 150px;
  width: 1040px;
  max-width: 90vw;
  margin: 0 auto;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 60px;
    @media (max-width: 1100px) {
      margin-right: 0;
      margin-bottom: 25px;
    }
  }

  @media (max-width: 1100px) {
    width: 90vw;
    flex: unset;
  }
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 1100px) {
    margin-bottom: 10px;
  }
`;

const DisclaimerText = styled.span`
  font-size: 12px;
  font-weight: 300;
  line-height: 22px;
  opacity: 0.9;
  width: 440px;
  max-width: 90vw;

  @media (max-width: 1100px) {
    width: 90vw;
  }
`;

const Heading = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const LinksRow = styled.div`
  display: flex;
`;

const LinksCol = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-right: 50px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 20px;
  white-space: nowrap;
`;

const SocialsIconsRow = styled.div`
  display: flex;
  align-items: center;
`;

const SocialsIcon = styled.a`
  margin-right: 15px;
`;

const UnderFooterRow = styled.div`
  border-top: 1px solid #222429;
  margin-top: 50px;
  padding: 26px 0;
  display: flex;
  flex-direction: column;
`;

const UnderFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1040px;
  max-width: 90vw;
  align-self: center;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const CopyrightText = styled.span`
  font-size: 14px;
  margin-right: auto;
  opacity: 0.85;

  @media (max-width: 1100px) {
    margin-right: 0;
    margin-bottom: 25px;
    text-align: center;
    line-height: 160%;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  align-items: center;
`;

const LegalLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  margin-left: 50px;

  &:first-child {
    margin-left: 0;
  }
`;

const MobileOnlyBreak = styled.br`
  display: none;
  @media (max-width: 1100px) {
    display: unset;
  }
`;

const MobileHidden = styled.span`
  @media (max-width: 1100px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Col style={{ flex: 2 }}>
          <LogoRow>
            <Image src={footerLogo} width={108} height={16} alt="Logo" />
          </LogoRow>
          <DisclaimerText>
            NFT Automation Hands-free Cloud Software with Drop & Restock
            Automation and Innovative solver system. Supporting NFT Platforms:
            VeVe | Solana | Ethereum
          </DisclaimerText>
        </Col>
        <Col>
          <Heading>MENU</Heading>
          <LinksRow>
            <LinksCol>
              <Link href="#">Home</Link>
              <Link href="#features">Features</Link>
              <Link href="#roadmap">Roadmap</Link>
              <Link href="#success">Success</Link>
            </LinksCol>
            <LinksCol>
              <Link href="#faq">FAQ</Link>
              <Link href="#community">Community</Link>
              <Link href="#">Join Waitlist</Link>
            </LinksCol>
          </LinksRow>
        </Col>
        <Col>
          <Heading>Contact</Heading>
          <Link href="mailto:quantumio.nft@gmail.com">
            quantumio.nft@gmail.com
          </Link>
          <SocialsIconsRow>
            <SocialsIcon
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitterIcon} width={16} height={16} alt="Twitter" />
            </SocialsIcon>
            <SocialsIcon
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={discordIcon} width={16} height={16} alt="Discord" />
            </SocialsIcon>
            <SocialsIcon
              href="https://www.opensea.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={openseaIcon} width={16} height={16} alt="OpenSea" />
            </SocialsIcon>
          </SocialsIconsRow>
        </Col>
      </Container>
      <UnderFooterRow>
        <UnderFooterWrapper>
          <CopyrightText>
            Quantum IO LLC <MobileHidden>| </MobileHidden>
            <MobileOnlyBreak />
            Copyright © 2022 | All rights reserved.
          </CopyrightText>
          <LegalLinks>
            <LegalLink href="#">Terms & Conditions</LegalLink>
            <LegalLink href="#">Privacy Policy</LegalLink>
          </LegalLinks>
        </UnderFooterWrapper>
      </UnderFooterRow>
    </>
  );
};

export default Footer;
