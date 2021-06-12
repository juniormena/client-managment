create table client.tb_cliente(
	id serial NOT NULL primary key,
	estado int NOT NULL default 1,
	nombre varchar(50) NOT NULL,
	apellido varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	sexo varchar(150) NOT NULL,
	telefono varchar(11) NOT NULL,
	creado timestamptz not null default now(),
	modificado timestamptz not null default now()
);

create table client.tb_direcciones(
	id serial not null primary key,
	direccion varchar(150) NOT NULL, 
	cliente_id int NOT NULL references client.tb_cliente(id) ON DELETE CASCADE,
	creado timestamptz not null default now(),
	modificado timestamptz not null default now()
);