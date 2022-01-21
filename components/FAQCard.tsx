import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import caret from "../assets/faq-caret.svg";
import { AnimatePresence, motion } from "framer-motion";

const CaretIcon = styled.div<{ angle: string }>`
  height: 16px;
  width: 16px;
  transform: rotate(${(props) => props.angle});
  position: absolute;
  top: 13px;
  right: 16px;
  transition: 0.2s transform ease-out;
`;

const OtherCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 11px 20px;
  max-width: 90vw;
  box-sizing: border-box;
  border-radius: 4px;
  background: rgba(46, 46, 46, 0.5);
  backdrop-filter: blur(5px);
  cursor: pointer;
  margin-bottom: 10px;
  overflow: hidden;
  transition: 0.2s background ease-out;
`;

const CardTopRow = styled.div`
  display: flex;
  align-items: center;
`;

const CardTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: auto;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const CardText = styled(motion.span)`
  font-size: 14px;
  line-height: 20px;
  padding-top: 11px;
  a {
    color: white;
  }
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

interface FAQCardProps {
  question: string;
  answer: string | JSX.Element;
}

const FAQCard = (props: FAQCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <OtherCard onClick={() => setIsOpen((prev) => !prev)}>
        <CardTopRow>
          <CardTitle>{props.question}</CardTitle>
          <CaretIcon angle={isOpen ? "180deg" : "0deg"}>
            <Image src={caret} alt="" />
          </CaretIcon>
        </CardTopRow>
        <AnimatePresence>
          {isOpen && (
            <CardText
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{
                opacity: { duration: 0.1 },
                height: { duration: 0.2 },
              }}
            >
              {props.answer}
            </CardText>
          )}
        </AnimatePresence>
      </OtherCard>
    </>
  );
};

export default FAQCard;
