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

<h1 align="center">🎓 MoodleExt - Sertão Conecta</h1>

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
| **♿ Acessibilidade** | Auditoria automática via **Brickfield** para inclusão digital. |
| **🤖 Analytics** | Modelos de predição para identificação de alunos em risco. |
| **🔐 Privacidade** | Gestão completa de dados e conformidade com a LGPD/GDPR. |

---

## 🛠️ Tecnologias:

O projeto utiliza uma stack robusta e atualizada para garantir performance e segurança:

- **Linguagem:** ![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white) `8.2+`
- **Banco de Dados:** ![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white) `10.11+`
- **Servidor Web:** ![Apache](https://img.shields.io/badge/Apache-D22128?style=flat-square&logo=apache&logoColor=white) `2.4+`
- **Build System:** ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) + ![Grunt](https://img.shields.io/badge/Grunt-FBA919?style=flat-square&logo=grunt&logoColor=white) + ![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
- **Gerenciador:** ![Composer](https://img.shields.io/badge/Composer-885630?style=flat-square&logo=composer&logoColor=white) `2.x`

---

## ⚙️ Pré-requisitos

Para rodar o projeto localmente, você precisará de:

- ![XAMPP](https://img.shields.io/badge/XAMPP-FB7A24?style=flat-square&logo=xampp&logoColor=white) **XAMPP** (Apache + MariaDB + PHP)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) **Git**
- ![Composer](https://img.shields.io/badge/Composer-885630?style=flat-square&logo=composer&logoColor=white) **Composer** (Global)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) **Node.js** (Para compilação de assets)

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
├── .github/
│   ├── workflows/          # Workflows de CI/CD (Push, Tests, Deploy)
│   └── SECURITY.md         # Políticas de Segurança
├── .grunt/                 # Configurações de Build (Sass, JS, Linting)
├── admin/cli/              # Scripts de terminal (Cron, Cache, Purge, Upgrade)
├── Doc/                    # Documentação do Projeto ⬅️
│   ├── 01-projeto/         # Identidade Visual, Gamificação e Conceito
│   ├── 02-requisitos/      # Especificações Técnicas e de Negócio
│   ├── 03-telas/           # Mockups e Protótipos (Auth, Dashboard)
│   ├── 04-setup/           # Manuais de Instalação e Configuração
│   └── 05-guia/            # Padrões de Desenvolvimento e Commits
├── lib/                    # Core do Moodle e Extensões de Teste (Behat)
├── public/                 # Raiz do Servidor Web (Interface do Usuário)
│   ├── admin/              # Administração via Web
│   └── theme/              # Temas Customizados (Identidade IFSERTÃO)
├── tool/                   # Ferramentas Internas Avançadas
│   ├── analytics/          # Predição de Risco e IA
│   ├── brickfield/         # Auditoria de Acessibilidade
│   ├── componentlibrary/   # Biblioteca de UI (Mustache/Sass)
│   └── dataprivacy/        # Conformidade LGPD/GDPR
├── vendor/                 # Dependências de Backend (Composer)
└── README.md               # Este arquivo
```

---

## 🛠️ Ferramentas Administrativas:

O MoodleExt inclui ferramentas avançadas para gestão do ambiente:

- **Brickfield Accessibility:** Auditoria automática de acessibilidade em todo o conteúdo.
- **Learning Plans (LP):** Gestão de planos de aprendizagem baseados em competências.
- **Data Privacy:** Painel para gestão de solicitações de dados e conformidade legal.
- **Analytics Models:** Sistema de predição para evitar a evasão escolar.
- **Component Library:** Biblioteca de componentes UI para desenvolvedores.

---

## 💻 Comandos Úteis (CLI):

Para tarefas de manutenção, utilize os scripts em `admin/cli/`:

| Comando | Descrição |
| :--- | :--- |
| `php admin/cli/cron.php` | Executa as tarefas agendadas do sistema. |
| `php admin/cli/purge_caches.php` | Limpa todos os caches do sistema. |
| `php admin/cli/upgrade.php` | Realiza o upgrade da base de dados via terminal. |
| `php admin/cli/check_database_schema.php` | Verifica a integridade do esquema do banco. |
| `php admin/cli/maintenance.php --enable` | Coloca o site em modo de manutenção. |


---

## 📚 Documentação Completa

A documentação detalhada foi organizada em módulos para facilitar a consulta:

1. [**01-Projeto:**](Doc/01-projeto/) Contexto, identidade visual e visão geral.
2. [**02-Requisitos:**](Doc/02-requisitos/) Regras de negócio e requisitos técnicos.
3. [**03-Telas:**](Doc/03-telas/) Guia de interfaces e protótipos.
4. [**04-Setup:**](Doc/04-setup/) Instruções técnicas avançadas.
5. [**05-Guia:**](Doc/05-guia/) Padrões de código e convenções de commit.

---

## 🤝 Contribuição:

Contribuições são bem-vindas! Para garantir a organização, siga estas diretrizes:

1. **Padrão de Commits:** Utilize mensagens claras seguindo o [Guia de Commits](Doc/05-guia/padrao-commits.md).
2. **Pull Requests:** Documente bem suas alterações e verifique se os testes básicos foram aprovados.
3. **Issue Tracking:** Reporte bugs ou sugira melhorias via GitHub Issues.

---

## ⚖️ Licença:

Este projeto está sob a licença **GNU General Public License v3.0 (GPLv3)**. Consulte o arquivo [COPYING.txt](COPYING.txt) para mais detalhes.

---

<p align="center">
  <b>Desenvolvido por alunos do IFSERTÃO-PE Campus Floresta · © 2026</b>
</p>

<p align="center">
  🚀 <b>Time de Desenvolvimento:</b><br>
  Victor Kauê &nbsp;•&nbsp; Giselle Souza
</p>