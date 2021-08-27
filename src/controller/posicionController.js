const controller = {};
const mysqlconnection = require('../database');

var queryPosition = 
'SELECT ' +
    'idPosiciones, ' +
    'empresa.razonSocial as empresa, ' +
    'producto.nombre as producto, ' +
    'fechaEntregaInicio as Entrega, ' +
    'moneda, ' +
    'precio, ' +
    'producto.usoFrecuente ' +
'FROM posiciones ' +
'INNER JOIN empresa ON empresa.idEmpresa = posiciones.idEmpresa ' +
'INNER JOIN producto ON producto.idProducto = posiciones.idProducto ' +
'ORDER BY producto.usoFrecuente DESC';

controller.list = (req, res) => {
    const {id} = req.params;
    mysqlconnection.query(queryPosition, (error, rows, fields) => {
        if (error) {
            throw error;
        } else {
            res.json(rows);
        }
    });
};

//metodo de paginación
controller.pageList = (req, res) => {
    const { nombre, start, size } = req.params;
    mysqlconnection.query(queryPosition + ' LIMIT ?, ?;', [Number(start), Number(size)], (error, rows, fields) => {
        if (error) {
            throw error;
        } else {
            res.json(rows);
        }
    });
};

module.exports = controller;