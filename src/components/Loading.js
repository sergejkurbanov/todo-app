import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
  }
  100%  {
    -webkit-transform: translate(-50%, -50%) rotate(360deg) ; 
  }
`

const Loading = styled.div`
  display: inline-block;
  animation: ${rotate} 1.2s linear infinite;
  border: 12px solid ${props => props.theme['color-primary--dark']};
  border-right-color: transparent;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
`

export default Loading
