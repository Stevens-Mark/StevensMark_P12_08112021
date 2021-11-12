import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors'
// logo imports
import Yoga from '../assets/icons/zen.svg'
import Swim from '../assets/icons/swim.svg'
import Bike from '../assets/icons/bike.svg'
import Gym from '../assets/icons/dumbell.svg'

/**
 * CSS for the component using styled.components
 */
const SportsGroup = styled.nav`
  background: ${colors.secondary};
  margin-top: 20px;

  @media screen and (min-width: 1024px) {
    margin-top: unset; 
    }

  p {
    font-size: 12px;
    font-weight: 500;
    margin-top: 0px;

    @media screen and (min-width: 1024px) {
      transform: rotate(-90deg);
      width: 140px;
      position: relative;
      top: 30px;
      }  
    }

  img {
      width: clamp(2.5rem, 4.5vw, 4rem);
      margin-top: 15px; 

      @media screen and (min-width: 1024px) {
        margin: 10px 0px;
        }
    }
`;

const SportsNav = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;
`;

const SportLink = styled.ul `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }  
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
