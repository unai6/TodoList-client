import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import AuthContext from '../auth/authContext';

export const Login = () => {

    const { register, handleSubmit, errors } = useForm();
    const authContext = useContext(AuthContext);
    const { authenticate } = authContext;
    const [isLoading, setisLoading] = useState(true)
    const [error, setError] = useState(false)

    const onSubmit = async data => {
        try {
            await authenticate(data)
            setisLoading(false);
                
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='nickName'
                    type='text'
                    ref={register}
                />
                   <input
                    name='password'
                    type='text'
                    ref={register}
                />
                   <input
                   type='checkbox'
                    name='remember'
                    ref={register}
                />
            <button>Acceder en mi cuenta</button>
            </form>

        </div>
    )
}
