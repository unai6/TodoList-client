import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { login } from '../api/apiCalls';
import { useHistory } from "react-router-dom";


import { LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/index';

export const AuthState = props => {
  
  const initialState = {
    user: localStorage.getItem("user") ,
    token: localStorage.getItem("token"),
    loading: true  
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const history = useHistory();


  const authenticate = async (data) => {
    try{
      const result = await login(data);
    
      if (result.status === 200) {
        dispatch({type:LOGIN_SUCCESS, payload: result.data})
   
         history.push(`/dashboard/${result.data.user.userId}`);
 
         } else {
           dispatch({ type: LOGIN_ERROR, payload: result.status })
           history.push(`/login`);
         }

   } catch(error) {
          dispatch({type:LOGIN_ERROR, payload: error})

      }
      
  };




  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isVerified: state.isVerified,
        isCompleted: state.isCompleted,
        loading: state.loading,
        authenticate,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

