
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../utils/style/colors'

/**
 * CSS for component using styled.components
 */
const HeadingWrapper = styled.div`
  color: ${colors.secondary};
  margin-bottom: 35px;

  h1 {
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-style: normal;
    font-weight: 500;
    margin: unset;
  }

  p {
    font-size: clamp(0.75rem, 1.250vw, 1.125rem);
    font-weight: 400;
  }

  span {
    color: ${colors.primary};
  }
`;

/**
 * Renders a title on the welcome & dashboard pages
 * @param {string} intro
 * @param {string} highlightedText
 * @param {string} text
 * @returns {JSX}
 */
export default function Title({intro, highlightedText, text}) {
  return (
    <HeadingWrapper>
      <h1>{intro} <span>{highlightedText}</span></h1>   
      <p>{text}</p>
    </HeadingWrapper>
  )
}

// Prototypes

Title.propTypes = {
  intro: PropTypes.string,
  highlightedText: PropTypes.string,
  text: PropTypes.string,
}
