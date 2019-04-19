import React from 'react'
import styled from 'styled-components'
import Checkbox from 'components/Checkbox'
import Text from './subcomponents/Text'
import RemoveButton from './subcomponents/RemoveButton'

const Todo = ({ children, complete, remove, isCompleted }) => (
  <TodoWrapper
    onClick={() => {
      // If the user selected some text, don't toggle the todo
      const selectedText = getSelection().toString()
      if (!selectedText) complete()
    }}
  >
    <Checkbox isChecked={isCompleted} />
    <Text isCompleted={isCompleted}>{children}</Text>
    <RemoveButton onClick={remove} />
  </TodoWrapper>
)

const TodoWrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin: 0.5rem 0;
  background-color: ${props => props.theme['color-gray--light']};
  border-radius: ${props => props.theme['border-radius']};
  box-shadow: ${props => props.theme['box-shadow']};
  padding-left: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: ${props => props.theme['box-shadow--hover']};
  }
`

export default Todo
