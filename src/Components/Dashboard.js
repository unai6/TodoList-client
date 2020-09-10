import React , {useState} from 'react';
import SideBar from './SideBar';
import '../CSS/dashboard.css'

const Dashboard = () => {
 
    return (
        <div data-test='app-component'>
            <div >
                <img className='logo' src='/list-2389219_640-removebg-preview.png' alt='pic' data-test='image-logo' />
                            <h2 className='h2-name'>Hola Nombre</h2>
                            <p className='p-title-tasks'>Estas son tus últimas tareas.</p>
                                
                            <SideBar data-test='sidebar-component'/>
            </div>
            
              

        </div>
    )
}

export default Dashboard