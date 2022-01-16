import styled from "styled-components";
import Image from "next/image";

import veveLogo from "../assets/logos/veve.svg";
import ethereumLogo from "../assets/logos/ethereum.svg";
import solanaLogo from "../assets/logos/solana.svg";
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
  padding-bottom: 200px;
`;

const AboveTitle = styled.span`
  font-size: 10px;
  opacity: 0.8;
  margin-bottom: -2px;
  letter-spacing: 3.6px;
`;

const Title = styled.span`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Subtitle = styled.span`
  font-size: 18px;
  line-height: 28px;
  width: 700px;
  max-width: 90vw;
  margin-bottom: 25px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 40px;
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
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 320px 320px 320px;
  column-gap: 40px;
  row-gap: 20px;
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

  transition: 0.2s background ease-out;
`;

const CardTitle = styled.span`
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 11px;
`;

const CardText = styled.span`
  font-size: 14px;
  line-height: 20px;
`;

const FadeBackgroundLeft = styled.div`
  position: absolute;
  bottom: -270px;
  left: -800px;
`;

const FadeBackgroundRight = styled.div`
  position: absolute;
  bottom: -270px;
  right: -800px;
`;

const FeaturesSection = () => {
  return (
    <Column>
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
          <Image src={ethereumLogo} alt="Ethereum Logo" height={22} />
        </RowCell>
        <RowCell active>
          <Image src={veveLogo} alt="Veve Logo" height={16} />
        </RowCell>
        <RowCell>
          <Image src={solanaLogo} alt="Solana Logo" height={15} />
        </RowCell>
      </Row>
      <Grid>
        <GridCard>
          <Image src={icon1} alt="" height={80} width={80} />
          <CardTitle>Drop & Restock Full Automation</CardTitle>
          <CardText>
            Full automation of all processes for drops and restocks. Connect
            account and leave the rest to Quantum IO
          </CardText>
        </GridCard>
        <GridCard>
          <Image src={icon2} alt="" height={80} width={80} />
          <CardTitle>Cloud Software</CardTitle>
          <CardText>
            Hands-free cloud software. No more need to setup the bot, purchase
            proxies, or servers
          </CardText>
        </GridCard>
        <GridCard>
          <Image src={icon3} alt="" height={80} width={80} />
          <CardTitle>Captcha Solver</CardTitle>
          <CardText>
            Innovative solver system allocates captchas in the most efficient
            and fast way at any load level
          </CardText>
        </GridCard>
        <div />
        <GridCard>
          <Image src={icon4} alt="" height={80} width={80} />
          <CardTitle>Drops Information</CardTitle>
          <CardText>
            Detailed analytical information on each NFT drop. Notifications
            system for VeVe, Ethereum, and Solana drops
          </CardText>
        </GridCard>
      </Grid>
    </Column>
  );
};

export default FeaturesSection;
