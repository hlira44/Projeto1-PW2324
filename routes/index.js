const router = require('express').Router();
const carrosRouter = require('./carros');
const marcasRouter = require('./marcas');
const authRouter = require('./auth');

router.use('/carros', carrosRouter);
router.use('/marcas', marcasRouter);
router.use('/auth', authRouter);

module.exports = router;


