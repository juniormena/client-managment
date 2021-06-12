const { connectToDatabase } = require('../database/connection');
const clienteQueries = require("../database/clienteQueries");
const { genericResponse } = require('../lib');


async function getClienteByEmail(email) {   
    try{
        let data = await connectToDatabase(clienteQueries.select.byEmail, [email]);
        
        return {
            success:data.rowCount > 0 ? true : false,
            data:data.rowCount > 0 ? data.rows : [],
        }; 
        
    }
    catch{
        return {
            success:false,
            message:'No se pudo completar la solicitud'
        }
    }
}

module.exports = {

    async addCliente(request,response){
        try{
            let { nombre, apellido, email, sexo, telefono, direcciones  } = request.body;
            let clienteExist = await getClienteByEmail(email.trim());

        if(direcciones?.length===0){
            return response.status(200).json({
                success:false,
                message:'Cliente debe tener al menos una direccion'
            });
        }
        else if(email===""){
            return response.status(200).json({
                success:false,
                message:'Cliente debe tener un email'
            });
        }
        else if(clienteExist.success){
            return response.status(200).json({
                success:false,
                message:'Este email ya se encuentra entre nuestros registros'
            });
        }
            let clientInserted = await connectToDatabase(clienteQueries.insertCliente, [nombre, apellido, email.trim(), sexo, telefono]);

            if(clientInserted.rowCount > 0){
               let clientCreated = await getClienteByEmail(email);
               direcciones.forEach(dir=>connectToDatabase(clienteQueries.insertDirecciones, [dir, clientCreated.data[0].id]));
            }

            return response.status(201).json({
                success:clientInserted.rowCount > 0 ? true : false,
                message:clientInserted.rowCount > 0 ? 
                `Cliente ${nombre} creado exitosamente` 
                :`Cliente ${nombre} no pudo ser creado`,
            });    
        }
        catch (err){
            console.log(err)
            genericResponse(response);
        }
    },

    async getClientes(request,response){
        try{
            let data = await connectToDatabase(clienteQueries.select.all);
            
            return response.status(200).json({
                success:data.rowCount > 0 ? true : false,
                data:data.rowCount > 0 ? data.rows : [],
            }); 
            
        }
        catch{
            genericResponse(response);
        }
    },

    async getClienteById(request,response){
        const { id }=request.params;

        try{
            let data = await connectToDatabase(clienteQueries.select.one, [id]);
            
            return response.status(200).json({
                success:data.rowCount > 0 ? true : false,
                data:data.rowCount > 0 ? data.rows : [],
            }); 
            
        }
        catch{
            genericResponse(response);
        }
    },

    async deleteCliente(request,response){ 
        try{
            const { id } = request.params;

            let data = await connectToDatabase(clienteQueries.deleteCliente, [id]); 
            
            return response.status(200).json({
                success:data.rowCount > 0 ? true : false,
                message:data.rowCount > 0 ? 'Cliente Eliminado exitosamente': 'Cliente no pudo ser eliminado'
             }); 
        }
        catch{
            genericResponse(response);
        }
    },

    
}