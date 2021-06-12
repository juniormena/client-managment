import {Table} from "react-bootstrap";

function DireccionTable({ direcciones, setDirecciones }){

    function removeDireccion(direccion){
        let newDirecciones = direcciones.filter(dir=>dir.id!==direccion.id);
        setDirecciones(newDirecciones);
    }

    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Direccion</th>
                <th>Accion</th>
            </tr>
            </thead>
            <tbody>
            {direcciones.map((direccion,index)=><tr key={direccion.id}>
                <td>{index+1}</td>
                <td>{direccion.direccion}</td>
                <td>
                    <span className="btn btn-secondary mr-2">Editar</span>
                    <span className="btn btn-danger" onClick={()=>removeDireccion(direccion)}>Eliminar</span>
                </td>
            </tr>)}
            </tbody>
        </Table>
    )
}

export default DireccionTable;
