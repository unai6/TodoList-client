import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import '../CSS/create-task.css';
import { createTask } from '../api/apiCalls';
// import Select from 'react-select';

export const NewTask = (props) => {

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [, setisLoading] = useState(true)
    const [error, setError] = useState('')
    const category = [ 'SuperMercado', 'Trabajo', 'Otros'];
    const categoryMap = category.map((doc, key) => { return <option key={key} value={doc}>{doc}</option>});



    const onSubmit = async data => {
        try {
            await createTask(props.match.params.userId, data);
            setisLoading(false);
            history.push(`/dashboard/${props.match.params.userId}`)


        } catch (error) {
            setError('ya existe un usuario con ese avatar')
        }
    };



    return (
        <div className='bg-component'>
            <div className='div-createTask'>
            <h4 className='h4-newTask'>Crea tu nueva tarea</h4>
                <form className='form-newTask' onSubmit={handleSubmit(onSubmit)}>
                    {errors.name && <span className='text-danger'> Este campo es obligatorio </span>}
                    <span>{error}</span>
                    <input
                        className='form-control'
                        name='name'
                        type='text'
                        placeholder='Nombre'
                        ref={register({ required: true })}
                    />
                        {errors.category && <span className='text-danger'>Este campo es obligatorio </span>}
          
                    <div>
                        <label className='text-white'>
                            <b>Categoría</b>
                            <select
                                name='category'
                                className='form-control'
                                ref={register({ required: true })}
                            >   
                            <option value=''>Seleccionar</option>
                                {categoryMap}
                            </select>
                        </label>
                    </div>
                    {errors.description && <span className='text-danger'> Este campo es obligatorio </span>}
                    <input
                        className='form-control'
                        name='description'
                        type='text'
                        ref={register({ required: true })}
                        placeholder='Descripción'
                    />

                    <button className='btn-newTask-short'>Crear tarea</button>
                </form>
            </div>


        </div>
    )
}
