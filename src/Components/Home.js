    import React from 'react'
    import '../CSS/home.css';
    import { Link } from 'react-router-dom';
    import { signUpWithGoogle } from '../api/apiCalls';
    import { GoogleLogin } from 'react-google-login';
    import { useHistory } from 'react-router-dom'

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
                const result = await signUpWithGoogle(data);

                localStorage.setItem('token', result.data.token)
                localStorage.setItem('user', JSON.stringify(result.data.user))
                history.push(`/dashboard/${result.data.user._id}`)
                document.location.reload()


            } catch (error) {
                console.log(error)
            }
        }


        return (
            <div className='background-home d-flex flex-column justify-content-center mx-auto'>
                <div id='wave'></div>
                <div className=' w-50 align-self-center d-flex flex-column justify-content-center mx-auto'>
                    <Link to='/signup' ><button className='btn btn-info p-2 mb-3'>Registrarse</button></Link>
                    <>
                        {
                            user ?

                                <Link to={`/dashboard/${currentUserId.userId}`} ><button className='btn btn-info p-2 mb-3'>Ir a mi escritorio</button> </Link>

                                :
                                <Link to='/login' ><button className='btn btn-info p-2 mb-3'>Iniciar Sesión</button> </Link>

                        }
                    </>
                    <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText="Registrarse con Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        redirectUri={'https://todo.unaigo.com'}
                        className='w-100 text-center'
                    />

                </div>
                <div id='wave2'></div>        
            </div>
        )
    }
