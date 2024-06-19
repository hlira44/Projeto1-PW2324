require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const router = require('./routes/index');

const app = express();
app.use(bodyParser.json());


app.use(cors());
app.use(express.json());

app.use('/api/', router);



const port = process.env.SERVER_PORT || 4242;
app.listen(port, () => {
    console.log('Express server listening on port', port)
});
