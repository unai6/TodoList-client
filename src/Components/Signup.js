import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { signup } from '../api/apiCalls';
import { useHistory, Link } from "react-router-dom";

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
        <Link to={`/`} className='text-info ml-3'>{'< Atrás'}</Link> 
        <h3 className='text-info text-center mt-4'>Crea tu cuenta</h3>
            <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
                {errors.name && <span> {errors.name.message ? errors.name.message : 'Este campo es obligatorio'} </span>}
                <span>{error}</span>
                <input
                    className='form-control mb-2'
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
                    className={errors.email ? 'form-control signup-fields mx-auto border-danger mb-2' : 'form-control signup-fields mx-auto mb-2'}
                    ref={register({
                        required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                    })} />
                {errors.nickName && <span> {errors.nickName.message ? errors.nickName.message : 'Este campo es obligatorio'} </span>}
                <input
                    className='form-control mb-2'
                    name='nickName'
                    type='text'
                    ref={register({ required: true })}
                    placeholder='Avatar'
                />
                {errors.password && <span> {errors.password.message ? errors.password.message : 'Este campo es obligatorio'} </span>}
                <input
                    className='form-control mb-2'
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
                <span className='ml-2'>Recuérdame</span>
                {
                    isLoading ?
                        <button className='btn btn-info d-block mx-auto mt-3'>Registrarse</button>
                        :
                        <p className='text-success'>Gracias por registrate</p>
                }
            </form>
        </div>
    )
}
