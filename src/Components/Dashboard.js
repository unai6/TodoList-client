import React , {useState, useEffect} from 'react';
import SideBar from './SideBar';
import '../CSS/dashboard.css'
import {getDashboard} from '../api/apiCalls'

const Dashboard = (props) => {
 
    useEffect(() => {
        const getUserData = async () => {
            const result = await getDashboard(props.match.params.userId)
           console.log(result)
        }

        getUserData()
    }, [props.match.params.userId]);

    return (
        <div data-test='app-component'>
            <div >
                <img className='logo' src='/list-2389219_640-removebg-preview.png' alt='pic' data-test='image-logo' />
                            <h2 className='h2-name'>Hola Nombre</h2>
                            <p className='p-title-tasks'>Estas son tus últimas tareas.</p>
                                
                            <SideBar {...props} data-test='sidebar-component'/>
            </div>
            
              

        </div>
    )
}

export default Dashboard