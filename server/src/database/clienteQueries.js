const clienteQueries = {
    select:{
        all:`SELECT
        cl.id, cl.nombre, cl.apellido, cl.email, cl.telefono,
        ARRAY_AGG (dir.direccion) direcciones
        FROM
        client.tb_cliente cl 
        INNER JOIN client.tb_direcciones dir on cl.id = dir.cliente_id WHERE estado = 1
        GROUP BY
        cl.id, cl.nombre, cl.apellido, cl.email, cl.telefono
        ORDER BY
        cl.nombre;`,

        one:'SELECT * FROM client.tb_cliente WHERE id = $1 AND estado = 1',

        byEmail:'SELECT id FROM client.tb_cliente WHERE email = $1',

        directionsById:'SELECT id, direccion from client.tb_direcciones WHERE cliente_id = $1'
    },
    insertCliente:`INSERT INTO client.tb_cliente(nombre, apellido, email, sexo, telefono)
    VALUES ($1, $2, $3, $4, $5);`,

    updateCliente:`UPDATE client.tb_cliente
	SET nombre=$2, apellido=$3, sexo=$4, telefono=$5, modificado=$6
	WHERE id = $1`,

    deleteCliente:`DELETE FROM client.tb_cliente WHERE id = $1;`,
    deleteDirecciones:`DELETE FROM client.tb_direcciones WHERE cliente_id = $1;`,

    insertDirecciones:`INSERT INTO client.tb_direcciones(direccion, cliente_id) VALUES ($1, $2);`
}


module.exports = clienteQueries;