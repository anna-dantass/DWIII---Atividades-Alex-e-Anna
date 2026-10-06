/*
Projeto 01 - Desenvolvimento Web III
Autores: Alex Rodrigues de Oliveira e Anna Marina Dantas da Silva
Data: 30/08/2026

Aplicação web de apresentação pessoal da dupla.
Construída em Node.js puro (http + url + fs), seguindo o mesmo
padrão utilizado nos exemplos de aula (App01.js, App02.js, App03.js e App04.js).
*/

// Carregar os Módulos:
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Função para enviar a página de erro 404:
function paginaNaoEncontrada(response) {
    response.writeHead(404, { 'content-type': 'text/html' });
    fs.readFile(path.join(__dirname, 'erro404.html'), function (err, data) {
        response.end(data);
    });
}

// Função para ler um arquivo e enviar no response http (igual ao App04.js):
function readFile(response, file, contentType) {
    fs.readFile(path.join(__dirname, file), function (err, data) {
        if (err) {
            paginaNaoEncontrada(response);
            return;
        }
        response.writeHead(200, { 'content-type': contentType });
        response.end(data);
    });
}

// Aplicação isolada - com callback:
var callback = function (request, response) {
    // Faz o parse da URL, separa os end-points:
    var parts = url.parse(request.url);
    var rota = parts.pathname;

    // Rota principal:
    if (rota === '/') {
        readFile(response, 'index.html', 'text/html');

    // Rotas do integrante "alex":
    } else if (rota === '/alex') {
        readFile(response, 'alex/index.html', 'text/html');

    } else if (rota === '/alex/sobre') {
        readFile(response, 'alex/sobre.html', 'text/html');

    } else if (rota === '/alex/curriculo') {
        readFile(response, 'alex/curriculo.pdf', 'application/pdf');

    } else if (rota === '/alex/foto') {
        readFile(response, 'alex/foto.jpg', 'image/jpeg');

    // Rotas do integrante "anna":
    } else if (rota === '/anna') {
        readFile(response, 'anna/index.html', 'text/html');

    } else if (rota === '/anna/sobre') {
        readFile(response, 'anna/sobre.html', 'text/html');

    } else if (rota === '/anna/curriculo') {
        readFile(response, 'anna/curriculo.pdf', 'application/pdf');

    } else if (rota === '/anna/foto') {
        readFile(response, 'anna/foto.jpg', 'image/jpeg');

    // Rota da documentação do projeto:
    } else if (rota === '/projeto') {
        readFile(response, 'projeto/documentacao.pdf', 'application/pdf');

    // Rota não encontrada:
    } else {
        paginaNaoEncontrada(response);
    }
};

// Servidor - criar e configurar:
var server = http.createServer(callback);

var PORTA = 3000;
server.listen(PORTA);
console.log('Servidor iniciado em http://localhost:' + PORTA);
