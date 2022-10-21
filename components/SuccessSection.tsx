import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Image from "next/image";
// import success1 from "../assets/success/1.png";
import success1 from "../assets/success/image.png";
// import success2 from "../assets/success/2.png";
import success2 from "../assets/success/image (1).png";
// import success3 from "../assets/success/3.png";
import success3 from "../assets/success/image (2).png";
// import success4 from "../assets/success/4.png";
import success4 from "../assets/success/image (3).png";
// import success5 from "../assets/success/5.png";
import success5 from "../assets/success/image (4).png";
// import success6 from "../assets/success/6.png";
import success6 from "../assets/success/image (5).png";
// import success7 from "../assets/success/7.png";
import success7 from "../assets/success/image (6).png";
import success8 from "../assets/success/image (7).png";
import success9 from "../assets/success/image (1).png";
import success10 from "../assets/success/image (2).png";
import success11 from "../assets/success/image (3).png";
import success12 from "../assets/success/image (4).png";
import success13 from "../assets/success/image (5).png";
import success14 from "../assets/success/image (6).png";
import success15 from "../assets/success/image (7).png";

import mobileSuccess11 from "../assets/success/mobile-1-1.png";
import mobileSuccess12 from "../assets/success/mobile-1-2.png";
import mobileSuccess13 from "../assets/success/mobile-1-3.png";
import mobileSuccess14 from "../assets/success/mobile-1-4.png";
import mobileSuccess15 from "../assets/success/mobile-1-5.png";
import mobileSuccess16 from "../assets/success/mobile-1-6.png";
import mobileSuccess17 from "../assets/success/mobile-1-7.png";
import mobileSuccess18 from "../assets/success/mobile-1-8.png";
import mobileSuccess19 from "../assets/success/mobile-1-9.png";
import mobileSuccess110 from "../assets/success/mobile-1-10.png";
import mobileExtra1 from "../assets/success/mobile-extra-1.png";
import mobileExtra2 from "../assets/success/mobile-extra-2.png";
import mobileExtra3 from "../assets/success/mobile-extra-3.png";
import mobileExtra4 from "../assets/success/mobile-extra-4.png";
import mobileExtra5 from "../assets/success/mobile-extra-5.png";

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
  height: 244px;
  margin-right: 40px;
  border: 2px solid #55f7ff;
  box-sizing: border-box;
`;

const SuccessImageMobile = styled.div`
  height: 150px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid #55f7ff;
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
          <SuccessImage>
            <Image src={success7} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success8} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success9} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success10} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success11} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success12} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success13} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success14} alt="" width={426} height={240} />
          </SuccessImage>
          <SuccessImage>
            <Image src={success15} alt="" width={426} height={240} />
          </SuccessImage>
        </Marquee>
      </DesktopMarquee>
      <MobileMarquee>
        <Marquee gradient={false} speed={40} direction="left">
          <SuccessImageMobile>
            <Image alt="" src={success1} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success2} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success3} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success4} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success5} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success6} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success7} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success8} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success9} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success10} width={267} height={150} />
          </SuccessImageMobile>
        </Marquee>
        <Marquee gradient={false} speed={40} direction="right">
          <SuccessImageMobile>
            <Image alt="" src={success11} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success12} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success13} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success14} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success15} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success1} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success2} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success3} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success4} width={267} height={150} />
          </SuccessImageMobile>
          <SuccessImageMobile>
            <Image alt="" src={success5} width={267} height={150} />
          </SuccessImageMobile>
        </Marquee>
      </MobileMarquee>
    </Column>
  );
};

export default SuccessSection;
