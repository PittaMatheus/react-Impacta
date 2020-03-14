// Arquivo responsável por configurar o servidor Node/Express
const port = 3200;

const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');

const server = express(); 

//para toda requisição que chegar, use o bodyparser para
//interpretar chegadas no formato urlencoded
server.use(bodyParser.urlencoded({ extended: true }))

//considera o formato json no corpo da requisição
server.use(bodyParser.json()); 

server.use(allowCors);

server.get('/', function (req, res) {
    res.send('Hello World!');
});

server.listen(port, _ => console.log(`servidor no ar, na porta ${port}`));

module.exports = server;