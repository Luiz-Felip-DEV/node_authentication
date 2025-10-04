# 🔐 API de Autenticação Node.js

API REST completa de autenticação com registro, login e proteção de rotas usando JWT. Totalmente dockerizada com MySQL e phpMyAdmin.

![Node.js](https://img.shields.io/badge/Node.js-20-green)
![Express](https://img.shields.io/badge/Express-5.1-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)

## 🚀 Tecnologias

- **Node.js** + **Express** - Backend
- **Sequelize** - ORM
- **MySQL** - Banco de dados
- **JWT** - Autenticação
- **Bcrypt** - Criptografia
- **Docker** - Containerização

## ✨ Funcionalidades

✅ Registro de usuários  
✅ Login com JWT  
✅ Rotas protegidas  
✅ Senhas criptografadas  
✅ Validação de dados  
✅ Hot reload  

## 🐳 Instalação com Docker

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/autenticacao-node.git
cd autenticacao-node

# Inicie os containers
docker-compose up -d

# Acesse
# API: http://localhost:3000
# phpMyAdmin: http://localhost:8080
```

## 📌 Endpoints

### Registrar
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456"
}
```

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "joao@email.com",
  "password": "123456"
}
```

### Perfil (Protegido)
```bash
GET /api/auth/profile
Authorization: Bearer SEU_TOKEN
```

## 🧪 Testando

```bash
# Registrar usuário
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"João","email":"joao@email.com","password":"123456"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"joao@email.com","password":"123456"}'

# Perfil (substitua TOKEN)
curl http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer TOKEN"
```

## 📁 Estrutura

```
autenticacao_node/
├── src/
│   ├── config/          # Configuração do banco
│   ├── controllers/     # Lógica de negócio
│   ├── middlewares/     # Autenticação JWT
│   ├── models/          # Models Sequelize
│   ├── routes/          # Rotas da API
│   └── utils/           # Validações
├── docker-compose.yml   # Orquestração
├── Dockerfile           # Imagem da app
└── index.js             # Entrada principal
```

## 🛠️ Comandos Docker

```bash
# Iniciar
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar
docker-compose down

# Rebuild
docker-compose up --build

# Remover tudo
docker-compose down -v
```

## ⚙️ Variáveis de Ambiente

```env
PORT=3000
DB_HOST=mysql
DB_USER=root
DB_PASSWORD=rootpassword
DB_NAME=auth_db
JWT_SECRET=sua_chave_secreta
```

## 🔒 Segurança

- Senhas criptografadas com bcrypt (10 rounds)
- Tokens JWT com expiração de 7 dias
- Validações de entrada
- Senhas nunca retornadas na API
- Variáveis sensíveis em .env

## 📦 Instalação sem Docker

```bash
# Instalar dependências
npm install

# Configurar .env
# (alterar DB_HOST para localhost)

# Criar banco
CREATE DATABASE auth_db;

# Executar
npm run dev
```

## 🗄️ Banco de Dados

**Tabela: users**

| Campo      | Tipo         |
|------------|--------------|
| id         | INTEGER (PK) |
| name       | VARCHAR(100) |
| email      | VARCHAR(100) UNIQUE |
| password   | VARCHAR(255) |
| createdAt  | DATETIME     |
| updatedAt  | DATETIME     |

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova`)
3. Commit (`git commit -m 'Add nova feature'`)
4. Push (`git push origin feature/nova`)
5. Abra um Pull Request

## 📄 Licença

ISC License

## 👨‍💻 Autor

Desenvolvido por [Seu Nome](https://github.com/seu-usuario)

---

⭐ Se este projeto ajudou você, considere dar uma estrela!
