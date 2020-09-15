import React from 'react';
import '../CSS/dashboard.css'
import { Redirect  } from "react-router-dom";

const Nav = () => {

   
    const user= JSON.parse(localStorage.getItem('user'))


    const handleClickLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        document.location.reload()
        return <Redirect to={'/'} />

    }

    return (
        <div data-test='app-component'>
            <button className='btn-logout d-block ml-auto mb-4 mr-2 mt-2' onClick={handleClickLogout}>[ Cerrar Sesión ]</button>
            <div>
                <h2 className='h2-name'>Hola {user.nickName}</h2>
                <p className='p-title-tasks'>Estas son tus últimas tareas.</p>
            </div>

        </div>
    )
}

export default Nav