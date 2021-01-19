import React, { useState } from 'react';
import '../CSS/slideMenu.css';
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const SideBar = () => {

    const [menuOpen, setMenuOpen] = useState(true);
    const user = JSON.parse(localStorage.getItem('user'))



    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen)
    }
    const closeMenuHandler = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <div>
            <Menu onStateChange={(state) => handleStateChange(state)} className='userMenu' isOpen={menuOpen} disableCloseOnEsc disableAutoFocus customBurgerIcon={<span className='btn-categories'>MENÚ</span>} >

                {

                    user.userId ?
                        <>
                            <p className='text-center'>
                                <Link onClickCapture={closeMenuHandler} className="menu-item  bm-item btn-handler" to={`/dashboard/${user.userId}`}>
                                    INICIO
                            </Link>
                            </p>

                            <p className='text-center'>
                                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-danger font-weight-bold" to={`/${user.userId}/pendingTasks`}>
                                    PENDIENTES
                            </Link>
                            </p>

                            <p className='text-center'>
                                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-success font-weight-bold" to={`/${user.userId}/completedTasks`}>
                                    COMPLETADAS
                            </Link>
                            </p>

                            <p className='text-center'>
                                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-warning font-weight-bold" to={`/${user.userId}/importantTasks`}>
                                    IMPORTANTES
                            </Link>
                            </p>


                        </>
                        :
                        <>
                            <p className='text-center'>
                                <Link onClickCapture={closeMenuHandler} className="menu-item  bm-item btn-handler" to={`/dashboard/${user._id}`}>
                                    INICIO
                            </Link>
                            </p>

                            <p className='text-center'>
                                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-danger font-weight-bold" to={`/${user._id}/pendingTasks`}>
                                    PENDIENTES
                            </Link>
                            </p>

                            <p className='text-center'>
                                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-success font-weight-bold" to={`/${user._id}/completedTasks`}>
                                    COMPLETADAS
                            </Link>
                            </p>

                            <p className='text-center'>
                                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-warning font-weight-bold" to={`/${user._id}/importantTasks`}>
                                    IMPORTANTES
                            </Link>
                            </p>



                        </>

                }

            </Menu>
        </div>
    )
}
export default SideBar