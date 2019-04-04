import styled from 'styled-components'

const Input = styled.input`
  border: none;
  padding: 0.5rem;
  font-family: inherit;
  font-size: 2rem;
  border-radius: ${props => props.theme['border-radius']};
  box-shadow: 0 0 0 1px ${props => props.theme['color-gray']};

  &:hover {
    box-shadow: 0 0 0 1px ${props => props.theme['color-gray--dark']};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme['color-main--primary']};
  }
`

export default Input
