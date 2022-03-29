import React, { useState, createContext } from 'react';
import * as firebase from 'firebase';
import { loginRequest } from './auth.service.js';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  firebase.default.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      // console.log('already logged in');
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, passowrd) => {
    setIsLoading(true);
    loginRequest(email, passowrd)
      .then((info) => {
        setTimeout(() => {
          setUser(info);
          setIsLoading(false);
        }, 7000);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError('Error: Password do not match');
      return;
    }
    firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((info) => {
        setUser(info);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    firebase.default
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};
