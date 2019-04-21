import React from 'react'
import Todo from 'components/Todo'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => (
  <React.Fragment>
    {todos.map(({ id, text, isCompleted }) => (
      <Todo
        key={id}
        remove={() => deleteTodo({ id, text, isCompleted })}
        complete={() => toggleTodo(id)}
        isCompleted={isCompleted}
      >
        {text}
      </Todo>
    ))}
  </React.Fragment>
)

export default TodoList
