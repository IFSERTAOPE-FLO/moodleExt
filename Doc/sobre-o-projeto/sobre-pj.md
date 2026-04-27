# 📚 Sobre o Projeto — MoodleExt

## 🏫 Contexto Institucional

O **MoodleExt** é um projeto de extensão desenvolvido por alunos do **IFSERTÃO-PE (Instituto Federal do Sertão Pernambucano) — Campus Floresta**, com o objetivo de criar um **Ambiente Virtual de Aprendizagem (AVA)** customizado para atender às demandas específicas da comunidade acadêmica do campus.

O projeto nasceu da necessidade de modernizar e adaptar a gestão acadêmica do instituto, utilizando o Moodle — plataforma open source de ensino a distância líder no mundo — como base tecnológica.

---

## 🎯 Objetivos

### Objetivo Geral

Implantar e customizar uma plataforma de Ensino a Distância (EaD) baseada no Moodle para suporte às atividades acadêmicas do IFSERTÃO-PE Campus Floresta, tornando o processo de ensino-aprendizagem mais acessível, organizado e eficiente.

### Objetivos Específicos

- Centralizar a gestão de cursos, alunos e professores em uma única plataforma;
- Personalizar o ambiente visual e funcional do Moodle para a identidade institucional do IFSERTÃO-PE;
- Garantir escalabilidade para suportar múltiplos usuários e cursos simultaneamente;
- Organizar e facilitar o acesso a materiais didáticos, atividades e avaliações;
- Promover a inclusão digital da comunidade acadêmica do campus;

---

## 🧩 O que é o MoodleExt?

O MoodleExt é uma **adaptação customizada do Moodle 5.1.3+** com as seguintes características:

| Característica | Descrição |
|---|---|
| **Base** | Moodle LMS versão 5.1 (plataforma open source) |
| **Público-alvo** | Estudantes, professores e servidores do IFSERTÃO-PE Campus Floresta |
| **Tipo** | Aplicação web — Ambiente Virtual de Aprendizagem (AVA) |
| **Licença** | GNU General Public License v3.0 (GPLv3) |
| **Finalidade** | Extensão universitária com impacto direto na comunidade acadêmica |

---

## 🏗️ Arquitetura do Sistema

### Visão Geral

O projeto segue uma arquitetura web tradicional baseada na stack **LAMP/WAMP**:

```
[ Usuário/Navegador ]
        ↓
  [ Apache 2.4+ ]
        ↓
  [ PHP 8.2+   ]
        ↓
[ MariaDB 10.11+ ]
```

### Separação de Responsabilidades

Uma característica importante da arquitetura é a **separação da raiz pública por segurança**:

```
moodleExt/                   ← Raiz do projeto (NÃO pública)
├── config.php               ← Configurações sensíveis (banco, chaves)
├── composer.json / vendor/  ← Dependências PHP (não acessíveis)
├── lib/                     ← Bibliotecas core
├── admin/cli/               ← Scripts administrativos de linha de comando
└── public/                  ← Única pasta exposta ao servidor web (HTTP)
    ├── index.php            ← Ponto de entrada do Moodle
    ├── admin/               ← Painel administrativo
    ├── mod/                 ← Módulos de atividades (fórum, quiz, etc.)
    ├── theme/               ← Temas visuais
    ├── course/              ← Gestão de cursos
    └── ...
```

> **Por que isso importa?** Arquivos como `config.php` (que contém credenciais do banco de dados) nunca ficam acessíveis via URL. O `index.php` na raiz faz apenas um redirecionamento `301` para `public/`, garantindo segurança.

---

## 🛠️ Stack Tecnológica

### Back-end

| Tecnologia | Versão | Papel |
|---|---|---|
| **PHP** | 8.2+ | Linguagem principal do servidor |
| **MariaDB** | 10.11+ | Banco de dados relacional |
| **Apache** | 2.4+ | Servidor web |
| **Composer** | 2.x | Gerenciador de dependências PHP |

### Extensões PHP Necessárias

`gd` · `intl` · `sodium` · `zip` · `soap` · `mbstring` · `curl` · `openssl` · `xmlreader` · `xml` · `json` · `fileinfo` · `ctype` · `dom` · `simplexml` · `pcre` · `spl` · `filter` · `hash` · `iconv` · `zlib`

### Front-end / Build System

| Ferramenta | Versão | Papel |
|---|---|---|
| **Node.js** | 22.11.0 - 22.x | Ambiente de build |
| **npm** | Incluído | Gerenciador de pacotes JS |
| **Grunt** | 1.6.1+ | Automação de tarefas (SASS, JS) |
| **Babel** | 7.x | Transpilação de JavaScript moderno |
| **Sass** | 1.58+ | Compilação de estilos CSS |
| **ESLint / Stylelint** | 8.x / 15.x | Qualidade e padronização de código |

---

## 📁 Estrutura da Documentação (`Doc/`)

A documentação do projeto está organizada nas seguintes pastas:

```
Doc/
├── sobre-o-projeto/        ← [VOCÊ ESTÁ AQUI] Contexto e visão geral
│   ├── sobre-pj.md
│   ├── identidade-visual.md
│   ├── gamificacao.md
│   ├── interface-wireframes.md
│   └── modelo-padrao-curso.md
│
├── instalacao/             ← Guias de instalação do ambiente
│   ├── INSTALL.txt
│   ├── UPGRADING.md
│   └── TRADEMARK.txt
│
├── requisitos/             ← Requisitos do sistema e pedagógicos
│   ├── requisitos-gerais.md
│   └── requisitos-cursos.md
│
├── importante/             ← Convenções e guias da equipe
│   └── padrao-commits.md
```

---

## 📋 Padrões de Desenvolvimento

### Padrão de Commits (Conventional Commits)

Todos os commits deste projeto devem seguir o padrão:

| Prefixo | Quando usar |
|---|---|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `docs:` | Documentação |
| `refactor:` | Refatoração de código (sem alteração de comportamento) |
| `test:` | Adição ou correção de testes |
| `chore:` | Manutenção de infraestrutura ou build |

**Exemplos:**
```bash
git commit -m "feat: adiciona bloco de avisos institucionais na home"
git commit -m "fix: corrige erro de encoding no cadastro de usuários"
git commit -m "docs: atualiza guia de instalação para Windows 11"
```

---

## 🚀 Funcionalidades Previstas / Em Desenvolvimento

Com base no Moodle como plataforma-base, o MoodleExt visa disponibilizar:

- **Gestão de Cursos** — Criação, organização e controle de acesso a cursos e disciplinas;
- **Gamificação (Sertão Conecta)** — Sistema de XP, níveis, insígnias e missões para engajamento;
- **Atividades e Avaliações** — Fóruns, quizzes, tarefas, H5P e jogos educacionais;
- **Sistema de Notas** — Lançamento e acompanhamento de notas por curso;
- **Mensagens e Notificações** — Comunicação interna entre alunos e professores;
- **Relatórios Acadêmicos** — Acompanhamento de frequência e conclusão de atividades;
- **Customização Temática** — Identidade visual alinhada ao IFSERTÃO-PE;
- **Suporte Multiusuário** — Papéis diferenciados: Administrador, Professor, Aluno, Tutor;

---

## 👥 Equipe

O MoodleExt é desenvolvido por **alunos do IFSERTÃO-PE Campus Floresta-PE** como parte de um **projeto de extensão universitária**. O trabalho é realizado de forma colaborativa, com o objetivo de impactar positivamente toda a comunidade acadêmica do campus.

---

## 🔗 Links Úteis

| Recurso | Link |
|---|---|
| Repositório oficial | [github.com/IFSERTAOPE-FLO/moodleExt](https://github.com/IFSERTAOPE-FLO/moodleExt) |
| Documentação Moodle | [docs.moodle.org](https://docs.moodle.org) |
| Site oficial Moodle | [moodle.org](https://moodle.org) |
| Licença GPLv3 | [gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0.html) |

---

## ⚖️ Licença

Este projeto é licenciado sob a **GNU General Public License v3.0 (GPLv3)**.

A GPLv3 garante que o MoodleExt possa ser usado, estudado, modificado e distribuído livremente por qualquer pessoa, desde que as modificações também sejam distribuídas sob os mesmos termos.

---

*Documento mantido pela equipe do MoodleExt — IFSERTÃO-PE Campus Floresta · @2026*
