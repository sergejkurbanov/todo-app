import React from 'react'
import styled from 'styled-components'

const Checkbox = props => (
  // eslint-disable-next-line
  <CheckboxWrapper role="img" aria-label="check mark" {...props}>
    ✔️
  </CheckboxWrapper>
)

const CheckboxWrapper = styled.span`
  border-radius: ${props => props.theme['border-radius']};
  border: 0.2rem solid ${props => props.theme['color-gray']};
  width: 2.5rem;
  height: 2.5rem;
  font-size: ${props => (props.isChecked ? '2.2rem' : '0')};
  line-height: 1.5rem;
  cursor: pointer;
  transition-duration: 0.1s;

  &:hover {
    border-color: ${props => props.theme['color-gray--dark']};
  }
`

export default Checkbox
