const route = require('express').Router();
const controller = require('../controllers/auth');

route.post('/signup', controller.signup);
route.post('/signin', controller.signin);

module.exports = route;