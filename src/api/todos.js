import firestore from './firestore'

const todosDb = firestore.collection('todos')

export const deleteTodo = ({ id }) => todosDb.doc(id).delete()

export const completeTodo = ({ id, isCompleted }) =>
  todosDb.doc(id).set({ isCompleted }, { merge: true })

export const createTodo = ({ text }) =>
  todosDb.add({ text, isCompleted: false })

export const createGetTodosSocket = callback =>
  todosDb.onSnapshot(data => {
    const newTodos = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    callback(newTodos)
  })

const todosApi = {
  deleteTodo,
  completeTodo,
  createTodo,
  createGetTodosSocket,
}

export default todosApi
