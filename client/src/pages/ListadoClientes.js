import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ClientesTable from "../components/ClientesTable";

function ListadoClientes(){
    const { data:clientes, loading } = useFetch("/getClientes");

    if(loading){
        return <Spinner/>
    }
    else if(clientes?.length === 0){
        return <div>No hay datos disponibles</div>
    }
    return(
        <div className="mt-3">
            {!loading && <ClientesTable clientes={clientes.data}/>}
        </div>
    )
}

export default ListadoClientes;
