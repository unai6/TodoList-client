import React, { useEffect, useState } from 'react';
import '../CSS/dashboard.css'
import { getUserData } from '../api/apiCalls'
import {Link} from 'react-router-dom'


const Dashboard = ( props ) => {


    const [, setData] = useState('')
    const [userTasks, setUserTasks] = useState([])


    useEffect(() => {
        const getDashboard = async () => {
            const result = await getUserData(props.match.params.userId);

            setData(result.data);
            setUserTasks(result.data.tasks)
        };

        getDashboard()
    }, [props.match.params.userId]);


    return (
        <div className='bg-component' data-test='app-component'>
            <Link to={`/create-task/${props.match.params.userId}`}><button className='btn-create-task'> + NUEVA TAREA</button></Link>
            <div className='div-tasks'> {
                userTasks.map((task, index) => {
                    return (
                        <div className='d-flex justify-content-around'>
                        <div key={index}>
                            <span>{task.name}</span>
                        </div>
                        <div key={index}>
                            <span>{task.createdAt}</span>
                        </div>
                        </div>
                    )
                })
            }
            <div className='vertical-lign'></div>
            </div>
      
        </div>
    )
}

export default Dashboard