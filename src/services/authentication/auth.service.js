import * as firebase from 'firebase';

export const loginRequest = (email, password) =>
  firebase.default.auth().signInWithEmailAndPassword(email, password);
