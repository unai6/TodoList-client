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
                <img className='logo' src='/list-2389219_640-removebg-preview.png' alt='pic' data-test='image-logo' />
                <h2 className='h2-name'>Hola {user.nickName}</h2>
            </div>

        </div>
    )
}

export default Nav