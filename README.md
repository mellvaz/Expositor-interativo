# 🕹️ Biblioteca de Jogos (Game Library)

Aplicação web desenvolvida em React para o gerenciamento de uma coleção de jogos retrô. O projeto conta com uma interface temática em estilo Arcade 8-bit, persistência de dados no navegador e estrutura de componentes modularizada.

---

## 📸 Demonstração

- **Interface Arcade:** Design dinâmico com iluminação neon e tipografia pixel art.
- **Formulário Dinâmico:** Adição rápida de jogos com validação de campos.
- **Coleção Responsiva:** Exibição dos jogos em grelha com opção de remoção e link direto para pesquisa no Google.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** (com [Vite](https://vitejs.dev/))
- **JavaScript (ES6+)**
- **CSS Modules & CSS Global** (Estilização Arcade com *Press Start 2P*)
- **Prop-Types** (Validação de tipo de propriedades)
- **Web Storage API** (`localStorage` para persistência de dados)

---

## 🎯 Funcionalidades

- **Gerenciamento de Estado (CRUD):** Adicione novos jogos (título e capa) e remova itens existentes da lista em tempo real.
- **Custom Hook (`useGameCollection`):** Separação total entre a regra de negócio/armazenamento e a camada visual da aplicação.
- **Persistência com `localStorage`:** A sua coleção de jogos permanece salva mesmo ao fechar ou recarregar o navegador.
- **Validação de Props:** Componentes estruturados com verificação rigorosa via `prop-types` para prevenir erros de dados.
- **Pesquisa Integrada:** Cada cartão inclui o botão "Saiba mais", que abre uma pesquisa automática do jogo no Google.

---

## 📁 Estrutura do Projeto

```text
src/
├── components/
│   ├── Card/
│   │   ├── index.jsx
│   │   └── styles.module.css
│   ├── Game.jsx
│   ├── NewGameForm.jsx
│   └── TextInput.jsx
├── data/
│   └── jogos.js
├── hooks/
│   └── useGameCollection.js
├── App.css
├── App.jsx
├── main.jsx
└── index.css
