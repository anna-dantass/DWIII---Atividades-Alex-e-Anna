// Testar JavaScript:
function testarJS(){
    document.getElementById('mensagemJS').innerHTML = 
    'JavaScript Executado!!!!';
}

// Carregar JSON
fetch('/dados/dados.json')
    .then(function(response){
        return response.json();
    })
    .then(function(dados){
        document.getElementById('dadosJson').innerHTML =
        '<b>Disciplina:</b> ' + dados.disciplina + '<br>' +
        '<b>Curso:</b> ' + dados.curso + '<br>' +
        '<b>Nome:</b> ' + dados.nome + '<br>' +
        '<b>Ano:</b> ' + dados.ano; 
    });

// TROCAR VIDEO:
function trocarVideo(video){
    var player = document.getElementById('playerVideo');

    player.src = '/video/' + video;
    document.getElementById('nomeVideo').innerHTML = video;

    player.play();
}