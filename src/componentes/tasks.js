export const Tasks = (props) => {
    const { tasks, deleteTasks } = props

    return (
        <>
            <div className="list-span" id={tasks.id} >
                <span className="span-list">{tasks.tasks}</span>
                <button className="btn-form" onClick={() => { deleteTasks(tasks.id) }} >Borrar</button>
            </div>

        </>

    )

}

