import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: ${props => props.theme['border-radius']};
  border: 0.2rem solid;
  color: #282c34;
  margin: 0.1rem 0.3rem;
  padding: 0.1rem 0.5rem;
  font-size: inherit;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
  &:focus {
    outline-color: black;
  }
`

export default Button
