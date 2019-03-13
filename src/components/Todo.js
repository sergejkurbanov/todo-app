import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'

const TodoBase = ({ children, className, complete, index, remove }) => (
  <div className={className}>
    {children}
    <Button onClick={() => complete(index)}>Complete</Button>
    <Button onClick={() => remove(index)}>x</Button>
  </div>
)

const Todo = styled(TodoBase)`
  border: 1px solid;
  width: 32rem;
  padding: 0.2rem;

  ${props =>
    props.isCompleted &&
    css`
      background: yellow;
      text-decoration: line-through;
    `};
`

export default Todo
