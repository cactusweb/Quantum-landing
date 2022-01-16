import styled from "styled-components";
import Image from "next/image";
import navLogo from "../assets/nav-logo.svg";

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 20px;
`;

const Logo = styled.div`
  margin-right: auto;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin-right: 30px;
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
`;

const Nav = () => {
  return (
    <Row>
      <Logo>
        <Image src={navLogo} width={163} height={24} alt="Logo" />
      </Logo>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#roadmap">Roadmap</NavLink>
      <NavLink href="#success">Success</NavLink>
      <NavLink href="#faq">FAQ</NavLink>
      <NavLink href="#community">Community</NavLink>
      <NavButton href="#">Join Waitlist</NavButton>
      <NavButtonSecondary href="#">Dashboard</NavButtonSecondary>
    </Row>
  );
};

export default Nav;
