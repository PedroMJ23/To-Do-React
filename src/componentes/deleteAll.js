
export const Borrar = (props) => {
    const {deleteAllItems } = props;

    return (
        <>
            <button onClick={deleteAllItems} className="btn-borrar-todo" >Elimnar todo</button>
        </>

    )


};