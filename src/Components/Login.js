import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import AuthContext from '../auth/authContext';

export const Login = () => {

    const { register, handleSubmit } = useForm();
    const authContext = useContext(AuthContext);
    const { authenticate } = authContext;
    // const [isLoading, setisLoading] = useState(true)
    // const [error, setError] = useState(false)

    const onSubmit = data => {
        authenticate(data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='form-control'
                    name='email'
                    type='text'
                    placeholder='email'
                    ref={register({ required: true })}
                />
                <input
                    className='form-control'
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
                <button>Acceder en mi cuenta</button>
            </form>

        </div>
    )
}
