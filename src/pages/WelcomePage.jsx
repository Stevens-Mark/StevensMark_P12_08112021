import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Title from '../components/Title'
import karl from '../assets/icons/sportsSee_karl.png'
import cecilia from '../assets/icons/sportsSee_cecilia.png'
/**
 * CSS for the component using styled.components
 */

 const MainWrapper = styled.main`
 padding: clamp(0.625rem, 2vw, 4.5rem);

   @media screen and (min-width: 1440px) {
   padding: 77px;
   } 

   img {
    width: clamp(2.5rem, 4.5vw, 4rem);
    margin-top: 15px; 

      @media screen and (min-width: 1024px) {
        margin: 10px 0px;
        }
  }
`;


export default function WelcomePage() {

  return (
    <MainWrapper>
    <Title intro={'Bienvenue sur le site de '} 
    highlightedText={'SportSee !'} 
    text={'Veuillez sélectionner un profil pour voir une démonstration...'} />

        <Link to='/user/12/'><img src={karl} alt=''/>Karl</Link>
        <Link to='/user/18/'><img src={cecilia} alt=''/>Cecilia</Link>
    </MainWrapper>
    )
}
