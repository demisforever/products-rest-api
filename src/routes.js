const express = require('express');
const router = express.Router();
const mysqlconnection = require('./database');
const errorRuta = { "Error reconocido": "url incorrecta",
"Quizás intento ingresar a (parámetros de ejemplo)": ["#/posiciones/", "#/posiciones/7/2/", "#/usuario/1/"],
"Sólo para función POST": "#/usuario/"
};

//importa controladores
const posicionController = require('./controller/posicionController');
const usuarioController = require('./controller/usuarioController');

//ruta a controladores: crear un usuario
router.post('/:name/', usuarioController.create);

router.get('/', (req, res) => {
    res.json(errorRuta);
});

router.get('/:nombre/', (req, res) => { 
    const {nombre} = req.params;
    if (nombre == 'posiciones') {
        posicionController.list(req, res);
    } else {
        res.json(errorRuta);
    }
});

//ruta a controladores, (2 parametros)
router.get('/:nombre/:id/', (req, res) => { 
    const {id, nombre} = req.params;
    if (nombre == 'usuario') {
        usuarioController.listById(req, res);
    } else {
        res.json(errorRuta);
    }
});

//ruta a controlador de posiciones con paginado (3 parametros)
router.get('/:nombre/:start/:size', (req, res) => { 
    const {nombre, start, size } = req.params;
    if (nombre == 'posiciones') {
        posicionController.pageList(req, res);
    } else {
        res.json(errorRuta);
    }
});

module.exports = router;