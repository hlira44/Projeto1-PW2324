const marcasRouter = require('express').Router();
const controller = require('../controllers/marcas');


//CRUD para as Marcas
marcasRouter.get('/', controller.getAll); //lê todos
marcasRouter.get('/id', controller.getById); //lê uma marca pelo id
marcasRouter.post('/create', controller.create); //criar nova marca
marcasRouter.put('/update', controller.update); //atualiza a marca
marcasRouter.delete('/delete/:id', controller.delete); //apagar uma marca



//CRUD para os
//marcasRouter.get('/modelos', controller.getAll); //lê todos os modelos
//marcasRouter.get('/modelos/:id', controller.getById); //lê um modelo pelo id
//marcasRouter.post('/modelos/create', controller.create); //cria um modelo
//marcasRouter.put('/modelos/update', controller.update); //atualiza um modelo
//marcasRouter.delete('/modelos/delete/:id', controller.delete); //apaga um modelo

module.exports = marcasRouter;


