import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors'


/**
 * CSS for the component using styled.components
 */
const Title = styled.div`
  color: ${colors.primary};
`;



export default function WelcomePage() {

  return (
    <Title>
        <h1>Démonstration : Bienvenue sur le site de SportSee !</h1>
        <Link to='/user/12/'><h2>Karl</h2></Link>
        <Link to='/user/18/'><h2>Cecilia</h2></Link>
    </Title>
    )
}
