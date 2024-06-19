const jwt = require("jsonwebtoken")
const secret = "sdgfdgfdgfdgiu43543"

exports.getToken = info => jwt.sign(info, secret, {expiresIn: '7d'});

exports.certifyToken = token => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (error, decoded) => {
            if(error) {
                reject(error);
            }
            else {
                resolve(decoded);
            }
        })
    })
}