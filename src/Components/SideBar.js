import React, { useState } from 'react';
import '../CSS/slideMenu.css';
import { slide as Menu } from "react-burger-menu";
import { useHistory  } from "react-router-dom";

const SideBar = () => {
    const history = useHistory()
    const [menuOpen, setMenuOpen] = useState(true);
    const user = JSON.parse(localStorage.getItem('user'))
    


    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen)
      }
    const closeMenuHandler = () => {
        setMenuOpen(!menuOpen)
    }

    const handleHome = () => {
        history.push(`/dashboard/${user.userId}`);
        document.location.reload();
    }
    return (
        <div>
            <Menu onStateChange={(state) => handleStateChange(state)} className='userMenu' isOpen={menuOpen} disableCloseOnEsc disableAutoFocus customBurgerIcon={<span className='btn-categories'>CATEGORÍAS</span>} >
                
                <button onClick = {handleHome} onClickCapture={closeMenuHandler} className="menu-item  bm-item btn-handler">
                    INICIO
                </button>
               <button onClick={closeMenuHandler} className="menu-item  bm-item btn-handler">
               <a className='text-light' href={`/${user.userId}/alltasks`}> MIS TAREAS</a>
                </button>
            
                <button onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-danger font-weight-bold">
                <a className='text-danger ' href={`/${user.userId}/pendingTasks`}> PENDIENTES </a>
                </button>
                <button onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-success font-weight-bold">
                <a className='text-success ' href={`/${user.userId}/completedTasks`}> COMPLETADAS </a>
                </button>
                <button onClick={closeMenuHandler} className="menu-item  bm-item btn-handler text-info font-weight-bold">
                    IMPORTANTES
                </button>
                <button onClick={closeMenuHandler} className="menu-item  bm-item btn-handler">
                    TRABAJO
                </button>
                <button onClick={closeMenuHandler} className="menu-item  bm-item btn-handler">
                    SUPERMERCADO
                </button>

            </Menu>
        </div>
    )
}
export default SideBar