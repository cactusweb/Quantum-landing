import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import success1 from "../assets/success/1.png";
import success2 from "../assets/success/2.png";
import success3 from "../assets/success/3.png";
import success4 from "../assets/success/4.png";
import success5 from "../assets/success/5.png";
import success6 from "../assets/success/6.png";

const Column = styled.div`
  padding-top: 190px;
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
  margin-bottom: 40px;
  text-align: center;
`;

const SuccessImage = styled.div`
  height: 240px;
  margin-right: 40px;
`;

const SuccessSection = () => {
  return (
    <Column id="success">
      <AboveTitle>SUCCESS</AboveTitle>
      <Title>Quantum IO Members</Title>
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
    </Column>
  );
};

export default SuccessSection;
