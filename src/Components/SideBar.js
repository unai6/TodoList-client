import React, { useState } from 'react';
import '../CSS/slideMenu.css';
import { slide as Menu } from "react-burger-menu";

const SideBar = () => {

    const [menuOpen, setMenuOpen] = useState(true);
    const user= JSON.parse(localStorage.getItem('user'))
    


    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen)
      }
    const closeMenuHandler = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <div>
            <Menu onStateChange={(state) => handleStateChange(state)} className='userMenu' isOpen={menuOpen} disableCloseOnEsc disableAutoFocus customBurgerIcon={ <img className='logo' src='/list-2389219_640-removebg-preview.png' alt='pic' data-test='image-logo' />} >

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