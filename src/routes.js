const express = require('express');
const router = express.Router();
const mysqlconnection = require('./database');

//importa controladores
const posicionController = require('./controller/posicionController');
const usuarioController = require('./controller/usuarioController');

//ruta a controladores: crear un usuario
router.post('/:name/', usuarioController.create);

router.get('/', (req, res) => {
    res.json({ "Error reconocido": "url incorrecta" });
});

router.get('/:nombre/', (req, res) => { 
    const {nombre} = req.params;
    if (nombre == 'posiciones') {
        posicionController.list(req, res);
    } else {
        res.json({ "Error reconocido": "url incorrecta" });
    }
});

//ruta a controladores, (2 parametros)
router.get('/:nombre/:id/', (req, res) => { 
    const {id, nombre} = req.params;
    if (nombre == 'usuario') {
        usuarioController.listById(req, res);
    } else {
        res.json({ "Error reconocido": "url incorrecta" });
    }
});

//ruta a controlador de posiciones con paginado (3 parametros)
router.get('/:nombre/:start/:size', (req, res) => { 
    const {nombre, start, size } = req.params;
    if (nombre == 'posiciones') {
        posicionController.pageList(req, res);
    } else {
        res.json({ "Error reconocido": "url incorrecta" });
    }
});

module.exports = router;