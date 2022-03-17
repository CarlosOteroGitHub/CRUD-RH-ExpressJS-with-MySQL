var mysql = require('mysql');
var conexion = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'empleados_angular_db'
});

module.exports = conexion;