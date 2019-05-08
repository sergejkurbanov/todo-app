import styled, { keyframes, css } from 'styled-components'

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
  border: 0 solid ${props => props.theme['color-primary--dark']};
  border-right-color: transparent;
  border-radius: 50%;
  height: 0;
  width: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.2s ease-out;

  ${props =>
    props.isLoading &&
    css`
      width: 100px;
      height: 100px;
      border-width: 12px;
    `}
`

export default Loading
