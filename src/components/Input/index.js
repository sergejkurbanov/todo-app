import React from 'react'
import styled from 'styled-components'
import Label from './subcomponents/Label'

const Input = props => (
  <Label>
    {props.label}
    <InputWrapper {...props} />
  </Label>
)

const InputWrapper = styled.input`
  border: none;
  padding: 0.5rem;
  margin-top: ${props => (props.label ? '0.5rem' : 0)};
  width: 100%;
  font-family: inherit;
  border-radius: ${props => props.theme['border-radius']};
  box-shadow: 0 0 0 1px ${props => props.theme['color-gray']};

  &:hover {
    box-shadow: 0 0 0 1px ${props => props.theme['color-gray--dark']};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme['color-primary']};
  }
`

export default Input
