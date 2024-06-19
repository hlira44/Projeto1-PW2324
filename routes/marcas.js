const marcasRouter = require('express').Router();
const controller = require('../controllers/marcas');
const middleware = require('../utils/middleware');

marcasRouter.use(middleware);

//CRUD para as Marcas
marcasRouter.get('/', controller.getAll); //lê todos
marcasRouter.get('/:id', controller.getById); //lê uma marca pelo id
marcasRouter.post('/create', controller.create); //criar nova marca
marcasRouter.put('/update', controller.update); //atualiza a marca
marcasRouter.delete('/delete/:id', controller.delete); //apagar uma marca



module.exports = marcasRouter;


