import React from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'

const RemoveButton = ({ onClick }) => (
  <RemoveButtonWrapper
    onClick={e => {
      e.stopPropagation()
      onClick()
    }}
  >
    <Icon size="24" icon="trash" />
  </RemoveButtonWrapper>
)

const RemoveButtonWrapper = styled.div`
  height: 100%;
  cursor: pointer;
  padding: 0 0.5rem;
  transition-duration: 0.2s;
  border-top-right-radius: ${props => props.theme['border-radius']};
  border-bottom-right-radius: ${props => props.theme['border-radius']};
  fill: ${props => props.theme['color-main--secondary']};
  border-left: 0.1rem solid ${props => props.theme['color-main--secondary']};
  display: grid;
  align-items: center;

  &:hover {
    fill: ${props => props.theme['color-white']};
    background-color: ${props => props.theme['color-main--secondary']};
  }
`
export default RemoveButton
