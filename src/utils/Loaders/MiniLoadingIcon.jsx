// import colors from '../style/colors'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Keyframe for Loader component
 */
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

/**
 * CSS for the Loader component
 */
const Loader = styled.div`
  animation: ${rotate} 1s infinite linear;
  border-bottom-color: transparent;
  border-radius: 106px;   
  border: 8px solid ${props => props.primary ? '#fff' : '#FF0000'};
  padding: 15px;
`;

/**
 * Renders a loading icon (either white or red)
 * @function MiniLoadingIcon
 * @param {boolean} isWhite
 * @returns {JSX}
 */
const MiniLoadingIcon = ({ isWhite }) => {
    return (
      <span>
        {isWhite ? ( 
          <Loader primary /> ) 
        : ( 
          <Loader /> 
        )}      
      </span>
    )
}

export default MiniLoadingIcon

// Prototypes

MiniLoadingIcon.propTypes = {
  isWhite: PropTypes.bool,
}

