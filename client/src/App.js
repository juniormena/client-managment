import { BrowserRouter as Router, Route } from 'react-router-dom';
import {CrearCliente, Home, ListadoClientes} from "./pages";
import NavbarComponent from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
        <ToastContainer />
        <NavbarComponent/>
          <div className="container mx-auto">
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/crear-cliente" component={CrearCliente}></Route>
              <Route exact path="/listado-clientes" component={ListadoClientes}></Route>
          </div>
    </Router>
  )
}

export default App;
