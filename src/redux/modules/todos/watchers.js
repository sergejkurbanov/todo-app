import { takeEvery, put, take } from 'redux-saga/effects'
import * as types from './types'
import * as workers from './workers'

function* watchDeleteTodo() {
  yield takeEvery(types.DELETE_TODO, workers.deleteTodo)
}

function* watchCompleteTodo() {
  yield takeEvery(types.COMPLETE_TODO, workers.completeTodo)
}

function* watchCreateTodo() {
  yield takeEvery(types.CREATE_TODO, workers.createTodo)
}

function* watchTodoUpdates() {
  while (true) {
    try {
      const newTodos = yield take(workers.getTodosChannel)
      yield put({ type: types.GET_TODOS_SUCCESS, payload: { data: newTodos } })
    } catch (error) {
      yield put({ type: types.GET_TODOS_ERROR, payload: { error } })
    }
  }
}

const todoSagas = [
  watchCreateTodo,
  watchTodoUpdates,
  watchDeleteTodo,
  watchCompleteTodo,
]

export default todoSagas
