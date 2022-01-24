import styled from "styled-components";
import Image from "next/image";
import navLogo from "../assets/nav-logo.svg";
import mobileNavButton from "../assets/mobile-nav-button.svg";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 20px;
`;

const Logo = styled.div`
  margin-right: auto;

  @media (max-width: 1000px) {
    transform: scale(0.87);
    transform-origin: left;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin-right: 30px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const NavButton = styled.a`
  background: #55f7ff;
  font-weight: 500;
  color: #050f0f;
  height: 40px;
  padding: 0 23px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-bottom: 1px;
  box-sizing: border-box;
  margin-right: 30px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const NavButtonSecondary = styled.a`
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(20px);
  border: 1px solid #55f7ff;
  font-weight: 500;
  color: white;
  height: 40px;
  padding: 0 23px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-bottom: 1px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const MobileNavButton = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const Nav = ({ isExternal }: { isExternal?: boolean }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <MobileNav
        isOpen={isMobileNavOpen}
        toggle={() => setIsMobileNavOpen((prev) => !prev)}
      />
      <Row>
        <Logo>
          <Image src={navLogo} width={163} height={24} alt="Logo" />
        </Logo>
        <NavLink href={isExternal ? "/" : "#"}>Home</NavLink>
        <NavLink href={`${isExternal ? "/" : ""}#features`}>Features</NavLink>
        <NavLink href={`${isExternal ? "/" : ""}#roadmap`}>Roadmap</NavLink>
        <NavLink href={`${isExternal ? "/" : ""}#success`}>Success</NavLink>
        <NavLink href={`${isExternal ? "/" : ""}#faq`}>FAQ</NavLink>
        <NavLink href={`${isExternal ? "/" : ""}#community`}>Community</NavLink>
        <NavButton href={`${isExternal ? "/" : ""}#`}>Join Waitlist</NavButton>
        <NavButtonSecondary href={`${isExternal ? "/" : ""}#`}>
          Dashboard
        </NavButtonSecondary>
        <MobileNavButton onClick={() => setIsMobileNavOpen(true)}>
          <Image src={mobileNavButton} width={20} height={20} alt="Nav" />
        </MobileNavButton>
      </Row>
    </>
  );
};

export default Nav;
