const publicoRouter = require('express').Router();


// Define uma rota para a página HTML
publicoRouter.get('/', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('C:/Users/Henrique/OneDrive - Instituto Politécnico de Viana do Castelo/Desktop/ESTG/PW/Prática/Trabalho1/Projeto1-PW2324/template/index.html');
  });


module.exports = publicoRouter;