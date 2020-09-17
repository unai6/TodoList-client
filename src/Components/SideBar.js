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
            <Menu onStateChange={(state) => handleStateChange(state)} className='userMenu' isOpen={menuOpen} disableCloseOnEsc disableAutoFocus customBurgerIcon={<span className='btn-categories'>CATEGORÍAS</span>} >

                <Link onClickCapture={closeMenuHandler} className="menu-item  bm-item btn-handler" to={`/dashboard/${user.userId}`}>
                    INICIO
                </Link>

                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler" to={`/${user.userId}/alltasks`}>
                    MIS TAREAS
                </Link>

                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-danger font-weight-bold" to={`/${user.userId}/pendingTasks`}>
                    PENDIENTES
                </Link>

                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-success font-weight-bold" to={`/${user.userId}/completedTasks`}>
                    COMPLETADAS
                </Link>
                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-warning font-weight-bold" to={`/${user.userId}/completedTasks`}>
                    IMPORTANTES
                </Link>
                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-light font-weight-bold" to={`/${user.userId}/completedTasks`}>
                    TRABAJO
                </Link>
                <Link onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-light font-weight-bold" to={`/${user.userId}/completedTasks`}>
                    SUPERMERCADO
                </Link>

            </Menu>
        </div>
    )
}
export default SideBar