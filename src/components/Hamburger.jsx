import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors';

const StyledMenu = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  opacity: ${({ open }) => open ? '1' : '0'};
  // transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-375%)'};
  height: 4vh;
  text-align: center;
  top: 0;
  left: 0;
  transition: opacity 0.6s ease-in-out;

    @media (max-width: 500px) {
        width: 100%;
      }
`;

const LINK = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color:  ${colors.tertiary};
  padding: 5px;
  transition: color 0.3s linear;
  font-size: clamp(1rem, 1.667vw, 1.5rem);
    &:hover {
        color: ${colors.primary};
      }
`;

export function Menu({ open }) {
  return (
    <StyledMenu open={open}>
            <LINK to="/">Accueil</LINK>
            <LINK to="/">Profil</LINK>
            <LINK to="/">Réglage</LINK>
            <LINK to="/">Communauté</LINK>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 20px;
  right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  // &:focus {
  //   outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
export function Burger({ open, setOpen })  {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}