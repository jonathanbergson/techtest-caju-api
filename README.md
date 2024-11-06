# Projeto de Teste Técnico - Caju

Este projeto é um teste técnico desenvolvido para a empresa Caju. Ele utiliza React com Vite para a construção da interface do usuário e inclui diversas funcionalidades como CRUD, validação de formulários, e comunicação com APIs.

## Principais Bibliotecas Utilizadas

- Express

## Como Clonar e Rodar o Projeto

### Pré-requisitos

- Node.js (versão 20 ou superior)
- npm (versão 10 ou superior)

### Passos para Clonar e Rodar

1. Clone o repositório:
```bash
git clone https://github.com/jonathanbergson/techtest-caju-api.git
```

2. Navegue até o diretório do projeto:
```bash
cd techtest-caju-api
```

3. Instale as dependências:
```bash
npm install
```

4. Rode o projeto:
```bash
npm run dev
```

5. Abra o navegador e acesse:
```
http://localhost:3000
```

Pronto! O projeto estará rodando localmente.

### Principais Endpoints

- **GET /**: Retorna uma mensagem de boas-vindas.
- **POST /contacts**: Cria um novo contato.
- **GET /contacts**: Retorna uma lista de contatos, com opção de filtro por nome.
- **GET /contacts/:id**: Retorna um contato específico pelo ID.
- **PUT /contacts/:id**: Atualiza um contato específico pelo ID.
- **DELETE /contacts/:id**: Deleta um contato específico pelo ID.

### Usando Filtros no Endpoint GET /contacts

Para filtrar os contatos pelo nome, você pode adicionar um parâmetro de consulta `q` na URL. Por exemplo:

```
GET /contacts?q=nome
```

### Payload dos Endpoints

#### POST /contacts

```json
{
  "avatar": "string",
  "firstName": "string",
  "lastName": "string",
  "twitter": "string",
  "notes": "string"
}
```

#### PUT /contacts/:id

```json
{
  "avatar": "string",
  "favorite": "boolean",
  "firstName": "string",
  "lastName": "string",
  "twitter": "string",
  "notes": "string"
}
```
