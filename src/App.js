
import { Formulario } from './componentes/form';
import './App.css';
import { useState } from 'react';
import { Tasks } from './componentes/tasks';
import { Borrar } from './componentes/deleteAll';


function App() {
  const [tasks, setTasks] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tasks) {
      alert('Debes escribir una tarea')
      return;
    }
    const newTask = {
      id: Date.now(),
      tasks: tasks,
      completado: false

    }
    const temp = [newTask, ...taskList];
    setTaskList(temp);

    setTasks('');

    //console.log(taskList);
  };
  const handleChange = (e) => {
    //e.preventDefault();
    setTasks(e.target.value)
    //console.log(tasks)

  };
  const deleteTasks = (id) => {
    const temp = taskList.filter(tarea => (tarea.id !== id))
    setTaskList(temp)

  };

  const deleteAllItems = (e) => {
    e.preventDefault();
    // console.log(e.target.className)
    // console.log(taskList)
    if (!taskList.length) {
      return;
    } else if (window.confirm('¿Deseas borrar toda la lista?')) {
      setTaskList([])

    }

  }
  return (
    <>
      <div className='main'>
        <h1>To-Do List!</h1>
        <Formulario
          tasks={tasks}
          handleSubmit={handleSubmit}
          handleChange={handleChange} />
        <div>
          <h2 className='titulo2'>Lista de tareas</h2>
          <div className='list'>
            {
              taskList.map(task => (
                <Tasks
                  key={task.id}
                  id={task.id}
                  tasks={task}
                  deleteTasks={deleteTasks}
                />))
            }
          </div>
        </div>
        <Borrar
          deleteAllItems={deleteAllItems}
        />
      </div>

    </>
  );
}

export default App;
