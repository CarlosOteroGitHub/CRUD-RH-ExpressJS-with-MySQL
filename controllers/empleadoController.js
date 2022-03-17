var conexion = require("../config/conexion");
var empleado = require("../model/empleadoModel");

module.exports = {

	//Función que direcciona a la pagina principal de empleados (Archivo index.ejs), consultando antes la función "obtener" del modelo de empleado.
	index:function(req, res){
		empleado.obtener(conexion, function(err, datos){
			res.render('Empleado/index', {title: 'Empleados', empleados:datos});
		});
	},

	//Función que direcciona a la pagina para agregar empleados (Archivo crear.ejs).
	crear:function(req, res){
		res.render('Empleado/crear')
	},

	//Función que direcciona a la pagina principal de empleados (Archivo index.ejs), consultando antes la función "insertar" del modelo de empleado.
	guardar:function(req, res){
		empleado.insertar(conexion, req.body, function(err){
			res.redirect('/empleados');
		});
	},

	//Función que direcciona a la pagina principal de empleados (Archivo index.ejs), consultando antes la función "retornarDatosID" del modelo de empleado.
	editar:function(req, res){
		empleado.retornarDatosID(conexion, req.params.id, function(err, registros){
			res.render('Empleado/editar', {empleado:registros[0]});
		});
	},

	//Función que direcciona a la pagina principal de empleados (Archivo index.ejs), consultando antes la función "actualizar" del modelo de empleado.
	actualizar:function(req, res){
		empleado.actualizar(conexion, req.body, function(err){
			res.redirect('/empleados');
		});
	},

	//Función que direcciona a la pagina principal de empleados (Archivo index.ejs), consultando antes la función "borrar" del modelo de empleado.
	eliminar:function(req, res){
		empleado.borrar(conexion, req.params.id, function(err){
			res.redirect('/empleados');
		});
	}
}