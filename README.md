<h1 align="center"> DSMovie </h1>

<h3 align="center"> :construction: Projeto em construção :construction: </h3>

<p align="center">
<!--  <a href="#hammer-funcionalidades-do-projeto">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; -->
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tarefas">Tarefas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

## Resumo

Plataforma com listagem de filmes.

## Tecnologias

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Java](https://docs.oracle.com/en/java/)

### Ferramentas que você deve instalar no seu computador

- [JDK 11 ou 17](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html)
- [STS](https://spring.io/tools)
- [Postman](https://www.postman.com/downloads/)
- [Postgresql 12 e pgAdmin](https://www.postgresql.org/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- [NodeJS 16.x](https://nodejs.org/en/download/)
- [VS Code](https://code.visualstudio.com/Download)
- [Git](https://git-scm.com/downloads)

> Playlist que mostra a instalação correta: (https://www.youtube.com/playlist?list=PLNuUvBZGBA8kMTSPMmmNiRm2z0gRxXxox)

## Layout

Acesse o [Figma](https://www.figma.com/downloads/) para mais informações sobre o layout. Precisa ter uma conta para clonar

[DSMovie](https://www.figma.com/file/hyovBMIxwrn2Bb5MZLrxHL/DSMovie4)

### Cores Principais

```css
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

:root {
  --color-primary: #049583;
  --color-letter: #f7f7f7;
  --color-values: #ffbb3a;
  --bg-gray: #e2e2e2;
  --color: #aaaaaa;
  --color-validation: #989898;
}
```

#### Instalar Axios

```bash
yarn add axios@0.24.0
```

- Definir BASE_URL
- Definir os tipos Movie e MoviePage
- Fazer a requisição

### Tarefas

> Objetivo final da aula 01

- Criar projetos backend e frontend :check:
- Salvar os projeto no Github em monorepo :check:
- Montar o visual estático do front end :check:

> Objetivo final da aula 02

- Implementar o back end :check:
- Modelo de domínio :check:
- Acesso a banco de dados :check:
- Estruturar o back end no padrão camadas :check:
- Criar endpoints da API REST
- Implantação na nuvem

> Objetivo final da aula 03 (11/03)

- Integrar back end e front end
- Três pilares do React
  - Componentes
  - Props
  - Estado
- React Hooks
  - useState
  - useEffect
  - useParams
  - useNavigate

## 📁 Acesso ao projeto

> Para executar o projeto rode o `yarn dev`, depois abra em `localhost:3000`.

## 🛠️ Abrir e rodar o projeto

```git
## clone repositorio
git clone  "https://github.com/ShaTeixeira/dsmovie-sds-spring-reactjs"

## instalar dependencias
yarn

## rodar o projeto
yarn dev
```

### Passo: criar projeto Spring Boot

- Criar projeto Spring Boot no `Spring Initializr` com as seguintes dependências:

  - Web
  - JPA
  - H2
  - Postgres
  - Security

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## Autores

<p align="center">
♥ Code by Shayane Teixeira ♥
</p>
