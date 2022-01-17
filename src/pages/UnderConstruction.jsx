import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors'

/**
 * CSS for the component using styled.components
 */
const NoticeWrapper = styled.main`
  align-items: center;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  h1 {
    font-size: clamp(5rem, 11vw, 12.875rem);
    font-weight: 700;
    margin-bottom: 3rem;
    margin-top: 10rem;
  }

  p {
    font-size: clamp(1.125rem, 2.5vw, 3rem);
    font-weight: 500;
    margin-bottom: 8.313rem;
    text-align: center;
  }
`;

const ReturnLink = styled(Link)`
  color: ${colors.primary};
  font-size: clamp(0.875rem, 1.5vw, 1.375rem);
  font-weight: 500;
  margin-bottom: 5rem;
`;

/**
 * Component to render UnderConstruction page
 * @function UnderConstruction
 * @returns {JSX}
 */
const UnderConstruction = () => {
  
  return (
    <NoticeWrapper>
      <h1>Désolé</h1>
      <p>Cette page est en cours de construction.</p>
      <ReturnLink to="/">Retourner sur la page d’accueil</ReturnLink>
    </NoticeWrapper>
  )
}

export default UnderConstruction

