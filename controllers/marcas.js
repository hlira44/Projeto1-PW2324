const fs = require('fs');

//devolve todas as marcas
exports.getAll = async(req, res) => {
    return res.send("ok");
}

//devolve marca pelo id
exports.getById = async(req, res) => {
    //obter o id da marca
    const id = req.params.id;
    return res.send(id);
}

//cria uma marca
exports.create = async(req, res) => {
    //obter marca pelas caracteristicas enviadas
    const{id, Nome, Modelo} = req.body;
    return res.status(201).send(req.body);
}


//atualizar marca
exports.update = async(req, res) => {
    const{id, Nome, Modelo} = req.body;
    return res.send(req.body);
}


//apaga a marca pelo id
exports.delete = async (req, res) => {
    const id = req.params.id;
    return res.send("ok TUbarão");
}






