import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {login} from '../api/apiCalls';
import {useHistory} from "react-router-dom"

import { LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/index';

export const AuthState = props => {
  const initialState = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
    loading: true
   }

  const history = useHistory();
  const [ state, dispatch ] = useReducer(AuthReducer, initialState);

  const authenticate = (data) => {
    login(data)
      .then(res=> {
       
        dispatch({ type: LOGIN_SUCCESS, payload: res })
        history.push(`/dashboard/${res.data.user.userId}`);
        document.location.reload()
      })
      .catch(err => { 
        dispatch({ type: LOGIN_ERROR, payload: err }) 
      })
  }

  return(
    <AuthContext.Provider
      value={{ 
        token: state.token,
        user: state.user,
        loading: state.loading,
        authenticate,
  
      }}
    >
    {props.children}
    </AuthContext.Provider>
  )
}