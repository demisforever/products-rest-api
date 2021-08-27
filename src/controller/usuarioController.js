const controller = {};
const mysqlconnection = require('../database');
const queryCreate = 'INSERT INTO kodeardb.usuario (nombre, email, habilitado) VALUES (?, ?, ?);';
const queryShowLast = 'SELECT * FROM kodeardb.usuario ORDER BY idUsuario DESC LIMIT 0, 1;';

// insertar nombre, email y habilitado
controller.create = (req, res) => {
    //elementos de la url
    const {name} = req.params; 
    //elementos del body (Postman), para la creación
    const { idUsuario, nombre, email } = req.body;

    if (name == 'usuario' && nombre && nombre.length > 0 && email && email.includes('@')) {
        mysqlconnection.query(queryCreate, [nombre, email, 1], (err, rows) => {
            if (!err) {
                res.json({ status: 'Usuario número ' + rows.insertId + ' guardado correctamente' });
            } else {
                console.log(err);
            }
        });
    } else {
        res.json({ "Error reconocido": "Requerido: Debe completar 'nombre' e 'email'" });
    }
};

//lista usuarios: http://localhost:3000/1
controller.listById = (req, res) => {
    const { id, nombre } = req.params;
    if (nombre == 'usuario') {
        var querySelect = "SELECT * FROM usuario";
        if (id) {
            querySelect = querySelect + " WHERE idUsuario = ?";
        };
        mysqlconnection.query(querySelect, [id], (error, rows) => {
            if (error) {
                throw error;
            } else {
                res.json(rows);
            }
        });
    }
};

module.exports = controller;