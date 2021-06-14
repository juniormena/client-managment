const express  = require("express"); 
const router = express.Router();
const clienteController = require("../controlllers/clienteController");


router.get("/getClientes", clienteController.getClientes);

router.get("/getCliente/:id", clienteController.getClienteById);

router.get("/getDirecciones/:id", clienteController.getDireccionesById);

router.post("/addCliente", clienteController.addCliente);

router.put("/updateCliente/:id", clienteController.updateCliente);

router.delete("/deleteCliente/:id", clienteController.deleteCliente);


module.exports = router;