import React, {useState } from 'react';
import { useForm } from "react-hook-form";
import {signup} from '../api/apiCalls';
import { useHistory } from "react-router-dom";

export const Signup = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [isLoading, setisLoading] = useState(true)
    const [error, setError] = useState('')
    
    const onSubmit = async data => {
        try {
          await signup(data);
            setisLoading(false);
            history.push('/login')

        } catch (error) {
            setError('ya existe un usuario con ese avatar')
        }
    };

    
    return (
        <div>
                 <form onSubmit={handleSubmit(onSubmit)}>
                 {errors.name && <span> {errors.name.message ? errors.name.message : 'Este campo es obligatorio'} </span>}
                <span>{error}</span>
                 <input
                    name='name'
                    type='text'
                    placeholder='Nombre'
                    ref={register({required:true})}
                />
                  {errors.nickName && <span> {errors.nickName.message ? errors.nickName.message : 'Este campo es obligatorio'} </span>}
                <input
                    name='nickName'
                    type='text'
                    ref={register({required:true})}
                    placeholder='Avatar'
                />
                  {errors.password && <span> {errors.password.message ? errors.password.message : 'Este campo es obligatorio'} </span>}
                   <input
                    name='password'
                    type='text'
                    ref={register({required:true})}
                    placeholder='Contraseña'
                />
                   <input
                   type='checkbox'
                    name='remember'
                    ref={register}
                />
                {
                    isLoading ?
                <button>Registrarse</button>
                :
                <p>Gracias por registrate</p>
                }
            </form>
        </div>
    )
}
