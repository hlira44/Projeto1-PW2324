const utils = require('./auth')

module.exports = async(req, res, next) => {
    const token = req.headers['authorization'];

    
    if(!token) {
        return res.status(401).send("sem acesso");
    }

    const bearer = token.split(' ');

    const certifiedToken = await utils.certifyToken(bearer[1]);
    req.body.username = certifiedToken.name;

    return next();
}