import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { signup } from '../api/apiCalls';
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
                    className='form-control'
                    name='name'
                    type='text'
                    placeholder='Nombre'
                    ref={register({ required: true })}
                />
                {errors.email && <span className='text-danger'> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}

                <input
                    type="text"
                    name="email"
                    placeholder='email'
                    className={errors.email ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({
                        required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                    })} />
                {errors.nickName && <span> {errors.nickName.message ? errors.nickName.message : 'Este campo es obligatorio'} </span>}
                <input
                    className='form-control'
                    name='nickName'
                    type='text'
                    ref={register({ required: true })}
                    placeholder='Avatar'
                />
                {errors.password && <span> {errors.password.message ? errors.password.message : 'Este campo es obligatorio'} </span>}
                <input
                    className='form-control'
                    name='password'
                    type='text'
                    ref={register({ required: true })}
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
