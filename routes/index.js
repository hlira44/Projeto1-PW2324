const router = require('express').Router();
const carrosRouter = require('./carros');
const marcasRouter = require('./marcas');

router.use('/carros', carrosRouter);
router.use('/marcas', marcasRouter);

module.exports = router;


