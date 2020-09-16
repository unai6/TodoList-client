import React, { useEffect, useState } from 'react';
import '../CSS/dashboard.css'
import { getUserTasks } from '../api/apiCalls';
import { Link } from 'react-router-dom'
import Moment from 'react-moment';


const AllTasks = (props) => {


    const [, setData] = useState('')
    const [userTasks, setUserTasks] = useState([])
  



    useEffect(() => {
        const getDashboard = async () => {
            const result = await getUserTasks(props.match.params.userId);
            setData(result.data);
            setUserTasks(result.data.tasks)
        };

        getDashboard()
    }, [props.match.params.userId]);


    return (
        <div className='bg-component' data-test='app-component'>
            <Link to={`/create-task/${props.match.params.userId}`}><button className='btn-create-task'> + NUEVA TAREA</button></Link>
            <div className='div-tasks'>
                <div className='d-flex justify-content-between mb-3'>
                    <span className='tasks-headers'>MIS TAREAS</span>
                    <span className='tasks-headers'>FECHA DE CREACIÓN</span>
                </div>
                {

                    userTasks.map((task, index) => {

                        return (
                            <div key={index} className='d-flex justify-content-between'>
                                <div className='task-name p-2'> {
                                    task.completed ?
                                        <del>

                                            <span className=
                                                {
                                                    task.completed === false ?
                                                        'text-danger' :
                                                        task.completed === true ?
                                                            'text-success' :
                                                            (task.category === 'Trabajo' || task.category === 'Supermercado') && task.important === true && task.completed === false ?
                                                                'text-info' :
                                                                task.category && !task.important === true && task.completed === false === 'Supermercado' ?
                                                                    'text-dark' :
                                                                    null
                                                }>
                                                {task.name}
                                            </span>
                                        </del>
                                        :
                                        <span className=
                                            {
                                                task.completed === false ?
                                                    'text-danger' :
                                                    task.completed === true ?
                                                        'text-success' :
                                                        (task.category === 'Trabajo' || task.category === 'Supermercado') && !task.important === true ?
                                                            'text-info' :
                                                            task.category && !task.importantes === 'Supermercado' ?
                                                                'text-dark' :
                                                                null
                                            }>
                                            {task.name}
                                        </span>
                                }
                                    <span className={
                                        task.completed === false ?
                                            'text-danger taskBall-1' :
                                            task.completed === true ?
                                                'text-success taskBall-1' :
                                                (task.category === 'Trabajo' || task.category === 'Supermercado') && !task.important === true ?
                                                    'text-info taskBall-1' :
                                                    task.category && !task.importantes === 'Supermercado' ?
                                                        'text-dark taskBall-1' :
                                                        null
                                    }>
                                        {<i className="fas fa-circle ball-state"></i>}
                                    </span>
                                    
                                    <span className={
                                        task.important ?
                                        'text-info' :
                                        'text-dark'
                                    }>
                                    {<i className="fas fa-circle ball-state"></i>}
                                    </span>
                                </div>
                                <div>
                                    <span className='date'><Moment format="D MMM YYYY">{task.createdAt}</Moment></span>
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

export default AllTasks