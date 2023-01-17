import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
    {
        id:         {type:String, required:false},
        nome:       {type:String, required:true},
        instagram:  {type:String, required:false},
        telefone:   {type:String, required:false},
        organizacao:{type:String, required:false},
    }
)

const clients = mongoose.model('clientes', clientSchema);
 
export default clients;