import clients from "../models/Client.js";

class ClientController {
    
    static listClients = (req, res)=>{
        clients.find((err, clients)=>{
            res.status(200).json(clients)
        })
    }

    static listClientsById = (req, res)=>{
        const clientid = req.params.clientid;

        clients.findById(clientid,(err, clients)=>{
            err ? res.status(400).send({message: `${err.message} : Id do cliente não localizado.`})
                : res.status(200).send(clients);
        })
    }

    static addClient = (req, res)=>{
        let cliente = new clients(req.body);

        cliente.save((err)=>{
            err ? res.status(500).send({message: `${err.message} : Falha ao cadastrar cliente :(`}) 
                : res.status(200).send(cliente.toJSON())
        })
    }

    static updateClient = (req, res)=>{
        const clientid = req.params.clientid;

        clients.findByIdAndUpdate(clientid,{$set: req.body},(err)=>{
            (!err) ? res.status(200).send({message : 'Livro atualizado com sucesso'})
                   : res.status(500).send({message: `${err.message} : Falha ao atualizar cliente`})
        })
    }

    static deleteClient = (req, res)=>{
        const clientid = req.params.clientid;

        clients.findByIdAndDelete(clientid, (err)=>{
            !err ? res.status(200).send({message: `Livro ${clientid} excluido com sucesso!`})
                 : res.status(500).send({message: err.message})
        }) 
    }

}

export default ClientController 