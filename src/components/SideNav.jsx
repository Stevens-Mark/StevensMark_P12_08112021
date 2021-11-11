import { Link } from 'react-router-dom'
import styled from 'styled-components'
// logo imports
import Yoga from '../assets/icons/zen.svg'
import Swim from '../assets/icons/swim.svg'
import Bike from '../assets/icons/bike.svg'
import Gym from '../assets/icons/dumbell.svg'

/**
 * CSS for the component using styled.components
 */
const SportsGroup = styled.div `
    width: clamp(3.5rem, 8vw, 7.5rem);
    height: 100vh;
    list-style-type: none; 
    background: black;
    position: absolute;


    p {
        font-size: 12px;
        transform: rotate(-90deg);
        width: 140px;
        font-weight: 500;
        position: absolute;
        bottom: 75px;
      }

    img {
        width: clamp(2.5rem, 4.5vw, 4rem);
        margin: 10px 0px;
      }
`;

const SportsNav = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const SportLink = styled.div `
    text-decoration: none;
    cursor: pointer; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
`;

/**
 * Component to render the LeftHand Side navigation Bar
 * @function SideNav
 * @returns {JSX}
 */
  export default function SideNav() {
    
    return (
      <SportsGroup>
          <SportsNav>
              <SportLink>
                <li><Link to='/user'><img className='coverImage' src={Yoga} alt='Yoga'/></Link> </li>
                <li><Link to='/user'><img className='coverImage' src={Swim} alt='Swim'/></Link> </li>
                <li><Link to='/user'><img className='coverImage' src={Bike} alt='Bike'/></Link> </li>
                <li><Link to='/user'><img className='coverImage' src={Gym} alt='Gym'/></Link> </li>
              </SportLink>
              <p>Copyright, SportSee 2020</p>
          </SportsNav>
      </SportsGroup>
      )
  }
