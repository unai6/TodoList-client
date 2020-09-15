import React, { useState } from 'react';
import '../CSS/slideMenu.css';
import { slide as Menu } from "react-burger-menu";

const SideBar = (props) => {

    const [menuOpen, setMenuOpen] = useState(true);

    const handleStateChange = () => {
        setMenuOpen(!menuOpen)
    }
    const closeMenuHandler = () => {
        setMenuOpen(false)
    }

    return (
        <div>
            <Menu onStateChange={(state) => handleStateChange(state)} className='userMenu' isOpen={menuOpen} disableCloseOnEsc disableAutoFocus >

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

            </Menu>
        </div>
    )
}
export default SideBar