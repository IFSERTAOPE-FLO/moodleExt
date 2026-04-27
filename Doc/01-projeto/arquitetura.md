# 🏗️ Arquitetura Técnica — MoodleExt

Este documento descreve a infraestrutura técnica, o fluxo de dados e a organização do código do projeto MoodleExt.

## 📡 Visão Geral da Stack

O MoodleExt é construído sobre a arquitetura **LAMP/WAMP** (Linux/Windows, Apache, MySQL/MariaDB, PHP).

| Camada | Tecnologia | Função |
| :--- | :--- | :--- |
| **Servidor Web** | Apache 2.4+ | Processamento de requisições HTTP e roteamento. |
| **Linguagem** | PHP 8.2+ | Lógica de backend e comunicação com o Core do Moodle. |
| **Banco de Dados** | MariaDB 10.11+ | Armazenamento persistente de usuários, cursos e logs. |
| **Asset Build** | Node.js + Grunt | Minificação de JS, compilação de SCSS e linting. |

---

## 🛠️ Fluxo de Desenvolvimento de Assets

O projeto utiliza o **Grunt** para processar arquivos de estilo e scripts modernos. O fluxo segue o padrão:

1. **Sass (SCSS):** Localizados nas pastas de temas (ex: `public/theme/boost/scss/`). São compilados em CSS puro para o navegador.
2. **JavaScript (AMD/ESM):** Scripts modernos são processados para garantir compatibilidade com o sistema de módulos do Moodle (RequireJS).
3. **Mustache Templates:** Utilizados para renderizar a interface de forma desacoplada da lógica PHP.

---

## 🔐 Segurança e Estrutura de Pastas

Para aumentar a segurança, o projeto utiliza uma **raiz pública segregada**:

* **`moodleExt/` (Raiz):** Contém arquivos sensíveis como `config.php`, dependências `vendor/` e scripts CLI. Esta pasta **NÃO** deve ser exposta diretamente ao servidor web.
* **`public/` (Web Root):** Única pasta visível via HTTP. Contém o `index.php` principal e todos os ativos acessíveis ao usuário.

---

## 🔄 Fluxo de Dados (Requisição Típica)

1. O usuário acessa `http://localhost/moodleExt/`.
2. O `index.php` na raiz redireciona para `public/`.
3. O `public/index.php` carrega o arquivo `config.php` (da raiz) para estabelecer conexão com o banco e carregar as bibliotecas core (`lib/`).
4. O Moodle identifica o roteamento, carrega os plugins necessários e renderiza o template Mustache correspondente através do motor de temas.

---

## 🧩 Customizações e Plugins

O MoodleExt mantém o core do Moodle o mais limpo possível, preferindo extensões via:

* **Local Plugins (`local/`):** Para funcionalidades gerais do sistema.
* **Themes (`theme/`):** Para toda a identidade visual e experiência do usuário (UX).
* **Blocks (`blocks/`):** Para widgets de interface (ex: painel de gamificação).

---

*Última atualização: Abril de 2026*