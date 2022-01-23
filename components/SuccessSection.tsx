import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import success1 from "../assets/success/1.png";
import success2 from "../assets/success/2.png";
import success3 from "../assets/success/3.png";
import success4 from "../assets/success/4.png";
import success5 from "../assets/success/5.png";
import success6 from "../assets/success/6.png";
import mobileSuccess11 from "../assets/success/mobile-1-1.png";
import mobileSuccess12 from "../assets/success/mobile-1-2.png";
import mobileSuccess13 from "../assets/success/mobile-1-3.png";
import mobileSuccess14 from "../assets/success/mobile-1-4.png";
import mobileSuccess15 from "../assets/success/mobile-1-5.png";
import mobileSuccess16 from "../assets/success/mobile-1-6.png";

const Column = styled.div`
  padding-top: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    padding-top: 30px;
  }
`;

const AboveTitle = styled.span`
  font-size: 10px;
  opacity: 0.8;
  margin-bottom: -2px;
  letter-spacing: 3.6px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 8px;
  }
`;

const Title = styled.span`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 30px;
    margin-bottom: 32px;
  }
`;

const SuccessImage = styled.div`
  height: 240px;
  margin-right: 40px;
`;

const SuccessImageMobile = styled.div`
  height: 150px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const DesktopMarquee = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileMarquee = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

const SuccessSection = () => {
  return (
    <Column id="success">
      <AboveTitle>SUCCESS</AboveTitle>
      <Title>Quantum IO Members</Title>
      <DesktopMarquee>
        <Marquee gradient={false} speed={40}>
          <SuccessImage>
            <Image src={success1} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success2} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success3} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success4} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success5} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success6} alt="" width={426} height={240} />
          </SuccessImage>
        </Marquee>
      </DesktopMarquee>
      <MobileMarquee>
        <Marquee gradient={false} speed={40} direction="left">
          <SuccessImageMobile>
            <Image alt="" src={mobileSuccess11} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={mobileSuccess12} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={mobileSuccess13} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={mobileSuccess14} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={mobileSuccess15} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={mobileSuccess16} width={267} height={150} />
          </SuccessImageMobile>
        </Marquee>
        <Marquee gradient={false} speed={40} direction="right">
          <SuccessImageMobile>
            <Image alt="" src={mobileSuccess12} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={mobileSuccess13} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={mobileSuccess14} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={mobileSuccess15} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={mobileSuccess16} width={267} height={150} />
          </SuccessImageMobile>
        </Marquee>
      </MobileMarquee>
    </Column>
  );
};

export default SuccessSection;
