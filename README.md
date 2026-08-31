# Projeto 01 - Desenvolvimento Web III

Site de apresentação pessoal da dupla, feito em Node.js puro (módulos `http`,
`url` e `fs`), com base nos exemplos vistos em aula (`App01.js` a `App04.js`,
na raiz do repositório).

## Integrantes

- Alex Rodrigues de Oliveira - `/alex`
- Anna Marina Dantas da Silva - `/anna`

## Como rodar

```bash
cd Atividades
node app.js
```

Depois é só acessar http://localhost:3000 no navegador.

## Estrutura de rotas

| Rota                 | Conteúdo                                   |
|-----------------------|---------------------------------------------|
| `/`                   | `index.html` - página principal              |
| `/alex`               | menu pessoal de Alex                         |
| `/alex/sobre`         | "quem sou" de Alex                           |
| `/alex/curriculo`     | currículo de Alex em PDF                     |
| `/alex/foto`          | foto de Alex                                 |
| `/anna`               | menu pessoal de Anna                         |
| `/anna/sobre`         | "quem sou" de Anna                           |
| `/anna/curriculo`     | currículo de Anna em PDF                     |
| `/anna/foto`          | foto de Anna                                 |
| `/projeto`            | documentação completa do projeto em PDF      |
| qualquer outra rota   | `erro404.html`                               |

## Estrutura de pastas

```
Atividades/
├── app.js                 # servidor Node.js (rotas)
├── index.html              # página principal
├── erro404.html            # página de erro 404
├── alex/
│   ├── index.html          # menu do Alex
│   ├── sobre.html          # "quem sou" do Alex
│   ├── curriculo.pdf       # currículo do Alex
│   └── foto.jpg            # foto do Alex
├── anna/
│   ├── index.html          # menu da Anna
│   ├── sobre.html          # "quem sou" da Anna
│   ├── curriculo.pdf       # currículo da Anna
│   └── foto.jpg            # foto da Anna
└── projeto/
    └── documentacao.pdf    # documentação do projeto (código-fonte incluso)
```
