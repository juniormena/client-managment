const express  = require("express"); 
const router = express.Router();
const clienteController = require("../controlllers/clienteController");


router.get("/getClientes", clienteController.getClientes);
router.get("/getCliente/:id", clienteController.getClienteById);
router.post("/addCliente", clienteController.addCliente);
router.get("/deleteCliente/:id", clienteController.deleteCliente);


module.exports = router;