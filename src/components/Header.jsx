import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors';
// logo imports
import logo from '../assets/logo/sportsSee_logo.svg'

/**
 * CSS for the component using styled.components
 */
const Image = styled.img`
  width: clamp(7rem, 12vw, 10rem);
  margin-top: 10px;
`;

const NavGroup = styled.nav`
  background: ${colors.secondary};
  height: 91px;
  text-align: center;
  
  @media screen and (min-width: 455px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: space-between;

    padding: 5px;

  @media screen and (min-width: 455px) {
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

/**
 * Component to render the Header
 * @function Header
 * @returns (JSX)
 */

export default function Header() {
    
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
            </NavGroup>
        
    </header>
    )
}

