import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyBzXSgCrU9EcfID_kzK13WMZCn-4OTiMBM',
  authDomain: 'sergejkurbanov-todo-app.firebaseapp.com',
  projectId: 'sergejkurbanov-todo-app',
})

const firestore = firebase.firestore()

export default firestore
