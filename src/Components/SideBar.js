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
                    MIS TAREAS
                </button>
            
                <button onClick={closeMenuHandler} className="menu-item  bm-item btn-handler">
                    PENDIENTES
                </button>
                <button onClick={closeMenuHandler} className="menu-item  bm-item btn-handler">
                    COMPLETADAS
                        </button>
                <button onClick={closeMenuHandler} className="menu-item  bm-item btn-handler">
                    SUPERMERCADO
                        </button>
                <button onClick={closeMenuHandler} className="menu-item  bm-item btn-handler">
                    IMPORTANTES
                </button>

            </Menu>
        </div>
    )
}
export default SideBar