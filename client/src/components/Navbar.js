import { Container, Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

function NavbarComponent(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/">
                    <Navbar.Brand>Client-Managment</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Link className="nav-link" to="crear-cliente">Crear Cliente</Link>
                    <Link className="nav-link" to="/listado-clientes">Listado de cliente</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;
