import {notificationError, notificationSuccess, notificationSuccessRedirect} from "../helpers";

const baseUrl = process.env["REACT_APP_URL_API_DEVELOPMENT"];

export async function addCliente(event, data, setLoading){
    try {
        event.preventDefault();
        setLoading(true);
        let {cliente, direcciones} = data;

        let {nombre, apellido, email, sexo, telefono} = cliente;

        const dataToBeSent = {
            nombre,
            apellido,
            email,
            sexo,
            telefono,
            direcciones: direcciones.map(dir => dir.direccion)
        };

        const response = await fetch(`${baseUrl}/addCliente`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'manual', // manual, *follow, error
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(dataToBeSent)
        });

        if(response.ok){
            const jsonResponse = await response.json();
            if(jsonResponse.success){
                notificationSuccessRedirect(jsonResponse, 3000, "/listado-clientes")
            }
            else{
                notificationError(jsonResponse, 5000)
            }
        }
        else{
            notificationError({message:response.statusText}, 5000);
        }
    }
    catch (err){
        notificationError({message:err.Error}, 5000);
    }
    finally {
        setLoading(false);
    }



}

export async function deleteCliente(id){
    const response  = await fetch(baseUrl + `/deleteCliente/${id}`,{
        method:'DELETE'
    });
    if(response.ok){
        const jsonResponse = await response.json();
        if(jsonResponse.success){
            notificationSuccess(jsonResponse, 3000);
        }
        else{
            notificationError(jsonResponse, 5000);
        }
    }
    else{
        throw response;
    }
}
