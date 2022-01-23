import styled from "styled-components";
import Image from "next/image";

import veveLogo from "../assets/logos/veve.svg";
import ethereumLogo from "../assets/logos/ethereum.svg";
import solanaLogo from "../assets/logos/solana.svg";
import veveMobileLogo from "../assets/logos/veve-mobile.svg";
import ethereumMobileLogo from "../assets/logos/ethereum-mobile.svg";
import solanaMobileLogo from "../assets/logos/solana-mobile.svg";
import icon1 from "../assets/logos/1.svg";
import icon2 from "../assets/logos/2.svg";
import icon3 from "../assets/logos/3.svg";
import icon4 from "../assets/logos/4.svg";
import fadeLeft from "../assets/fade-left.svg";
import fadeRight from "../assets/fade-right.svg";

const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 100px;
  padding-top: 50px;

  @media (max-width: 1000px) {
    margin-top: 120px;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

const AboveTitle = styled.span`
  font-size: 10px;
  opacity: 0.8;
  margin-bottom: -2px;
  letter-spacing: 3.6px;

  @media (max-width: 900px) {
    font-size: 8px;
  }
`;

const Title = styled.span`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 15px;

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

  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 22px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    margin-bottom: 33px;
  }
`;

const RowCell = styled.div<{ active?: boolean }>`
  background: #171818;
  height: 60px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 900px) {
    width: 90px;
    margin-right: 30px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 320px 320px 320px;
  column-gap: 40px;
  row-gap: 20px;

  @media (max-width: 1150px) {
    grid-template-columns: 320px 320px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 90vw;
    row-gap: 10px;
  }
`;

const GridCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  &:hover {
    background: #171918;
  }

  @media (max-width: 900px) {
    flex-direction: row;
    padding: 16px;
  }

  transition: 0.2s background ease-out;
`;

const CardCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    align-items: flex-start;
    margin-left: 10px;
    width: calc(90vw - 10px - 66px);
    text-align: start;
  }
`;

const CardTitle = styled.span`
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 11px;
  font-weight: 500;

  @media (max-width: 900px) {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 7px;
  }
`;

const CardText = styled.span`
  font-size: 14px;
  line-height: 20px;

  @media (max-width: 900px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const FadeBackgroundLeft = styled.div`
  position: absolute;
  bottom: -270px;
  left: -800px;

  @media (max-width: 900px) {
    transform: scale(0.9);
  }
`;

const FadeBackgroundRight = styled.div`
  position: absolute;
  bottom: -270px;
  right: -800px;

  @media (max-width: 900px) {
    transform: scale(0.9);
  }
`;

const GridCardFiller = styled.div`
  @media (max-width: 1150px) {
    display: none;
  }
`;

const DesktopLogo = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileLogo = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

const FeaturesSection = () => {
  return (
    <Column id="features">
      <FadeBackgroundLeft>
        <Image src={fadeLeft} width={1000} height={1000} />
      </FadeBackgroundLeft>
      <FadeBackgroundRight>
        <Image src={fadeRight} width={1000} height={1000} />
      </FadeBackgroundRight>
      <AboveTitle>FEATURES</AboveTitle>
      <Title>NFT Automation Cloud Software</Title>
      <Subtitle>
        All-in-One NFT Software with cloud technology with three different
        modules for maximum success during NFT Drops & Restocks on any platform
      </Subtitle>
      <Row>
        <RowCell>
          <DesktopLogo>
            <Image src={ethereumLogo} alt="Ethereum Logo" height={22} />
          </DesktopLogo>
          <MobileLogo>
            <Image src={ethereumMobileLogo} alt="Ethereum Logo" height={30} />
          </MobileLogo>
        </RowCell>
        <RowCell active>
          <DesktopLogo>
            <Image src={veveLogo} alt="Veve Logo" height={16} />
          </DesktopLogo>
          <MobileLogo>
            <Image src={veveMobileLogo} alt="Veve Logo" height={14} />
          </MobileLogo>
        </RowCell>
        <RowCell>
          <DesktopLogo>
            <Image src={solanaLogo} alt="Solana Logo" height={15} />
          </DesktopLogo>
          <MobileLogo>
            <Image src={solanaMobileLogo} alt="Solana Logo" height={24} />
          </MobileLogo>
        </RowCell>
      </Row>
      <Grid>
        <GridCard>
          <Image src={icon1} alt="" height={80} width={80} />
          <CardCol>
            <CardTitle>Drop & Restock Full Automation</CardTitle>
            <CardText>
              Full automation of all processes for drops and restocks. Connect
              account and leave the rest to Quantum IO
            </CardText>
          </CardCol>
        </GridCard>
        <GridCard>
          <Image src={icon2} alt="" height={80} width={80} />
          <CardCol>
            <CardTitle>Cloud Software</CardTitle>
            <CardText>
              Hands-free cloud software. No more need to setup the bot, purchase
              proxies, or servers
            </CardText>
          </CardCol>
        </GridCard>
        <GridCard>
          <Image src={icon3} alt="" height={80} width={80} />
          <CardCol>
            <CardTitle>Captcha Solver</CardTitle>
            <CardText>
              Innovative solver system allocates captchas in the most efficient
              and fast way at any load level
            </CardText>
          </CardCol>
        </GridCard>
        <GridCardFiller />
        <GridCard>
          <Image src={icon4} alt="" height={80} width={80} />
          <CardCol>
            <CardTitle>Drops Information</CardTitle>
            <CardText>
              Detailed analytical information on each NFT drop. Notifications
              system for VeVe, Ethereum, and Solana drops
            </CardText>
          </CardCol>
        </GridCard>
      </Grid>
    </Column>
  );
};

export default FeaturesSection;
