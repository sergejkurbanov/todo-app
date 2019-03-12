import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'

const TodoBase = ({ children, className, complete, index }) => (
  <div className={className}>
    {children}
    <Button onClick={() => complete(index)}>Complete</Button>
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
