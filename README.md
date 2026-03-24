# GitHub User Sync

Aplicação web que consome a API pública do GitHub em tempo real para buscar e exibir informações de qualquer usuário da plataforma.

## 🚀 Demo

🔗 [Acessar projeto ao vivo](https://github-user-infos-sync.vercel.app)

---

## 📋 Sobre o projeto

O GitHub User Sync permite sincronizar qualquer usuário do GitHub com informações como avatar, nome, bio e repositórios públicos — tudo buscado diretamente da API REST do GitHub sem necessidade de backend.

Este projeto marca a transição de páginas estáticas para aplicações que consomem dados externos em tempo real, uma habilidade fundamental no desenvolvimento front-end moderno.

---

## ✨ Funcionalidades

- 🔍 Sincroniza usuários pela URL do usuário do GitHub
- 👤 Exibição de avatar, nome e bio
- 📦 Listagem de repositórios públicos
- ⚡ Requisições assíncronas com tratamento de erros
- 📱 Layout responsivo

---

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura semântica
- **CSS3** — estilização e responsividade
- **JavaScript** — lógica da aplicação
- **Fetch API / AJAX** — consumo de API REST assíncrono
- **GitHub REST API** — fonte dos dados em tempo real
- **Vercel** — deploy contínuo

---

## 📁 Estrutura do projeto

```
exercicio_ajax/
├── index.html
├── main.css
└── main.js
```

---

## ▶️ Como rodar localmente

Nenhuma dependência ou instalação necessária — JavaScript puro.

```bash
# Clone o repositório
git clone https://github.com/VinnMac/github-user-sync

# Entre na pasta
cd github-user-sync

# Abra o index.html no navegador
# (ou use a extensão Live Server no VS Code)
```

---

## 🔌 API utilizada

[GitHub REST API](https://docs.github.com/en/rest) — endpoint `/users/{username}`

```
GET https://api.github.com/users/{username}
```

---

## 📚 O que aprendi

- Consumo de APIs REST com **Fetch API**
- Programação **assíncrona** com `async/await`
- Tratamento de **exceções** em requisições HTTP
- Manipulação do **DOM** com dados dinâmicos vindos de API externa

---

## 👨‍💻 Autor

**Vinícius Machado**
- GitHub: [@VinnMac](https://github.com/VinnMac)
- LinkedIn: [vinn-machado](https://www.linkedin.com/in/vinn-machado/)

---

*Projeto desenvolvido durante o curso Desenvolvedor Full Stack Python — EBAC*
