import {Accordion, Card, Col, Container, Row} from "react-bootstrap";
import {handleChangeInput, sexos} from "../helpers";
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import DireccionTable from "../components/DireccionTable";
import {addCliente} from "../services/clienteServices";
import Spinner from "../components/Spinner";

function CreateClient(){
    const [cliente, setCliente] = useState({nombre:"", apellido:"",email:"",sexo:"",telefono:""});
    const [direccion, setDireccion] = useState({id:0, value:""})
    const [direcciones,setDirecciones] = useState([]);
    const [loading, setLoading] = useState(false);

    function agregarDireccion(direccion){
        if(direccion.id!==0){
            let direccionesCopied = [...direcciones];
            let direccionIndex = direccionesCopied.findIndex(dir=>dir.id===direccion.id);
            direccionesCopied[direccionIndex].direccion = direccion.value;
            setDirecciones(direccionesCopied);
        }
        else{
            setDirecciones(prevDirecciones=>([...prevDirecciones, {id:generateUniqueID(), direccion:direccion.value}]));
        }
        setDireccion({id:0, value: ""});
    }

    function editarDireccion(direccion){
        setDireccion({id:direccion.id, value: direccion.direccion});
    }

    console.log(direcciones);
    console.log(cliente);

    return(
        <Card className="mt-3">
            <Card.Header>Crear cliente</Card.Header>
            <Card.Body>
                <Container>
                    <form onSubmit={(event)=> addCliente(event, {cliente, direcciones}, setLoading)}>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label>Nombre </label>
                                    <input type="text" required className="form-control" value={cliente.nombre}
                                           onChange={(e)=>handleChangeInput(e,'nombre',cliente,setCliente)}/>
                                </div>
                            </Col>
                            <Col>
                                <div className="form-group">
                                    <label>Apellido </label>
                                    <input type="text" required className="form-control" value={cliente.apellido}
                                           onChange={(e)=>handleChangeInput(e,'apellido',cliente,setCliente)}/>
                                </div>
                            </Col>
                        </Row>

                    <Row>
                        <Col>
                            <div className="form-group">
                                <label>Email </label>
                                <input type="email" required className="form-control" value={cliente.email}
                                       onChange={(e)=>handleChangeInput(e,'email',cliente,setCliente)}/>
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label>Sexo </label>
                                <select className="custom-select" required onChange={(e)=>handleChangeInput(e,'sexo',cliente,setCliente)}>
                                    {sexos.length===0 ? <option>no hay sexos disponibles</option> :
                                        <><option value={0}>Selecciona...</option>
                                            {sexos.map(sexo=><option key={sexo.id} value={sexo.value}>{sexo.label}</option>)}</>
                                    }
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label>Telefono </label>
                                <input type="text" required className="form-control" value={cliente.telefono} maxLength={10}
                                       onChange={(e)=>handleChangeInput(e,'telefono',cliente,setCliente)} max="10"/>
                            </div>
                        </Col>
                    </Row>
                        <Row>
                            <Col>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Direcciones
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <label>Direccion </label>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" value={direccion.value}
                                                           onChange={(e)=>handleChangeInput(e,'value',direccion,setDireccion)}/>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-secondary"
                                                                type="button" onClick={()=>agregarDireccion(direccion)}>
                                                            {direccion.id===0 ? 'Agregar' : 'Editar'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        { direcciones.length>0 &&  <DireccionTable direcciones={direcciones}
                                         setDirecciones={setDirecciones} editarDireccion={editarDireccion} direccion={direccion}/>}
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                        <button className="btn btn-primary text-uppercase float-right mt-4" disabled={direccion.id!==0}>
                            {loading ? <Spinner/> : "Guardar"}
                        </button>
                    </form>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default CreateClient;
