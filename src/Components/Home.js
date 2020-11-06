import React from 'react'
import '../CSS/home.css';
import { Link } from 'react-router-dom';
import { signUpWithGoogle } from '../api/apiCalls';
import { GoogleLogin } from 'react-google-login';
import {useHistory} from 'react-router-dom'

export const Home = () => {
    const history = useHistory()
    const CLIENT_ID = '897202844317-e4dqh3eifnft6p47olbqfkm0iv5fu9k2.apps.googleusercontent.com'
    let user = localStorage.getItem('user');
    let currentUserId;

    if (user !== null) {
        currentUserId = JSON.parse(user)

    }

    const responseGoogle = async (data) => {
        try {
            const result = await signUpWithGoogle(data)
            console.log(result)
            if(!result) {
                history.push('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }





    return (
        <div className='background-home'>
            <Link to='/signup' ><button>Registrarse</button></Link>
            <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                redirectUri={'https://todo.unaigo.com'}

            />,
            {/* <a href={googleData}>Login with Google</a> */}
            <>
                {
                    user ?

                        <Link to={`/dashboard/${currentUserId.userId}`} ><button>Ir a mi escritorio</button> </Link>

                        :
                        <Link to='/login' ><button>Iniciar Sesión</button> </Link>

                }
            </>

        </div>
    )
}
