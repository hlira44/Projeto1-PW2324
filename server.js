require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const router = require('./routes/index');
const publicoRouter = require('./routes/publico');
const privadoRouter = require('./routes/privado');
const carrosRouter = require('./routes/carros');
const marcasRouter = require('./routes/marcas');




const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/api/', router);
app.use('/api/carros', carrosRouter);
app.use('/api/marcas', marcasRouter);

const port = process.env.SERVER_PORT || 4242;
app.listen(port, () => {
    console.log('Express server listening on port', port)
});
