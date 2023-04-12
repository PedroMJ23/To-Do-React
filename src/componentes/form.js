import React from 'react'

export const Formulario = (props) => {
    const { tasks, handleSubmit, handleChange } = props;

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input className='input-text'
                type='text'
                placeholder='Introduce tu tarea '
                onChange={handleChange}
                value={tasks}
            />
            <input 
            className='input-btn'
                type='submit'
                value="Agregar tarea"
                onClick={handleSubmit}
            />
            
        </form>
        

    )
}
//export default Formulario;

