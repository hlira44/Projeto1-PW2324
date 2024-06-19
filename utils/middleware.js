const utils = require('./auth')

module.exports = async(req, res, next) => {
    const token = req.headers['authorization'];

    
    if(!token) {
        return res.status(401).send("sem acesso");
    }

    const bearer = token.split(' ');

    if(bearer.length !== 2){
        return res.status(401).send("token inválido");
    }

    const certifiedToken = await utils.certifyToken(bearer[1]);
    
    if(!certifiedToken){
        return res.status(401).send("token inválido");
    }

    
    req.body.username = {
        id: certifiedToken.id,
        name: certifiedToken.name,
        isAdmin: certifiedToken.isAdmin
    };
    return next();
};


    const isAdmin = (req, res, next) => {
        if(!req.body.isAdmin){
            return res.status(403).send("sem acesso: apenas administradores");
        }
        next();
    };

    