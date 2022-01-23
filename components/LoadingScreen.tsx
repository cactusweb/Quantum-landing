import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";
import navLogo from "../assets/logo-single.svg";
import spinner from "../assets/spinner.svg";

const Container = styled.div<{ visible: boolean }>`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: 0.2s visibility ease-out, 0.2s opacity ease-out;
`;

const SpinnerContainer = styled.div`
  height: 180px;
  width: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Spinner = styled.div`
  position: absolute;
  height: 180px;
  width: 180px;
  border: 7px solid white;
  border-radius: 50%;
  animation: onOff 1.5s ease-in-out infinite;

  @keyframes onOff {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

const LoadingScreen = () => {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  return (
    <Container visible={isVisible}>
      <SpinnerContainer>
        <Spinner />
        <Image src={navLogo} height={50} width={100} />
      </SpinnerContainer>
    </Container>
  );
};

export default LoadingScreen;
