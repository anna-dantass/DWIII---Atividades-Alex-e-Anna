/*
Projeto 03 - Desenvolvimento Web III
Autores: Alex Rodrigues de Oliveira e Anna Marina Dantas da Silva

Portal da FATEC Zona Sul em Node.js (http + fs + path + url),
usando NPM e a arquitetura com a pasta /public vista na aula de 28/09.
*/

// Carregar os Modulos:
import http from 'http';
import path from 'path';
import fs from 'fs';
import {parse, fileURLToPath} from 'url';

// Recuperar __filename e __dirname:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pasta Public
const publicDir = path.join(__dirname, 'public');

// Porta do servidor:
const PORTA = 2000;

// Content-Types:
const contentTypes = {
    '.html':        'text/html; charset=utf-8',
    '.css':         'text/css; charset=utf-8',
    '.js':          'text/javascript; charset=utf-8',
    '.json':        'application/json; charset=utf-8',
    '.jpeg':        'image/jpeg',
    '.jpg':         'image/jpeg',
    '.png':         'image/png',
    '.pdf':         'application/pdf',
    '.mp4':         'video/mp4'
};

// Rotas:
const routes = {
    '/':                    'index.html',
    '/vestibular':          'vestibular.html',
    '/cursos':              'cursos.html',
    '/cursos/ads':          'cursos/ads.html',
    '/cursos/dsm':          'cursos/dsm.html',
    '/cursos/gestao':       'cursos/gestao.html',
    '/cursos/logistica':    'cursos/logistica.html',
    '/infraestrutura':      'infraestrutura.html',
    '/eventos':             'eventos.html',
    '/quem-somos':          'quem-somos.html'
};

// Pagina de Erro 404:
function erro404(response){
    response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
    fs.createReadStream(
        path.join(publicDir, 'erro404.html')
    ).pipe(response);
}

// Abrir Arquivos:
function readFile(response, file){
    fs.readFile(file, function(err, data){
        if(err)
            return erro404(response);

        var extension = path.extname(file).toLowerCase();
        var contentType = contentTypes[extension] || 'application/octet-stream';

        response.writeHead(200, {'Content-Type':contentType});
        response.end(data);
    })
}

// Função Callback para utilizar no webserver:
var callback = function(request, response){
    var pathname = decodeURIComponent(parse(request.url).pathname);

    // ROTAS:
    if(routes[pathname])
        return readFile(response, path.join(publicDir, routes[pathname]));

    // Arquivos Estaticos
    var file = path.join(publicDir, pathname);

    // Impedir acesso fora da pasta public
    if(!file.startsWith(publicDir))
        return erro404(response);

    readFile(response, file);
}

// Servidor - Criação e Configuração:
var server = http.createServer(callback);
server.listen(PORTA);
console.log('Servidor iniciado em http://localhost:' + PORTA + '/ ...');
