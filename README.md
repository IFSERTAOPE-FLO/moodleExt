<p align="center">
  <a href="https://moodle.org" target="_blank" title="Moodle Website">
    <img src="https://raw.githubusercontent.com/moodle/moodle/main/.github/moodlelogo.svg" alt="Moodle Logo" width="200">
  </a>
  <br>
  <img src="Doc/01-projeto/assets/logo-sertao-conecta.png" alt="Sertão Conecta Logo" width="400">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PHP-8.2+-blue?style=for-the-badge&logo=php">
  <img src="https://img.shields.io/badge/MariaDB-10.11+-orange?style=for-the-badge&logo=mariadb">
  <img src="https://img.shields.io/badge/Apache-2.4+-red?style=for-the-badge&logo=apache">
  <img src="https://img.shields.io/badge/Composer-2.x-black?style=for-the-badge&logo=composer">
  <img src="https://img.shields.io/badge/License-GPLv3-green?style=for-the-badge">
</p>

<h1 align="center">🎓 MoodleExt</h1>
<p align="center"><strong>Ambiente Virtual de Aprendizagem Customizado — IFSERTÃO-PE Campus Floresta</strong></p>

<p align="center">
  O MoodleExt é uma plataforma educacional baseada no Moodle, adaptada para centralizar a gestão acadêmica e modernizar a experiência de ensino-aprendizagem no IFSERTÃO-PE.
</p>

---

## 📖 Sumário:

- [📌 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Recursos Principais](#-recursos-principais)
- [🛠️ Tecnologias](#️-tecnologias)
- [⚙️ Pré-requisitos](#️-pré-requisitos)
- [📦 Instalação](#-instalação)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [📚 Documentação Completa](#-documentação-completa)
- [⚖️ Licença](#️-licença)

---

## 📌 Sobre o Projeto

O **MoodleExt** é uma adaptação estratégica do Moodle 5.1.3+, desenvolvida como um projeto de extensão universitária. O foco principal é criar um ecossistema digital que atenda às demandas específicas da comunidade acadêmica, promovendo organização, inclusão digital e inovação pedagógica.

### Visão Geral:

- **Público:** Estudantes, Professores e Servidores.
- **Base:** Moodle LMS 5.1 (Open Source).
- **Finalidade:** Extensão universitária e impacto social.

---

## 🚀 Recursos Principais:

| Recurso | Descrição |
| :--- | :--- |
| **🎮 Gamificação** | Sistema de XP, níveis e medalhas para engajamento dos alunos. |
| **🎨 Customização UI** | Interface moderna e alinhada à identidade visual do IFSERTÃO-PE. |
| **📊 Gestão Centralizada** | Controle total de cursos, notas e frequência em um só lugar. |
| **💬 Comunicação** | Sistema interno de mensagens e notificações em tempo real. |
| **📱 Responsividade** | Acesso garantido via desktop, tablets e smartphones. |

---

## 🛠️ Tecnologias:

O projeto utiliza uma stack robusta e atualizada para garantir performance e segurança:

- **Linguagem:** PHP 8.2+
- **Banco de Dados:** MariaDB 10.11+
- **Servidor Web:** Apache 2.4+
- **Build System:** Node.js + Grunt + Sass
- **Gerenciador:** Composer 2.x

---

## ⚙️ Pré-requisitos

Para rodar o projeto localmente, você precisará de:

- **XAMPP** (Apache + MariaDB + PHP)
- **Git**
- **Composer** (Global)
- **Node.js** (Para compilação de assets)

<details>
<summary><b>🔍 Ver Extensões PHP obrigatórias</b></summary>

`gd`, `intl`, `sodium`, `zip`, `soap`, `mbstring`, `curl`, `openssl`, `xmlreader`, `xml`, `json`, `fileinfo`, `ctype`, `dom`, `simplexml`, `pcre`, `spl`, `filter`, `hash`, `iconv`, `zlib`
</details>

---

## 📦 Instalação:

Abaixo, os passos para configurar o ambiente de desenvolvimento.

<details>
<summary><b>🚀 Passo a Passo Completo (9 Etapas)</b></summary>

### 1. Iniciar XAMPP:

Inicie o **Apache** e o **MySQL** via XAMPP Control Panel.

### 2. Clonar o Repositório:

```bash
cd C:\xampp\htdocs
git clone https://github.com/IFSERTAOPE-FLO/moodleExt.git
cd moodleExt
```

### 3. Criar Banco de Dados:

```bash
C:\xampp\mysql\bin\mysql.exe -u root -e "CREATE DATABASE IF NOT EXISTS moodleext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

### 4. Configurar Arquivo config.php:

Copie o modelo padrão:
```bash
copy config-dist.php config.php
```
*Edite o arquivo com as credenciais do seu banco local.*

### 5. Criar Diretório de Dados:

```bash
mkdir C:\moodledata
```
*Certifique-se de que o Apache tem permissão de escrita nesta pasta.*

### 6. Instalar Dependências:

```bash
composer install
npm install
```

### 7. Configurar Redirecionamento:

Garanta que o `index.php` na raiz redireciona para `public/`:
```php
header('Location: public/', true, 301);
```

### 8. Testar Conexão:

```bash
php admin/cli/check_database.php (Exemplo)
```

### 9. Acessar o Instalador Web:

Abra [http://localhost/moodleExt/](http://localhost/moodleExt/) e siga o assistente do Moodle.

</details>

---

## 📁 Estrutura do Projeto:

Abaixo, a organização simplificada dos diretórios:

```bash
moodleExt/
├── public/                 # Raiz web pública (CSS, JS, Temas)
├── admin/                  # Ferramentas administrativas CLI
├── lib/                    # Core da aplicação
├── vendor/                 # Dependências PHP (Composer)
├── Doc/                    # Documentação do Projeto ⬅️
└── README.md               # Este arquivo
```

---

## 📚 Documentação Completa

A documentação detalhada foi organizada em módulos para facilitar a consulta:

1. [**01-Projeto:**](Doc/01-projeto/) Contexto, identidade visual e visão geral.
2. [**02-Requisitos:**](Doc/02-requisitos/) Regras de negócio e requisitos técnicos.
3. [**03-Telas:**](Doc/03-telas/) Guia de interfaces e protótipos.
4. [**04-Setup:**](Doc/04-setup/) Instruções técnicas avançadas.
5. [**05-Guia:**](Doc/05-guia/) Padrões de código e convenções de commit.

---

## ⚖️ Licença:

Este projeto está sob a licença **GNU General Public License v3.0 (GPLv3)**. Consulte o arquivo [COPYING.txt](COPYING.txt) para mais detalhes.

---

<p align="center">
  <b>Desenvolvido por alunos do IFSERTÃO-PE Campus Floresta · @2026</b>
</p>
<p align="center">
Time de Desenvolvimento: 
  - Victor Kauê
  - Giselle Souza
</p>