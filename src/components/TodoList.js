import React from 'react'
import Todo from 'components/Todo'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => (
  <React.Fragment>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        remove={() => deleteTodo(todo)}
        complete={() => toggleTodo(todo.id)}
        isCompleted={todo.isCompleted}
      >
        {todo.text}
      </Todo>
    ))}
  </React.Fragment>
)

export default TodoList
