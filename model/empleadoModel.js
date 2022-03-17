module.exports = {

	//Función que consulta los registros de la tabla empleados.
	obtener:function(conexion, funcion){
		conexion.query("select * from empleados;", funcion);
	},

	//Función que inserta registros en la tabla empleados.
	insertar:function(conexion, datos, funcion){
		conexion.query("insert into empleados(nombre, nacimiento, correo, descripcion) values(?, ?, ?, ?);", [datos.nombre, datos.nacimiento, datos.correo, datos.descripcion], funcion);
	},

	//Función que consulta los registros de la tabla empleados por medio de un ID.
	retornarDatosID:function(conexion, id, funcion){
		conexion.query("select * from empleados where id=?", [id], funcion);
	},

	//Función que actualiza registros en la tabla empleados.
	actualizar:function(conexion, datos, funcion){
		conexion.query("update empleados set nombre = ?, nacimiento = ?, correo = ?, descripcion = ? where id = ?;", [datos.nombre, datos.nacimiento, datos.correo, datos.descripcion, datos.id], funcion);
	},

	//Función que elimina registros en la tabla empleados.
	borrar:function(conexion, id, funcion){
		conexion.query("delete from empleados where id = ?", [id], funcion);
	}
}