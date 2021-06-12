import {deleteCliente} from "../services/clienteServices";

function ClienteTableRows({ cliente, index }){
    return(
        <tr>
            <td>{index+1}</td>
            <td>{cliente.nombre} {cliente.apellido}</td>
            <td>{cliente.email}</td>
            <td>{cliente.telefono}</td>
            <td>{cliente.direcciones.join(", ")}</td>
            <td>
                <span className="btn btn-secondary mr-2">Editar</span>
                <span className="btn btn-danger" onClick={()=>deleteCliente(cliente.id )}>Eliminar</span>
            </td>
        </tr>
    )
}

export default ClienteTableRows;
