import React from 'react'
import Todo from 'components/Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => (
  <React.Fragment>
    {todos.map(({ id, text, isCompleted }) => (
      <Todo
        key={id}
        remove={() => deleteTodo(id)}
        complete={() => completeTodo({ id: id, isCompleted: !isCompleted })}
        isCompleted={isCompleted}
      >
        {text}
      </Todo>
    ))}
  </React.Fragment>
)

export default TodoList
