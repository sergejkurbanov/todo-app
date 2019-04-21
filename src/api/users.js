import uuid from 'uuid/v4'
import { auth, firestore } from './firebase'

const usersDb = firestore.collection('users')

export const createUser = async ({ email, password }) => {
  const authRes = await auth.createUserWithEmailAndPassword(email, password)

  usersDb.doc(authRes.user.uid).set({
    email,
    todos: [
      {
        id: uuid(),
        text: 'Log into this awesome app',
        isCompleted: true,
      },
      {
        id: uuid(),
        text: 'Try completing a todo by clicking it',
        isCompleted: false,
      },
    ],
  })
}

export const loginUser = ({ email, password }) =>
  auth.signInWithEmailAndPassword(email, password)

export const logoutUser = () => auth.signOut()

const usersApi = {
  createUser,
  loginUser,
  logoutUser,
}

export default usersApi
