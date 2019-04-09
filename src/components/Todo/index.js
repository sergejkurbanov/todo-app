import React from 'react'
import styled from 'styled-components'
import Checkbox from 'components/Checkbox'
import Text from './components/Text'
import RemoveButton from './components/RemoveButton'

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
  position: relative;
  display: grid;
  width: 100%;
  background-color: ${props => props.theme['color-gray--light']};
  border-radius: ${props => props.theme['border-radius']};
  font-size: 2rem;
  grid-gap: 0.8rem;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  box-shadow: 0 0 2px 0 ${props => props.theme['color-gray']};
  padding-left: 0.8rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 2px 0 ${props => props.theme['color-gray--dark']};
  }

  @media only screen and (min-width: ${props => props.theme['screen-xs']}) {
    width: 50rem;
  }
`

export default Todo
