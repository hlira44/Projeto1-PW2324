const router = require('express').Router();
const carrosRouter = require('./carros');
const marcasRouter = require('./marcas');
const authRouter = require('./auth');
const authadminRouter = require('./auth_admin')

router.use('/carros', carrosRouter);
router.use('/marcas', marcasRouter);
router.use('/auth', authRouter);
router.use('/auth_admin', authadminRouter);

module.exports = router;


