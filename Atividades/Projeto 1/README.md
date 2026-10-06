# Projeto 01 - Apresentação pessoal

> **Observação:** este projeto foi feito tentando usar **somente o que foi
> ensinado em aula** (Node.js, HTML, CSS e JavaScript no nível visto na
> disciplina).

Site de apresentação pessoal da dupla, feito em Node.js puro (módulos `http`,
`url` e `fs`), com base nos exemplos vistos em aula.

## Integrantes

- Alex Rodrigues de Oliveira
- Anna Marina Dantas da Silva

## O que foi pedido

**Entrega:** 31/08/2026 às 14h50, pelo link do GitHub (cada aluno na sua conta).

Em dupla, com base nos exemplos de aula (`app01.js` a `app04.js`), criar uma
aplicação web de apresentação pessoal dos dois integrantes:

| Requisito                                                              | Onde está                                   |
|------------------------------------------------------------------------|---------------------------------------------|
| Rota `/` abrindo o `index.html` (nomes, apresentação, navegação, links) | `index.html`                                |
| Uma rota para cada integrante                                          | `/alex` e `/anna`                           |
| Página "quem sou" de cada aluno                                        | `/alex/sobre` e `/anna/sobre`               |
| Currículo de cada aluno em PDF                                         | `/alex/curriculo` e `/anna/curriculo`       |
| Outras informações relevantes                                          | `/alex/foto` e `/anna/foto`                 |
| Rota `/projeto` com a documentação do projeto em PDF                   | `projeto/documentacao.pdf`                  |
| Página de erro para rotas inexistentes                                 | `erro404.html`                              |

A documentação em PDF precisa ter: identificação da dupla, objetivo, estrutura
das rotas, funcionamento da aplicação, todos os códigos-fonte com explicação
dos principais trechos, justificativa das decisões e considerações finais.

## Como rodar

```bash
cd "Atividades/Projeto 1"
node app.js
```

Depois é só acessar http://localhost:3000 no navegador.

## Rotas

| Rota                | Conteúdo                              |
|---------------------|---------------------------------------|
| `/`                 | página principal                      |
| `/alex`             | menu do Alex                          |
| `/alex/sobre`       | "quem sou" do Alex                    |
| `/alex/curriculo`   | currículo do Alex (PDF)               |
| `/alex/foto`        | foto do Alex                          |
| `/anna`             | menu da Anna                          |
| `/anna/sobre`       | "quem sou" da Anna                    |
| `/anna/curriculo`   | currículo da Anna (PDF)               |
| `/anna/foto`        | foto da Anna                          |
| `/projeto`          | documentação do projeto (PDF)         |
| qualquer outra rota | `erro404.html`                        |

O documento de entrega da dupla está em `ALEX E ANNA.docx` / `ALEX E ANNA.pdf`.
