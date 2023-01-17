import express from "express"
import ClientController from "../controllers/clientsController.js"

const router = express.Router();

router
    .get("/clientes", ClientController.listClients )
    .get("/clientes/:clientid", ClientController.listClientsById )    
    .post("/clientes/adicionar", ClientController.addClient)
    .put("/clientes/editar/:clientid", ClientController.updateClient)
    .delete("/clientes/:clientid", ClientController.deleteClient)
    
    
 
export default router;