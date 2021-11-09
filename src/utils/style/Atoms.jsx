import colors from './colors'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 50px;
  border: 20px solid ${colors.primary};
  animation: ${rotate} 1s infinite linear;
  border-bottom-color: transparent;
  border-radius: 106px;
  height: 0;
  width: 0;
`

