import React, { useState } from 'react';
import '../CSS/slideMenu.css';

const SideBar = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const handleStateChange = () => {
        setMenuOpen(!menuOpen)
    }
    const closeMenuHandler = () => {
        setMenuOpen(false)
    }

    return (
        <div className='bg-component'>
        <div className='div-buttons'>
            <button className='btn-categories' onClick={handleStateChange}> CATEGORÍAS</button>
            <button className='btn-categories'> + NUEVA CATEGORÍA</button>
        </div>
                    
            {
                menuOpen ?

                    <div className='userMenu slide-right'>
                        <button className='close-menu' onClick={closeMenuHandler}><i className="far fa-times-circle close-menu"></i></button>
                        <button onClick={closeMenuHandler} className="menu-item bm-icon bm-item btn-handler btn-homeinfo">
                            <i className="fas fa-home"></i> <a className='a-links' href='#Home'>PENDIENTES</a>
                        </button>
                        <button onClick={closeMenuHandler} className="menu-item bm-icon bm-item btn-handler btn-homeinfo">
                            <i className="far fa-address-card"></i> <a className='a-links' href='#About'>COMPLETADAS</a>
                        </button>
                        <button onClick={closeMenuHandler} className="menu-item bm-icon bm-item btn-handler btn-homeinfo portfolio">
                            <i className="fas fa-folder-open"></i> <a className='a-links' href='#PortFolio'>TRABAJO</a>
                        </button>
                        <button onClick={closeMenuHandler} className="menu-item bm-icon bm-item btn-handler btn-homeinfo">
                            <i className="fas fa-envelope-open-text"></i> <a className='a-links' href='#Contact'>SUPERMERCADO</a>
                        </button>
                        <button onClick={closeMenuHandler} className="menu-item bm-icon bm-item btn-handler btn-homeinfo">
                            <i className="fas fa-envelope-open-text"></i> <a className='a-links' href='#Contact'>IMPORTANTES</a>
                        </button>
                    </div>
                    :
                    <div className='userMenu slide-left'>
                        <button className='close-menu' onClick={closeMenuHandler}><i className="far fa-times-circle close-menu"></i></button>
                        <button onClick={closeMenuHandler} className="menu-item bm-icon bm-item btn-handler btn-homeinfo">
                            Home
                        </button>
                        <button onClick={closeMenuHandler} className="menu-item bm-icon bm-item btn-handler btn-homeinfo">
                             About
                        </button>
                        <button onClick={closeMenuHandler} className="menu-item bm-icon bm-item btn-handler btn-homeinfo portfolio">
                            Portfolio
                        </button>
                        <button onClick={closeMenuHandler} className="menu-item bm-icon bm-item btn-handler btn-homeinfo">
                             Contact
                        </button>
                    </div>
            }

        </div>
    )
}
 export default SideBar