const fs = require('fs');

//devolve todos os carros
exports.getAll = async (req, res) => {
    //return res.send("Aqui devolve todos os carros.");
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //devolver os carros
    return res.send(data.carros);
}

//devolve o carro com o id
exports.getById = async (req, res) => {
    //obter o id do carro
    const id = req.params.id;
    //ler o ficheiro local
    return res.send("Aqui devolve o carro com dddid=${id}");
}

//cria um carro
exports.create = async (req, res) => {
    //obter o carro pelas características enviadas
    const {id, Nome, Detalhes} = req.body;
    return res.status(201).send("Aqui cria um carro.");
}


//atualiza o carro
exports.update = async (req, res) => {
    //obter o carro pelas características enviadas
    const {id, Nome, Detalhes} = req.body;
    return res.send("Aqui atualiza-se o carro.");
   
}




//apaga o carro com o id
exports.delete = async (req, res) => {
    const id = req.params.id;
    return res.send("Aqui apaga-se um carro por id.");
}
