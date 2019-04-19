import { auth } from './firebase'

export const createUser = ({ email, password }) =>
  auth.createUserWithEmailAndPassword(email, password)

export const loginUser = ({ email, password }) =>
  auth.signInWithEmailAndPassword(email, password)

export const logoutUser = () => auth.signOut()

const usersApi = {
  createUser,
  loginUser,
  logoutUser,
}

export default usersApi
