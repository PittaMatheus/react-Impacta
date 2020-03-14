const http = require('http');

const json = {
    "Content-Type": "text/html" 
}

const requisicao = function(_, response){
    response.writeHead(200, json);
    response.write("<h1>Bem vindo ao nosso http server</h1>");
    response.end();
}

const server = http.createServer(requisicao);

server.listen(3000, function(){
    console.log('Servidor no ar')
});
