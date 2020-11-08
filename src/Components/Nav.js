import React from 'react';
import '../CSS/dashboard.css'
import { Redirect  } from "react-router-dom";

const Nav = () => {

   
    const user = JSON.parse(localStorage.getItem('user'))

    const handleClickLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        document.location.reload()
        return <Redirect to={'/'} />

    }

    return (
        <div className='nav-div' data-test='app-component'>
            <button className='btn-logout d-block ml-auto mb-4 mr-2 mt-2' onClick={handleClickLogout}>[ Cerrar Sesión ]</button>
            <h2 className='h2-name'>Hola {user.nickName? user.nickName : user.given_name}</h2>
        </div>
    )
}

export default Nav