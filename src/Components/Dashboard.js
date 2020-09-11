import React , { useEffect, useState} from 'react';
import SideBar from './SideBar';
import '../CSS/dashboard.css'
import { getDashboard } from '../api/apiCalls'
import {logout} from '../api/apiCalls';
import { useHistory } from "react-router-dom";

const Dashboard = (props) => {
 
   const history = useHistory();
   const [data, setData] = useState('')
   const [userTasks, setUserTasks] = useState([])
   
    useEffect(() => {
        const getUserData = async () => {
          const result =  await getDashboard(props.match.params.userId)
            setData(result.data.authorizedData.user);
            setUserTasks(result.data.authorizedData.user.tasks)
        };

        getUserData()
    }, [props.match.params.userId]);
    
    console.log(data.tasks)
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
                            <h2 className='h2-name'>Hola {data.nickName}</h2>
                            <p className='p-title-tasks'>Estas son tus últimas tareas.</p>
                            <div> {
                                userTasks.map((task, index) => {
                                    return (
                                        <div key={index}>
                                        <p>{task.name}</p>
                                        </div>
                                    )
                                })
                            }
                            </div>
                                
                            <SideBar {...props} data-test='sidebar-component'/>
            </div>
            
              
        <button onClick={handleClickLogout}>Cerrar Sesión</button>
        </div>
    )
}

export default Dashboard