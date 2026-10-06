// Marcar no menu a pagina atual:
var links = document.querySelectorAll('nav a');

for (var i = 0; i < links.length; i++) {
    var rota = links[i].getAttribute('href');
    var atual = window.location.pathname;

    if (rota === atual || (rota !== '/' && atual.startsWith(rota)))
        links[i].classList.add('ativo');
}

// Carregar EVENTOS do JSON (somente na pagina de eventos):
var listaEventos = document.getElementById('listaEventos');
var todosEventos = [];

if (listaEventos) {
    fetch('/dados/eventos.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (dados) {
            todosEventos = dados;
            mostrarEventos('todos');
        });
}

// Mostrar eventos filtrando pelo tipo:
function mostrarEventos(tipo) {
    var html = '';
    var meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
                 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

    for (var i = 0; i < todosEventos.length; i++) {
        var evento = todosEventos[i];

        if (tipo !== 'todos' && evento.tipo !== tipo)
            continue;

        var partes = evento.data.split('-'); // AAAA-MM-DD

        html +=
            '<div class="evento">' +
                '<div class="data"><span>' + partes[2] + '</span>' + meses[partes[1] - 1] + '</div>' +
                '<div>' +
                    '<h3>' + evento.titulo + '</h3>' +
                    '<p>' + evento.descricao + '</p>' +
                '</div>' +
            '</div>';
    }

    listaEventos.innerHTML = html || '<p>Nenhum evento encontrado.</p>';

    // Destacar o botao do filtro selecionado:
    var botoes = document.querySelectorAll('.filtros button');
    for (var j = 0; j < botoes.length; j++) {
        botoes[j].classList.toggle('ativo', botoes[j].dataset.tipo === tipo);
    }
}
