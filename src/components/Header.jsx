
import { Link } from 'react-router-dom'
import { useState } from 'react';
import styled from 'styled-components'
import colors from '../utils/style/colors';
// logo imports
import logo from '../assets/logo/sportsSee_logo.svg'
import { Menu } from './Hamburger';
import { Burger } from './Hamburger';

/**
 * CSS for the component using styled.components
 */
const Image = styled.img`
  width: clamp(7rem, 12vw, 10rem);
  margin-top: 16px;
  margin-left: 16px;
  @media screen and (min-width: 500px) {
    margin-top: 8px;
    margin-left: 0px;
  }
`;

const NavGroup = styled.nav`
  background: ${colors.secondary};
  height: 91px;
  
  
    @media screen and (min-width: 500px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 25px;
    }
`;

const LinkGroup = styled.div`
  
  justify-content: space-between;
   padding: 5px;
   display: none;
    @media screen and (min-width: 500px) {
      display: flex;
      width: 80%;
    }
`;

const LINK = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color:  ${colors.tertiary};
  padding: 5px;
  font-size: clamp(1rem, 1.667vw, 1.5rem);
    &:hover {
        color: ${colors.primary};
      }
`;

const HamburgerWrapper = styled.div`
  display: none;
  z-index: 6;

    @media (max-width: 500px){
      display:fixed;
    }
`;

/**
 * Component to render the Header
 * @function Header
 * @returns (JSX)
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <NavGroup>
          <LINK to="/"><Image className="logo" src={logo} alt="logo"></Image></LINK>
          <LinkGroup>
            <LINK to="/">Accueil</LINK>
            <LINK to="/">Profil</LINK>
            <LINK to="/">Réglage</LINK>
            <LINK to="/">Communauté</LINK>
          </LinkGroup>
            <HamburgerWrapper>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </HamburgerWrapper>
      </NavGroup>
    </header>
    )
}

