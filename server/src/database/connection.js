const {Pool} = require('pg');
const database_data = require("../config/postgres/databaseConfig");


const postgresConnection =  new Pool({
    user: database_data.User,
    host: database_data.Host,
    database: database_data.Database,
    password:database_data.Password,
    port: database_data.Puerto,
    min: database_data.Min,
    max: database_data.Max, // max number of clients in the pool
    idleTimeoutMillis: database_data.Idle
});


module.exports = {
    connectToDatabase: async function(query,values=[]){
        const client = await postgresConnection.connect()
        try {
            
            return await client.query(query,values);
        }
        catch(error){
            console.log(error);
            return JSON.stringify("error");
        }
        finally{
            client.release()
        }
    }
    
}