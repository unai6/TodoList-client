import React, { useEffect, useState } from 'react';
import '../CSS/dashboard.css'
import { getUserData, editTask } from '../api/apiCalls';
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const Dashboard = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const [, setData] = useState('')
    const [userTasks, setUserTasks] = useState([])
    const [activeItem, setActiveItem] = useState('');
    const [category, setCategory] = useState(['Seleccionar', 'SuperMercado', 'Trabajo', 'Otros']);
    const [error, setError] = useState('')
    const categoryMap = category.map(category => category);
    const [infoSent, setInfoSent] = useState(false);
    const handleCategory = () => {setCategory(categoryMap)}


    const hideModal = () => {
        setIsOpen(false);
    };

    const showModal = (task) => {
        setIsOpen(true);
        setActiveItem(task)
    };


    useEffect(() => {
        const getDashboard = async () => {
            const result = await getUserData(props.match.params.userId);
            setData(result.data);
            setUserTasks(result.data.tasks)
        };
        
        getDashboard()
    }, [props.match.params.userId, infoSent]);
    
    const EditProfile = async (data) => {
        try{
            await editTask(props.match.params.userId, activeItem._id, data)
            setInfoSent(true)
        }catch(error){
            setError('Lo sentimos, No se puede actualizar esta tarea')
        }
        
    }
    

    return (
        <div className='bg-component' data-test='app-component'>
            <Link to={`/create-task/${props.match.params.userId}`}><button className='btn-create-task'> + NUEVA TAREA</button></Link>
            <div className='div-tasks'>
                <div className='d-flex justify-content-between mb-3'>
                    <span className='tasks-headers'>ÚLTIMAS TAREAS</span>
                    <span className='tasks-headers'>FECHA DE CREACIÓN</span>
                </div>
                {

                    userTasks.map((task, index) => {

                        return (
                            <div key={index} className='d-flex justify-content-between'>
                                <div className='task-name p-2' onClick={() => showModal(task)} > {
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
                                            'text-danger' :
                                            task.completed === true ?
                                                'text-success' :
                                                (task.category === 'Trabajo' || task.category === 'Supermercado') && !task.important === true ?
                                                    'text-info' :
                                                    task.category && !task.importantes === 'Supermercado' ?
                                                        'text-dark' :
                                                        null
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
            {
                activeItem ? 
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Body>
                    <form onSubmit={handleSubmit(EditProfile)}>
                    {errors.name && <span> {errors.name.message ? errors.name.message : 'Este campo es obligatorio'} </span>}
                    <span>{error}</span>
                    <input
                        className='form-control'
                        name='name'
                        type='text'
                        placeholder='Nombre'
                        ref={register({ required: true })}
                    />
                        {errors.category && <span> {errors.category.message ? errors.nickName.message : 'Este campo es obligatorio'} </span>}
          
                    <div>
                        <label>
                            Categoría
                            <select
                                name='category'
                                className='form-control'
                                ref={register({ required: true })}
                                onChange={e => handleCategory(e)}
                            >
                                {
                                    categoryMap.map((doc, key) => {
                                        return <option key={key} value={doc}>{doc}</option>;
                                    })

                                }
                            </select>
                        </label>
                    </div>
                    {errors.description && <span> {errors.description.message ? errors.description.message : 'Este campo es obligatorio'} </span>}
                    <input
                        className='form-control'
                        name='description'
                        type='text'
                        ref={register({ required: true })}
                        placeholder='Descripción'
                    />

                    <button>Actualizar</button>
                    </form>
                </Modal.Body>
            </Modal>
            :
            null
            }
        </div>
    )
}

export default Dashboard