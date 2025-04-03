# Habits Manager

![Licença MIT](https://img.shields.io/github/license/ricardoandreh/task-tracker-api)
![Java](https://img.shields.io/badge/Java-17+-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.4-green)
![Maven](https://img.shields.io/badge/Maven-4.0.0-red)

## Descrição

Habits Manager é um projeto para gerenciamento de hábitos e metas. A aplicação permite aos usuários criar, organizar e acompanhar seus hábitos diários de forma prática e intuitiva.

### Público-Alvo

Indicado para indivíduos que buscam melhorar sua rotina e produtividade, bem como para profissionais e equipes que desejam estruturar melhor seus hábitos e metas.

## Funcionalidades

- **Autenticação JWT**: Controle de acesso seguro
- **Gerenciamento de Hábitos**: Criar, editar e excluir hábitos
- **Definição de Metas**: Acompanhamento de progresso
- **Impulsionado por IA**: Insights valiosos das atividades

## Tecnologias Utilizadas

### Frontend

- Vue.js 3
- Pinia
- Vue Router
- Vuetify
- Axios

### Backend

- Java 17 + Spring Boot
- Spring Security (JWT)
- Spring Data JPA
- Lombok
- PostgreSQL

## Como Rodar o Projeto

### Rodando Backend

1. Clone o repositório e acesse a pasta do backend
2. Configure o banco PostgreSQL e o arquivo `.env` com as credenciais
3. Execute:

    ```sh
    mvn spring-boot:run
    ```

### Rodando Frontend

1. Acesse a pasta do frontend
2. Instale as dependências:

    ```sh
    npm install
    ```

3. Execute o servidor:

    ```sh
    npm run dev
    ```

## Licença

Este projeto está licenciado sob os termos da licença MIT.
