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

// Content-Types:
const contentTypes = {
    '.html':        'text/html; charset=utf-8',
    '.css':         'text/css; charset=utf-8',
    '.js':          'text/javascript; charset=utf-8',
    '.json':        'application/json; charset=utf-8',
    '.jpeg':        'image/jpeg',
    '.png':         'image/png',
    '.pdf':         'application/pdf',
    '.mp4':         'video/mp4'
};

// Rotas:
const routes = {
    '/':        'index.html',
    '/rota1':   'rota1.html',
    '/rota2':   'rota2.html'
};

// Abrir Arquivos:
function readFile(response, file){
    fs.readFile(file, function(err, data){
        if(err){
            response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
            return fs.createReadStream(
                path.join(publicDir, 'erro404.html')
            ).pipe(response);
        }

        var extension = path.extname(file).toLocaleLowerCase();
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
        return readFile(response, path.join(publicDir, 'erro404.html'))

    readFile(response, file);
}

// Servidor - Criação e Configuração:
var server = http.createServer(callback);
server.listen(4500);
console.log('Servidor iniciado em http://localhost:45000/...')