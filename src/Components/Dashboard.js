import React , { useEffect} from 'react';
import SideBar from './SideBar';
import '../CSS/dashboard.css'
import { getDashboard } from '../api/apiCalls'
import {logout} from '../api/apiCalls';
import { useHistory } from "react-router-dom";

const Dashboard = (props) => {
 
   const history = useHistory();
   
    useEffect(() => {
        const getUserData = async () => {
            await getDashboard(props.match.params.userId)
        }

        getUserData()
    }, [props.match.params.userId]);

    const handleClickLogout = () => {
        logout()
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history.push('/');
    
      }
    
    return (
        <div data-test='app-component'>
            <div >
                <img className='logo' src='/list-2389219_640-removebg-preview.png' alt='pic' data-test='image-logo' />
                            <h2 className='h2-name'>Hola Nombre</h2>
                            <p className='p-title-tasks'>Estas son tus últimas tareas.</p>
                                
                            <SideBar {...props} data-test='sidebar-component'/>
            </div>
            
              
        <button onClick={handleClickLogout}>Cerrar Sesión</button>
        </div>
    )
}

export default Dashboard