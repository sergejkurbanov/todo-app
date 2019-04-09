import React from 'react'
import { ReactComponent as Trash } from 'icons/trash.svg'
import styled from 'styled-components'

const RemoveButton = ({ onClick }) => (
  <RemoveButtonWrapper
    onClick={e => {
      e.stopPropagation()
      onClick()
    }}
  >
    <Trash />
  </RemoveButtonWrapper>
)

const RemoveButtonWrapper = styled.div`
  height: 100%;
  cursor: pointer;
  padding: 0 0.8rem;
  transition-duration: 0.2s;
  border-top-right-radius: ${props => props.theme['border-radius']};
  border-bottom-right-radius: ${props => props.theme['border-radius']};
  stroke: ${props => props.theme['color-main--secondary']};
  border-left: 0.2rem solid ${props => props.theme['color-main--secondary']};
  display: grid;
  align-items: center;

  &:hover {
    stroke: ${props => props.theme['color-white']};
    background-color: ${props => props.theme['color-main--secondary']};
  }
`
export default RemoveButton
