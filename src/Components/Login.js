import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { useForm} from "react-hook-form";
import AuthContext from '../auth/authContext';
import Loader from 'react-loader-spinner';

export const Login = () => {
    const [isLoading, setIsLoading] =  useState(false);
    const { register, handleSubmit } = useForm();
    const authContext = useContext(AuthContext);
    const { authenticate } = authContext;
    // const [isLoading, setisLoading] = useState(true)
    // const [error, setError] = useState(false)

    const onSubmit = async data => {
        setIsLoading(true)
       await authenticate(data)
    };

    return (
        <div>
        <Link to={`/`} className='text-info ml-3'>{'< Atrás'}</Link> 
        <h3 className='text-info text-center mt-4'>Entrar en mi cuenta</h3>
            <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='form-control mb-2'
                    name='email'
                    type='text'
                    placeholder='email'
                    ref={register({ required: true })}
                />
                <input
                    className='form-control mb-2'
                    name='password'
                    type='password'
                    placeholder='password'
                    ref={register({ required: true })}
                />
                <input
                    type='checkbox'
                    name='remember'
                    ref={register}
                />
                <span className='ml-2'>Recuérdame</span>
                {
                    isLoading ?
                    <Loader type="TailSpin" color="#00BFFF" className='d-block mx-auto' height={40} width={40} />  
                    :
                    <button className='btn btn-info d-block mx-auto mt-3'>Acceder en mi cuenta</button>
                }
            </form>

        </div>
    )
}
