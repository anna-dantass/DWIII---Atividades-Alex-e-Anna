/*
Projeto 02 - Desenvolvimento Web III
Autores: Alex Rodrigues de Oliveira e Anna Marina Dantas da Silva

Portal da FATEC Zona Sul.
Construído em Node.js puro (http + url + fs), seguindo o mesmo
padrão utilizado nos exemplos de aula e no Projeto 01.
*/

// Carregar os Módulos:
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Função para enviar a página de erro 404:
function paginaNaoEncontrada(response) {
    response.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    fs.readFile(path.join(__dirname, 'erro404.html'), function (err, data) {
        response.end(data);
    });
}

// Função para ler um arquivo e enviar no response http:
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

    // Página inicial:
    if (rota === '/') {
        readFile(response, 'index.html', 'text/html; charset=utf-8');

    // Páginas do portal:
    } else if (rota === '/vestibular') {
        readFile(response, 'vestibular.html', 'text/html; charset=utf-8');

    } else if (rota === '/infraestrutura') {
        readFile(response, 'infraestrutura.html', 'text/html; charset=utf-8');

    } else if (rota === '/eventos') {
        readFile(response, 'eventos.html', 'text/html; charset=utf-8');

    } else if (rota === '/quem-somos') {
        readFile(response, 'quem-somos.html', 'text/html; charset=utf-8');

    // Cursos:
    } else if (rota === '/cursos') {
        readFile(response, 'cursos.html', 'text/html; charset=utf-8');

    } else if (rota === '/cursos/ads') {
        readFile(response, 'cursos/ads.html', 'text/html; charset=utf-8');

    } else if (rota === '/cursos/dsm') {
        readFile(response, 'cursos/dsm.html', 'text/html; charset=utf-8');

    } else if (rota === '/cursos/gestao') {
        readFile(response, 'cursos/gestao.html', 'text/html; charset=utf-8');

    } else if (rota === '/cursos/logistica') {
        readFile(response, 'cursos/logistica.html', 'text/html; charset=utf-8');

    // CSS e JavaScript:
    } else if (rota === '/css/style.css') {
        readFile(response, 'css/style.css', 'text/css; charset=utf-8');

    } else if (rota === '/js/script.js') {
        readFile(response, 'js/script.js', 'text/javascript; charset=utf-8');

    // Dados dos eventos (JSON):
    } else if (rota === '/dados/eventos.json') {
        readFile(response, 'dados/eventos.json', 'application/json; charset=utf-8');

    // Imagens:
    } else if (rota === '/img/imgfatec.jpeg') {
        readFile(response, 'img/imgfatec.jpeg', 'image/jpeg');

    } else if (rota === '/img/imgvestibular.jpeg') {
        readFile(response, 'img/imgvestibular.jpeg', 'image/jpeg');

    } else if (rota === '/img/alex.jpg') {
        readFile(response, 'img/alex.jpg', 'image/jpeg');

    } else if (rota === '/img/anna.jpg') {
        readFile(response, 'img/anna.jpg', 'image/jpeg');

    // Rota não encontrada:
    } else {
        paginaNaoEncontrada(response);
    }
};

// Servidor - criar e configurar:
var server = http.createServer(callback);

var PORTA = 2000;
server.listen(PORTA);
console.log('Servidor iniciado em http://localhost:' + PORTA);
