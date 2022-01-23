import styled from "styled-components";
import FAQCard from "./FAQCard";

const Column = styled.div`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    padding-top: 100px;
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
  margin-bottom: 15px;
  text-align: center;

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

  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Row = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 510px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1100px) {
    margin-right: 0;
    width: 90vw;
  }
`;

const FAQSection = () => {
  return (
    <Column id="faq">
      <AboveTitle>FAQ</AboveTitle>
      <Title>Frequently Asked Questions</Title>
      <Subtitle>
        Get more information on our public discord server or contact with
        Quantum IO Support directly through the ticket system on our server
      </Subtitle>
      <Row>
        <Col>
          <FAQCard
            question="What is Quantum IO?"
            answer="Quantum IO is NFT Automation Cloud Software."
          />
          <FAQCard
            question="What platforms are supported?"
            answer="Quantum IO currently supports VeVe. Solana/Ethereum next."
          />
        </Col>
        <Col>
          <FAQCard
            question="Will I need a proxy and a server to use the software?"
            answer="Quantum IO is hands-free cloud software. No need to use proxies and servers"
          />
          <FAQCard
            question="How much is a license and renewal fee?"
            answer="Renewal depends on the number of accounts which member plans to launch monthly."
          />
        </Col>
      </Row>
    </Column>
  );
};

export default FAQSection;
