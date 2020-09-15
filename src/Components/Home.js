import React from 'react'
import '../CSS/home.css';
import {Link} from 'react-router-dom';

export const Home = () => {
    

    let user = localStorage.getItem('user');
    let currentUserId;

    if (user !== null) {
      currentUserId = JSON.parse(user)
      
    }

    return (
        <div className='background-home'>
        <Link to='/signup' ><button>Registrarse</button></Link>
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
