import styled from 'styled-components'

const Input = styled.input`
  border: 2px solid gray;
  border-radius: ${props => props.theme['border-radius']};
  padding: 0.5rem;
  width: 100%;
  font-family: inherit;
  font-size: 2rem;

  &:hover {
    border-color: black;
  }
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px ${props => props.theme['color-main--primary']};
  }

  @media only screen and (min-width: ${props => props.theme['screen-xs']}) {
    width: 50rem;
  }
`

export default Input
