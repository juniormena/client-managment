import {Table} from "react-bootstrap";
import NoDataFound from "./NoDataFound";
import ClienteTableRows from "./ClienteTableRows";

function ClientesTable({ clientes }){

    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Nombre completo</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Direcciones</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {clientes.length === 0 ? <NoDataFound/>
             :
             <>
                 {clientes.map((cliente,index)=><ClienteTableRows key={cliente.id} cliente={cliente} index={index}/>)}
             </>
            }

            </tbody>
        </Table>
    )
}

export default ClientesTable;
