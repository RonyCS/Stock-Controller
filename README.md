# Stock Controller

![Node.js](https://img.shields.io/badge/Node.js-v14.x%20LTS-green?style=flat&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-brightgreen?style=flat)

## Sobre o Projeto


## Tecnologias e Ferramentas

As seguintes ferramentas e tecnologias foram utilizadas no desenvolvimento deste projeto:

- **Visual Studio Code (VSCode)**: Editor de código utilizado para o desenvolvimento e edição do projeto. 
- **Git**: Sistema de controle de versão para gerenciar e compartilhar o código.
- **Node.js**: Ambiente de execução JavaScript, utilizado para rodar o servidor da aplicação e os testes.
- **React**: Biblioteca JavaScript para desenvolvimento da interface do usuário, garantindo interatividade e experiência fluida.
- **Prisma**: ORM (Object-Relational Mapping) utilizado para gerenciar a conexão com o banco de dados MySQL, facilitando a manipulação e consulta de dados.
- **MySQL**: Banco de dados relacional utilizado para armazenar os dados de produtos.


## Conteúdo do Projeto

O projeto consiste em uma aplicação de controle de estoque que permite gerenciar produtos por meio de operações CRUD (Create, Read, Update, Delete). O sistema possui as seguintes funcionalidades principais:
Cadastro de Produtos: Inserção de novos produtos com nome, quantidade, peso e marca.
Consulta de Produtos: Visualização de todos os produtos cadastrados ou de um produto específico pelo seu ID.
Atualização de Produtos: Modificação de informações de produtos existentes. 
Exclusão de Produtos: Remoção de produtos do sistema.
A aplicação é composta por:
Backend: API desenvolvida com Node.js e Prisma para conexão com o banco de dados.
Frontend: Interface construída em React para interação do usuário.

## Execução do Projeto

Para rodar os testes do projeto em sua máquina, siga os passos abaixo:

## Backend

Clone o repositório:
-git clone https://github.com/seu-usuario/controlador-de-estoque.git

Acesse a pasta do backend:
-cd backend

Instale as dependências:
-npm install

Configure o arquivo .env com as informações de conexão ao banco de dados MySQL.
Execute as migrações do Prisma para configurar o banco de dados:
-npx prisma migrate dev

Inicie o servidor:
-npm start

## Frontend

Acesse a pasta do frontend:
-cd frontend

Instale as dependências:
-npm install

Inicie a aplicação:
-npm start

## Pré-requisitos:

Para executar o projeto, você precisará das seguintes ferramentas instaladas no seu ambiente:

Node.js: Versão 14 ou superior.

MySQL: Servidor de banco de dados para armazenar os dados do projeto.

npm ou yarn: Gerenciador de pacotes para instalação de dependências.

Git: Para clonar o repositório.

Certifique-se de que o banco de dados MySQL esteja configurado e em execução antes de iniciar a aplicação.



