import styled from "styled-components";
import Image from "next/image";
import navLogo from "../assets/nav-logo.svg";
import navClose from "../assets/nav-close.svg";

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(30px);
  z-index: 100;

  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  transition: 0.2s visibility ease-out, 0.2s opacity ease-out;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 25px;
  margin-top: 30px;
  font-weight: 500;
  opacity: 0.6;
`;

const NavButton = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 25px;
  margin-top: 30px;
  font-weight: 500;
  border: 1px solid white;
  border-radius: 4px;
  padding: 10px 20px;
  opacity: 0.6;
  align-self: flex-start;
`;

const TopRow = styled.div`
  margin-left: 25px;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const NavLogo = styled.div`
  margin-right: auto;
`;

const CloseButton = styled.div`
  margin-right: 20px;
`;

interface MobileNavProps {
  isOpen: boolean;
  toggle: () => void;
}

const MobileNav = (props: MobileNavProps) => {
  return (
    <Container isOpen={props.isOpen}>
      <TopRow>
        <NavLogo>
          <Image src={navLogo} width={136} height={20} />
        </NavLogo>
        <CloseButton>
          <Image src={navClose} width={15} height={15} onClick={props.toggle} />
        </CloseButton>
      </TopRow>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#roadmap">Roadmap</NavLink>
      <NavLink href="#success">Success</NavLink>
      <NavLink href="#faq">FAQ</NavLink>
      <NavLink href="#community">Community</NavLink>
      <NavLink href="https://discord.gg/XY939bCtxp">Join Waitlist</NavLink>
      <NavButton href="https://dash.qntmru.io/">Dashboard</NavButton>
    </Container>
  );
};

export default MobileNav;
