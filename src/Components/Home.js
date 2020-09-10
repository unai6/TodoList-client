import React from 'react'
import '../CSS/home.css';
import {Link} from 'react-router-dom';

export const Home = () => {
    

    let token = localStorage.getItem('user');
    let currentUserId;

    if (token !== null) {
      let parsedCurrentUserId = JSON.parse(token);
      currentUserId = parsedCurrentUserId.userId;
    
    }

    return (
        <div className='background-home'>
        <Link to='/signup' ><button>Registrarse</button></Link>
            <>
        {
            token ?

        <Link to={`/dashboard/${currentUserId}`} ><button>Ir a mi escritorio</button> </Link>
        
        :
        <Link to='/login' ><button>Iniciar Sesión</button> </Link>
        
        }
        </>

        </div>
    )
}
