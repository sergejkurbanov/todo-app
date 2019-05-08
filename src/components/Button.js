import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme['color-secondary']};
  border: 0.1rem solid ${props => props.theme['color-secondary']};
  border-radius: ${props => props.theme['border-radius']};
  color: ${props => props.theme['color-white']};
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  transition-duration: 0.2s;
  text-transform: uppercase;
  font-weight: 600;
  max-width: 10rem;

  &:hover {
    color: ${props => props.theme['color-secondary']};
    background-color: ${props => props.theme['color-white']};
  }
  &:focus {
    outline-color: ${props => props.theme['color-secondary']};
  }
`

export default Button
