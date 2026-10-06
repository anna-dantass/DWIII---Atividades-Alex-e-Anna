# Projeto 03 - Portal FATEC Zona Sul

> **Observação:** este projeto foi feito tentando usar **somente o que foi
> ensinado em aula** (Node.js, HTML, CSS e JavaScript no nível visto na
> disciplina).

Refação do [Projeto 02](../Projeto02) conforme a aula de 28/09: portal do curso
feito em Node.js (módulos `http`, `fs`, `path` e `url`), usando **NPM** e a
arquitetura com a pasta **`/public`**.

### O que mudou em relação ao Projeto 02

| Projeto 02                                         | Projeto 03                                                     |
|----------------------------------------------------|----------------------------------------------------------------|
| Sem NPM, roda com `node app.js`                    | Com NPM (`package.json`), roda com `npm start`                 |
| `require()` (CommonJS)                             | `import` (ES Modules, `"type": "module"`)                      |
| Arquivos soltos na raiz do projeto                 | Frontend todo dentro da pasta `public/`                        |
| Uma rota `if/else` para cada arquivo (até CSS e imagens) | Objeto `routes` para as páginas e os demais arquivos servidos direto da `public/`, com o `content-type` pela extensão |

## Integrantes

- Alex Rodrigues de Oliveira
- Anna Marina Dantas da Silva

## O que foi pedido

**Entrega:** 05/10/2026 até as 14h30, pelo link do GitHub.

> Conforme aula do dia 28/09, fazer o projeto anterior (PROJETO 02), utilizando
> **NPM** e a arquitetura **`/public`**.

| Requisito                          | Onde está                                                        |
|------------------------------------|------------------------------------------------------------------|
| Usar NPM                           | `package.json` (`"type": "module"` e script `npm start`)         |
| Arquitetura com a pasta `/public`  | todo o frontend fica em `public/` e o `app.js` serve os arquivos dela |
| Mesmo conteúdo do Projeto 02       | mesmas páginas, rotas e porta 2000 (requisitos abaixo)          |

### Requisitos do Projeto 02 (que continuam valendo)

Desenvolver um projeto web completo (frontend e backend) para o site do curso:

| Requisito                                                                  | Onde está                                  |
|----------------------------------------------------------------------------|--------------------------------------------|
| Página inicial com apresentação geral do site                              | `/` → `public/index.html`                  |
| Vestibular: informações, prazos, orientações e link para o site oficial    | `/vestibular` (link para vestibular.fatec.sp.gov.br) |
| Cursos da FATEC Zona Sul, com uma página detalhada para cada curso         | `/cursos` e `/cursos/ads`, `/dsm`, `/gestao`, `/logistica` |
| Infraestrutura: instalações da unidade                                     | `/infraestrutura`                          |
| Eventos: calendário e programação                                          | `/eventos` (dados em `public/dados/eventos.json`) |
| Quem Somos: apresentação dos integrantes do grupo                          | `/quem-somos`                              |
| Integração entre backend e frontend                                        | servidor em `app.js` + `fetch()` do JSON   |
| Servidor rodando obrigatoriamente na **porta 2000**                        | `app.js` (`PORTA = 2000`)                  |

## Como rodar

```bash
cd Atividades/Projeto03
npm start
```

Depois é só acessar http://localhost:2000 no navegador.

## Rotas

| Rota                 | Arquivo                          |
|----------------------|----------------------------------|
| `/`                  | `public/index.html`              |
| `/vestibular`        | `public/vestibular.html`         |
| `/cursos`            | `public/cursos.html`             |
| `/cursos/ads`        | `public/cursos/ads.html`         |
| `/cursos/dsm`        | `public/cursos/dsm.html`         |
| `/cursos/gestao`     | `public/cursos/gestao.html`      |
| `/cursos/logistica`  | `public/cursos/logistica.html`   |
| `/infraestrutura`    | `public/infraestrutura.html`     |
| `/eventos`           | `public/eventos.html`            |
| `/quem-somos`        | `public/quem-somos.html`         |
| qualquer outra rota  | `public/erro404.html`            |

Os arquivos estáticos (CSS, JS, imagens e JSON) são servidos direto da pasta
`public`. A página de eventos carrega os dados de `public/dados/eventos.json`
com `fetch()`.

## Estrutura de pastas

```
Projeto03/
├── app.js               # servidor Node.js (porta 2000)
├── package.json         # configuração do NPM (npm start)
└── public/
    ├── index.html
    ├── vestibular.html
    ├── cursos.html
    ├── infraestrutura.html
    ├── eventos.html
    ├── quem-somos.html
    ├── erro404.html
    ├── cursos/          # uma página para cada curso
    ├── css/style.css
    ├── js/script.js
    ├── dados/eventos.json
    └── img/
```
