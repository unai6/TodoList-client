import React, { useEffect, useState } from 'react';
import '../CSS/dashboard.css'
import { getUserTasks, editTask, deleteTask } from '../api/apiCalls';
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const ImportantTasks = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const [, setData] = useState('')
    const [userTasks, setUserTasks] = useState([])
    const [activeItem, setActiveItem] = useState('');
    const [error, setError] = useState('')
    const [infoSent, setInfoSent] = useState(false);
    // const [category, setCategory] = useState(['Seleccionar', 'SuperMercado', 'Trabajo', 'Otros']);
    // const categoryMap = category.map(category => category);
    // const handleCategory = () => { setCategory(categoryMap) }
    const [handler, setHandler] = useState(false);

    const hideModal = () => {
        setIsOpen(false);
    };

    const handleTrueOrFalse = () => setHandler(!handler);

    const showModal = (task) => {
        setIsOpen(true);
        setActiveItem(task)
    };


    useEffect(() => {
        const getDashboard = async () => {
            const result = await getUserTasks(props.match.params.userId);
            setData(result.data);
            setUserTasks(result.data.tasks)
        };

        getDashboard()
    }, [props.match.params.userId]);


    const editTaskHandler = async (data) => {
        try {
            await editTask(props.match.params.userId, activeItem._id, data)
            setInfoSent(!infoSent)
            document.location.reload()
        } catch (error) {
            setError('Lo sentimos, No se puede actualizar esta tarea')
        }
    }
    const deleteTaskHandler = async (data) => {
        try{
            await deleteTask(props.match.params.userId, activeItem._id, data)

        }catch(error){
            console.log(error)
        }
    }


    return (
        <div className='bg-component' data-test='app-component'>
            <Link to={`/create-task/${props.match.params.userId}`}><button className='btn-create-task'> + NUEVA TAREA</button></Link>
            <div className='div-tasks'>
                <div className='d-flex justify-content-between mb-3'>
                    <span className='tasks-headers'>TAREAS IMPORTANTES</span>
                    <span className='tasks-headers'>FECHA DE CREACIÓN</span>
                </div>
                {

                    userTasks.map((task, index) => {

                        return (
                            <div key={index} className='d-flex justify-content-between'>

                                {
                                    task.important && !task.completed ?

                                        <>
                                            <div className='task-name p-2' onClick={() => showModal(task)} >

                                                <span className=
                                                    {
                                                        task.important && !task.completed?
                                                            'text-warning'
                                                            :
                                                            null
                                                    }>
                                                    {task.name}
                                                </span>

                                                <span className={
                                                             !task.completed ?
                                                                'text-danger taskBall-1' :
                                                                null
                                                }>
                                                    {task.important && !task.completed ? <i className="fas fa-circle ball-state"></i> : null}
                                                </span>

                                                <span className={
                                                    task.important ?
                                                        'text-warning' :
                                                        'text-dark'
                                                }>
                                                    {task.important ? <i className="fas fa-circle ball-state"></i> : null}
                                                </span>
                                            </div>
                                            <div>
                                                <span className='date'><Moment format="D MMM YYYY">{task.createdAt}</Moment></span>
                                            </div>
                                        </>
                                        :
                                        null
                                }

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
                            <form onSubmit={handleSubmit(editTaskHandler)}>
                                {errors.name && <span> {errors.name.message ? errors.name.message : 'Este campo es obligatorio'} </span>}
                                <span>{error}</span>
                                <label className='text-info font-weight-bold '>Nombre</label>
                                <input
                                    defaultValue={activeItem.name}
                                    className='form-control'
                                    name='name'
                                    type='text'
                                    placeholder='Nombre'
                                    ref={register}
                                />
                                {errors.category && <span> {errors.category.message ? errors.nickName.message : 'Este campo es obligatorio'} </span>}

                                <div>
                                    <label className='text-info font-weight-bold '>
                                        Categoría
                                        <input
                                            className='form-control'
                                            type='text'
                                            name='category'
                                            defaultValue={activeItem.category}
                                            ref={register}
                                        />
                                        {/* <select
                                            name='category'
                                            className='form-control'
                                            ref={register({required:true})}
                                            onChange={e => handleCategory(e)}
                                        >
                                            {
                                                categoryMap.map((doc, key) => {
                                                    return <option key={key} value={doc}>{doc}</option>;
                                                })

                                            }
                                        </select> */}
                                    </label>
                                </div>
                                {errors.description && <span> {errors.description.message ? errors.description.message : 'Este campo es obligatorio'} </span>}
                                <label className='text-info font-weight-bold '>Descripción</label>
                                <input
                                    className='form-control'
                                    name='description'
                                    type='text'
                                    ref={register}
                                    placeholder='Descripción'
                                    defaultValue={activeItem.description}
                                />


                                <div className="switch-button">
                                    <label className='text-info font-weight-bold '>Estado de la tarea</label>
                                    <input className="switch-button__checkbox" type="checkbox" id="switch-label" name="completed" onClick={handleTrueOrFalse} ref={register} />
                                    <label htmlFor="switch-label" className="switch-button__label"></label>
                                </div>
                                <div className="switch-button">
                                    <label className='text-info font-weight-bold '>Marcar como importante</label>
                                    <input className="switch-button__checkbox" type="checkbox" id="switch-label-2" name="important" onClick={handleTrueOrFalse} ref={register} />
                                    <label htmlFor="switch-label-2" className="switch-button__label"></label>
                                </div>
                                {
                                    infoSent
                                        ?
                                        <p className='font-weight-bold'>¡Tarea Actualizada!</p>
                                        :
                                        <div className='d-flex justify-content-center mt-4'>
                                            <button className='btn btn-info mr-2'>Actualizar</button>
                                            <button className='btn btn-danger ml-2' onClick={deleteTaskHandler}>Eliminar</button>
                                        </div>
                                }

                            </form>
                        </Modal.Body>
                    </Modal>
                    :
                    null
            }
        </div>
    )
}

export default ImportantTasks