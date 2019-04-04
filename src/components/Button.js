import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme['color-main--secondary']};
  border: 0.2rem solid ${props => props.theme['color-main--secondary']};
  border-radius: ${props => props.theme['border-radius']};
  color: ${props => props.theme['color-white']};
  padding: 0.5rem 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    color: ${props => props.theme['color-main--secondary']};
    background-color: ${props => props.theme['color-white']};
  }
  &:focus {
    outline-color: black;
  }
`

export default Button
