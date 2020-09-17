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
    const [category, setCategory] = useState(['Seleccionar', 'SuperMercado', 'Trabajo', 'Otros']);
    const categoryMap = category.map(category => category);

    const handleCategory = () => {setCategory(categoryMap)}

    const onSubmit = async data => {
        try {
            await createTask(props.match.params.userId, data);
            setisLoading(false);
            history.push(`/dashboard/${props.match.params.userId.userId}`)

        } catch (error) {
            setError('ya existe un usuario con ese avatar')
        }
    };

    return (
        <div className='bg-component'>
            <div className='div-createTask'>
                <form onSubmit={handleSubmit(onSubmit)}>
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

                    <button>Crear tarea</button>
                </form>
            </div>


        </div>
    )
}
