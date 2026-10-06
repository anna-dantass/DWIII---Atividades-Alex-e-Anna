# Projeto 02 - Portal FATEC Zona Sul

> **Observação:** este projeto foi feito tentando usar **somente o que foi
> ensinado em aula** (Node.js, HTML, CSS e JavaScript no nível visto na
> disciplina).

Portal do curso feito em Node.js puro (módulos `http`, `url`, `fs` e `path`),
no mesmo padrão do Projeto 01: sem NPM, com as rotas tratadas uma a uma em
`if/else` no `app.js`. A versão com NPM e a pasta `/public` (vista na aula de
28/09) é o [Projeto 03](../Projeto03).

## Integrantes

- Alex Rodrigues de Oliveira
- Anna Marina Dantas da Silva

## O que foi pedido

**Entrega:** 28/09/2026 até as 14h49, somente pelo link do repositório no GitHub.

Desenvolver um projeto web completo (frontend e backend) para o site do curso:

| Requisito                                                                  | Onde está                                  |
|----------------------------------------------------------------------------|--------------------------------------------|
| Página inicial com apresentação geral do site                              | `/` → `index.html`                         |
| Vestibular: informações, prazos, orientações e link para o site oficial    | `/vestibular` (link para vestibular.fatec.sp.gov.br) |
| Cursos da FATEC Zona Sul, com uma página detalhada para cada curso         | `/cursos` e `/cursos/ads`, `/dsm`, `/gestao`, `/logistica` |
| Infraestrutura: instalações da unidade                                     | `/infraestrutura`                          |
| Eventos: calendário e programação                                          | `/eventos` (dados em `dados/eventos.json`) |
| Quem Somos: apresentação dos integrantes do grupo                          | `/quem-somos`                              |
| Integração entre backend e frontend                                        | servidor em `app.js` + `fetch()` do JSON   |
| Servidor rodando obrigatoriamente na **porta 2000**                        | `app.js` (`var PORTA = 2000`)              |

## Como rodar

```bash
cd Atividades/Projeto02
node app.js
```

Depois é só acessar http://localhost:2000 no navegador.

## Rotas

| Rota                 | Arquivo                          |
|----------------------|----------------------------------|
| `/`                  | `index.html`                     |
| `/vestibular`        | `vestibular.html`                |
| `/cursos`            | `cursos.html`                    |
| `/cursos/ads`        | `cursos/ads.html`                |
| `/cursos/dsm`        | `cursos/dsm.html`                |
| `/cursos/gestao`     | `cursos/gestao.html`             |
| `/cursos/logistica`  | `cursos/logistica.html`          |
| `/infraestrutura`    | `infraestrutura.html`            |
| `/eventos`           | `eventos.html`                   |
| `/quem-somos`        | `quem-somos.html`                |
| qualquer outra rota  | `erro404.html`                   |

Os arquivos de CSS, JavaScript, imagens e JSON também têm uma rota própria no
`app.js` (ex.: `/css/style.css`, `/img/alex.jpg`), cada uma com o seu
`content-type`. A página de eventos carrega os dados de `/dados/eventos.json`
com `fetch()`.

## Estrutura de pastas

```
Projeto02/
├── app.js               # servidor Node.js (porta 2000) com todas as rotas
├── index.html
├── vestibular.html
├── cursos.html
├── infraestrutura.html
├── eventos.html
├── quem-somos.html
├── erro404.html
├── cursos/              # uma página para cada curso
├── css/style.css
├── js/script.js
├── dados/eventos.json
└── img/
```
